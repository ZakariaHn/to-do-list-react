import React from "react";

const UserList = (props) => {
  const toDos = props.list.map((item) => (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.done}
        onChange={() => {
          props.check(item.id);
        }}
      />
      {item.title}
      <i
        onClick={() => {
          props.remove(item.id);
        }}
      >
        🗑
      </i>
    </li>
  ));
  return <ul>{toDos}</ul>;
};

export default UserList;
