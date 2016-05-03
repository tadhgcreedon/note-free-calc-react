//-----------DEPENDENCIES----------
// Stylesheet import.
require("../style/main.scss");

// React and ReactDOM libraries import.
var React = require("react");
var ReactDOM = require("react-dom");

//-----------COMPONENT CODE----------
// Header component. Contains the page title and adds contrast to the page.
var Header = React.createClass({
  render: function(){
    return(
      <header style={headerStyle}>
        <h1 style={h1Style}>Note Frequency Calculator</h1>
      </header>
    );
  }
});

//-----------STYLES----------
// Styles for the header container tag.
var headerStyle = {
  textAlign: "center",
  color: "white",
  backgroundColor: "rgb(24, 140, 156)",
  padding: "3px 0 3px 0"
};
// Styles for the header text.
var h1Style = {
  fontSize: "3em"
};

//-----------EXPORT----------
//Makes the Header variable available to other files.
export default Header;
