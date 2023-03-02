import React from 'react';

const ChangeDate = () => {

  var days = [
    'Вc',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб'
  ];
  var d = new Date();
  var n = d.getDay();
  console.log(days[n], d.getMonth());

  return (
    <div className="button__block">
      <button className='button button__block__date'>Пн 20.01</button>
      <button className='button button__block__date'>{days[n - 2]} 21.01</button>
      <button className='button button__block__date'>{days[n - 1]} 22.01</button>
      <button className='button button__block__date active_day active'>{days[n]} {d.getDate()}.0{d.getMonth()}</button>
      <button className='button button__block__date active_day'>{days[n + 1]} {d.getDate()}.0{d.getMonth()}</button>
      <button className='button button__block__date active_day'>{days[n + 2]} {d.getDate()}.0{d.getMonth()}</button>
      <button className='button button__block__date active_day'>{days[n + 3]} {d.getDate()}.0{d.getMonth()}</button>
    </div>
  );
};

export default ChangeDate;