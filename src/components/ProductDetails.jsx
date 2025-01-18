import { useParams } from "react-router-dom";
import data from "../data.json"
import Header from "./Header";


const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));
  console.log(product.image.desktop)

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="  ">
      <div className="bg-black px-[165px]">
        <Header />
      </div>

      {/* first container */}
      <div className="px-[165px] pt-[79px]">
        {/* go back button */}
        <button
          className=" font-medium text-[15px] text-black opacity-[50%] hover:text-burnt-orange hover:opacity-[100%]"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>

        {/* content */}
        <div>
{/* Product Image */}
<div className="flex-1">
            <img
              src={product.image.desktop} // Adjust the path resolution
              alt={product.name}
              className="w-full h-auto"
            />
          </div>

 {/* product details */}
 <div>

 </div>
        </div>
       
      </div>

      <h1 className="text-3xl font-bold">{product.name}</h1>
      {product.new && <p className="text-red-500">NEW PRODUCT</p>}
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
