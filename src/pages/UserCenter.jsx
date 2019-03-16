import React, { Component } from "react";
import { connect } from "react-redux";
import { changeName, increaseAge } from "../store/user.redux";
import "./UserCenter.scss";
import defaultAvatar from "../assets/ssln.jpg";
import Popup from "../components/Popup";

@connect(
  state => state.user,
  { changeName, increaseAge }
)
class UserCenter extends Component {
  state = {
    popupVisible: false,
    nickName: this.props.name
  };

  closePopup = () => this.setState({ popupVisible: false });

  submit = () => {
    this.props.changeName(this.state.nickName);
    this.closePopup();
  };

  render() {
    return (
      <React.Fragment>
        <div className="user-container flex--start">
          <div className="avatar-container">
            <img src={defaultAvatar} alt="头像" />
          </div>
          <div className="user-info">
            <h4>
              昵称: {this.props.name}{" "}
              <button
                onClick={() =>
                  this.setState(preState => ({
                    popupVisible: !preState.popupVisible
                  }))
                }
                style={{ marginLeft: "10px" }}
              >
                修改
              </button>
            </h4>
            <div style={{ marginTop: "8px" }}>年龄：{this.props.age}</div>
          </div>
        </div>
        <ul className="list-container">
          {new Array(6).fill("").map((v, i) => {
            return <li key={i} className="list-item" />;
          })}
        </ul>
        <Popup onClose={this.closePopup} visible={this.state.popupVisible}>
          <div className="model-form">
            <h6>修改昵称</h6>
            <input
              value={this.state.nickName}
              onChange={e => this.setState({ nickName: e.target.value })}
              type="text"
            />
            <div className="flex--center">
              <button onClick={this.closePopup}>取消</button>
              <button onClick={this.submit}>确认</button>
            </div>
          </div>
        </Popup>
      </React.Fragment>
    );
  }
}

export default UserCenter;
