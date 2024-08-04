import { ENDPOINTS } from "@/constants";
import APIService from "@/lib/APIService";
import { get } from "lodash";
import Link from "next/link";
import React, { cache } from "react";
import ProductFullDetails from "./components/ProductFullDetails";
import RelatedProducts from "./components/RelatedProducts";
import { getAsset } from "@/lib/utils/functions";
import ProductImages from "./components/ProductImages";
import CartButton from "./components/CartButton";

export const getProducts = async ({ category }) => {
  const filters = {
    category: {},
  };

  if (category != "all") {
    filters.category = {
      slug: {
        $eq: category,
      },
    };
  }

  const res = await APIService.get(ENDPOINTS.PRODUCT, {
    params: {
      fields: ["name", "slug"],
      filters,
      populate: {
        category: {
          fields: ["name"],
        },
        cover: {
          fields: ["url"],
        },
      },
    },
  });

  const products = get(res, "data.data", []);

  return products;
};

export const getProduct = cache(async (slug) => {
  const res = await APIService.get(ENDPOINTS.PRODUCT, {
    params: {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: "*",
    },
  });

  const product = get(res, "data.data[0].attributes", {});
  product.id = get(res, "data.data[0].id", "");

  const relatedProducts = await getProducts({
    category: get(product.category, "data.attributes.slug", ""),
  });

  return { product, relatedProducts };
});

export default async function Product({ params }) {
  const { slug } = params || {};
  const { product = {}, relatedProducts = [] } = await getProduct(slug);
  console.log(relatedProducts);

  const {
    id,
    name,
    category,
    description,
    summary,
    cover,
    images: { data: images },
  } = product;

  return (
    <>
      <div className="holder breadcrumbs-wrap mt-0">
        <div className="container">
          <ul className="breadcrumbs">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={`/products/all`}>Products</Link>
            </li>
            <li>
              <Link
                href={`/products/${get(category, "data.attributes.slug", "")}`}
              >
                {get(category, "data.attributes.name", "")}
              </Link>
            </li>
            <li>
              <span>{name}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="holder">
        <div className="container js-prd-gallery" id="prdGallery">
          <div className="row prd-block prd-block--prv-bottom">
            <div className="col-md-8 col-lg-8 col-xl-8 aside--sticky js-sticky-collision">
              <ProductImages cover={cover} images={images} />
            </div>
            <div className="col-md-10 col-lg-10 col-xl-10 mt-1 mt-md-0">
              <div className="prd-block_info prd-block_info--style1">
                <div className="prd-block_info-top prd-block_info_item order-0 order-md-2">
                  <div className="prd-block_price prd-block_price--style2">
                    <div className="prd-block_price--actual">{name}</div>
                  </div>
                </div>
                <div className="prd-block_description prd-block_info_item ">
                  <p>{description}</p>
                </div>
                <div className="order-0 order-md-100">
                  <CartButton
                    slug={slug}
                    name={name}
                    cover={cover}
                    id={id}
                    category={category}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="holder prd-block_links-wrap-bg d-none d-md-block">
        <div className="prd-block_links-wrap prd-block_info_item container mt-2 mt-md-5 py-1">
          <div className="prd-block_link">
            <span>
              <i className="icon-call-center"></i>24/7 Support
            </span>
          </div>
          <div className="prd-block_link">
            <span>Use promocode FOXIC to get 15% discount!</span>
          </div>
          <div className="prd-block_link">
            <span>
              <i className="icon-delivery-truck"></i> Fast Shipping
            </span>
          </div>
        </div>
      </div>

      <ProductFullDetails summary={summary} />

      {relatedProducts.length > 1 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </>
  );
}
