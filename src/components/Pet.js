import React from 'react'

class Pet extends React.Component {

checkGender = () => {
  if(this.props.petDetails.gender === 'male'){
    return '♂'
  } else {
    return '♀'
  }
}

handleClick(event){
// console.log(this.props.petDetails.id)
this.props.adoptPet(this.props.petDetails.id)
}

findOutifAdopted(){
  if(this.props.petDetails.isAdopted === true){
    return (
          <div>
          <button className="ui primary button">Already adopted</button>
          <button onClick={e => this.handleClick(e)} className="ui disabled button">Adopt pet</button>
          </div>
    )
  } else {
    return (
          <div>
          <button className="ui disabled button">Already adopted</button>
          <button onClick={e => this.handleClick(e)} className="ui primary button">Adopt pet</button>
          </div>
    )
  }
}


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.checkGender()}
            {this.props.petDetails.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.petDetails.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petDetails.age}</p>
            <p>Weight: {this.props.petDetails.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.findOutifAdopted()}
        </div>
      </div>
    )
  }
}

export default Pet
