"use strict";

import React from 'react';
import './style.css';

export default class Contador extends React.Component{
    constructor(){
        super();
        this.state = {
            Contador: 0
        }
    }

    Adicionar(){
        this.setState({
            Contador: this.state.Contador + 1
        });
    }

    Remover(){
        this.setState({
            Contador: this.state.Contador - 1
        });
    }

    render(){
        return(
            <article>
                <h1>Numero de clicks: <strong>{this.state.Contador}</strong></h1>
                <br/>
                <button className="botao" onClick = {this.Adicionar.bind(this)} >Adicionar</button>
                <br/>
                <button className="botao" onClick = {this.Remover.bind(this)}>Remover</button>
            </article>
        );
    }
}