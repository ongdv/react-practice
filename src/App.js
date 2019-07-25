import React from "react";
import logo from "./logo.svg";
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
    ]
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
    this.setState({ contact: newContact });
  };

  render() {
    var { contact } = this.state;
    return (
      <div className="App">
        <InputContact submitContact={this.submitContact} />
        <ContactList
          contact={contact}
          handleRemoveContact={this.handleRemoveContact}
        />
      </div>
    );
  }
}

export default App;
