import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  showPetCards = () => { 
    return (this.props.pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />))
  }
  render() {
    return <div className="ui cards">{this.showPetCards()}</div>;
  }
}

export default PetBrowser;