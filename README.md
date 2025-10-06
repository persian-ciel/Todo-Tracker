# Todo Tracker

A responsive Todo List application built with React, featuring drag-and-drop functionality, theme toggling, and task filtering. Track your daily tasks efficiently with a clean, modern interface that works seamlessly across devices.

---

## ✨ Features

- **Add & Delete Tasks**: Easily create new todos and manage your list.
- **Mark as Complete**: Toggle tasks as completed with a beautiful animated checkbox.
- **Drag & Drop Reordering**: Use @dnd-kit to reorder tasks intuitively with touch and mouse support.
- **Filter Tasks**: View All, Active, or Completed tasks with dynamic UI highlighting.
- **Clear Completed**: Remove all completed tasks in one click.
- **Dark/Light Theme Toggle**: Switch between themes using React Context for a personalized experience.
- **Responsive Design**: Optimized for mobile, tablet, and desktop with Tailwind CSS.
- **Item Counter**: Real-time count of active tasks in the footer.

---

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useContext)
- **Drag & Drop**: @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities
- **Build Tool**: Vite (assumed for modern React setup)

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm or Yarn (depending on your preference)

### Installation

**1- Clone the Repository**
`bash
    git clone https://github.com/persian-ciel/Todo-Tracker.git
    cd Todo-Tracker
    `
**2- Install Dependencies**
`bash
    npm install
    `
**3- Install Drag & Drop Dependencies**
`bash
    npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
    `
**4- Run the Development Server**
`bash
    npm run dev
    `
**5- Open in Browser**
Navigate to http://localhost:5173 (or the port shown in the terminal).

### 📁 Project Structure

src/<br/>
├── components/<br/>
│ ├── MainContainer.jsx # Main app wrapper<br/>
│ ├── Header.jsx # App header with theme toggle<br/>
│ ├── NewTodo.jsx # Add new todo form<br/>
│ ├── ShowTodoList.jsx # Todo list container<br/>
│ ├── ListShow.jsx # Todo items with drag & drop<br/>
│ ├── TodoItem.jsx # Individual todo item<br/>
│ └── Footer.jsx # Filter and clear controls<br/>
├── theme/<br/>
│ └── ThemeContext.jsx # Theme management context<br/>
└── App.jsx # Root component
### 🎨 Demo

<img width="1366" height="768" alt="Screenshot (35)" src="https://github.com/user-attachments/assets/adb8416f-64a1-40fa-a0f2-37c50771ba33" />
![Uploading Screenshot (36).png…]()

### 🎨 Customization

**Theme Toggle**
The app uses a custom ThemeContext for light/dark mode switching. Modify colors in ThemeContext.jsx:

- Light: bg-white, text-neutral-800
- Dark: bg-[#363062], text-neutral-200

**Styling**
All styles are in Tailwind CSS classes. Key customizations:

- Gradient checkbox: bg-gradient-to-tr from-[#4158D0] via-[#C850C0] to-[#FFCC70]
- Shadows: shadow-2xl for elevated containers

**Adding Features**

- **Persistence**: Integrate localStorage in MainContainer.jsx for saving todos.
- **Edit Tasks**: Add inline editing to TodoItem.jsx.
- **Categories**: Extend the todo object with a category field and add filtering.

## 📱 Responsiveness

- **Mobile**: Stacked filters in footer, touch-optimized drag & drop.
- **Tablet/Desktop**: Horizontal filter layout, hover effects.
- **Breakpoints**: Uses Tailwind's sm: prefix for small screens and up.

## 🙌 Acknowledgments

- @dnd-kit for drag & drop magic.
- Tailwind CSS for rapid, responsive styling.
- React community for the amazing ecosystem.

---

## Contact / Author

- **Author**: `persian-ciel`
- **GitHub Profile**: [persian-ciel](https://github.com/persian-ciel)
