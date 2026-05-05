import React from "react";

function ProjectCard({project, onDelete}){
    const {id, title, description, year, client} = project;
    return(
        <div className="project-card">
            <h3>{title}</h3> 
            <strong>{year}</strong>
            <span>Client:</span><span id="project-client"> {client}</span>   
            <p id="project-description">{description}</p>
            <button onClick={() => onDelete(id)} className="delete-btn" aria-label="delete button">🗑️ Delete</button>
        </div>
    )
}
export default ProjectCard;
