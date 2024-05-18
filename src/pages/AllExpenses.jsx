import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { ExpenseCard } from '../components'

const AllExpenses = () => {
    const [expenses, setExpenses] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
      setLoading(true);
        appwriteService.getExpenses().then((expense) => {
            if (expense) {
                setExpenses(expense.documents);
            }
            setLoading(false); // Move inside the then block
        }).catch(error => {
            console.error("Error fetching expenses:", error);
            setLoading(false); // Make sure to handle error cases
        });
    }, [])
  return (
    <div className="w-full py-8 min-h-screen">
        {
          loading ? <div className='h-full w-full flex justify-center items-center'><h1 className='text-5xl text-primary-color font-semibold'>Loading...</h1></div> : <div className="flex flex-wrap gap-3">
          {expenses.map((expense) => (
            <div key={expense.$id} className="p-2 w-1/4">
              <ExpenseCard {...expense} />
            </div>
          ))}
        </div>
        }
    </div>
  )
}

export default AllExpenses