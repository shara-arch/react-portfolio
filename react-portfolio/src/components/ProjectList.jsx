import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList ({projects, searchQuery}) {
    return(
        <div className="project-List">
            {projects.length > 0 ? (
                projects.map(project => (
                   <ProjectCard key={project.id} project={project} />
                ))
            ): (<div className="empty-state" role="status">
        <span className="empty-icon">◎</span>
        <h3>No projects found</h3>
        <p>
          {searchQuery
            ? `Nothing matches "${searchQuery}". Try a different search term.`
            : "No projects match the selected filter."}
        </p>
      </div>
    )}
        </div>
    )
}
export default ProjectList;