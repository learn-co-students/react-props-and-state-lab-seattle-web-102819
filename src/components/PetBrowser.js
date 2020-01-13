import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  
  displayPets = () => {
    return this.props.petsToDisplay.map((item, index) => {
      return <Pet adoptPet={this.props.adoptPet} key={index} petDetails={item}> </Pet>
    })
  }
  
  
  
  
  
  
  render() {
  return <div className="ui cards">{this.displayPets()}</div>
  }
}

export default PetBrowser
