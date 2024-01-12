import React from "react";
import Img from "../../components/Image";
import st from "./index.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAJbrOdU3If9S8TWjMNemJ6cY3PWdRvmoE",
  authDomain: "nexusconnect-80caf.firebaseapp.com",
  projectId: "nexusconnect-80caf",
  storageBucket: "nexusconnect-80caf.appspot.com",
  messagingSenderId: "606618585542",
  appId: "1:606618585542:web:ebb07f7f38b5f533df8ac7",
  measurementId: "G-3D7LB1Y4PK",
};

initializeApp(firebaseConfig);

const db = getDatabase();

const FormComponent = () => {

  const [sent,setSent] = useState(false)
  const submitForm = async (data) => {
    try {
      push(ref(db, "nexusConnect/"), {
        data,
      });
    } catch (error) {
      //console.error('Error submitting form data:', error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    setSent(true)
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phoneNumber: "",
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    console.log("Sending form data to server...");


    closeModal();
  };
  return (
    <div className={st.contentContainer}>
    <div className={st.mainCont}>
      <div className={st.imgCont}>
        <Img src="./Images/Object.png"></Img>
      </div>
      {!sent?   <div className={st.modalContainer}>
        <h2 className={st.h11}>Get in Touch</h2>
        <h2 style={{ fontSize: "16px" }}>
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
            Phone Number*
            <PhoneInput
              className={st.inputField}
              id={st.phinpt}
              placeholder="Enter phone number"
              defaultCountry="US"
              // value={formData.phoneNumber}
              onChange={(value) =>
                handleInputChange({ target: { name: "phoneNumber", value } })
              }
            />
          </label>
          <div className={st.policy}>
            <input type="checkbox" />
            <span>You agree to our friendly privacy policy.</span>
          </div>
          <br />
          <br />
          <br />
          <button type="submit" className={st.submitButton}>
            Send message
          </button>
        </form>
      </div>:<h1 className={st.h111}>Our Team will contact you shortly</h1>}
   
    </div>
    
    </div>
  );
};

export default FormComponent;
