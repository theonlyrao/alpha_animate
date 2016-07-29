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
});

var CapitalAButton = React.createClass({
    getInitialState: function(){
	return { showCapitalA: false  };
    },

    componentDidUpdate: function(prevProps, prevState){
	prevState.showCapitalA? ReactDOM.unmountComponentAtNode(document.querySelector("#letter")) : ReactDOM.render(<Letter />, document.querySelector('#letter'));
    },

    toggleCapitalA: function(){
	this.state.showCapitalA? this.setState({showCapitalA: false}) : this.setState({showCapitalA: true})
    },
    
    
    render: function() {
	return (
	    <div id="capital-button" onClick={this.toggleCapitalA}>
	    A
	    </div>
	)
    }

});

var ButtonChoices = React.createClass({
    render: function() {
	return (
	    <CapitalAButton />
	)
    }
});


ReactDOM.render(
    <div id="a">
    <ButtonChoices />
    </div>,
    document.querySelector('#button-group')
);
