/* eslint-disable react/prop-types */
const ProductList = (props) => {
  const { data } = props;

  return (
    <div className="product__container">
      {data?.map((proudct) => {
        const { title, description, images } = proudct;
        return (
          <div key={proudct.id} className="product__card">
            <div className="images">
              <img id="product__image" src={images[0]} alt="product-image" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
