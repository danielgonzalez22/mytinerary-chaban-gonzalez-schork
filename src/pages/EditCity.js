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
  const [cityId, setCityId] = useState()
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/cities/")
      .then((res) => setItems(res.data));
  }, [cityId])

  
  const loadForm = () => {
    let city = items.find(item => item.city === selectedRef.current.value)
    setCityId(city._id)
    imageRef.current.value = city.photo
    cityRef.current.value = city.city
    countryRef.current.value = city.country
    descriptionRef.current.value = city.description
    populationRef.current.value = city.population
    foundationRef.current.value = city.foundation
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCity = {
      city: cityRef.current.value,
      country: countryRef.current.value,
      photo: imageRef.current.value,
      population: populationRef.current.value,
      foundation: foundationRef.current.value,
      description: descriptionRef.current.value,
    }
    await axios.patch(`http://localhost:4000/cities/${cityId}`, newCity)
  };
  const optionView = (option) => (
    <>
    <option value="" disabled selected hidden>Select a city...</option>
    <option className="OptionSelect">{option.city}</option>
    </>
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
        <select onChange={loadForm} className="EditSelect"  ref={selectedRef}>{items?.map(optionView)}</select>
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
