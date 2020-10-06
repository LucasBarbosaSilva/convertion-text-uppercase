import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

const Input = (props) => (
  <input
    onChange={props.onChange}
    placeholder="Digite seu texto aqui..."
  />
)

const OutputUpper = (props) => (
  <div>
      <h1>{props.value}</h1>
  </div>
)

class Main extends React.Component {
  constructor (props){
      super(props);
      
      this.state = {
          texto: 'Seu texto vai aparecer aqui'
      }
  }
  onChangeUpper(event){
      this.setState({
        texto: event.target.value
      })
  }

  render(){
      return(
          <div className="text-center">
              <Input 
                onChange={(e) => this.onChangeUpper(e)} 
                value={this.state.texto}
                placeholder="Digite seu texto aqui"
              />
              <OutputUpper 
                value={this.state.texto}
              />
          </div>
      );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);
