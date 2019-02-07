import React from 'react';

const ItemsList = props => {
  const handleClick = item => {
    props.selectItem(item);
    props.onClickShow('details');
  };

  const filterByType = type => props.items.filter(item => item.type === type);
  const items = filterByType(props.selectedType).map(item => (
    <li
      className={'items-list-' + props.theme}
      onClick={() => handleClick(item)}>
      <img src={item.preview[0]} alt={item.name} />
    </li>
  ));
  return <ul className='items-list'>{items}</ul>;
};

export default ItemsList;
