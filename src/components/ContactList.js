import React, { Component } from "react";

class ContactList extends Component {
  render() {
    const { isUpdateMode, contact } = this.props;
    const list = contact.map((item, index) => (
      <tr key={item.idx}>
        {isUpdateMode === item.idx ? (
          <React.Fragment>
            <td>
              <input
                type="text"
                name="name"
                value={item.name}
                onChange={e => this.props.handleChangeContact(index, e)}
              />
              {/* {item.name} */}
            </td>
            <td>
              <input
                type="text"
                name="tel"
                value={item.tel}
                onChange={e => this.props.handleChangeContact(index, e)}
              />
              {/* {item.tel} */}
            </td>
            <td>
              <button
                className="btn btn-info"
                onClick={() => this.props.handleUpdateContactMode(item.idx)}
              >
                Submit
              </button>
            </td>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <td>{item.name}</td>
            <td>{item.tel}</td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => this.props.handleUpdateContactMode(item.idx)}
              >
                Modify
              </button>
            </td>
          </React.Fragment>
        )}
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.handleRemoveContact(item.idx)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>이름</th>
            <th>연락처</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    );
  }
}

export default ContactList;
