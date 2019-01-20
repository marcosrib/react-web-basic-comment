import React, { Component } from 'react'

class CadastraUsuario extends Component {
    state = {
        usuario: '',
        senha: ''
    }

    createAcount = () => {
        const { usuario, senha } = this.state
        const dados = {
            usuario,
            senha
        }
        this.props.createAcount(dados)

    }
    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })

    }

    changeScreen = (screen) => {
        this.setState({ changeScreen: screen })
    }
    render() {
        return (
            <div>
                <h1>Cadastra Usuario</h1>

                <form className="form-inline">
                    <input className="form-control mr-3"  placeholder="Digite o usuario" type="text" onChange={this.handleChange('usuario')} />

                    <input className="form-control mr-3"  placeholder="Digite a senha" type="text" onChange={this.handleChange('senha')} />

                    <div>
                        <button  className="btn btn-primary" type="button" value="Criar conta" onClick={this.createAcount} >
                        Criar conta</button>
                    </div>
                    <button   className="btn" onClick={() => this.props.changeScreen('login')}>Entrar</button>
                </form>
            </div>

        );
    }


}
export default CadastraUsuario