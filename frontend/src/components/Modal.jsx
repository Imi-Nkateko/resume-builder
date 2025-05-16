import React from "react";


const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  showActionBtn,
  actionBtnIcon = null,
  actionBtnText,
  onActionClick,
}) => {
  return <div className="">

    <div>
      <h3>{title}</h3>
      {!showActionBtn && (
        <button className="" onClick={() => onActionClick}>
          {actionBtnIcon}
          {actionBtnText}
        </button>
      )}
    </div>
    <button type="button" onClick={() => onClose} className="">X close icons</button>
    <div>
      {children}
    </div>
  </div>;
};

export default Modal;
