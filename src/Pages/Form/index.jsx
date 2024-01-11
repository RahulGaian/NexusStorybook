
import React from "react";
import Modal from "react-modal";
import axios from 'axios';
import Img from "../../components/Image";
import st from "./index.module.css";
import {initializeApp} from 'firebase/app';
import { getDatabase,ref,push } from "firebase/database";

const firebaseConfig = {

  apiKey: "AIzaSyAJbrOdU3If9S8TWjMNemJ6cY3PWdRvmoE",

  authDomain: "nexusconnect-80caf.firebaseapp.com",

  projectId: "nexusconnect-80caf",

  storageBucket: "nexusconnect-80caf.appspot.com",

  messagingSenderId: "606618585542",

  appId: "1:606618585542:web:ebb07f7f38b5f533df8ac7",

  measurementId: "G-3D7LB1Y4PK"

};

  
 
initializeApp(firebaseConfig);

const db = getDatabase();

const ModalForm = ({ isOpen, closeModal, handleInputChange, formData }) => {
  const submitForm = async (data) => {
    try {
      // await axios.post('http://localhost:5000/submit-form', data);
      // //console.log('Form data submitted successfully!');
      //console.log(data,"from dbb")
      push(ref(db, 'nexusConnect/' ), {
        data
      });
      closeModal();
    } catch (error) {
      //console.error('Error submitting form data:', error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Example Modal" className={st.modalFormStyle}>
      <div className={st.modalContainer}>
    
        <h2 className={st.h11}> Get in Touch 
            <Img src={"/Icons/x2.svg"} className={st.svgg} onClick={closeModal}></Img>
        </h2>
        <h2 style={{fontSize:"16px"}}>
        Our team would love to hear from you.
        </h2>
        <br />
        <form onSubmit={onSubmit} className={st.form}>
        <div className={st.first}>
        <label>
            First Name*
            <input
              type="text"
              name="firstname"
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
          <label>
            Last Name*
            <input
              type="text"
              name="lastname"
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
        </div>
      
          <br />
          <label>
            Job Title*
            <input
              type="text"
              name="job"
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
          <br />
          <br />
          <label>
            Company name*
            <input
              type="text"
              name="company"
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
          <br />
          <br />
            <label>
           Business Email*
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
          <br />
          <br />
          <label>
            Phone Number
            <input
              type="tel"
              name="phoneNumber"
              onChange={handleInputChange}
              className={st.inputField}
            />
          </label>
          <br /><br />
          {/* <label > Profession</label>
          <select
            name="profession"
            value={formData.profession}
            className={st.inputField}
            onChange={handleInputChange}

          >
            <option value="Desinger">Select</option>
            <option value="Desinger">Desinger</option>
            <option value="Engineer">Engineer</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Product">Product</option>
            <option value="Support">Support</option>
            <option value="Other">Other</option>
          </select> */}
          <br />
          {/* <br /> */}
          <button type="submit" className={st.submitButton}>
            Apply Now
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ModalForm;

