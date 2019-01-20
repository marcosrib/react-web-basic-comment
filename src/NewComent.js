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
                <form className="form-group">
                    <div className="col-sm-10">
                        <textarea className="form-control mt-3"  value={this.state.newComent} onChange={this.handleComent}></textarea>
                    </div>
                    <button className="btn btn-primary mt-3" onClick={this.enviar}>enviar</button>
                </form>
            </div>
        );
    }
}

export default NewComent;