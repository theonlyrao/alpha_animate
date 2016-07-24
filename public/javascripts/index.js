import React from 'react';
import ReactDOM from 'react-dom';

const Letter = React.createClass({
    render() {
	return (
	    <div id="a-capital">
	    <div id="a-capital-one">
	    </div>
	    <div id="a-capital-two">
	    </div>
	    <div id="a-capital-three">
	    </div>
	    <div id="a-capital-four">
	    </div>
	    <div id="a-capital-five">
	    </div>
	    <div id="a-capital-six">
	    </div>
	    <div id="a-capital-seven">
	    </div>
	    <div id="a-capital-eight">
	    </div>
	    <div id="a-capital-nine">
	    </div>
	    <div id="a-capital-ten">
	    </div>
	    </div>
	)
    }
})

const ButtonChoices = React.createClass({
    showCapitalA() {
	console.log("in show")
	return <Letter />
    },
    
    render() {
	return (
	    <div id="buttons">
	    <div id="button-group">
	    <div id="capital-button" onClick={this.showCapitalA}>A</div>
	    <div id="lowercase-button">a</div>
	    </div>
	    </div>
	)
    }
})

ReactDOM.render(
    <div id="a">
    <ButtonChoices />
    </div>,
    document.querySelector('#container')
);
