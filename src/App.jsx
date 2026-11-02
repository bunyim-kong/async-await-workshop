import { useState, useEffect, use } from "react";
import "./App.css";

export function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadHomepageData() {
            const [categoryResponse, productResponse] = await Promise.all([
                fetch("/data/categories.json"),
                fetch("/data/products.json"),
            ]);

            const [categoryData, productData] = await Promise.all([
                categoryResponse.json(),
                productResponse.json(),
            ]);

            setCategories(categoryData.categories);
            setProducts(productData.products);
        }

        loadHomepageData();
    }, []);

  return (
    <section className="home-page container">
      <div className="content-section">
        {categories.map((category) => (
          <article className="category-card" key={category.id}>
            <h2>{category.name}</h2>
          </article>
        ))}
      </div>

      <div className="content-section">

      </div>
    </section>
  )
}

export default App;