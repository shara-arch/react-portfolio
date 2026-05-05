import React from "react";
import { useState } from "react";

const InitialState = {
    title: "",
    client: "",
    year: new Date().getFullYear().toString(),
    description: ""
}
function AddProjectForm ({onAddProject}) {
  const [form, setForm] = useState(InitialState);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Data Validation
    if (!form.title.trim() || !form.description.trim() || !form.client.trim() || !form.year.trim()) {
      setError('Ensure all Fields are filled before submission.');
      return;
    }

    onAddProject({ ...form, id: Date.now() });
    
    // Reset form
    setForm(InitialState);
    setError({});
  };
    return(
        <section className="project-form-card">
            <h3>Add New Project</h3>
            <p>Fill in the details below</p>
            <form onSubmit={handleSubmit} className="project-form">   
                 {error && <p>{error}</p>}
                <label>Title</label>
                <input type="text" value={form.title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Nova-Brand Identity"/>
                <label>Client</label>
                <input type="text" value={form.client} onChange={(e) => setClient(e.target.value)} placeholder="e.g. Acme Corp"/>
                <label>Year</label>
                <input type="number" min="1983" max="2099" value={form.year} onChange={(e) => setYear(e.target.value)} />
                <label>Description</label>
                <textarea type="text" value={form.description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the project, outcomes, and your role…" rows={4} />
                <button type="submit" id="form-submit">Add Project</button>
            </form>
        </section>
    )
}
export default AddProjectForm;