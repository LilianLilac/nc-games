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
      Select category to see reviews:
      <br></br>
      <br></br>
      {categories.map((category) => {
        return (
          <Link to={`/reviews/category/${category.slug}`} key={category.slug}>
            {category.slug}
            <br></br>
            <br></br>
          </Link>
        );
      })}
    </ul>
  );
};

export default Categories;
