import React, { Component } from 'react';
import './App.css';
import ReactAudioPlayer from 'react-audio-player';


class App extends Component {
  state = {
    dracukeo: false
  };

  render() {
    return (
      <div className="center">
        {
        this.state.dracukeo ? <div><img src="/keo.jpg" alt="Kidd Keo"/><ReactAudioPlayer src="/dracukeo.mp3" autoPlay onEnded={() => {this.setState({dracukeo: false})}}/></div> :         <p onClick={() => {this.setState({dracukeo: true})}}>Dracukeo</p>

        }
        
      </div>
    );
  }
}

export default App;
