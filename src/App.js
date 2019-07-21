import React, { Component } from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';


class App extends Component {
  state = {
    dracukeo: false,
    dracukeos: parseInt(localStorage.getItem("dracukeos")) || 0

  };

  addDracukeos = () => {
    localStorage.setItem("dracukeos", this.state.dracukeos + 1)
    this.setState({
      dracukeos: this.state.dracukeos + 1
    })
  }
  

  render() {
    return (
      <div className="center">
        {
        this.state.dracukeo ? <div><img src="/keo.jpg" alt="Kidd Keo"/><ReactAudioPlayer src="/dracukeo.mp3" autoPlay onEnded={() => {this.setState({dracukeo: false}); this.addDracukeos()}}/></div> :         <p onClick={() => {this.setState({dracukeo: true})}}>Dracukeo</p>

        }
        <br/>
        Tienes {this.state.dracukeos} dracukeos.
        
      </div>
    );
  }
}

export default App;
