import React from "react";
import { useModal } from "./ModalContext";
import "./modal.scss";

function Modal() {
  const { modalAbierto, modalContent, closeModal } = useModal();
  console.log("modal");
  return modalAbierto ? (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <div className="innerCard">
          <div class="frontSide">
            <img src={modalContent.image} alt={modalContent.title} />
          </div>
          <div class="backSide">
            <img src={modalContent.image} alt={modalContent.title} />
            {modalContent.title ? <h2>{modalContent.title}</h2> : null}
            {modalContent.description ? (
              <p>{modalContent.description}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
