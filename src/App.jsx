import './App.css';
import React, {useState} from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {
const [animals, setAnimals] = useState(animalData)

const handleSortByLife = () => {
 const orderedAnimals= [...animals].sort((a,b) => a.lifeExpectancy - b.lifeExpectancy)
 setAnimals(orderedAnimals)
}

const handleFilterDogs = () => {
  const filtered = animals.filter((elem) => elem.type === "dog")
  setAnimals(filtered)
}
  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button onClick={handleSortByLife} className = "action-btn"> Order animals</button>
      <button onClick={handleFilterDogs} className = "action-btn"> Filter Dogs</button>
      {animals.map(elem =>{
        return <Card key={elem._id} animal= {elem}/>
      })}
      
    </div>
  );
}

export default App;
