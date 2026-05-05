import { useState, useCallback, useRef } from "react";
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
    const [toasts, setToasts] = useState([]);
    const toastTimer = useRef({});
    const [pendingDelete, setPendingDelete] = useState(null); // project to confirm-delete
    const [activeFilter, setActiveFilter] = useState("All");
    //Toast
    const showToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    toastTimer.current[id] = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);
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
    //--------------Add Projects-----------------------
    const handleAddProject = useCallback((newProject) => {
        setProjects((prevProjects) => [...prevProjects, newProject]);
        showToast(`"${newProject.title}" added to your portfolio! 🎉`, "success");

    },[showToast]
    );
    //---------------Delete Project-------------------
    //Step 1: Delete Request Confirmation
    const handleDeleteRequest = useCallback((projectId) => {
        const project = projects.find((p) => p.id === projectId);
        if (project) setPendingDelete(project);
    }, [projects]);

  //step 2:  Delete confirmed 
    const handleDeleteConfirm = useCallback(() => {
        if (!pendingDelete) return;
        setProjects((prev) => prev.filter((p) => p.id !== pendingDelete.id));
        showToast(`"${pendingDelete.title}" has been deleted.`, "error");
        setPendingDelete(null);
    }, [pendingDelete, showToast]);

        return(
        <section> 
            <Header />
            <section className="grid-container">
            <div>
            <AddProjectForm onAddProject={handleAddProject} />
            </div>
            <div>            
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <ProjectList projects={filteredProjects} searchQuery={searchQuery} onDeleteProject={handleDeleteRequest} />
            </div>
             </section>            
            <ToastContainer toasts={toasts} />
            {pendingDelete && (
            <ConfirmModal project={pendingDelete} onConfirm={handleDeleteConfirm} onCancel={() => setPendingDelete(null)} />
        )}
        </section>
       
    )
}
// ----------Toast Helper--------------
function ToastContainer({ toasts }) {
  return (
    <div className="toast-wrap" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.type}`}>
          <span className="toast-icon">{t.type === "success" ? "✓" : "✕"}</span>
          {t.message}
        </div>
      ))}
    </div>
  );
}
// confirm Modal
function ConfirmModal({ project, onConfirm, onCancel }) {
  return (
    <div
      className="confirm-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Confirm deletion"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div className="confirm-modal">
        <span className="confirm-icon">🗑️</span>
        <h3>Delete Project?</h3>
        <p>
          <strong>"{project.title}"</strong> will be permanently removed from
          your portfolio. This action cannot be undone.
        </p>
        <div className="confirm-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Keep it
          </button>
          <button className="btn-confirm-delete" onClick={onConfirm}>
            Yes, delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;