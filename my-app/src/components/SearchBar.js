import React, { Component } from 'react'
import ImportedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         names: ImportedNames
      }
    }

    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        const filteredNames = ImportedNames.filter(name => {
        return name.toLowerCase().includes(inputText)
       })
       this.setState({
        names: filteredNames
       })
    }
  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>These are the matching names found: {this.state.names.length}</p>
        <form>
            <input onChange={(event) => this.handleChange(event)} type='text' placeholder='Search Names'/>
        </form>
        <div>We will render names here

        {
            <div>

                {this.state.names.map( name =>{
                    return <p key={name}>{name}</p>
                })}
            </div>
}
        </div>
        
      </div>
    )
  }
}

export default SearchBar