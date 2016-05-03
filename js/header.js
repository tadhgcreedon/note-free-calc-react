require("../style/main.scss");
var React = require("react");
var ReactDOM = require("react-dom");

var Header = React.createClass({
  render: function(){
    return(
      <header style={headerStyle}>
        <h1 style={h1Style}>Note Frequency Calculator</h1>
      </header>
    );
  }
});

var headerStyle = {
  textAlign: "center",
  color: "white",
  backgroundColor: "rgb(24, 140, 156)",
  padding: "3px 0 3px 0"
};
var h1Style = {
  fontSize: "3em"
}

export default Header;
