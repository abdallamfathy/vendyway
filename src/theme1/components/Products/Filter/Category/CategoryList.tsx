import * as React from "react";
import { Category } from "./Category";

interface CheckboxProps {
  categories: Category[];
  onChange: (checked: any) => void;
}

export default function CategoryList(props: CheckboxProps) {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoryId: number
  ) => {
    const updatedCategories = props.categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          checked: event.target.checked,
        };
      }
      return category;
    });
    props.onChange(updatedCategories);
  };
  return (
    <>
      {props.categories.map((category: any) => (
        <div className="flex justify-between items-center w-full" key={category.id}>
          <label
            className={`checkbox-container inline-flex gap-2 items-baseline ${
              category.checked && "checkedd"
            }`}>
            <input
              type="checkbox"
              checked={category.checked}
              onChange={(e) => handleChange(e, category.id)}
            />
            <span className="checkmark" />
            {category.name}
          </label>
          <div>
            <span className="text-[#737373]">{category.count}</span>
          </div>
        </div>
      ))}
    </>
  );
}
