import React from 'react';

const Preferences = props => {
  let theme = 'light';
  let currency = 'usd';

  return (
    <div className={'preferences preferences-' + props.theme}>
      {props.children}
      <form onSubmit={e => props.submitForm(e, theme, currency)}>
        <label htmlFor='sel-theme'>Theme:</label>
        <select id='sel-theme' onChange={e => (theme = e.target.value)}>
          <option selected value='light'>
            Light
          </option>
          <option value='dark'>Dark</option>
        </select>
        <label htmlFor='sel-currency'>Currency:</label>
        <select id='sel-currency' onChange={e => (currency = e.target.value)}>
          <option selected value='usd'>
            USD
          </option>
          <option value='eur'>EUR</option>
          <option value='rub'>RUB</option>
        </select>
        <button className='btn-outline' type='submit'>
          OK
        </button>
      </form>
    </div>
  );
};

export default Preferences;
