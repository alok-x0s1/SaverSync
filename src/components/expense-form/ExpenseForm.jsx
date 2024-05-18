import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/config";
import Input from "../Input";
import Button from "../Button";

const ExpenseForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      slug: post?.slug || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const updatedPost = await appwriteService.updateExpense(post.$id, {
        ...data,
      });

      if (updatedPost) {
        navigate(`/expense/${updatedPost.$id}`);
      }
    } else {
      const createExpense = await appwriteService.createExpense({
        ...data,
        userId: userData.$id,
      });
      if (createExpense) {
        navigate(`/expense/${createExpense.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue(
          "slug",
          slugTransform(value.title, {
            shouldValidate: true,
          })
        );
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, setValue, slugTransform]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap justify-center"
    >
      <div className="flex flex-col justify-center border-secondary-color border p-8 rounded-md text-primary-color">
        <div className="px-2">
          <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
          />
          <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
          <Input
            label="Amount :"
            type="number"
            className="mb-4"
            {...register("amount", { required: !post })}
          />

          <Input
            label="Content :"
            type="text"
            className="mb-4"
            {...register("content", { required: !post })}
          />
          <Button
            type="submit"
            bgColor={post ? "bg-green-500" : undefined}
            className="w-full"
          >
            {post ? "Update" : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
