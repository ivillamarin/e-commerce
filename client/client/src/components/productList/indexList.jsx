import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productService";
import ProductCard from "../productCard/indexCard";

function ProductList() {
const [products, setProducts] = useState([]);

useEffect(() => {
    async function loadProducts() {
        const data = await fetchProducts();
        setProducts(data);
    }
    loadProducts();
}, []);

return (
    <div className="product-list">
        <h2>Productos</h2>
        {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
    ) : (
        products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))
    )}
    </div>
);
}

export default ProductList;
