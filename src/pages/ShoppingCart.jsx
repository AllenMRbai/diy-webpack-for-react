import React, { Component, Fragment } from "react";
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
  state = {
    num1: "",
    num2: "",
    sum: ""
  };

  plus = () => {
    // 测试code spliting
    import("../lib/utils.js").then(({ plus }) => {
      this.setState(preState => {
        return {
          sum: plus(Number(preState.num1), Number(preState.num2))
        };
      });
    });
  };

  render() {
    const { num1, num2, sum } = this.state;
    return (
      <Fragment>
        <div className="cart-item flex--between">
          <img className="gold-icon" src={goldIcon} alt="金币" />
          <Counter
            value={this.props.total}
            onAdd={this.props.addOneAsync}
            onRemove={this.props.removeOneAsync}
          />
        </div>
        <div className="cart-item">
          <label htmlFor="num1">
            <input
              style={{ width: 80 }}
              value={num1}
              onChange={evt => {
                this.setState({
                  num1: evt.target.value
                });
              }}
              name="num1"
              type="text"
            />
          </label>
          <span>+</span>
          <label htmlFor="num2">
            <input
              style={{ width: 80 }}
              value={num2}
              onChange={evt => {
                this.setState({
                  num2: evt.target.value
                });
              }}
              name="num2"
              type="text"
            />
          </label>
          <button
            style={{ padding: "0 8px", marginLeft: "4px" }}
            onClick={this.plus}
            type="button"
          >

            =
          </button>
          <span style={{ padding: "0 8px", marginLeft: "4px" }}>{sum}</span>
        </div>
      </Fragment>
    );
  }
}

export default ShoppingCart;
