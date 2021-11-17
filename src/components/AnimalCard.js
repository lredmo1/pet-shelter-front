import {useState, useEffect} from 'react'
import AnimalEdit from './AnimalEdit'

function AnimalCard({handleDeleteItem, animal, animal : {name, animal_type, breed, img_url, shelter_id, id }, setAnimals}){
  const [shelterName, setShelterName] = useState("")
  const [wasClicked, setWasClicked] = useState(false)

  useEffect(()=>{
    fetch(`http://localhost:9292/shelters/${shelter_id}`)
    .then(resp => resp.json())
    .then(setShelterName)
  },[])


  // function handleDelete() {
  //   fetch(`http://localhost:9292/${categorys}/${category}.${id}`, {
  //     method: 'DELETE',
  //   })
  //   .then(resp => resp.json())
  //   .then((item) => handleDeleteItem(item))
  // }  



  function handleClick() {
    setWasClicked(current => !current)
  }
  
  return(
        <div>
            <img src={img_url} alt={animal_type}/>
            <h4>{name}</h4>
            <p>{breed}</p>
            <p>{shelterName}</p>
            <button onClick={handleClick}>Edit</button>
            <button>Delete</button>
            {wasClicked?<AnimalEdit setAnimals={setAnimals} animal={animal} shelterName={shelterName}/>:null}
        </div>
  )
}

export default AnimalCard;