import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    this.findPets()
  }

  findPets = () => {
      fetch('/api/pets')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({pets: myJson});
    });
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  changePets = (selection) => {
    if (selection === 'all'){
      this.findPets()
    } else {
      fetch(`/api/pets?type=${selection}`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          pets: myJson,
          filters : {
            type: selection
          }
        });
      });
    }
  }

  adoptPet = (petId) => {
    this.setState(prevState => {
     let adoptedPetsArray = prevState.pets.map(item => {
       if(item.id===petId){
         item.isAdopted = !item.isAdopted
         return item
       } else {
         return item
       }
     })
     return {
      pets: adoptedPetsArray,
      filters: {
        type: prevState.filters.type
      }
    }
    })
  }





  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters findPetsHandler={this.changePets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptPet={this.adoptPet} petsToDisplay={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
