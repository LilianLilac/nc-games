import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <ul className="CategoriesNav">
      {categories.map((category) => {
        return (
          <Link to={`/reviews/category/${category.slug}`} key={category.slug}>
            {category.slug}
          </Link>
        );
      })}
    </ul>
  );
};

export default Categories;
