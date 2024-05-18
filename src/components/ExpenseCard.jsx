import React from "react";
import { Link } from "react-router-dom";

const ExpenseCard = ({ $id, title, amount }) => {
  return (
    <Link to={`/expense/${$id}`}>
      <div className="w-full bg-primary-bg-color border shadow-sm hover:-translate-y-1 duration-300 text-primary-color shadow-secondary-color border-secondary-color rounded-xl p-4">
        <div className="w-full justify-center mb-4">{title}</div>
        <h2 className="text-xl font-bold">{amount}</h2>
      </div>
    </Link>
  );
};

export default ExpenseCard;
