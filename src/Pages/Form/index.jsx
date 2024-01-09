// // ModalForm.js
// import React, { useState } from "react";
// import Modal from "react-modal";
// import axios from "axios";
// import st from "./index.module.css";

// const ModalForm = ({ isOpen, closeModal, handleSubmit, handleInputChange, formData }) => {
//   return (
//     <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Example Modal" className={st.modalFormStyle}>
//       <div className={st.modalContainer}>
//         <h2> Great Oppurnities Awaits You</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Full Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className={st.inputField}
//             />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className={st.inputField}
//             />
//           </label>
//           <br />
//           <label>
//             Phone Number:
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleInputChange}
//               className={st.inputField}
//             />
//           </label>
//           <br />
//           <button type="submit" className={st.submitButton}>
//             Apply Now
//           </button>
//         </form>
//       </div>
//       </Modal>
//   );
// };

// export default ModalForm;

//=======================================
// ModalForm.js
import React from "react";
import Modal from "react-modal";
import axios from 'axios';
import st from "./index.module.css";

const ModalForm = ({ isOpen, closeModal, handleInputChange, formData }) => {
  const submitForm = async (data) => {
    try {
      await axios.post('http://localhost:5000/submit-form', data);
      console.log('Form data submitted successfully!');
      closeModal();
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Example Modal" className={st.modalFormStyle}>
      <div className={st.modalContainer}>
        <h2> Great Opportunities Await You</h2>
        <form onSubmit={onSubmit}>
          <label>
            Full Name:
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
            Apply Now
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalForm;

