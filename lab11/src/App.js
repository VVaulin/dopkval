import img1 from "./img/img1.jpg";
import './App.css';
import { React, useState } from "react";


function App() {
  const [counter, setCounter] = useState(1);

  function bin() {
    alert("Количество заказанного товара: " + counter)
  }

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div className="block">
      <img className="img" src={img1} alt="pizza"></img>
      <h2 className="title">Пепперони</h2>
      <p className="descr">Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла</p>
      <select className="dia">
        <option>Диаметр</option>
        <option>20</option>
        <option>30</option>
        <option>40</option>
        <option>50</option>
      </select>
      <p className="price">От 550 ₽</p>
      <div className="btn_block">
      <button className="btn" onClick={decrement}>-</button>
      <p className="count">{counter}</p>
      <button className="btn" onClick={increment}>+</button>
      <button className="bin" onClick={bin}>🧺</button>
      </div>
    </div>
  );
}

export default App
