import React, { Component } from 'react'

class Login extends Component {
    state = {
        usuario: '',
        senha: ''
    }

    handleSubmit = () => {
        const { usuario, senha } = this.state
        const dados = {
            usuario,
            senha
        }
        this.props.handleSubmit(dados)

    }
    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form className="form-inline">
                <input className="form-control mr-3" placeholder="Digite o usuario" type="text" onChange={this.handleChange('usuario')} />

                <input className="form-control mr-3" placeholder="Digite a senha" type="password" onChange={this.handleChange('senha')} />
                <div>
                    <button className="btn btn-primary" type="button" onClick={this.handleSubmit} > Entrar </button>
                </div>
                <button  className="btn" type="button" onClick={() => this.props.changeScreen('singUp')}>Cadastra</button>
                </form>
            </div>

        );
    }


}
export default Login