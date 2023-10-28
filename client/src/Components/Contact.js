import React, { useState } from "react";
import axios from 'axios'


const Contact = () => {

   const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    var dataSend = {
        email: email,
        subject: subject,
        text: message,
      }
      console.log(dataSend)

    const sendmail = async () => {
      
      const res = await axios.post("http://localhost:7000/api/mail", dataSend)
        // HANDLING ERRORS
        .then((res) => {
          console.log(res);
          if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
          }
        });
    };
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1> Contactez nous ?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="/assets/images/contact.png"
              alt="Contact Us"
              height="300px"
              width="300px"
            />
          </div>
          <div className="col-md-6">
              <div class="mb-3">
                <label for="exampleForm" class="form-label" style={{backgroundColor:'transparent'}}>
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="John Smith"
                  onChange={(e)=>setSubject(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{backgroundColor:'transparent'}}>
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" style={{backgroundColor:'transparent'}}>
                  Type here your suggestions or claims
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" onClick={sendmail}
               style={{borderRadius:'25px', borderColor:'white',backgroundColor:'black',
                        fontWeight:'500', width:'90px', height:'45px', color:'white'}}>
                Envoyer
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;