import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Maracana/RJ",
		data: "09/07/2016",
		horario: "19:00hrs",
	},
	casa: {
		nome: "Vasco",
	},
	visitante: {
		nome: "Flamengo",
	},
};

export default class App extends React.Component {
    render(){
        return <PlacarContainer {...dados} />;
    }
}