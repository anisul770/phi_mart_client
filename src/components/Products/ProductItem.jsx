import defaultImage from "../../assets/default-placeholder-1-1024x1024-570x760.png"

const ProductItem = ({product}) => {
  return (
    <div className="card bg-base-100 w-11/12 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={product.images.length > 0 ? product.images[0].image : defaultImage}
          alt="Shoes"
          className=" rounded-xl h-[250px] w-[300px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <h3 className="font-bold text-xl text-red-700">${product.price}</h3>
        <p>{product.description}</p>
        <div className="card-actions mt-1">
          <button className="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;