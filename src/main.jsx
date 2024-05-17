import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Signup, Login, AddExpense, EditExpense, AllExpenses, Expense } from "./pages"
import {store, persistor} from "./store/store.js"
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "add-expense",
        element: <AddExpense />
      },
      {
        path: "edit-expense/:slug",
        element: <EditExpense />
      },
      {
        path: "expense/:slug",
        element: <Expense />
      },
      {
        path: "all-expense",
        element: <AllExpenses />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
