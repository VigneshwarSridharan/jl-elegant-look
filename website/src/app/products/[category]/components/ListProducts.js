const { default: Product } = require("@/components/Product");

const ListProducts = ({ products = [] }) => {
  return (
    <div className="prd-grid-wrap">
      {/* <!-- Products Grid --> */}
      <div className="product-listing data-to-show-3 data-to-show-md-3 data-to-show-sm-2 js-category-grid prd-grid">
        {products.map(({ id, attributes: product }) => {
          return <Product key={id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ListProducts;
