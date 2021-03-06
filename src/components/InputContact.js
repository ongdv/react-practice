import React, { Component, Fragment } from "react";
import Input from './Input';
class InputContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tel: "",
      title: "",
    };
  }

  _handleInputContact = (name, value) => {
    this.setState({[name]: value});
    this.props.handleKeyword(value);
  };

  /**
   * 입력함수
   * params(*)
   */
  _handleSubmitContact = e => {
    if (e.keyCode === 13) {
      this._handleSubmitContactHandler();
    }
  };

  _handleSubmitContactHandler = () => {
    if (this.state.name.length <= 3 || this.state.tel.length <= 10) {
      alert("Invalid name or tel value");
      return;
    }
    this.props.submitContact(this.state.name, this.state.tel);
    this.setState({ name: "", tel: "" });
  };

  render() {
    const { name, tel } = this.state;
    return (
      <Fragment>
        <div>
          <Input
            type="text"
            placeholder="이름"
            name="name"
            value={name}
            onChange={(param) =>this._handleInputContact(param.name, param.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="전화번호"
            name="tel"
            value={tel}
            onChange={(param) =>this._handleInputContact(param.name, param.value)}
            onKeyUp={this._handleSubmitContact}
          />
        </div>

        <button className="btn btn-success" onClick={this._handleSubmitContactHandler}>Insert</button>
      </Fragment>
    );
  }
}

export default InputContact;
