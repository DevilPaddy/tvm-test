import React from 'react';
import ProjectFallback from './ProjectFallback';

interface ProjectErrorBoundaryProps {
  children: React.ReactNode;
}

interface ProjectErrorBoundaryState {
  hasError: boolean;
}

class ProjectErrorBoundary extends React.Component<ProjectErrorBoundaryProps, ProjectErrorBoundaryState> {
  constructor(props: ProjectErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ProjectErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.log("Projects page failed to load, showing fallback");
      return <ProjectFallback />;
    }
    return this.props.children;
  }
}

export default ProjectErrorBoundary;