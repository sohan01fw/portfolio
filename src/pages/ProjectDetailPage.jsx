import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../lib/data";
import Badge from "../components/ui/Badge";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";

/**
 * ProjectDetailPage — Full Notion-style case study for a single project.
 * Route: /projects/:id
 */
const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-5xl mb-4">🔍</p>
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Project not found
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/projects"
          className="text-sm text-gray-700 dark:text-gray-300 underline underline-offset-4"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const { imgSrc, title, emoji, tags, siteLink, codeLink, detail } = project;
  const d = detail;

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-10 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-600
                   hover:text-gray-700 dark:hover:text-gray-300
                   transition-colors duration-150 mb-8 group"
      >
        <FiArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-150" />
        Back
      </button>

      {/* Page header */}
      <div className="mb-8">
        <div className="text-5xl mb-3 select-none">{emoji}</div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mt-3">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}

          {d?.status && (
            <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <span className={`w-1.5 h-1.5 rounded-full inline-block ${d.status === "Live" ? "bg-green-400" : "bg-yellow-400"}`} />
              {d.status}
            </span>
          )}

          {d?.timeline && (
            <span className="text-xs text-gray-400 dark:text-gray-600">
              ⏱ {d.timeline}
            </span>
          )}
        </div>
      </div>

      {/* Hero image */}
      {imgSrc && (
        <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 mb-8">
          <img src={imgSrc} alt={title} className="w-full object-cover" />
        </div>
      )}

      <div className="border-t border-gray-100 dark:border-gray-800 mb-8" />

      {/* External links */}
      <div className="flex flex-wrap gap-2 mb-10">
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md
                       border border-gray-200 dark:border-gray-700
                       text-gray-700 dark:text-gray-300
                       hover:bg-gray-50 dark:hover:bg-gray-800
                       transition-colors duration-150"
          >
            <FiGithub className="w-3.5 h-3.5" />
            Source Code
          </a>
        )}
        {siteLink && (
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md
                       bg-gray-900 dark:bg-white text-white dark:text-gray-900
                       hover:bg-gray-700 dark:hover:bg-gray-200
                       transition-colors duration-150"
          >
            <FiExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        )}
      </div>

      {/* ── Content Sections ─────────────────────────────────────────── */}
      <div className="space-y-10">

        {/* Overview */}
        {d?.overview && (
          <Section emoji="📌" title="Overview">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {d.overview}
            </p>
          </Section>
        )}

        {/* Problem */}
        {d?.problem && (
          <Section emoji="❓" title="The Problem">
            <div className="rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-3">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {d.problem}
              </p>
            </div>
          </Section>
        )}

        {/* Architecture */}
        {d?.architecture && (
          <Section emoji="🏗️" title="Architecture Decisions">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {d.architecture}
            </p>
          </Section>
        )}

        {/* Tech Stack */}
        {d?.techStack?.length > 0 && (
          <Section emoji="🛠️" title="Tech Stack & Why">
            <div className="border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
              {d.techStack.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-4 py-3
                    ${i !== d.techStack.length - 1 ? "border-b border-gray-100 dark:border-gray-800" : ""}
                    bg-white dark:bg-gray-900`}
                >
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 sm:w-44 flex-shrink-0">
                    {item.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.reason}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Challenges */}
        {d?.challenges?.length > 0 && (
          <Section emoji="⚡" title="Challenges & Solutions">
            <ul className="space-y-3">
              {d.challenges.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* Load Test Results */}
        {d?.loadTestResults && (
          <Section emoji="📈" title="Performance & Load Test Results">
            <div className="rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {d.loadTestResults.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  {d.loadTestResults.description}
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden bg-white dark:bg-gray-950">
                <table className="min-w-full divide-y divide-gray-150 dark:divide-gray-800 text-xs">
                  <thead className="bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 font-medium text-left">
                    <tr>
                      <th className="px-4 py-2">Metric</th>
                      <th className="px-4 py-2 text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-gray-700 dark:text-gray-300">
                    {d.loadTestResults.metrics.map((m) => (
                      <tr key={m.name} className={m.highlight ? "bg-blue-50/50 dark:bg-blue-950/20 font-semibold" : ""}>
                        <td className="px-4 py-2 font-medium">{m.name}</td>
                        <td className={`px-4 py-2 text-right ${m.type === "success" ? "text-green-600 dark:text-green-400 font-bold" : ""}`}>
                          {m.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>
        )}

        {/* Learnings */}
        {d?.learnings && (
          <Section emoji="💡" title="Key Learnings">
            <div className="rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-4 py-3">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {d.learnings}
              </p>
            </div>
          </Section>
        )}
      </div>

      {/* Footer nav */}
      <div className="mt-14 pt-6 border-t border-gray-100 dark:border-gray-800">
        <Link
          to="/projects"
          className="text-xs text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-150 flex items-center gap-1.5 group"
        >
          <FiArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-150" />
          All Projects
        </Link>
      </div>
    </div>
  );
};

/**
 * Section — Notion-style content block with emoji icon + title.
 */
const Section = ({ emoji, title, children }) => (
  <section>
    <div className="flex items-center gap-2 mb-3">
      <span className="text-base">{emoji}</span>
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-600">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

export default ProjectDetailPage;
