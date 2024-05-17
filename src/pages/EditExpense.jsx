import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from "../appwrite/config"
import { ExpenseForm } from '../components'

const EditExpense = () => {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        if (slug) {
            appwriteService.getExpense(slug).then( (post) => {
                if (post) {
                    setPost(post)
                }
            })
        } else {
            navigate("/")
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <ExpenseForm post={post} />
        </div>
      ) : null
}

export default EditExpense