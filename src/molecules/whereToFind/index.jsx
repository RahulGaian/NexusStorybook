import React from "react";
import style from "./index.module.css";
import { useState } from "react";
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



const WhereToFind = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });  

  const [emailEntered,setemailEntered] = useState(true)
  const [nameEntered,setnameEntered] = useState(true)
  const [phoneNumber,setphoneNumber] = useState(true)



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [submitted,setSubmitted] = useState(false)
  const onSubmit = (e) =>{
      e.preventDefault();
      console.log(formData)
      if(formData.email == ""){
        setemailEntered(false)
      }
      else{
        setemailEntered(true)

      }
      if(formData.name == ""){
        setnameEntered(false)
      }
      else{
        setnameEntered(true)
      }


      if(formData.phoneNumber ==""){
        setphoneNumber(false)
      }
      else{
        setphoneNumber(true)
      }
      if(formData.email !="" && formData.phoneNumber != "" && formData.name !=""){

        push(ref(db, 'CES/' ), {
          formData
        });
        setSubmitted(true)
      }
  }
  return (
    <div className={style.main}>
      <div className={style.internal}>
        <h1 className={style.heading}>
          Sign up to receive exclusive CES insights
        </h1>
        <h1 className={style.subheading}>
          Get updates on the future of ambient computing and AI directly in your
          inbox
        </h1>
        {!submitted?
        <div className={style.inputs}>
     
          <form onSubmit={onSubmit} >
          <label className={style.subheading}>
            {/* Full Name: */}
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleInputChange}
              className={style.input1 + " " + (!nameEntered?style.redBorder:"")}
            />
          </label>
          <br />
          <label className={style.subheading}>
            {/* Email: */}
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={handleInputChange}
              className={style.input1 + " " + (!emailEntered?style.redBorder:"")}
            />
          </label>
          <br />
          <label className={style.subheading}>
            {/* Phone Number: */}
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={style.input1 + " " + (!phoneNumber?style.redBorder:"")}
            />
          </label>
          <br />
{/*           <label className={style.subheading} > Profession</label>
          <select
            name="profession"
            value={formData.profession}
            className={style.input1}
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
          </select>
          <br /> */}
  
          <button type="submit" className={style.submitButton}>
            Apply Now
          </button>
        </form>
        </div>:
        <div>
          <h1 className={style.heading}>
              Your responses have been recorded
          </h1>
          </div>

}

        {/* <div className={style.checkboxx}>
          <input
            type="checkbox"
            id="check"
            name="check"
            className={style.check}
            value="Bike"
          />
          <label for="check" className={style.checkdesc}>
            Yes, I’d like to sign-up to receive updates from Amazon Alexa about
            new products and related services.
          </label>
        </div>


        <input type="button" value={"Login"} onClick={onSubmit} className={style.button} /> */}
      </div>
    </div>
  );
};

export default WhereToFind;
