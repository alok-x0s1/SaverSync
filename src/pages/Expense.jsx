import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import appwriteService from "../appwrite/config"
import { Button } from '../components'

const Expense = () => {
    const [expense, setExpense] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    const userData = useSelector(state => state.auth.userData)
    const isOwner = expense && userData ? expense.userId === userData.$id : false

    useEffect( () => {
        if (slug) {
            appwriteService.getExpense(slug).then( (expense) => {
                if (expense) {
                    setExpense(expense)
                } else {
                    navigate("/")
                }
            })
        } else {
            navigate("/")
        }
    }, [slug, navigate])

    const deleteExpense = () => {
        appwriteService.deleteExpense(expense.$id).then( (status) => {
            if (status) {
                navigate("/")
            }
        })
    }

  return expense ? (
    <div className="py-8">
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          {isOwner && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-expense/${expense.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deleteExpense}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{expense.title}</h1>
          <h3 className="text-xl font-semiboldbold">{expense.amount}</h3>
        </div>
        <div className="browser-css">{expense.content}</div>
    </div>
  ) : null;
}

export default Expense