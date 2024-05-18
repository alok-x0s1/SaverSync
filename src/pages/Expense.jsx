import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button } from "../components";

const Expense = () => {
  const [expense, setExpense] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isOwner = expense && userData ? expense.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getExpense(slug).then((expense) => {
        if (expense) {
          setExpense(expense);
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deleteExpense = () => {
    appwriteService.deleteExpense(expense.$id).then((status) => {
      if (status) {
        navigate("/");
      }
    });
  };

  return expense ? (
    <div className="py-8 min-h-96 flex justify-center items-center">

      <div class="flex overflow-hidden flex-col h-auto items-center p-8 w-fit max-w-96 border border-secondary-color rounded-md text-primary-color">
        <h5 title="title" class="mb-1 text-xl font-medium">{expense.title}</h5>
        <span title="amount" class="text-base">Amount : {expense.amount}</span>
        <h3 title="content" className="text-lg">{expense.content}</h3>
        <div class="flex mt-4 md:mt-6">
          {isOwner ? (
            <div className="">
              <Link to={`/edit-expense/${expense.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deleteExpense}>
                Delete
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
};

export default Expense;
