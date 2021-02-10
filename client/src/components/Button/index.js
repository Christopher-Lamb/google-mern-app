import React from "react";

function Button(props) {
  const { btnType, id } = props;

  return (
    <>
      <button
        id={id}
        className={`btn-${btnType}`}
        onClick={(event) => {
          event.preventDefault();
          props.onClick(event);
        }}
      >
        {btnType}
      </button>
    </>
  );
}

export default Button;
