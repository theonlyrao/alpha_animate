import React from 'react';
import ReactDOM from 'react-dom';

const ButtonChoices = React.createClass({
    render() {
	return (
	    <div id="buttons">
	    <div id="button-group">
	    <div id="capital-button">A</div>
	    <div id="lowercase-button">a</div>
	    </div>
	    </div>
	)
    }
})

const Letter = React.createClass({
    render() {
	return (
	    <div>
	    <h1>React Capital A</h1>
	    </div>
	)
    }
})

const Alphabet = React.createClass({
    render() {
	return (
	    <div id="a">
	    <ButtonChoices />
	    <Letter />
	    </div>
	);
    },
});

ReactDOM.render(<Alphabet />, document.querySelector('#container'));
