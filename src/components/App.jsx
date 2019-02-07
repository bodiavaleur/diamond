import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import ItemsList from './ItemsList';
import ItemDetails from './ItemDetails';
import Cart from './Cart';
import ButtonBack from './ButtonBack';
import Preferences from './Preferences';

const Theme = React.createContext('light');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartCount: 0,
      cartItems: [],
      items: false,
      selectedItem: null,
      selectedType: 'necklace',
      showList: true,
      showDetails: false,
      showCart: false,
      showPrefs: false,
      theme: 'light',
      currency: 'usd'
    };

    this.renderContent = this.renderContent.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getItems = this.getItems.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.selectType = this.selectType.bind(this);
    this.submitPrefForm = this.submitPrefForm.bind(this);
    this.convertCurrency = this.convertCurrency.bind(this);
    this.changeCartCount = this.changeCartCount.bind(this);
    this.changeCartItems = this.changeCartItems.bind(this);
  }

  getItems() {
    return fetch('./items.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ items: res }));
  }

  renderContent(type) {
    let contentState = {
      showList: false,
      showDetails: false,
      showCart: false,
      showPrefs: false
    };

    switch (type) {
      case 'list':
        contentState['showList'] = true;
        break;
      case 'details':
        contentState['showDetails'] = true;
        break;
      case 'cart':
        contentState['showCart'] = true;
        break;
      case 'prefs':
        contentState['showPrefs'] = true;
        break;
      default:
        break;
    }

    return this.setState(contentState);
  }

  addToCart(item) {
    const cart = [...this.state.cartItems];
    cart.push(item);
    this.changeCartCount(cart.length);
    this.setState({
      cartItems: cart
    });
  }

  selectItem(item) {
    this.setState({ selectedItem: item });
  }

  selectType(type) {
    this.setState({ selectedType: type });
    this.renderContent('list');
  }

  submitPrefForm(e, theme, currency) {
    e.preventDefault();
    this.setState({ theme: theme, currency: currency });
  }

  convertCurrency(price) {
    let convertedPrice;
    let currencySign;
    switch (this.state.currency) {
      case 'usd':
        convertedPrice = price;
        currencySign = '$ ';
        break;
      case 'rub':
        convertedPrice = price * 65.5;
        currencySign = '₽ ';
        break;
      case 'eur':
        convertedPrice = price * 0.88;
        currencySign = '€ ';
        break;
      default:
        break;
    }

    return { price: convertedPrice, sign: currencySign };
  }

  changeCartCount(count) {
    this.setState({ cartCount: count });
  }

  changeCartItems(items) {
    this.setState({ cartItems: items });
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    console.log('this.state.theme', this.state.theme);
    return (
      <Theme.Provider value={this.state.theme}>
        <Theme.Consumer>
          {theme => (
            <div id='app' className={'app-' + theme}>
              <Sidebar
                cart={this.state.cartCount}
                onClickEvent={this.renderContent}
                changeType={this.selectType}
                theme={theme}
              />
              <Content>
                {this.state.showList && this.state.items ? (
                  <ItemsList
                    items={this.state.items}
                    onClickShow={this.renderContent}
                    selectItem={this.selectItem}
                    selectedType={this.state.selectedType}
                    theme={theme}
                  />
                ) : null}
                {this.state.showDetails ? (
                  <ItemDetails
                    item={this.state.selectedItem}
                    addToCart={this.addToCart}
                    currency={this.convertCurrency}
                    theme={theme}>
                    <ButtonBack
                      theme={theme}
                      onClickEvent={this.renderContent}
                    />
                  </ItemDetails>
                ) : null}
                {this.state.showCart ? (
                  <Cart
                    cartItems={this.state.cartItems}
                    currency={this.convertCurrency}
                    decreaseCount={this.changeCartCount}
                    changeCart={this.changeCartItems}
                    theme={theme}>
                    <ButtonBack
                      onClickEvent={this.renderContent}
                      theme={theme}
                    />
                  </Cart>
                ) : null}
                {this.state.showPrefs ? (
                  <Preferences
                    submitForm={this.submitPrefForm}
                    theme={theme}
                    currency={this.state.currency}>
                    <ButtonBack
                      onClickEvent={this.renderContent}
                      theme={theme}
                    />
                  </Preferences>
                ) : null}
              </Content>
            </div>
          )}
        </Theme.Consumer>
      </Theme.Provider>
    );
  }
}
