import React from "react";

const ContactList = props => {
    const list = props.contact.map(item => (
        <tr key={item.idx}>
          <td>{item.name}</td>
          <td>{item.tel}</td>
          <td>
            <button onClick={e => props.handleRemoveContact(item.idx)}>
              Delete
            </button>
          </td>
        </tr>
      ))
  return (
    <table border="1" style={{width:"100%"}}>
      <thead>
        <tr>
          <th>이름</th>
          <th>연락처</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
          {list}
      </tbody>
    </table>
  );
};

export default ContactList;
