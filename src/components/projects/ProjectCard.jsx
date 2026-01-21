import React from 'react';
import { ExternalLink, Github, Calendar, Star, Eye, Code, Smartphone, Globe, Database } from 'lucide-react';

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {string} imageUrl
 * @property {string[]} technologies
 * @property {string} completedDate
 * @property {string} status
 * @property {number} rating
 * @property {number} views
 * @property {string} [demoUrl]
 * @property {string|null} [githubUrl]
 * @property {boolean} featured
 */

/**
 * @typedef {Object} ProjectCardProps
 * @property {Project} project
 * @property {(id: string) => void} onView
 */

/** @param {ProjectCardProps} props */
const ProjectCard = ({ project, onView }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Android': return <Smartphone className="w-4 h-4" />;
      case 'Website': return <Globe className="w-4 h-4" />;
      case 'Software': return <Database className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Android': return 'bg-green-100 text-green-800 border-green-200';
      case 'Website': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Software': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {project.featured && (
        <div className="bg-yellow-400 text-yellow-900 px-3 py-1 text-xs font-semibold flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          Featured Project
        </div>
      )}

      <div className="relative">
        <img
          loading="lazy"
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
            {getCategoryIcon(project.category)}
            {project.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {project.views}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-gray-700">{project.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(project.completedDate).toLocaleDateString()}
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
              ? 'bg-green-100 text-green-800'
              : 'bg-orange-100 text-orange-800'
            }`}>
            {project.status}
          </span>
        </div>

        <div className="flex gap-2">
          {project.demoUrl && (
            <button
              onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              View Demo
            </button>
          )}
          {project.githubUrl && (
            <button
              onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
