import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
    ]
  };
/*metodo necessita ser arrow para ter acesso ao this*/ 
  handleInputChange = e => {
    this.setState({ newTech: e.target.value }); 
  }
/*metodo necessita ser arrow para ter acesso ao this*/
  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({ 
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  }
/*metodo necessita ser arrow para ter acesso ao this*/
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>  
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}  
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} 
        />
        <button type='submit'>Enviar</button>
      </form>
    )
  }
}

export default TechList;