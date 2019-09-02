import React, { Fragment } from "react";

const Input = props => {
  const { type, name, placeholder, value } = props;
  let view;
  switch (type) {
    case "email":
      view = (
        <Fragment>
          <input type="text" placeholder="email" />@
          <input type="text" placeholder="mail.com" />
        </Fragment>
      );
      break;
    case "password":
      view = <input type="password" placeholder={placeholder} />;
      break;
    case "phone":
      view = (
        <Fragment>
          <input type="text" />-
          <input type="text" />-
          <input type="text" />
        </Fragment>
      );
      break;
    case "text":
    default:
      view = (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => props.onChange({name: e.target.name, value: e.target.value})}
        />
      );
      break;
  }
  return view;
};

Input.defaultProps = {
  type: "text",
  placeholder: "TextInput",
  onChange: () => {}
};

export default Input;
