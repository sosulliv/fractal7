
import React, { Component } from 'react';
import HomePage from './HomePage';
import API from "../utils/API";
//import uuid from 'uuid';
/*
class selectFractal extends Component {
  constructor(){
    super();
    this.state = {
        patterns:{}
    }
  }

  static defaultProps = {
    patterns: ['Circle', 'Cantor', 'Julia', 'Mandelbrot','Triangle']
  }

  handleSubmit(e){
    let res = this.menu.value;

      console.log(res);
      
    
    e.preventDefault();
  }

  render() {
    let patternsOptions = this.props.patterns.map(patterns => {
      return <option key={patterns} value={patterns}>{patterns}</option>
    });
    return (
      <div>
        <h3>Choose a Fractal</h3>
        <form onSubmit={this.handleSubmit.bind(this)} id = "dropdown" ref = {(input)=> this.menu = input} >
            <label>Fractal</label><br />
            <select ref="patterns" >
              {patternsOptions}
            </select>
          <br />
          <input type="submit" value="Submit"  />
          <br />
        </form>
      </div>
    );
  }
}



  
//selectFractal.propTypes = {
  //patterns: React.PropTypes.array,
//}

export default selectFractal;

*/
class selectFractal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:   'circle'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProps = {
    patterns: ['circle', 'cantor', 'julia', 'mandelbrot','triangle']
  }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
    API.saveHistory({
      fractal:  event.target.value,
      date: new Date(Date.now())
      
    })  .then(res => console.log(res))  
      .catch(err => console.log(err));
   
  }

  handleSubmit=(event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    API.saveHistory({
      fractal: this.state.value,
      date: new Date(Date.now())
      
    })  .then(res => alert(res))  
      .catch(err => console.log(err));
  }

    

 

   
  render() {
    let patternsOptions = this.props.patterns.map(patterns => {
      return <option key={patterns} value={patterns}>{patterns}</option>
    });
    return (
      <div>
      <div>
      <form onSubmit={this.handleSubmit}>
         <label>Fractal</label><br/>
          <select ref="patterns" value={this.state.value}    onChange={this.handleChange} >
              {patternsOptions}
            </select> <br/>
      </form>
      </div>
      
      <div>
      <HomePage value={this.state.value}/>
      </div>
      </div>


    );
  }
}
export default selectFractal;