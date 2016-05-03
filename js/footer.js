//-----------DEPENDENCIES----------
// Stylesheet import.
require("../style/main.scss");

// React and ReactDOM libraries import.
var React = require("react");
var ReactDOM = require("react-dom");

//-----------COMPONENT CODE----------
// Footer component. Contains links to my portfolio and the application source code.
var Footer = React.createClass({
  render: function(){
    return(
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <a style={footerLinkStyle} href="http://tadhgcreedon.github.io">Tadhg Creedon</a> -
          <a style={footerLinkStyle} href="https://github.com/tadhgcreedon/note-free-calc-react">Source</a> - 2016
        </div>
      </footer>
    );
  }
});

//-----------STYLES----------
// Styles for the footer container tag.
var footerStyle = {
  backgroundColor: "black",
  position: "absolute",
  bottom: "0px",
  width: "100%",
  fontSize: "1.5em",
  padding: "5px 0 5px 0",
  color: "white"
};
// Style for the footer content container div.
var footerContentStyle = {
  marginLeft: "5px"
};
// Style for the footer links.
var footerLinkStyle = {
  color: "white"
};

//-----------EXPORT----------
//Makes the Footer variable available to other files.
export default Footer;
