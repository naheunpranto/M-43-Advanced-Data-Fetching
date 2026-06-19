import Product from "@/components/Product";

 
const getProducts = async () => {
    const data = await fetch("http://localhost:5000/products", {cache: "no-store"})
    return data.json();
}



const ProductsPage = async () => {

    const products = await getProducts();


    return (
        <div>
            <h2>Products: {products.length}</h2>


            <div className="grid grid-cols-3 container mx-auto gap-4">
                {
                    products.map(product => <Product key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;