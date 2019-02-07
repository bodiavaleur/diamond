import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className={'sidebar sidebar-' + this.props.theme}>
        <img src='./img/diamond.svg' alt='logo-diamond' id='logo' />
        <div id='menu' onChange={e => this.props.changeType(e.target.id)}>
          <input type='radio' name='jewelry_type' id='necklace' />
          <label htmlFor='necklace'>Necklaces</label>
          <input type='radio' name='jewelry_type' id='bracelet' />
          <label htmlFor='bracelet'>Bracelets</label>
          <input type='radio' name='jewelry_type' id='earring' />
          <label htmlFor='earring'>Earrings</label>
          <input type='radio' name='jewelry_type' id='ring' />
          <label htmlFor='ring'>Rings</label>
        </div>
        <div>
          <button
            id='pref-bth'
            onClick={() => this.props.onClickEvent('prefs')}>
            <i className='fas fa-cog' />
          </button>
          <button
            disabled={this.props.cart === 0}
            onClick={() => this.props.onClickEvent('cart')}>
            Cart: {this.props.cart}
          </button>
        </div>
      </aside>
    );
  }
}
