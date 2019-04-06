import React, { Component, Fragment, createRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { changeName } from "../store/user.redux";
import "./UserCenter.scss";
import defaultAvatar from "../assets/ssln.jpg";
import Popup from "../components/Popup";

@connect(state => state.user)
class UserCenter extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  state = {
    popupVisible: false
  };

  constructor(props) {
    super(props);
    this.nickNameInput = createRef();
  }

  closePopup = () => this.setState({ popupVisible: false });

  submit = () => {
    const { dispatch } = this.props;
    const nickName = this.nickNameInput.current.value;
    dispatch(changeName(nickName));
    this.closePopup();
  };

  render() {
    const { popupVisible } = this.state;
    const { name, age } = this.props;

    return (
      <Fragment>
        <div className="user-container flex--start">
          <div className="avatar-container">
            <img src={defaultAvatar} alt="头像" />
          </div>
          <div className="user-info">
            <h4>
              {`昵称:${name}`}
              <button
                type="button"
                onClick={() =>
                  this.setState(preState => ({
                    popupVisible: !preState.popupVisible
                  }))
                }
                style={{ marginLeft: "10px" }}
              >
                {"修改"}
              </button>
            </h4>
            <div style={{ marginTop: "8px" }}>{` 年龄：${age}`}</div>
          </div>
        </div>
        <ul className="list-container">
          {new Array(6).fill("").map((v, i) => {
            // eslint-disable-next-line
            return <li key={i} className="list-item" />;
          })}
        </ul>
        <Popup onClose={this.closePopup} visible={popupVisible}>
          <div className="model-form">
            <h6>修改昵称</h6>
            <input ref={this.nickNameInput} defaultValue={name} type="text" />
            <div className="flex--center">
              <button type="button" onClick={this.closePopup}>
                {"取消"}
              </button>
              <button type="button" onClick={this.submit}>
                {"确认"}
              </button>
            </div>
          </div>
        </Popup>
      </Fragment>
    );
  }
}

export default UserCenter;
