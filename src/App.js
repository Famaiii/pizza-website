import React from "react";
import "./scss/app.scss";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Sort from "./Components/Sort";
import PizzaBlock from "./Components/PizzaBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price="500" />
            <PizzaBlock title="Маргарита" price="4 00" />
            <PizzaBlock title="4 сыра" price="600" />
            <PizzaBlock title="Куриная" price="900" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
