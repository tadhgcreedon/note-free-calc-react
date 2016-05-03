//-----------DEPENDENCIES----------
// Stylesheet import.
require("../style/main.scss");

// React and ReactDOM libraries import.
var React = require("react");
var ReactDOM = require("react-dom");

// Imports note frequency values that are stored in a JSON file.
var noteFreqChart = require("./note_frequency_chart.json");

//-----------COMPONENT CODE----------
/*Calculator component. Contains Input and Output components as well as functions/values for updating Output
  when Input changes.*/
var Calculator = React.createClass({
  getInitialState: function(){
    return {
      frequency: ""
    };
  },
  update: function(event){
    this.setState({frequency: event.target.value});
  },
  render: function(){
    return(
      <section style={calculatorStyle}>

        {/*Input component - where notes get entered. */}
        <Input inputHandler={this.update}/>

        {/*Equals sign - for presentation purposes.*/}
        <span style={equalsSignStyle}>&nbsp;=&nbsp;</span>

        {/*Output component - where frequency values get displayed.*/}
        <Output outputValue={this.state.frequency} />
      </section>
    );
  }
});
var Input = React.createClass({
  render: function(){
    return(
      <div style={Object.assign(inputOutputStyle, inputStyle)}>
        <input id="input" style={noteInputStyle} type="text" maxLength="4" onChange={this.props.inputHandler} />
      </div>
    );
  }
});
var Output = React.createClass({
  render:function(){
    return(
      <div style={inputOutputStyle}>
        <p id="output" style={frequencyOutputStyle}>{this.props.outputValue}</p>
      </div>
    );
  }
});

//-----------STYLES----------
// Styles for calculator container tag.
var calculatorStyle = {
  position: "relative",
  top: "100px",
  width: "646px",
  marginLeft: "auto",
  marginRight: "auto"
};
// Styles for Input and Output component container divs.
var inputOutputStyle = {
  height: "300px",
  width: "300px",
  backgroundColor: "white",
  display: "inline-block"
};
// Style for Input container div.
var inputStyle = {
  float: "left"
};
// Style for note value text input.
var noteInputStyle = {
  WebkitAppearance: "none",
  border:"none",
  height: "100%",
  width: "100%",
  fontSize: "10em",
  textAlign: "center"
};
// Style for equals sign.
var equalsSignStyle = {
  color: "white",
  fontSize: "4em",
  float: "left",
  position: "relative",
  top: "115px"
};
// Style for frequency value output paragraph tag.
var frequencyOutputStyle = {
  fontSize: "10em",
  textAlign: "center"
};

//-----------EXPORT----------
//Makes the Calculator variable available to other files.
export default Calculator;
