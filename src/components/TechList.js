import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: ['Node.js', 'ReactJS', 'React Native'],
  };
  /*metodo necessita ser arrow para ter acesso ao this / passando do input para newTechs*/
  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value });
  };

  /*metodo necessita ser arrow para ter acesso ao this / passando de newTech para Techs*/
  handleSubmit = (e) => {
    e.preventDefault(); /*deixando de atualizar o brorser ao clicar no enviar*/

    this.setState({
      /*criando um novo array e adicionando a nova tech*/
      techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    });
  };

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter((t) => t !== tech) });
  };

  /*metodo necessita ser arrow para ter acesso ao this*/
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map((tech) => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
