import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
    this.findPets()
  }

  changeType = type => {
    this.setState(() => {
      return {
        filters: {
          type: type
        }
      };
    });
  };

  findPets = () => {
    const { type } = this.state.filters;
    fetch(`/api/pets` + (type === "all" ? "" : `?type=${type}`))
      .then(resp => resp.json())
      .then(json => this.setState(prevState => {
        return {
          pets: json
        }
      }));
  };

  adoptPet = (id) => {
    console.log(`Adopt Pet fires in App.js, pet id: ${id}`)
    this.setState(prevState => {
      const newPets = prevState.pets.map(pet => {
        if (pet.id === id) {
          pet.isAdopted = true
          return pet
        } 
      return pet
      })
      return {
        pets: newPets
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
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.findPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
