import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { cartItems: this.props.cartItems };
  }
  getItems() {
    return this.state.cartItems.map(item => {
      const convertedPrice = this.props.currency(item.price);
      return (
        <li className='item'>
          <img src={item.preview[0]} alt={item.name} />
          <h4>{item.name}</h4>
          <div>{convertedPrice.sign + convertedPrice.price}</div>
          <button onClick={() => this.removeItem(this.state.cartItems, item)}>
            <i className='fas fa-times' />
          </button>
        </li>
      );
    });
  }

  removeItem(array, deletedItem) {
    const withoutDeletedItem = this.state.cartItems.filter(
      item => this.state.cartItems.indexOf(item) !== array.indexOf(deletedItem)
    );
    this.setState({ cartItems: withoutDeletedItem });
    this.props.changeCart(withoutDeletedItem);
    this.props.decreaseCount(withoutDeletedItem.length);
  }

  getTotalPrice() {
    try {
      const prices = this.state.cartItems.map(
        item => this.props.currency(parseInt(item.price)).price
      );
      return prices.reduce((total, price) => total + price);
    } catch {
      return 0;
    }
  }

  render() {
    const items = this.getItems();
    const totalPrice = this.getTotalPrice();
    const sign = this.props.currency(totalPrice).sign;
    return (
      <div className={'cart cart-' + this.props.theme}>
        {this.props.children}
        <ul className='item-list'>{items}</ul>
        <div className='order'>
          <span>Total price: {sign + totalPrice}</span>
          <button className='btn-outline'>BUY</button>
        </div>
      </div>
    );
  }
}
