import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { Input, Select, Button, Space, Card } from 'antd';
import { PlusOutlined, DeleteOutlined, HolderOutlined } from '@ant-design/icons';

interface FormData {
    title: string;
    category: string;
    subcategory: string;
    language: string;
    difficulty: string;
    prerequisites: string;
}

interface Subtopic {
    id: number;
    name: string;
    difficulty: string;
    duration: string;
}

interface Topic {
    id: number;
    name: string;
    subtopics: Subtopic[];
}

interface UploadedFiles {
    image: File | null;
    video: File | null;
}

export const AddSkill: React.FC = () => {
    const navigate = useNavigate();
    const imageInputRef = useRef<HTMLInputElement>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<FormData>({
        title: '',
        category: '',
        subcategory: '',
        language: '',
        difficulty: 'beginner',
        prerequisites: ''
    });

    const [topics, setTopics] = useState<Topic[]>([
        {
            id: 1,
            name: 'Introduction to the Course',
            subtopics: [{ id: 101, name: 'Welcome & Setup', difficulty: 'Beginner', duration: '5 min' }]
        }
    ]);

    const [uploadedFiles, setUploadedFiles] = useState<UploadedFiles>({
        image: null,
        video: null
    });

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
        } else {
            alert('Image must be less than 5MB');
        }
    };

    const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.size <= 50 * 1024 * 1024) {
            setUploadedFiles(prev => ({ ...prev, video: file }));
        } else {
            alert('Video must be less than 50MB');
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const addTopic = () => {
        const newTopic: Topic = {
            id: Date.now(),
            name: '',
            subtopics: [{ id: Date.now() + 1, name: '', difficulty: 'Beginner', duration: '' }]
        };
        setTopics([...topics, newTopic]);
    };

    const removeTopic = (topicId: number) => {
        setTopics(topics.filter(topic => topic.id !== topicId));
    };

    const updateTopicName = (topicId: number, name: string) => {
        setTopics(topics.map(topic =>
            topic.id === topicId ? { ...topic, name } : topic
        ));
    };

    const addSubtopic = (topicId: number) => {
        setTopics(topics.map(topic =>
            topic.id === topicId
                ? { ...topic, subtopics: [...topic.subtopics, { id: Date.now(), name: '', difficulty: 'Beginner', duration: '' }] }
                : topic
        ));
    };

    const removeSubtopic = (topicId: number, subtopicId: number) => {
        setTopics(topics.map(topic =>
            topic.id === topicId
                ? { ...topic, subtopics: topic.subtopics.filter(sub => sub.id !== subtopicId) }
                : topic
        ));
    };

    const updateSubtopic = (topicId: number, subtopicId: number, field: keyof Subtopic, value: string) => {
        setTopics(topics.map(topic =>
            topic.id === topicId
                ? {
                    ...topic,
                    subtopics: topic.subtopics.map(sub =>
                        sub.id === subtopicId ? { ...sub, [field]: value } : sub
                    )
                }
                : topic
        ));
    };

    const handleCancel = () => {
        navigate(ROUTES.SKILLS);
    };

    const handleSubmit = () => {
        console.log('Form Data:', formData);
        console.log('Topics:', topics);
        console.log('Files:', uploadedFiles);
        alert('Skill created successfully!');
        navigate(ROUTES.SKILLS);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-lg shadow-sm border">
                    <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Share your expertise</h2>
                        <p className="text-gray-600 text-sm mt-1">Create a new skill listing for the community</p>
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
                                    <div className="aspect-video w-full rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-emerald-500 transition-colors p-3 sm:p-4 text-center">
                                        {uploadedFiles.image ? (
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                                <img
                                                    src={URL.createObjectURL(uploadedFiles.image)}
                                                    alt="Preview"
                                                    className="max-w-full max-h-24 sm:max-h-32 object-cover rounded"
                                                />
                                                <p className="text-gray-900 font-medium mt-2 text-xs sm:text-sm truncate w-full">{uploadedFiles.image.name}</p>
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
                                    <div className="aspect-video w-full rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-emerald-500 transition-colors p-3 sm:p-4 text-center">
                                        {uploadedFiles.video ? (
                                            <div className="w-full h-full flex flex-col items-center justify-center">
                                                <video
                                                    src={URL.createObjectURL(uploadedFiles.video)}
                                                    className="max-w-full max-h-24 sm:max-h-32 object-cover rounded"
                                                    controls
                                                />
                                                <p className="text-gray-900 font-medium mt-2 text-xs sm:text-sm truncate w-full">{uploadedFiles.video.name}</p>
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
                                        className="w-full rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                                        placeholder="e.g. Master React in 30 Days"
                                        value={formData.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                    />
                                </label>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <label className="flex flex-col">
                                        <p className="text-gray-900 text-sm font-medium mb-2">Category</p>
                                        <select
                                            className="w-full rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                                            value={formData.category}
                                            onChange={(e) => handleInputChange('category', e.target.value)}
                                        >
                                            <option value="">Select Category</option>
                                            <option value="technology">Technology</option>
                                            <option value="design">Design</option>
                                            <option value="business">Business</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </label>

                                    <label className="flex flex-col">
                                        <p className="text-gray-900 text-sm font-medium mb-2">Subcategory</p>
                                        <select
                                            className="w-full rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                                            value={formData.subcategory}
                                            onChange={(e) => handleInputChange('subcategory', e.target.value)}
                                        >
                                            <option value="">Select Subcategory</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="data-science">Data Science</option>
                                        </select>
                                    </label>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <label className="flex flex-col">
                                        <p className="text-gray-900 text-sm font-medium mb-2">Teaching Language</p>
                                        <input
                                            className="w-full rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base"
                                            placeholder="e.g. English, Spanish"
                                            value={formData.language}
                                            onChange={(e) => handleInputChange('language', e.target.value)}
                                        />
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
                                    className="w-full rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 min-h-[100px] sm:min-h-[120px] p-3 sm:p-4 text-sm sm:text-base resize-y"
                                    placeholder="List any tools, software, or prior knowledge students should have..."
                                    value={formData.prerequisites}
                                    onChange={(e) => handleInputChange('prerequisites', e.target.value)}
                                />
                            </label>
                        </section>

                        <hr className="border-gray-200" />

                        {/* Curriculum Section */}
                        <section className="space-y-4 sm:space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold">3</span>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Curriculum</h3>
                                </div>
                                <Button
                                    type="dashed"
                                    icon={<PlusOutlined />}
                                    onClick={addTopic}
                                    className="text-emerald-600 border-emerald-600 hover:text-emerald-700 hover:border-emerald-700 w-full sm:w-auto"
                                    size="small"
                                >
                                    Add Topic
                                </Button>
                            </div>

                            <Space direction="vertical" className="w-full" size="middle">
                                {topics.map((topic) => (
                                    <Card key={topic.id} className="w-full" size="small">
                                        <div className="flex items-center gap-2 sm:gap-4 mb-4">
                                            <HolderOutlined className="text-gray-400 cursor-move text-sm" />
                                            <Input
                                                placeholder="Topic Name"
                                                value={topic.name}
                                                onChange={(e) => updateTopicName(topic.id, e.target.value)}
                                                className="font-semibold text-base sm:text-lg"
                                                variant="borderless"
                                                size="small"
                                            />
                                            <Button
                                                type="text"
                                                danger
                                                icon={<DeleteOutlined />}
                                                onClick={() => removeTopic(topic.id)}
                                                size="small"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <div className="hidden sm:grid grid-cols-[1fr_120px_100px_40px] gap-4 px-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <span>Subtopic Name</span>
                                                <span>Difficulty</span>
                                                <span>Duration</span>
                                                <span></span>
                                            </div>

                                            {topic.subtopics.map((subtopic) => (
                                                <div key={subtopic.id} className="flex flex-col sm:grid sm:grid-cols-[1fr_120px_100px_40px] gap-2 sm:gap-4 sm:items-center p-2 sm:p-0 border sm:border-0 rounded sm:rounded-none">
                                                    <div className="flex flex-col sm:contents">
                                                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden mb-1">Subtopic Name</label>
                                                        <Input
                                                            placeholder="Subtopic Name"
                                                            value={subtopic.name}
                                                            onChange={(e) => updateSubtopic(topic.id, subtopic.id, 'name', e.target.value)}
                                                            size="small"
                                                        />
                                                    </div>
                                                    <div className="flex flex-col sm:contents">
                                                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden mb-1 mt-2 sm:mt-0">Difficulty</label>
                                                        <Select
                                                            value={subtopic.difficulty}
                                                            onChange={(value) => updateSubtopic(topic.id, subtopic.id, 'difficulty', value)}
                                                            size="small"
                                                            className="w-full"
                                                        >
                                                            <Select.Option value="Beginner">Beginner</Select.Option>
                                                            <Select.Option value="Intermediate">Intermediate</Select.Option>
                                                            <Select.Option value="Advanced">Advanced</Select.Option>
                                                        </Select>
                                                    </div>
                                                    <div className="flex flex-col sm:contents">
                                                        <label className="text-xs font-medium text-gray-500 uppercase tracking-wider sm:hidden mb-1 mt-2 sm:mt-0">Duration</label>
                                                        <Input
                                                            placeholder="5 min"
                                                            value={subtopic.duration}
                                                            onChange={(e) => updateSubtopic(topic.id, subtopic.id, 'duration', e.target.value)}
                                                            size="small"
                                                        />
                                                    </div>
                                                    <div className="flex justify-end sm:justify-center mt-2 sm:mt-0">
                                                        <Button
                                                            type="text"
                                                            danger
                                                            size="small"
                                                            icon={<DeleteOutlined />}
                                                            onClick={() => removeSubtopic(topic.id, subtopic.id)}
                                                        />
                                                    </div>
                                                </div>
                                            ))}

                                            <Button
                                                type="dashed"
                                                icon={<PlusOutlined />}
                                                onClick={() => addSubtopic(topic.id)}
                                                className="w-full mt-2"
                                                size="small"
                                            >
                                                Add Subtopic
                                            </Button>
                                        </div>
                                    </Card>
                                ))}

                                <Button
                                    type="dashed"
                                    icon={<PlusOutlined />}
                                    onClick={addTopic}
                                    className="w-full h-12 sm:h-16 text-gray-600 hover:text-emerald-600 hover:border-emerald-500"
                                    size="large"
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <span className="font-medium text-sm sm:text-base">Add New Topic</span>
                                    </div>
                                </Button>
                            </Space>
                        </section>
                    </div>

                    <div className="px-4 sm:px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 bg-gray-50">
                        <button
                            onClick={handleCancel}
                            className="w-full sm:w-auto px-4 sm:px-6 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors order-2 sm:order-1"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 order-1 sm:order-2"
                        >
                            Create Skill
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

export default AddSkill;