import React, { Component } from 'react';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previewBig: this.props.item.preview[0]
    };

    this.price = this.props.currency(this.props.item.price);
  }

  setPreviewBig() {
    return (
      <div className='preview-lg'>
        <img src={this.state.previewBig} alt='preview-big' />
      </div>
    );
  }

  getPreview() {
    const big = this.setPreviewBig();
    const small = this.props.item.preview.map(img => (
      <div
        className='preview-sm'
        onClick={() => this.setState({ previewBig: img })}>
        <img src={img} alt='preview-sm' />
      </div>
    ));

    return { big: big, small: small };
  }

  renderStars() {
    const stars = Array.from({ length: this.props.item.rate }, () => (
      <i className='far fa-star' />
    ));

    return <div className='stars'>{stars}</div>;
  }

  render() {
    return (
      <div className={'details details-' + this.props.theme}>
        {this.props.children}
        <div id='details-group'>
          <div className='preview'>
            {this.getPreview().big}
            {this.getPreview().small}
          </div>
          <div className='details-item'>
            <h1>{this.props.item.name}</h1>
            {this.renderStars()}
            <div id='price'>{this.price.sign + this.price.price}</div>
            <div className='description'>
              <p>{this.props.item.description}</p>
            </div>

            <button
              className='btn-outline'
              id='button-add'
              onClick={() => this.props.addToCart(this.props.item)}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  }
}
