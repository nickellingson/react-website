import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import {useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  //   const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  //   const [breed, setBreed] = useState("");
  //   const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  //   useEffect(() => {
  //     requestPets();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   async function requestPets() {
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //     );
  //     const json = await res.json();
  //     setPets(json.pets);
  //   }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //   requestPets();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            name="location"
            // onChange={(e) => setLocation(e.target.value)}
            id="location"
            // value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              //   setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            disabled={breeds.length === 0}
            // value={breed}
            // onChange={(e) => {
            //   setBreed(e.target.value);
            // }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
