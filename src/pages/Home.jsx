import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, ExpenseCard } from "../components";
import appwriteService from "../appwrite/config";

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    appwriteService.getExpenses().then((expense) => {
      if (expense) {
        setExpenses(expense.documents);
      }
    });
  }, []);

  const authStatus = useSelector((state) => state.auth.status);

  if (!authStatus) {
    return (
      <div className="w-full min-h-96 flex justify-center items-center py-8 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to see your Expenses...
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  if (expenses.length === 0) {
    return (
      <div className="w-full min-h-96 flex justify-center items-center py-8 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                You don't have any previous data.
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 min-h-screen">
      <Container>
        <div className="flex flex-wrap">
          {expenses.map((expense) => (
            <div key={expense.$id} className="p-2 w-1/4">
              <ExpenseCard {...expense} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
