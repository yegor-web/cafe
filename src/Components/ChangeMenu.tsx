import React from 'react';

const ChangeMenu = () => {
  return (
    <div className="button__block">
      <button className='button button__block_category'>Завтрак<br />500 Ккал</button>
      <button className='button button__block_category'>Похудение<br />1200 Ккал</button>
      <button className='button button__block_category active'>Поддержание<br />1500 Ккал</button>
      <button className='button button__block_category'>Набор<br />2500 Ккал</button>
    </div>
  );
};

export default ChangeMenu;