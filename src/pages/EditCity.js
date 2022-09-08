import "../styles/EditCity.css";
import WebsiteLayout from "../layouts/WebsiteLayout";
import Input from "../components/Input";
import axios from "axios";
import React, { useState, useRef, useEffect } from "react";

function EditCity() {

  const selectedRef = useRef()
  const imageRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();
  const descriptionRef = useRef();
  const populationRef = useRef();
  const foundationRef = useRef();


  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/cities/")
      .then((res) => setItems(res.data));
      loadForm()
  }, [])

  
  const loadForm = () => {
    let city = items.filter(item => item.city === selectedRef.current.value)
    console.log(city)
    imageRef.current.value = "sdsad"
    cityRef.current.value = city.city
    countryRef.current.value = city.country
    descriptionRef.current.value = city.description
    populationRef.current.value = city.population
    foundationRef.current.value = city.foundation
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedRef.current.value);
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
        <select className="EditSelect" ref={selectedRef}>{items?.map(optionView)}</select>
        <div className="FormImgContainer">
          <div className="MainNewCity">
            <form className="form" onSubmit={handleSubmit}>
              <Input text="City" reference={cityRef}></Input>
              <Input text="Country" reference={countryRef}></Input>
              <Input text="PhotoURL" reference={imageRef}></Input>
              <Input text="Population" reference={populationRef}></Input>
              <Input text="Foundation" reference={foundationRef}></Input>
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
