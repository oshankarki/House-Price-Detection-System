import React, { useState } from "react";
import axios from "axios";
import "./search.css";

function App() {
  const [formData, setFormData] = useState({
    MSSubClass: "",
    MSZoning: "",
    LotArea: "",
    Street: "",
    LandSlope: "",
    BldgType: "",
    OverallQual: "",
    OverallCond: "",
    RoofStyle: "",
    BedroomAbvGr: "",
    KitchenQual: "",
    TotRmsAbvGrd: "",
    SaleType: "",
  });

  const [predictedPrice, setPredictedPrice] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("Sending data to backend:", formData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/house/predict",
        formData
      );
      setPredictedPrice(response.data.predictedPrice);
    } catch (error) {
      console.error("Error making request to the backend:", error);
    }
  };

  return (
    <div class="card">
      <div class="card-body  d-flex justify-content-center">
        <div class="col-md-6 p_form">
          <form class="predict_form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label>MSSubClass:</label>
              <input
                type="number"
                name="MSSubClass"
                value={formData.MSSubClass}
                onChange={handleChange}
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label>MSZoning:</label>
              <select
                name="MSZoning"
                value={formData.MSZoning}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">Select</option>

                <option value="0">C (all)</option>
                <option value="1">FV</option>
                <option value="2">RH</option>
                <option value="3">RL</option>
                <option value="4">RM</option>
              </select>
            </div>

            <div class="form-group">
              <label>Lot Area:</label>
              <input
                type="number"
                name="LotArea"
                value={formData.LotArea}
                onChange={handleChange}
                class="form-control"
              />
            </div>

            <div class="form-group ">
              <label>Street:</label>
              <select
                name="Street"
                value={formData.Street}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">Select</option>
                <option value="1">Pave</option>
                <option value="0">Grvl</option>
              </select>
            </div>

            <div class="form-group ">
              <label>LandSlope:</label>
              <select
                name="LandSlope"
                value={formData.LandSlope}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">Select</option>
                <option value="0">Gtl</option>
                <option value="1">Mod</option>
                <option value="2">Sav</option>
              </select>
            </div>
            <div class="form-group">
              <label>BldgType:</label>
              <select
                name="BldgType"
                value={formData.BldgType}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">Select</option>
                <option value="0">1Fam</option>
                <option value="1">2fmCon</option>
                <option value="2">Duplex</option>
                <option value="3">Twnhs</option>
                <option value="4">TwnhsE</option>
              </select>
            </div>

            <div class="form-group ">
              <label>OverallQual:</label>
              <input
                type="number"
                name="OverallQual"
                value={formData.OverallQual}
                onChange={handleChange}
                class="form-control"
                min={1}
                max={10}
              />
            </div>

            <div class="form-group ">
              <label>OverallCond:</label>
              <input
                type="number"
                name="OverallCond"
                value={formData.OverallCond}
                onChange={handleChange}
                class="form-control"
                min={1}
                max={9}
              />
            </div>

            <div class="form-group ">
              <label>RoofStyle:</label>
              <select
                name="RoofStyle"
                value={formData.RoofStyle}
                class="form-control"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="0">Flat</option>
                <option value="1">Gable</option>
                <option value="2">Gambrel</option>
                <option value="3">Hip</option>
                <option value="4">Mansard</option>
                <option value="5">Shed</option>
              </select>
            </div>

            <div class="form-group ">
              <label>BedroomAbvGr:</label>
              <select
                name="BedroomAbvGr"
                value={formData.BedroomAbvGr}
                class="form-control"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">8</option>
              </select>
            </div>

            <div class="form-group ">
              <label>KitchenQual:</label>
              <select
                name="KitchenQual"
                value={formData.KitchenQual}
                class="form-control"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="2">Gd</option>
                <option value="3">TA</option>
                <option value="0">Ex</option>
                <option value="1">Fa</option>
              </select>
            </div>

            <div class="form-group ">
              <label>TotRmsAbvGrd::</label>
              <select
                name="TotRmsAbvGrd"
                value={formData.TotRmsAbvGrd}
                class="form-control"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">14</option>
              </select>
            </div>

            <div class="form-group ">
              <label>SaleType:</label>
              <select
                name="SaleType"
                value={formData.SaleType}
                class="form-control"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="8">WD</option>
                <option value="6">New</option>
                <option value="0">COD</option>
                <option value="3">ConLD</option>
                <option value="4">ConLI</option>
                <option value="1">CWD</option>
                <option value="5">ConLW</option>
                <option value="2">Con</option>
                <option value="7">Oth</option>
              </select>
            </div>
            <hr />
            <button type="submit " class="btn_predict " name="submit ">
              Predict Price
            </button>
          </form>
          <br />{" "}
          {predictedPrice && (
            <div className="result">
              <h3>Predicted Price: {predictedPrice}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} // Add a closing curly brace for the App function here

export default App;
