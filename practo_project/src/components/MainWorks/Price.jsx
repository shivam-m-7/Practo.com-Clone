/** @format */

import React from 'react';

function Price({ changePrice }) {
  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        gap: '10px',
        margin: '0px 0px 0px 10px',
      }}>
      {/* <div> */}
      <span
        style={{
          marginTop: '8px',
        }}>
        Sort by
      </span>
      {/* </div> */}
      <div style={{ padding: '0px', margin: '0px' }}>
        <select
          name=''
          id='filter'
          onChange={(e) => changePrice(e.target.value)}>
          <option value=''>Relevance</option>
          <option value='price&_order=desc'>High To Low</option>
          <option value='price&_order=asc'>Low To High</option>
          <option value='yearexp&_order=asc'>Less Years of Experience</option>
          <option value='yearexp&_order=desc'>More Years of Experience</option>
        </select>
      </div>
    </div>
  );
}

export default Price;