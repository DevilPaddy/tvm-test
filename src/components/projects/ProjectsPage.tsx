import React, { useState, useEffect } from 'react';
import { Search, Code, ChevronDown } from 'lucide-react';
import ProjectCard from '../projects/ProjectCard.jsx';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  technologies: string[];
  completedDate: string;
  status: string;
  rating: number;
  views: number;
  demoUrl?: string;
  githubUrl?: string | null;
  featured: boolean;
}

const BASE_URL = import.meta.env.VITE_API_URL;

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('date');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const categories = ['All', 'Website', 'Android', 'Software'];
  const sortOptions = [
    { value: 'date', label: 'Latest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'views', label: 'Most Viewed' },
    { value: 'title', label: 'Alphabetical' }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/api/projects`);

        if (!res.ok) {
          throw new Error('Failed to fetch projects');
        }

        const result = await res.json();

        // Map _id -> id (VERY IMPORTANT)
        const normalizedProjects = result.data.map((project: any) => ({
          ...project,
          id: project._id,
        }));

        setProjects(normalizedProjects);
        setFilteredProjects(normalizedProjects);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  useEffect(() => {
    let filtered = [...projects];

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
        case 'rating':
          return b.rating - a.rating;
        case 'views':
          return b.views - a.views;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    filtered.sort((a, b) => Number(b.featured) - Number(a.featured));

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover our portfolio of innovative solutions across mobile apps, websites, and software development
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProjects.length} of {projects.length} projects
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-red-600 mb-2">Error</h3>
            <p className="text-gray-500">{error}</p>
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onView={() => console.log('View project:', project.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Code className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Projects Found</h3>
            <p className="text-gray-500">
              {searchTerm || selectedCategory !== 'All'
                ? 'Try adjusting your search or filters'
                : 'No projects available'}
            </p>
          </div>
        )}

        <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {projects.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {projects.filter(p => p.status === 'In Progress').length}
              </div>
              <div className="text-gray-600">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {projects.length > 0
                  ? Math.round(projects.reduce((acc, p) => acc + p.rating, 0) / projects.length * 10) / 10
                  : 0}
              </div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;