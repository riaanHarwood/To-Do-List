# To-Do App 
A basic to-do list built using TypeScript &amp; Vanilla.JS


📝 TypeScript To-Do List App

A simple but well-structured To-Do List application built with TypeScript, designed to reinforce core TypeScript concepts such as strong typing, interfaces, modular code, and strict compiler settings.

This project is intentionally built without frameworks to focus purely on TypeScript fundamentals and clean application logic.

📌 Project Goals

The main goals of this project are to:

Practice TypeScript syntax and type safety

Learn how to structure a small TypeScript project

Understand the TypeScript compilation workflow

Avoid common beginner pitfalls like using any

Build confidence before moving to React + TypeScript

🚀 Features

✅ Add new tasks

🔁 Toggle tasks between completed / not completed

❌ Delete tasks

💾 Persist tasks using localStorage

🧠 Strongly typed data models

📦 Modular project structure

🛠️ Tech Stack

TypeScript

HTML5

Vanilla JavaScript (compiled from TypeScript)

LocalStorage API

Node.js & npm (for tooling only)

📁 Project Structure
```
TO-DO-LIST/
├── node_modules/          # Project dependencies
├── src/                   # TypeScript source files
│   ├── main.ts            # Main application logic
│   ├── types.ts           # Shared TypeScript interfaces
│   └── storage.ts         # LocalStorage helper functions
│
├── dist/                  # Compiled JavaScript output (auto-generated)
│   ├── main.js
│   ├── types.js
│   └── storage.js
│
├── index.html              # Application entry point
├── tsconfig.json           # TypeScript compiler configuration
├── package.json            # Project metadata and scripts
├── package-lock.json
└── README.md               # Project documentation
```

🧠 Key TypeScript Concepts Used
Interfaces
```
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
```

Strict Compiler Settings

The project uses strict TypeScript settings to enforce best practices:

strict: true

noImplicitAny: true

Explicit function return types

Safe DOM type casting


⚙️ Setup & Installation
Prerequisites

Make sure you have the following installed:

Node.js (v18+ recommended)

npm

Visual Studio Code


1️⃣ Clone the Repository
```
git clone https://github.com/riaanHarwood/ts-todo-list.git
cd ts-todo-list
```

2️⃣ Install Dependencies
```
npm install
```

3️⃣ Compile TypeScript
```
npx tsc
```

This will generate the compiled JavaScript files inside the dist/ folder.


4️⃣ Run the Application

Simply open index.html in your browser.



🔄 How the App Works

Tasks are stored in memory as an array of Task objects

Tasks are saved to localStorage on every update

On page load:

Tasks are loaded from localStorage

The UI is rendered based on the current task list

User actions trigger:

Type-safe state updates

A full UI re-render



👨‍💻 Author

Riaan Harwood
Junior Software Engineer
BSc Computer Science – University of Auckland



📄 License

This project is open-source and available under the MIT License.
