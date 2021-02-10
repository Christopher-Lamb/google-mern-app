import React from "react";

function Button(props) {
  const { btnType } = props;

  return (
    <>
      <button
        className={`btn-${btnType}`}
        onClick={(event) => {
          event.preventDefault();
          let option = `${props.btnType}`;
          if ((option === "Delete")) {
            return props.onDelete();
          } else if ((option === "View")) {
            return props.onView();
          } else if ((option === "Save")) {
            return props.onSave();
          }
        }}
      >
        {btnType}
      </button>
    </>
  );
}

export default Button;
