import React from "react";
import "./App.css";
import InputContact from "./components/InputContact";
import ContactList from "./components/ContactList";

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
    // const lastIndex = this.state.contact[this.state.contact.length-1].idx+1;
    this.setState({
      contact: [
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
  handleUpdateContactMode = (idx) => {
    this.setState(prevState=>({isUpdateMode: prevState.isUpdateMode === idx ? -1: idx}))
  }
  /**
   * 값 수정
   */
  handleChangeContact = (idx, e) => {
    const newContact = this.state.contact.slice(0);
    newContact[idx][e.target.name] = e.target.value
    this.setState({contact: newContact, data: newContact});
  }
  /**
   * 연락처 필터링
   */
  handleKeyword = (str="") => {
    const newList = this.state.contact.filter(item => {
      return item.name.includes(str);
    })
    this.setState({
      data: newList
    })
  }

  componentWillMount(){
    this.handleKeyword();
  }

  render() {
    const { data, isUpdateMode } = this.state;
    return (
      <div className="App">
        <InputContact handleKeyword={this.handleKeyword} submitContact={this.submitContact} />
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
