import React, { Component, Fragment } from "react";

class InputContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tel: ""
    };
  }

  _handleInputContact = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.handleKeyword(e.target.value);
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
          <input
            type="text"
            placeholder="이름"
            name="name"
            value={name}
            onChange={this._handleInputContact}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="전화번호"
            name="tel"
            value={tel}
            onChange={this._handleInputContact}
            onKeyUp={this._handleSubmitContact}
          />
        </div>

        <button onClick={this._handleSubmitContactHandler}>Insert</button>
      </Fragment>
    );
  }
}

export default InputContact;
