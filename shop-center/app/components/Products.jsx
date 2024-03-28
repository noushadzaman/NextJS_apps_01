import allProducts from "../data/allProducts.js";
import SingleProduct from "./SingleProduct.jsx";

const Products = () => {

    return (
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
                {
                    allProducts.map((product, idx) => <SingleProduct key={idx} product={product} />)
                }
            </div>
        </section>
    );
};

export default Products;