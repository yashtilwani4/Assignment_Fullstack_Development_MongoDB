# **MERN Assignment - React.js with Vite & Tailwind CSS**

This is a **React.js project** built with **Vite** and **Tailwind CSS**, implementing various UI components using functional components and the `useState` hook.

---

## **📌 Features Implemented**

✅ **TextUpdater** – Real-time text update using `useState`  
✅ **FormLogger** – Logs input values to the console on form submission  
✅ **UserCard** – Displays user details using props and Tailwind CSS  
✅ **StyledButton** – A custom-styled button with a click event  
✅ **LoginForm** – Handles form submission and displays entered details

---

## **🚀 Project Setup & Installation**

### **1️⃣ Clone the Repository**

```sh
git clone <repo-url>
cd mern-assignment
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Development Server**

```sh
npm run dev
```

After running the above command, Vite will start the server at **http://localhost:5173/** (or another port if 5173 is in use).

---

## **📂 Project Structure**

```
mern-assignment/
│── public/
│   ├── index.html           # Root HTML file
│── src/
│   ├── components/          # UI Components
│   │   ├── TextUpdater.jsx
│   │   ├── FormLogger.jsx
│   │   ├── UserCard.jsx
│   │   ├── StyledButton.jsx
│   │   ├── LoginForm.jsx
│   ├── App.jsx              # Main App Component
│   ├── index.jsx            # Entry Point
│   ├── index.css            # Tailwind CSS Configuration
│── package.json             # Dependencies & Scripts
│── vite.config.js           # Vite Configuration
│── tailwind.config.js       # Tailwind Configuration
│── postcss.config.js        # PostCSS Configuration
```

---

## **🎨 Styling with Tailwind CSS**

Tailwind CSS is used for styling. Ensure Tailwind is correctly configured in `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## **⚠️ Troubleshooting Issues**

### **1️⃣ Vite is Running but Page Shows 404 Error**

- Ensure `public/index.html` exists.
- If missing, create it manually:
  ```sh
  mkdir public && touch public/index.html
  ```

### **2️⃣ JSX Syntax Error (`JSX extension is not enabled`)**

- Ensure all component files have a **`.jsx` extension**.
- Rename files if necessary:
  ```sh
  mv src/components/TextUpdater.js src/components/TextUpdater.jsx
  mv src/index.js src/index.jsx
  ```

### **3️⃣ Port 5173 is Already in Use**

- Try running on a different port:
  ```sh
  npm run dev -- --port 5174
  ```

---

## **📜 License**

This project is for educational purposes only. Feel free to modify and improve it.

---

## **📧 Contact**

If you have any issues, feel free to reach out! 🚀🔥

---

This README provides **everything needed to set up and run the project**. Let me know if you need any changes! 🚀😊
