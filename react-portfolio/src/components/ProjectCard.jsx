import React from "react";

function ProjectCard({project, index}){
    const {title, description, year, client} = project;
    return(
        <div className="project-card">
            <h3>{title}</h3> 
            <strong>{year}</strong>
            <span>Client:</span><span id="project-client"> {client}</span>   
            <p id="project-description">{description}</p>

        </div>
    )
}
export default ProjectCard;
