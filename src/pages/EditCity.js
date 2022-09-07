import "../styles/EditCity.css";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Input from "../components/Input";
import axios from "axios";
import React, { useState, useRef } from "react";

function EditCity() {
  const model = [
    "Image URL",
    "City Name",
    "Country",
    "Description",
    "Population",
    "Foundation Year",
  ];

  const [items, setItems] = useState([]);
  axios.get("http://localhost:4000/cities/").then((res) => setItems(res.data));

  const imageRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const descriptionRef = useRef();
  const populationRef = useRef();
  const foundationRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(imageRef.current.value);
    console.log(cityRef.current.value);
    console.log(countryRef.current.value);
    console.log(descriptionRef.current.value);
    console.log(populationRef.current.value);
    console.log(foundationRef.current.value);
  };
  const optionView = (option) => (
    <option className="OptionSelect">{option.city}</option>
  );
  return (
    <WebsiteLayout>
      <div className="newcity-body">
        <div className="tittle-form-page">
          <img src="/img/gummy-city.svg" alt="icon" className="city-form" />
          <h1 className="title-form">
            Edit A<span className="my-style"> City</span>!
          </h1>
        </div>
        <select className="EditSelect">{items?.map(optionView)}</select>
        <div className="FormImgContainer">
          <div className="MainNewCity">
            {/* <Input /> */}
            <form className="form">
              <input
                type="text"
                className="input"
                placeholder="City"
                required
                name="city"
                ref={cityRef}
              />
              <input
                type="text"
                className="input"
                placeholder="Country"
                required
                name="country"
                ref={countryRef}
              />

              <input
                type="text"
                className="input"
                placeholder="PhotoURL"
                required
                name="photo"
                ref={imageRef}
              />

              <input
                type="text"
                className="input"
                placeholder="Population"
                required
                name="population"
                ref={populationRef}
              />

              <input
                type="text"
                className="input"
                placeholder="Foundation"
                required
                name="foundation"
                ref={foundationRef}
              />
              <textarea
                type="text"
                className="input"
                placeholder="Description"
                required
                name="description"
                ref={descriptionRef}
              />

              <button className="welcomePage-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </WebsiteLayout>
  );
}
export default EditCity;
