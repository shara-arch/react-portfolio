import { useState, useReducer, useCallback } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectModal from "./components/ProjectModal";
import { initialProjects } from "./data/projects";
import "./styles/style.css";

function App(){
    return(
        <section> 
            <Header />
            <AddProjectForm />
            <SearchBar />
            <ProjectList />
        </section>
       
    )
}
export default App;