import React, { Component } from 'react';
import NewComent from './NewComent'
import Coments from './Coments'
import { database } from './firebase';
class App extends Component {

  state = {
    isload: false,
    comments: []
  }

  enviar = (comment) => {
   const id = database.ref().child('comments').push().key;
   const comments = {}
   comments['comments/'+id] = {
    comment
   }
   database.ref().update(comments)
   
  }
  componentDidMount() {
    this.setState({ isload: true })
    let comm = database.ref('comments')
    comm.on('value', s => {
      this.setState({ comments: s.val(), isload: false })
    })
  
  }

  render() {
    return (
      <div >
        <NewComent enviar={this.enviar} />
        <Coments comments={this.state.comments} />
        {
          this.state.isload && <p>carregando...... </p>
        }
      </div>
    );
  }
}

export default App;
