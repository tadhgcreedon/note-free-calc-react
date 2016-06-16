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
      note: "",
      frequency: "Hz"
    };
  },
  update: function(event){
    this.setState({note: event.target.value.toUpperCase()});

    if(this.state.note !== "") {
      this.setState({frequency: "..."});
      setFrequencyColorAndMoveDot(0);
    }
    else {
	  this.setState({frequency: "Hz"});
	  setFrequencyColorAndMoveDot(0);
    }

    console.log(this.state.note);

	//E.g. input = "C"
	if(noteFreqChart[this.state.note.substring(0, 1)] !== undefined) {

		 //E.g. input = "C#"
	    if(noteFreqChart[this.state.note.substring(0, 2)] !== undefined) {
		   //E.g. input = "C#5"
		   if(noteFreqChart[this.state.note.substring(0, 2)][this.state.note.substring(2, 3)] !== undefined)
	       {
		       //E.g. input = "C#10"
		       if(noteFreqChart[this.state.note.substring(0, 2)][this.state.note.substring(2, 4)] !== undefined)
		       {
				   var freq = noteFreqChart[this.state.note.substring(0, 2)][this.state.note.substring(2, 4)];
				   setFrequencyColorAndMoveDot(freq);
				   this.setState({frequency: freq});
		       }
		       else {
				   var freq = noteFreqChart[this.state.note.substring(0, 2)][this.state.note.substring(2, 3)];
				   setFrequencyColorAndMoveDot(freq);
				   this.setState({frequency: freq});
		       }
	       }
	       else {
		       //do nothing
	       }
	    }
	    else {
			//E.g. input = "C5"
		    if(noteFreqChart[this.state.note.substring(0, 1)][this.state.note.substring(1, 2)] !== undefined)
			{
			    //E.g. input = "C10"
			    if(noteFreqChart[this.state.note.substring(0, 1)][this.state.note.substring(1, 3)] !== undefined)
			    {
					var freq = noteFreqChart[this.state.note.substring(0, 1)][this.state.note.substring(1, 3)];
					setFrequencyColorAndMoveDot(freq);
					this.setState({frequency: freq});
			    }
			    else {
				    var freq = noteFreqChart[this.state.note.substring(0, 1)][this.state.note.substring(1, 2)];
				    setFrequencyColorAndMoveDot(freq);
					this.setState({frequency: freq});
			    }
		    }
		    else {
			    //do nothing
	    	}
    	}
    }
  },
  render: function(){
    return(
	  <div>
	  	<div style={calculatorContainerStyle}>
	      <section id="calculator" style={calculatorStyle}>

	        {/*Input component - where notes get entered. */}
	        <Input inputHandler={this.update} inputValue={this.state.note} />

	        {/*Equals sign - for presentation purposes.*/}
	        <span style={equalsSignStyle}>&nbsp;=&nbsp;</span>

	        {/*Output component - where frequency values get displayed.*/}
	        <Output outputValue={this.state.frequency} />

	      </section>
		</div>
		<div style={frequencyRulerContainerStyle}>
		  <section id="ruler">
		      <FrequencyRuler />
		  </section>
		</div>
      </div>
    );
  }
});
var Input = React.createClass({
  render: function(){
    return(
      <div style={Object.assign(inputOutputStyle, inputStyle)}>
        <input id="input" placeholder="&#9833;" style={noteInputStyle} type="text" maxLength="4" value={this.props.inputValue} onChange={this.props.inputHandler} />
      </div>
    );
  }
});
var Output = React.createClass({
  render: function(){
    return(
      <div style={inputOutputStyle}>
        <p id="output" style={frequencyOutputStyle}>
        	{this.props.outputValue}
		</p>
      </div>
    );
  }
});

var FrequencyRuler = React.createClass({
	render: function(){
		return(
			<div>
				<div style={frequencyRulerStyle}>
					<div style={frequencyRulerRuleRed}></div>
					<div style={frequencyRulerRuleOrange}></div>
					<div style={frequencyRulerRuleYellow}></div>
					<div style={frequencyRulerRuleLime}></div>
					<div style={frequencyRulerRuleBlue}></div>
					<div style={frequencyRulerRulePurple}></div>
					<div style={frequencyRulerRuleMagenta}></div>
					<div style={frequencyRulerCurrentFrequencyDotStyle}></div>
					<div style={frequencyRulerLabelsContainerStyle}>
						<span>0</span>
						<span style={frequencyRulerEndLabelStyle}>20000</span>
					</div>
				</div>
			</div>
		);
	}
});

//-----------HELPER FUNCTIONS-----------
function setFrequencyColorAndMoveDot(freq) {
// 	console.log(freq/20000*100);
	if(freq > 0 && freq < 27.5) {
		frequencyOutputStyle.color = "red";
		frequencyRulerCurrentFrequencyDotStyle.backgroundColor = "red";
		frequencyRulerCurrentFrequencyDotStyle.left = (freq/20000*100) + "%";
		frequencyRulerCurrentFrequencyDotStyle.visibility = "visible";
	}
	else if(freq >= 27.5 && freq < 110) {
		frequencyOutputStyle.color = "orange";
		frequencyRulerCurrentFrequencyDotStyle.backgroundColor = "orange";
		frequencyRulerCurrentFrequencyDotStyle.left = (freq/20000*100) + "%";
		frequencyRulerCurrentFrequencyDotStyle.visibility = "visible";
	}
	else if(freq >= 110 && freq < 220) {
		frequencyOutputStyle.color = "yellow";
		frequencyRulerCurrentFrequencyDotStyle.backgroundColor = "yellow";
		frequencyRulerCurrentFrequencyDotStyle.left = (freq/20000*100) + "%";
		frequencyRulerCurrentFrequencyDotStyle.visibility = "visible";
	}
	else if(freq >= 220 && freq < 870) {
		frequencyOutputStyle.color = "lime";
		frequencyRulerCurrentFrequencyDotStyle.backgroundColor = "lime";
		frequencyRulerCurrentFrequencyDotStyle.left = (freq/20000*100) + "%";
		frequencyRulerCurrentFrequencyDotStyle.visibility = "visible";
	}
	else if(freq >= 870 && freq < 7000) {
		frequencyOutputStyle.color = "lightblue";
		frequencyRulerCurrentFrequencyDotStyle.backgroundColor = "lightblue";
		frequencyRulerCurrentFrequencyDotStyle.left = (freq/20000*100) + "%";
		frequencyRulerCurrentFrequencyDotStyle.visibility = "visible";
	}
	else if(freq >= 7000 && freq < 14000) {
		frequencyOutputStyle.color = "purple";
		frequencyRulerCurrentFrequencyDotStyle.backgroundColor = "purple";
		frequencyRulerCurrentFrequencyDotStyle.left = (freq/20000*100) + "%";
		frequencyRulerCurrentFrequencyDotStyle.visibility = "visible";
	}
	else if(freq >= 14000 && freq <= 20000) {
		frequencyOutputStyle.color = "magenta";
		frequencyRulerCurrentFrequencyDotStyle.backgroundColor = "magenta";
		frequencyRulerCurrentFrequencyDotStyle.left = (freq/20000*100) + "%";
		frequencyRulerCurrentFrequencyDotStyle.visibility = "visible";
	}
	else {
		frequencyOutputStyle.color = "darkgray";
		frequencyRulerCurrentFrequencyDotStyle.backgroundColor = "black";
		frequencyRulerCurrentFrequencyDotStyle.left = (freq/20000*100) + "%";
		frequencyRulerCurrentFrequencyDotStyle.visibility = "hidden";
	}
	return;
}

//-----------STYLES----------
// Styles for calculator container tag.
var calculatorContainerStyle = {
	width: "100%",
	height: "55%",
};
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
  display: "inline-block",
  backgroundColor: "black"
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
  textAlign: "center",
  color: "darkgray"
};

var frequencyRulerContainerStyle = {
	backgroundColor: "#222",
	height: "33%"
};

var frequencyRulerStyle = {
	clear: "both",
	position: "relative",
	top: "125px",
	height: "5px",
	paddingTop: "15px",
	marginBottom: "10px",
	borderBottom: "3px solid white",
	marginLeft: "auto",
	marginRight: "auto",
	width: "90%"
};

var frequencyRulerRuleRed = {width:"2px", height:"25px", backgroundColor:"red", position:"absolute", top:"9px", left:((27/20000*100)+"%") }
var frequencyRulerRuleOrange = {width:"2px", height:"25px", backgroundColor:"orange", position:"absolute", top:"9px", left:((104/20000*100)+"%")};
var frequencyRulerRuleYellow = {width:"2px", height:"25px", backgroundColor:"yellow", position:"absolute", top:"9px", left:((210/20000*100)+"%")};
var frequencyRulerRuleLime = {width:"2px", height:"25px", backgroundColor:"lime", position:"absolute", top:"9px", left:((830/20000*100)+"%")};
var frequencyRulerRuleBlue = {width:"2px", height:"25px", backgroundColor:"lightblue", position:"absolute", top:"9px", left:((6600/20000*100)+"%")};
var frequencyRulerRulePurple = {width:"2px", height:"25px", backgroundColor:"purple", position:"absolute", top:"9px", left:((13200/20000*100)+"%")};
var frequencyRulerRuleMagenta = {width:"2px", height:"25px", backgroundColor:"magenta", position:"absolute", top:"9px", left:((20000/20000*100)+"%")};

var frequencyRulerCurrentFrequencyDotStyle = {
	backgroundColor: "black",
	width: "18px",
	height: "18px",
	border: "3px solid white",
	borderRadius: "50%",
	position: "relative",
	top: "-5px",
	visibility: "hidden"
};

var frequencyRulerLabelsContainerStyle = {
	marginTop: "5px",
	position: "relative",
	left: "2px",
	fontSize: "16px"
};

var frequencyRulerEndLabelStyle = {
	float: "right"
};

//-----------EXPORT----------
//Makes the Calculator variable available to other files.
export default Calculator;
