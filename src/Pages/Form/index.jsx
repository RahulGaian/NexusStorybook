// ModalForm.js
import React, { useState } from "react";
import Modal from "react-modal";
import st from "./index.module.css";

const ModalForm = ({ isOpen, closeModal, handleSubmit, handleInputChange, formData }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Example Modal" className={st.modalFormStyle}>
      <div className={st.modalContainer}>
        {/* <h2> please Form</h2> */}
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
          <br />
          <button type="submit" className={st.submitButton}>
            Submit
          </button>
        </form>
      </div>
      </Modal>
  );
};

export default ModalForm;
