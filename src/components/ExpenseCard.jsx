import React from "react";
import { Link } from "react-router-dom";

const ExpenseCard = ({ $id, title, amount }) => {
  return (
    <Link to={`/expense/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">{title}</div>
        <h2 className="text-xl font-bold">{amount}</h2>
      </div>
    </Link>
  );
};

export default ExpenseCard;
