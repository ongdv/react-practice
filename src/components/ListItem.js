import React, {Fragment} from "react";
import Input from "./Input";
const ListItem = props => {
    const {
        item,
        index,
        isUpdateMode,
        handleChangeContact,
        handleUpdateContactMode,
        handleRemoveContact
      } = props;
  return (
    <tr key={item.idx}>
      {isUpdateMode === item.idx ? (
        <Fragment>
          <td>
            <Input
              type="text"
              name="name"
              value={item.name}
              onChange={e => handleChangeContact(index, e)}
            />
            {/* {item.name} */}
          </td>
          <td>
            <Input
              type="text"
              name="tel"
              value={item.tel}
              onChange={e => handleChangeContact(index, e)}
            />
            {/* {item.tel} */}
          </td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => handleUpdateContactMode(item.idx)}
            >
              Submit
            </button>
          </td>
        </Fragment>
      ) : (
        <Fragment>
          <td>{item.name}</td>
          <td>{item.tel}</td>
          <td>
            <button
              className="btn btn-warning"
              onClick={() => handleUpdateContactMode(item.idx)}
            >
              Modify
            </button>
          </td>
        </Fragment>
      )}
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleRemoveContact(item.idx)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ListItem;
