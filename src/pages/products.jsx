import { Categories } from "../components/categories/categories";
import { ProductItems } from "../components/product-items/product-items";
import { Skeleton } from "../components/product-items/skeleton";
import { Sort } from "../components/sort/sort";
import { useEffect, useState } from "react";

const URL = process.env.REACT_APP_API_URL;

export const Products = ({ searchValue }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({
    name: "popularity",
    sortProperty: "rating",
  });

  const orderBy = activeSort.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = activeSort.sortProperty.replace("-", "");
  const categoryBy = activeCategory > 0 ? `category=${activeCategory}` : "";

  useEffect(() => {
    setLoading(true);
    fetch(`${URL}?${categoryBy}&sortBy=${sortBy}&order=${orderBy}`)
      .then((arr) => arr.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, [activeCategory, activeSort]);

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  const products = items
    .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
    .map((obj) => <ProductItems key={obj.id} {...obj} />);

  return (
    <>
      <div className="content__top">
        <Categories
          value={activeCategory}
          onChangeCategory={(i) => setActiveCategory(i)}
        />
        <Sort value={activeSort} onChangeSort={(obj) => setActiveSort(obj)} />
      </div>
      <h2
        className="content__title"
        style={{ marginBottom: "50px", marginTop: "50px" }}
      >
        Choose
      </h2>
      <div className="content__items">{loading ? skeletons : products}</div>
    </>
  );
};
