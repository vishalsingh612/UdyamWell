import React, { useState } from "react";
import "./SellOnONDCForn.css";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
const SellOnONDCForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    enterpriseName: "",
    sellingCategory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/route", { formData })
      .then((response) => {
        console.log(response.data);
        Swal.fire("Thankyou for Subscribing !");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Form submitted:", formData);
  };

  return (
    <form className="formONDC" onSubmit={handleSubmit}>
      <h1
        className="section_tittle text-center mt-5 mb-4"
        style={{ color: "green", textAlign: "center", paddingTop: "20px" }}
      >
        Registration / पंजीकरण
      </h1>
      <label>
        Name / आपका नाम :
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </label>

      <label>
        Email Address / मेल पता :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
      </label>

      <label>
        Phone Number / फ़ोन नंबर:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </label>

      <label>
        Name of your Enterprise / आपके उद्यम का नाम :
        <input
          type="text"
          name="enterpriseName"
          value={formData.enterpriseName}
          onChange={handleChange}
          placeholder="Name of enterprise"
        />
      </label>

      <label>
        Business Address / व्यावसायिक पता :
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
      </label>

      <label>
        Business you are involved in? / आप किस व्यवसाय से जुड़े हैं?
        <input
          type="text"
          name="sellingCategory"
          value={formData.sellingCategory}
          onChange={handleChange}
          placeholder="Selling Category"
        />
      </label>
      <div className="btnForm">
        <Button variant="contained" sx={{ color: "white" }} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SellOnONDCForm;