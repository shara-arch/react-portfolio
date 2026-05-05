# Personal Project Showcase App

A responsive Single Page Application (SPA) built with React that lets a creative agency display, search, add, and delete portfolio projects — with a polished dark/light two-column layout.

---

## Features

- Browse projects in a responsive card grid
- Search projects in real time by title, client, or description
- Add new projects via the sidebar form
- Delete projects with a confirmation modal
- Success and deletion toast notifications
- Mobile-friendly layout

---

## Tech Stack

- **React 18** with Hooks (`useState`, `useCallback`)
- **Vite** — dev server and build tool
- **Plain CSS** — custom properties, no UI library needed
- **Jest + React Testing Library** — unit and integration tests

---

## Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher (comes with Node)

Check your versions:

```bash
node -v
npm -v
```

### Installation

1. **Unzip the project** and open the folder:

```bash
unzip react-portfolio-updated.zip
cd react-portfolio-updated/react-portfolio
```

2. **Install dependencies:**

```bash
npm install
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

The output goes to the `dist/` folder. To preview the production build locally:

```bash
npm run preview
```

### Running Tests

```bash
npm test
```

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Site header and navigation
│   ├── AddProjectForm.jsx  # Sidebar form with validation
│   ├── SearchBar.jsx       # Live search input
│   ├── ProjectList.jsx     # Renders the project grid
│   └── ProjectCard.jsx     # Individual project card + delete
├── data/
│   └── projects.js         # Seed project data
├── styles/
│   └── style.css           # All styles and CSS variables
├── App.jsx                 # Root component, state, toast + confirm modal
└── main.jsx                # React DOM entry point
```

---

## Usage

| Action | How |
|---|---|
| Add a project | Fill in the left-hand form and click **Add Project** |
| Delete a project | Click 🗑️ on a card, then confirm in the modal |
| Search | Type in the search bar — results filter instantly |
| Clear search | Click the ✕ button inside the search bar |

---

## Known Limitations

- Data is not persisted — projects reset on page refresh
- No routing — all content lives on one page

---

## License 
MIT License

Copyright (c) 2026 shara-arch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
