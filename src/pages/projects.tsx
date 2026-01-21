import React, { useState, useEffect, Suspense, lazy } from 'react';
import PageLayout from '@/components/common/PageLayout';
import ProjectErrorBoundary from '@/components/projects/ProjectErrorBoundary';
import ProjectFallback from '@/components/projects/ProjectFallback';

const ProjectsPage = lazy(() => import('@/components/projects/ProjectsPage'));

const Projects: React.FC = () => {
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => setShowProjects(true), []);

  return (
    <PageLayout>
      {showProjects && (
        <ProjectErrorBoundary>
          <Suspense fallback={<ProjectFallback />}>
            <ProjectsPage />
          </Suspense>
        </ProjectErrorBoundary>
      )}
    </PageLayout>
  );
};

export default Projects;