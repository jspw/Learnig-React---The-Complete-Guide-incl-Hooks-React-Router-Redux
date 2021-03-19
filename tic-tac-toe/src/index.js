import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class Suqare extends React.Component {
    render() {
        return (
            <button className="square" onClick={function () { 
                console.log("Clicked");
                alert("Clicked"); }} >
                {this.props.value}
            </button>
        );
    }
}


class Borad extends React.Component {
    renderSquare(i) {
        return <Suqare value={i} />;
    }


    render() {
        const status = "Next Player X";
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    render() {
        return
    }
}



ReactDom.render(
    <Borad />,
    document.getElementById('root'),

);