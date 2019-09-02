import React from "react";
import "./App.css";
import {
  Title,
  InputContact,
  ContactList
} from './components';

class App extends React.Component {
  state = {
    contact: [
      {
        idx: 1,
        name: "alpha",
        tel: "010-1234-2345"
      },
      {
        idx: 2,
        name: "beta",
        tel: "010-1122-2211"
      },
      {
        idx: 3,
        name: "chaile",
        tel: "010-2211-1122"
      }
    ],
    data: [],
    isUpdateMode: -2
  };

  /**
   * 삽입함수
   * params(*)
   */
  submitContact = (name, tel) => {
    this.setState({
      contact: [
        ...this.state.contact,
        {
          idx: new Date().getTime(),
          // idx: lastIndex,
          name: name,
          tel: tel
        }
      ],
      data: [
        ...this.state.contact,
        {
          idx: new Date().getTime(),
          // idx: lastIndex,
          name: name,
          tel: tel
        }
      ]
    });
  };
  /**
   * 삭제함수
   * params(*)
   */
  handleRemoveContact = idx => {
    let newContact = this.state.contact.filter(item => {
      return item.idx !== idx;
    });
    this.setState({ contact: newContact, data: newContact });
  };

  /**
   * 수정모드 진입
   */
  handleUpdateContactMode = idx => {
    this.setState(prevState => ({
      isUpdateMode: prevState.isUpdateMode === idx ? -1 : idx
    }));
  };
  /**
   * 값 수정
   */
  handleChangeContact = (idx, e) => {
    const newContact = this.state.contact.slice(0);
    newContact[idx][e.name] = e.value;
    this.setState({ contact: newContact, data: newContact });
  };
  /**
   * 연락처 필터링
   */
  handleKeyword = (str="") => {
    var newList = [];
    if(str === "") {
      newList = this.state.contact;
    }else{
      newList = this.state.contact.filter(item => {
        return item.name.includes(str);
      });
    }
    this.setState({
      data: newList
    });
  };

  /**
   * Title 수정
   */
  _handleChangeTitle = (title) => {
    this.setState({
      title: title
    })
  }

  _handleClickEvent = (str) => {
    alert(str);
  }

  componentWillMount() {
    this.handleKeyword();
  }

  render() {
    const { data, isUpdateMode, title } = this.state;
    return (
      <div className="App">
        <button onClick={() =>this._handleChangeTitle("Home")}>/home</button>
        <button onClick={() =>this._handleChangeTitle("About")}>/about</button>
        <button onClick={() =>this._handleChangeTitle("Blog")}>/blog</button>
        <br/>
        <Title
          value={title}
          onClick={this._handleClickEvent}
        />
        <InputContact
          handleKeyword={this.handleKeyword}
          submitContact={this.submitContact}
        />
        <ContactList
          contact={data}
          isUpdateMode={isUpdateMode}
          handleRemoveContact={this.handleRemoveContact}
          handleUpdateContactMode={this.handleUpdateContactMode}
          handleChangeContact={this.handleChangeContact}
        />
      </div>
    );
  }
}

export default App;
