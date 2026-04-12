
# Kanban Board App

A dynamic, visually appealing Kanban board application built with modern web technologies.  
This project focuses on polished UI/UX, responsive design, and scalable, maintainable code.

---

## ✨ Features

- **Interactive Kanban Board**
  - Drag-and-drop task cards between columns
  - Modal editing for task details
  - Priority indicators (traffic-light dots: red/yellow/green)

- **Modern Sidebar**
  - Footer-pinned controls
  - Smooth slide-out animations
  - Theme toggle with slider-style switch

- **Form Utilities**
  - Modular validation (`formutils.js`)
  - Clean error handling for task creation/editing

- **Responsive Design**
  - Works seamlessly across desktop and mobile
  - Layout adapts to different screen sizes

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **UI/UX:** Flexbox, CSS Grid, animations
- **Structure:** Modular JS files (`sidebarManager.js`, `formutils.js`, etc.)
- **Build Tools:** (Optional) Webpack/Vite for bundling

---

## 📂 Project Structure

kanban-board/ ├── index.html ├── styles.css ├── scripts/ │   ├── ui/          # UI logic: rendering, modals, sidebar, theming │   │   ├── modalHandlers.js   # Handles opening/closing and validation of task modals │   │   ├── render.js          # Rendering functions for board and UI updates │   │   ├── taskElement.js     # Creates and manages task card DOM elements │   │   ├── theme.js           # Theme switching logic (light/dark, slider toggle) │   │   └── sidebarManager.js  # Sidebar animations and footer-pinned controls │   ├── tasks/       # Task logic, drag-and-drop, board management │   │   └── taskManager.js │   ├── utils/       # Validation, helpers, reusable utilities │   │   └── formutils.js │   └── api/         # Data persistence, API calls (future expansion) │       └── apiClient.js └── README.md


---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/patience-konde/kanban-board.git
   cd kanban-board

- **Simply open index.html in your browser.
- **Or serve with a local dev server (e.g., npm install -g serve → serve .).


### Initial Data Fetching & Loading State

- **Fetch tasks dynamically** from an API: https://jsl-kanban-api.vercel.app/

---

## ⚡ Usage

- **Add tasks via the modal form.
- **Drag tasks between To Do, In Progress, and Done columns.
- **Use the sidebar toggle to switch themes.
- **Task priorities are shown with colored dots.

---

## 🧩 Modular Utilities

- **utils/formutils.js** → Provides reusable form validation helpers (title length, description limits, priority checks).
- **ui/sidebarManager.js** → Controls sidebar animations, slide-out transitions, and footer-pinned toggle behavior.
- **ui/modalHandlers.js** → Handles opening/closing of modals and integrates validation for task forms.
- **ui/render.js** → Rendering functions that update the board and UI dynamically.
- **ui/taskElement.js** → Creates and manages task card DOM elements with priority indicators.
- **ui/theme.js** → Theme switching logic (light/dark mode, slider-style toggle).
- **tasks/taskManager.js** → Core Kanban logic (task creation, drag-and-drop between columns).
- **api/apiClient.js** → Placeholder for persistence and server communication (future database or API integration).

---

## 🎨 UI/UX Highlights

- **Purple-themed UI elements** for a modern, professional look  
- **Smooth sidebar transitions** managed by `ui/sidebarManager.js`  
- **Footer-pinned controls** integrated into the sidebar layout  
- **Modal workflows** handled by `ui/modalHandlers.js` for clean task editing  
- **Dynamic rendering** via `ui/render.js` to keep the board updated  
- **Task card creation** with `ui/taskElement.js`, including priority indicators  
- **Theme switching** powered by `ui/theme.js` (light/dark with slider toggle)  
- **Clean, organized project scaffolding** across `ui/`, `tasks/`, `utils/`, and `api/`  

---

## 📌 Future Improvements

- **Persistent storage** (localStorage or database integration via `api/apiClient.js`)  
- **User authentication** for personalized boards  
- **Multi-board support** to manage different projects  
- **Collaboration features** (real-time updates, shared boards)  

---
# Presentation Link

- **This my presention link [text](https://www.veed.io/view/9235bd9c-a2d9-422d-9c17-428e3cac09d6?source=editor&panel=share)

- **This my Netlify link [text](https://patience-konde.netlify.app/)

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute with attribution.
