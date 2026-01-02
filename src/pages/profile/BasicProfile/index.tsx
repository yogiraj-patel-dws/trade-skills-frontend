interface BasicProfileProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    about: string;
  };
  onChange: (data: {
    firstName: string;
    lastName: string;
    email: string;
    about: string;
  }) => void;
}

const index = ({ formData, onChange }: BasicProfileProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="flex flex-col gap-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
            First Name
          </span>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              badge
            </span>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-background-light dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-2xl h-14 pl-12 pr-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
              placeholder="Jane"
              type="text"
            />
          </div>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
            Last Name
          </span>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              badge
            </span>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-background-light dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-2xl h-14 pl-12 pr-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
              placeholder="Doe"
              type="text"
            />
          </div>
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-text-main dark:text-gray-200 text-sm font-semibold ml-1">
          Email Address
        </span>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
            mail
          </span>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-background-light dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-2xl h-14 pl-12 pr-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium"
            placeholder="jane.doe@example.com"
            type="email"
          />
        </div>
      </label>
      <label className="flex flex-col gap-2">
        <div className="flex justify-between items-end ml-1">
          <span className="text-text-main dark:text-gray-200 text-sm font-semibold">
            About You
          </span>
          <span className="text-xs text-text-secondary dark:text-gray-500">
            Short Introduction / Bio
          </span>
        </div>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-5 text-gray-400 group-focus-within:text-primary transition-colors">
            edit_note
          </span>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            maxLength={300}
            className="w-full bg-background-light dark:bg-black/20 border border-gray-200 dark:border-gray-700 rounded-2xl min-h-[160px] pl-12 pr-4 py-4 text-text-main dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-medium resize-none leading-relaxed"
            placeholder="Tell the community what you love to teach or learn. What are your passions? What makes you tick?"
          ></textarea>
        </div>
        <p className="text-xs text-gray-400 text-right mt-1">
          {formData.about.length}/300 characters
        </p>
      </label>
    </form>
  );
};

export default index;
