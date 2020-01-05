import React from "react";
import ProductCategory from "./ProductCategory";
import Product from "./Product";

const ProductTable = ({
  products,
  filterText,
  inStockOnly,
  isSportingGood
}) => {
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (isSportingGood && product.category !== "Sporting Goods") {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory category={product.category} key={product.category} />
      );
    }
    rows.push(<Product product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
