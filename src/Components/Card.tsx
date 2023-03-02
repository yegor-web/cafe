import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <img src="" alt="" />
      <div className="card__info">
        <h5>Завтрак</h5>
        <h4>Овсяная каша с молоком и яблоком</h4>
        <h6>500 Ккал, 220г</h6>
        <div className="button__group">
          <button className='button' onClick={() => {
          }}>Заменить</button>
          <button className='button remove'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.375 0V0.777778H0V2.33333H0.875V12.4444C0.875 12.857 1.05937 13.2527 1.38756 13.5444C1.71575 13.8361 2.16087 14 2.625 14H11.375C11.8391 14 12.2842 13.8361 12.6124 13.5444C12.9406 13.2527 13.125 12.857 13.125 12.4444V2.33333H14V0.777778H9.625V0H4.375ZM4.375 3.88889H6.125V10.8889H4.375V3.88889ZM7.875 3.88889H9.625V10.8889H7.875V3.88889Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;