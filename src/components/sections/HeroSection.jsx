import { FiExternalLink, FiDownload } from "react-icons/fi";
import { profile } from "../../lib/data";
import resumePDF from "../../assets/sohanlatestresume.pdf";

/**
 * HeroSection — Notion-style page header with avatar, name, bio, and social links.
 */
const HeroSection = () => {
  return (
    <section className="mb-8">
      {/* Profile row */}
      <div className="flex items-start gap-5 mb-6">
        {/* Avatar */}
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-gray-100 dark:border-gray-800"
        />

        {/* Name + meta */}
        <div className="flex flex-col justify-center gap-1 pt-1">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {profile.name}
            <span className="ml-2 text-base font-normal text-gray-400 dark:text-gray-500">
              @{profile.handle}
            </span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {profile.title}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600 flex items-center gap-1">
            <span>📍</span> {profile.location}
          </p>
        </div>
      </div>

      {/* Bio block */}
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5 max-w-2xl">
        {profile.bio}
      </p>

      {/* Inline properties — like Notion callout */}
      <div className="rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-3 text-sm flex flex-wrap gap-x-6 gap-y-2 mb-5">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 dark:text-gray-600 text-xs font-medium uppercase tracking-wider">
            Email
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="text-gray-700 dark:text-gray-300 hover:underline"
          >
            {profile.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 dark:text-gray-600 text-xs font-medium uppercase tracking-wider">
            Status
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            <span className="text-gray-700 dark:text-gray-300">Open to work</span>
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2">
        <a
          href={resumePDF}
          download="Sohan_Shiwakoti_Resume.pdf"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md
                     bg-gray-900 dark:bg-white text-white dark:text-gray-900
                     hover:bg-gray-700 dark:hover:bg-gray-200
                     transition-colors duration-150"
        >
          <FiDownload className="w-3.5 h-3.5" />
          Download Resume
        </a>
        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md
                     border border-gray-200 dark:border-gray-700
                     text-gray-700 dark:text-gray-300
                     hover:bg-gray-50 dark:hover:bg-gray-800
                     transition-colors duration-150"
        >
          <FiExternalLink className="w-3.5 h-3.5" />
          GitHub
        </a>
        <a
          href={profile.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md
                     border border-gray-200 dark:border-gray-700
                     text-gray-700 dark:text-gray-300
                     hover:bg-gray-50 dark:hover:bg-gray-800
                     transition-colors duration-150"
        >
          <FiExternalLink className="w-3.5 h-3.5" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
