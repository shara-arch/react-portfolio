import { useState, useCallback } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectCard from "./components/ProjectCard";
import { Projects } from "./data/projects";
import "./styles/style.css";

function App(){
    const [projects, setProjects] = useState(Projects);
    const[searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    // Derive filtered projects from state
    const filteredProjects = projects.filter((p) => {
        const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.client.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
        activeFilter === "All" || (p.tags && p.tags.includes(activeFilter));
        return matchesSearch && matchesFilter;
    });

    const handleAddProject = (newProject) => {
        setProjects([...projects, newProject]);
    };

    const handleDeleteProject = (projectId) => {
        setProjects(projects.filter(p => p.id !== projectId));
    };

        return(
        <section> 
            <Header />
            <section className="grid-container">
            <div>
            <AddProjectForm onAddProject={handleAddProject} />
            </div>
            <div>            
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <ProjectList projects={filteredProjects} searchQuery={searchQuery} onDeleteProject={handleDeleteProject} />
            </div>

            </section>
        </section>
       
    )
}
export default App;