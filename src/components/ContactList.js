import React from "react";
import ListItem from "./ListItem";
const ContactList = props => {
  const {
    isUpdateMode,
    contact,
    handleChangeContact,
    handleUpdateContactMode,
    handleRemoveContact
  } = props;
  const list = contact.map((item, index) => (
    <ListItem
    key={item.idx}
      item={item}
      index={index}
      isUpdateMode={isUpdateMode}
      handleChangeContact={handleChangeContact}
      handleUpdateContactMode={handleUpdateContactMode}
      handleRemoveContact={handleRemoveContact}
    />
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
};

export default ContactList;
