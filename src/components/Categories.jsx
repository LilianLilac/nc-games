import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";
import Reviews from "./Reviews";

const CategoriesDropdown = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);
  return (
    <nav className="CategoriesNav">
      {categories.map((category) => {
        return (
          <Link to={`/reviews/category/${category.slug}`} key={category.slug}>
            {category.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default CategoriesDropdown;
