import React from "react";

export default function Modal(props: any) {
  //TODO: Coerce into export component
  {
    return (
      <div className="modal show-modal">
        <div className="modal-content">
          <span className="close-button">&times;</span>
          {props.children}
        </div>
      </div>
    );
  }
}
