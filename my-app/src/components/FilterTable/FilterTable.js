import React, { Component } from "react";
import "./FilterTable.css";

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

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
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
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

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleFilterTextChange = e => this.props.onFilterTextChange(e.target.value);

  handleInStockChange = e => this.props.onInStockChange(e.target.checked);

  handleIsSportingGoodChange = e =>
    this.props.onIsSportingGoodChange(e.target.checked);

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{" "}
          Only show products in stock
        </p>
        <p>
          <input
            type="checkbox"
            checked={this.props.isSportingGood}
            onChange={this.handleIsSportingGoodChange}
          />{" "}
          Only show Sporting products
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      inStockOnly: false,
      isSportingGood: false,
      products: [
        {
          category: "Sporting Goods",
          price: "$49.99",
          stocked: true,
          name: "Football"
        },
        {
          category: "Sporting Goods",
          price: "$9.99",
          stocked: true,
          name: "Baseball"
        },
        {
          category: "Sporting Goods",
          price: "$29.99",
          stocked: false,
          name: "Basketball"
        },
        {
          category: "Electronics",
          price: "$99.99",
          stocked: true,
          name: "iPod Touch"
        },
        {
          category: "Electronics",
          price: "$399.99",
          stocked: false,
          name: "iPhone 5"
        },
        {
          category: "Electronics",
          price: "$199.99",
          stocked: true,
          name: "Nexus 7"
        }
      ]
    };
  }

  handleFilterTextChange = filterText => this.setState({ filterText });

  handleInStockChange = inStockOnly => this.setState({ inStockOnly });

  handleIsSportingGoodChange = isSportingGood =>
    this.setState({ isSportingGood });

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          isSportingGood={this.state.isSportingGood}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
          onIsSportingGoodChange={this.handleIsSportingGoodChange}
        />
        <ProductTable
          products={this.state.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          isSportingGood={this.state.isSportingGood}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
