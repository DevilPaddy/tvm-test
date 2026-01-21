import React from 'react';

const ProjectFallback: React.FC = () => (
  <div className="w-full h-48 my-16 flex items-center justify-center">
    <div className="animate-pulse bg-blue-100 rounded-lg w-full h-full flex items-center justify-center">
      <p className="text-blue-800">Loading projects...</p>
    </div>
  </div>
);

export default ProjectFallback;