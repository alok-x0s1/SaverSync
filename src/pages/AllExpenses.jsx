import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { ExpenseCard } from '../components'

const AllExpenses = () => {
    const [expenses, setExpenses] = useState([])

    useEffect( () => {
        appwriteService.getExpenses().then( (expense) => {
            if (expense) {
                setExpenses(expense.documents)
            }
        })
    }, [])
  return (
    <div className="w-full py-8">
        <div className="flex flex-wrap">
          {expenses.map((expense) => (
            <div key={expense.$id} className="p-2 w-1/4">
              <ExpenseCard {...expense} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default AllExpenses