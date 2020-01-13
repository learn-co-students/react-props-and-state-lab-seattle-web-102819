import React from 'react'

class Filters extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      type : 'all'
    }
  }


handleFindButtonClick(event){
  console.log(event.target.value)
  this.props.findPetsHandler(this.state.type)
}

handleChange(event){
  this.setState({
    type: event.target.value
  })
}

componentDidUpdate(){
  console.log(this.state)
}




  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={event => this.handleChange(event)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={event => this.handleFindButtonClick(event)} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
