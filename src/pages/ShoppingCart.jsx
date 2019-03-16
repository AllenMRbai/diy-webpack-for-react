import React, { Component } from "react";
import { connect } from "react-redux";
import { addOneAsync, removeOneAsync } from "../store/counter.redux";
import "./ShoppingCart.scss";
import Counter from "../components/Counter";
import goldIcon from "../assets/gold-icon.svg";

@connect(
  state => state.counter,
  { addOneAsync, removeOneAsync }
)
class ShoppingCart extends Component {
  render() {
    return (
      <div className="cart-item flex--between">
        <img className="gold-icon" src={goldIcon} alt="金币" />
        <Counter
          value={this.props.total}
          onAdd={this.props.addOneAsync}
          onRemove={this.props.removeOneAsync}
        />
      </div>
    );
  }
}

export default ShoppingCart;
