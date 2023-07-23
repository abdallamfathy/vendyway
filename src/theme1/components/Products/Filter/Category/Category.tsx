import { FaSearch } from "react-icons/fa";
import Title from "../Title";
import CategoryList from "./CategoryList";
import { useState } from "react";

export interface Category {
  id: number;
  name: string;
  count: number;
  checked: boolean;
}
const Category = () => {
  const handleCategoryChange = (updatedCategories: Category[]) => {
    setCategories(updatedCategories);
  };
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: "Sandwiches",
      count: 11,
      checked: false,
    },
    {
      id: 2,
      name: "Donat",
      count: 12,
      checked: false,
    },
    {
      id: 3,
      name: "Burger",
      count: 23,
      checked: false,
    },
    {
      id: 4,
      name: "Pizza",
      count: 12,
      checked: false,
    },
    {
      id: 5,
      name: "Drink",
      count: 12,
      checked: false,
    }
  ]);
  return (
    <div className="py-6 px-8 rounded-md border border-[#E8E8E8]">
      <div className="flex flex-col gap-5">
        <div className="w-full px-6 py-4 inline-flex gap-4 items-center bg-gray1 rounded-md border border-[#E8E8E8]">
          <FaSearch className="text-[#7E7E7E]" />
          <input
            type="search"
            placeholder="Search"
            className="border-none outline-none placeholder:text-[#7E7E7E] bg-transparent "
          />
        </div>
        <Title title="Category" />
        <CategoryList
          categories={categories}
          onChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};

export default Category;
