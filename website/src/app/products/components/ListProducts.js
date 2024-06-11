const { default: Product } = require("@/components/Product");

const ListProducts = () => {
  return (
    <div class="prd-grid-wrap">
      {/* <!-- Products Grid --> */}
      {/* <div
        class="prd-listview product-listing data-to-show-3 data-to-show-md-3 data-to-show-sm-2 js-category-grid"
        
      > */}
      <div class="product-listing data-to-show-3 data-to-show-md-3 data-to-show-sm-2 js-category-grid prd-grid">
        <Product id={1} />
        <Product id={2} />
        <Product id={3} />
        <Product id={4} />
        <Product id={5} />
        <Product id={6} />
        <Product id={7} />
        <Product id={8} />
        <Product id={9} />
        <Product id={10} />
        <Product id={11} />
        <Product id={12} />
      </div>
    </div>
  );
};

export default ListProducts;
