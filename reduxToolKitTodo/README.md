# 📝 Redux Toolkit Todo App

A simple Todo application built using **React** and **Redux Toolkit**.
This app allows users to **add**, **delete**, and **manage todos** using centralized state management.

---

## 🚀 Features

* ➕ Add Todo
* ❌ Delete Todo
* 🧠 State management using Redux Toolkit
* ⚛️ React Functional Components
* 🎯 useSelector & useDispatch hooks
* 🧩 Clean folder structure
* 💅 Tailwind CSS UI

---

## 📸 App Screenshot

<p align="center">
  <img src="https://raw.githubusercontent.com/AhmedMujtaba999/vite-react/main/reduxToolKitTodo/src/Overview.jpeg" width="700"/>
</p>

---

## 📂 Project Structure

```
reduxToolkitTodo/
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js
│   │
│   ├── components/
│   │   ├── Addtodos.jsx
│   │   └── Todos.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

## 🧠 Redux Toolkit Flow

```
Component → dispatch(action) → Slice reducer → Store update → UI re-render
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/redux-toolkit-todo.git
```

Go to project folder

```bash
cd redux-toolkit-todo
```

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

---

## 🧩 Redux Slice Example

```js
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload.id
      )
    }
  }
})
```

---

## 🛠️ Built With

* React
* Redux Toolkit
* React Redux
* Vite
* Tailwind CSS

---

3. README will auto show it

---

## 👨‍💻 Author

Ahmed Mujtaba

GitHub: https://github.com/AhmedMujtaba999

---

## ⭐ If you like this project

Give it a star on GitHub ⭐
