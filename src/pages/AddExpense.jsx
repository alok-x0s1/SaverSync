import React from "react";
import { Container, ExpenseForm } from "../components";

const AddExpense = () => {
  return (
    <div className="py-8 w-full min-h-screen flex justify-center items-center">
      <Container>
        <ExpenseForm />
      </Container>
    </div>
  );
};

export default AddExpense;