import React from "react";
import propTypes from "prop-types";

export default function Lists(props) {
  const className = ["list-reset"];
  className.push(props.className);

  if (props.isSmall) className.push("text-xs");

  return (
    <ul className={className.join(" ")}>
      {props.data.map((list, index) => {
        return (
          <li className={list.isChecked ? "is-checked" : ""}>{list.content}</li>
        );
      })}
    </ul>
  );
}

Lists.propTypes = {
  classnName: propTypes.string,
  data: propTypes.array,
  isSmall: propTypes.bool,
};
