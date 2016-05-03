//-----------DEPENDENCIES----------
// Stylesheet import.
require("../style/main.scss");

// React and ReactDOM libraries import.
var React = require("react");
var ReactDOM = require("react-dom");

// Import Header, Calculator and Footer components from JS files separated for neatness.
import Header from "./header";
import Calculator from "./calculator";
import Footer from "./footer";

//-----------APPLICATION CODE----------
// App component. Combines Header, Calculator and Footer components.
var App = React.createClass({
  render: function(){
    return(
      <div>
        {/*Page header. Contains page title and adds contrast to the page.*/}
        <Header />

        {/*Calculator component. Contains the main content and application logic.*/}
        <Calculator />

        {/*Page footer. Contains links to my portfolio and the source code for this project. */}
        <Footer />
      </div>
    );
  }
});

//-----------RENDER----------
// Render App variable to page through an application container div in the document body.
ReactDOM.render(
  <App />,
  document.getElementById('appContainer')
);
