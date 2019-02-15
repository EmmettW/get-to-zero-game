class PreviousAction extends React.Component {
  render() {
    return(<div id="prev-action">j</div>);
  }
}

class Result extends React.Component {
  render() {
    return(<div id="result">d</div>);
  }
}

class ResultRow extends React.Component {
  render() {
    return(<div id="result-row"><PreviousAction /><Result /></div>);
  }
}

class ResultWindow extends React.Component {
    render() {
      const rows = [];
      rows.push(<ResultRow />)
      rows.push(<ResultRow />)
      rows.push(<ResultRow />)
      return(<div id="result-window">{rows}</div>);
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
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
  }
}

class Number extends React.Component {
 render() {
   const num = this.props.number;
   return(<div id="number">{num}</div>);
 }
}

class NumberBar extends React.Component {
  render() {
    const rows = [];
    this.props.numbers.forEach((number) => {
      rows.push(<Number number={number.num} />);
    })
    
    return (rows);
  }
}



class ActionBar extends React.Component {
  render() {
    const rows = [];
    rows.push(<MultiplyButton />);
    rows.push(<AddButton />);
    rows.push(<SubtractButton />);
    rows.push(<DivideButton />);
    return(<div>{rows}</div>);
  }
}

class MultiplyButton extends React.Component {
  render() {
    return (
      <button type="button">Multiply</button>
    );
  }
}

class AddButton extends React.Component {
  render() {
    return (
      <button type="button">Add</button>
    );
  }
}

class SubtractButton extends React.Component {
  render() {
    return (
      <button type="button">Minus</button>
    );
  }
}

class DivideButton extends React.Component {
  render() {
    return (
      <button type="button">Divide</button>
    );
  }
}

class MathAppFrame extends React.Component {
  render() {
    return (
      <div>
        <NumberBar numbers={this.props.numbers}/>
        <ActionBar />
        <ProductTable products={this.props.products} />
        <ResultWindow />
      </div>
    );
  }
}
const NUMBERS = [
  {num: 1},
  {num: 2},
  {num: 3},
  {num: 4}
];


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
ReactDOM.render(
  <MathAppFrame products={PRODUCTS} numbers={NUMBERS} />,
  document.getElementById('container')
);
