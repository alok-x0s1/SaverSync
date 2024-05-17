import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Expense Tracker Application.</h1>
        <Link
        to="/add-expense"
        >
        Add Expense
        </Link>
    </div>
  )
}

export default Home