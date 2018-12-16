import React, { Component } from 'react';


class NewComent extends Component {
    
    state = {
        newComent: '' 
    }
    handleComent = e => {
        this.setState({
          newComent: e.target.value
        })
      }
    enviar = () => {
        this.props.enviar(this.state.newComent)
        this.setState({
            newComent: ''
          })
    }  

    render() {
        return (
            <div>
                <textarea value={this.state.newComent} onChange={this.handleComent}></textarea>
                <button onClick={this.enviar}>enviar</button>
            </div>
        );
    }
}

export default NewComent;