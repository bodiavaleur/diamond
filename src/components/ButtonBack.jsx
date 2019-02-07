import React from 'react';

const ButtonBack = props => {
  return (
    <button
      className={'button-back button-back-' + props.theme}
      onClick={() => props.onClickEvent('list')}>
      <i className='fas fa-chevron-left' />
    </button>
  );
};

export default ButtonBack;
