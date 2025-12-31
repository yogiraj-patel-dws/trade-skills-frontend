import React, { useState, useRef } from 'react';

export interface FormData {
    title: string;
    category: string;
    subcategory: string;
    language: string;
    difficulty: string;
    prerequisites: string;
}

export interface Subtopic {
    id: number;
    name: string;
    difficulty: string;
    duration: string;
}

export interface Topic {
    id: number;
    name: string;
    subtopics: Subtopic[];
}

export interface UploadedFiles {
    image: File | null;
    video: File | null;
    imageUrl?: string; // For edit mode - existing image URL
    videoUrl?: string; // For edit mode - existing video URL
}

interface SkillFormProps {
    initialFormData?: FormData;
    initialTopics?: Topic[];
    initialFiles?: UploadedFiles;
    onSubmit: (formData: FormData, topics: Topic[], files: UploadedFiles) => void;
    onCancel: () => void;
    submitButtonText?: string;
    isEditMode?: boolean;
}

export const SkillForm: React.FC<SkillFormProps> = ({
    initialFormData,
    initialFiles,
    onSubmit,
    onCancel,
    submitButtonText = 'Create Skill',
    isEditMode = false,
}) => {
    const imageInputRef = useRef<HTMLInputElement>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<FormData>(
        initialFormData || {
            title: '',
            category: '',
            subcategory: '',
            language: '',
            difficulty: 'beginner',
            prerequisites: ''
        }
    );

    const [errors, setErrors] = useState<Partial<FormData & { image: string; video: string }>>({});

    const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>(
        initialFiles || {
            image: null,
            video: null,
        }
    );

    const handleImageUpload = () => {
        imageInputRef.current?.click();
    };

    const handleVideoUpload = () => {
        videoInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.size <= 5 * 1024 * 1024) {
            setUploadedFiles(prev => ({ ...prev, image: file }));
            if (errors.image) {
                setErrors(prev => ({ ...prev, image: undefined }));
            }
        } else {
            alert('Image must be less than 5MB');
        }
    };

    const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.size <= 50 * 1024 * 1024) {
            setUploadedFiles(prev => ({ ...prev, video: file }));
            if (errors.video) {
                setErrors(prev => ({ ...prev, video: undefined }));
            }
        } else {
            alert('Video must be less than 50MB');
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData & { image: string; video: string }> = {};

        if (!formData.title.trim()) newErrors.title = 'Skill title is required';
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.subcategory) newErrors.subcategory = 'Subcategory is required';
        if (!formData.language.trim()) newErrors.language = 'Teaching language is required';
        if (!formData.prerequisites.trim()) newErrors.prerequisites = 'Prerequisites are required';
        if (!uploadedFiles.image && !uploadedFiles.imageUrl) newErrors.image = 'Cover image is required';
        if (!uploadedFiles.video && !uploadedFiles.videoUrl) newErrors.video = 'Demo video is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            onSubmit(formData, [], uploadedFiles);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-lg shadow-sm border">
                    <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                            {isEditMode ? 'Edit your skill' : 'Share your expertise'}
                        </h2>
                        <p className="text-gray-600 text-sm mt-1">
                            {isEditMode ? 'Update your skill listing for the community' : 'Create a new skill listing for the community'}
                        </p>
                    </div>

                    <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                        {/* Media Upload Section */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold">1</span>
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Media Upload</h3>
                            </div>
                            <p className="text-gray-600 text-sm">Upload a cover image and a short intro video to attract learners.</p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-4">
                                {/* Image Upload */}
                                <div
                                    className="relative group cursor-pointer"
                                    onClick={handleImageUpload}
                                >
                                    <div className={`aspect-video w-full rounded-xl border-2 border-dashed ${errors.image ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50'} flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-emerald-500 transition-colors p-3 sm:p-4 text-center`}>
                                        {uploadedFiles.image ? (
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                                <img
                                                    src={URL.createObjectURL(uploadedFiles.image)}
                                                    alt="Preview"
                                                    className="max-w-full max-h-24 sm:max-h-32 object-cover rounded"
                                                />
                                                <p className="text-gray-900 font-medium mt-2 text-xs sm:text-sm truncate w-full">{uploadedFiles.image.name}</p>
                                            </div>
                                        ) : uploadedFiles.imageUrl ? (
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                                <img
                                                    src={uploadedFiles.imageUrl}
                                                    alt="Preview"
                                                    className="max-w-full max-h-24 sm:max-h-32 object-cover rounded"
                                                />
                                                <p className="text-gray-500 text-xs mt-2">Click to change image</p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-gray-900 font-medium text-sm sm:text-base">Upload Banner Image</p>
                                                    <p className="text-gray-500 text-xs mt-1">JPG, PNG (Max 5MB)</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                                    <input
                                        ref={imageInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                    />
                                </div>

                                {/* Video Upload */}
                                <div
                                    className="relative group cursor-pointer"
                                    onClick={handleVideoUpload}
                                >
                                    <div className={`aspect-video w-full rounded-xl border-2 border-dashed ${errors.video ? 'border-red-300 bg-red-50' : 'border-gray-300 bg-gray-50'} flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-emerald-500 transition-colors p-3 sm:p-4 text-center`}>
                                        {uploadedFiles.video ? (
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                                <video
                                                    src={URL.createObjectURL(uploadedFiles.video)}
                                                    className="max-w-full max-h-24 sm:max-h-32 object-cover rounded"
                                                    controls
                                                />
                                                <p className="text-gray-900 font-medium mt-2 text-xs sm:text-sm truncate w-full">{uploadedFiles.video.name}</p>
                                            </div>
                                        ) : uploadedFiles.videoUrl ? (
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                                <video
                                                    src={uploadedFiles.videoUrl}
                                                    className="max-w-full max-h-24 sm:max-h-32 object-cover rounded"
                                                    controls
                                                />
                                                <p className="text-gray-500 text-xs mt-2">Click to change video</p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-gray-900 font-medium text-sm sm:text-base">Upload Demo Video</p>
                                                    <p className="text-gray-500 text-xs mt-1">MP4, WebM (Max 50MB)</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {errors.video && <p className="text-red-500 text-xs mt-1">{errors.video}</p>}
                                    <input
                                        ref={videoInputRef}
                                        type="file"
                                        accept="video/*"
                                        onChange={handleVideoChange}
                                        className="hidden"
                                    />
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-200" />

                        {/* Skill Details Section */}
                        <section className="space-y-4 sm:space-y-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold">2</span>
                                <h3 className="text-base sm:text-lg font-bold text-gray-900">Skill Details</h3>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                <label className="flex flex-col">
                                    <p className="text-gray-900 text-sm font-medium mb-2">Skill Title</p>
                                    <input
                                        className={`w-full rounded-xl border ${errors.title ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500'} focus:ring-1 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base`}
                                        placeholder="e.g. Master React in 30 Days"
                                        value={formData.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                    />
                                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                                </label>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <label className="flex flex-col">
                                        <p className="text-gray-900 text-sm font-medium mb-2">Category</p>
                                        <select
                                            className={`w-full rounded-xl border ${errors.category ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500'} focus:ring-1 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base`}
                                            value={formData.category}
                                            onChange={(e) => handleInputChange('category', e.target.value)}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="technology">Technology</option>
                                            <option value="design">Design</option>
                                            <option value="business">Business</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                                    </label>

                                    <label className="flex flex-col">
                                        <p className="text-gray-900 text-sm font-medium mb-2">Subcategory</p>
                                        <select
                                            className={`w-full rounded-xl border ${errors.subcategory ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500'} focus:ring-1 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base`}
                                            value={formData.subcategory}
                                            onChange={(e) => handleInputChange('subcategory', e.target.value)}
                                        >
                                            <option value="">Select Subcategory</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="data-science">Data Science</option>
                                        </select>
                                        {errors.subcategory && <p className="text-red-500 text-xs mt-1">{errors.subcategory}</p>}
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <label className="flex flex-col">
                                        <p className="text-gray-900 text-sm font-medium mb-2">Teaching Language</p>
                                        <input
                                            className={`w-full rounded-xl border ${errors.language ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500'} focus:ring-1 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base`}
                                            placeholder="e.g. English, Spanish"
                                            value={formData.language}
                                            onChange={(e) => handleInputChange('language', e.target.value)}
                                        />
                                        {errors.language && <p className="text-red-500 text-xs mt-1">{errors.language}</p>}
                                    </label>

                                    <div className="flex flex-col">
                                        <p className="text-gray-900 text-sm font-medium mb-2">Difficulty Level</p>
                                        <div className="flex bg-gray-100 border border-gray-300 rounded-xl p-1 h-10 sm:h-12">
                                            {['beginner', 'intermediate', 'advanced'].map((level) => (
                                                <label key={level} className="flex-1 cursor-pointer">
                                                    <input
                                                        className="sr-only peer"
                                                        name="difficulty"
                                                        type="radio"
                                                        value={level}
                                                        checked={formData.difficulty === level}
                                                        onChange={(e) => handleInputChange('difficulty', e.target.value)}
                                                    />
                                                    <div className="h-full w-full flex items-center justify-center rounded-lg text-xs sm:text-sm font-medium text-gray-600 peer-checked:bg-emerald-500 peer-checked:text-white transition-all px-1">
                                                        <span className="hidden sm:inline">{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                                                        <span className="sm:hidden">{level.charAt(0).toUpperCase() + level.slice(1, 3)}</span>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <label className="flex flex-col">
                                <p className="text-gray-900 text-sm font-medium mb-2">Prerequisites & Requirements</p>
                                <textarea
                                    className={`w-full rounded-xl border ${errors.prerequisites ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500'} focus:ring-1 min-h-25 sm:min-h-30 p-3 sm:p-4 text-sm sm:text-base resize-y`}
                                    placeholder="List any tools, software, or prior knowledge students should have..."
                                    value={formData.prerequisites}
                                    onChange={(e) => handleInputChange('prerequisites', e.target.value)}
                                />
                                {errors.prerequisites && <p className="text-red-500 text-xs mt-1">{errors.prerequisites}</p>}
                            </label>
                        </section>


                    </div>

                    <div className="px-4 sm:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 bg-gray-50">
                        <button
                            onClick={onCancel}
                            className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors order-2 sm:order-1"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 order-1 sm:order-2"
                        >
                            {submitButtonText}
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

