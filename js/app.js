require("../style/main.scss");
var React = require("react");
var ReactDOM = require("react-dom");
var noteFreqChart = require("./note_frequency_chart.json");
import Header from "./header";

var App = React.createClass({
  render: function(){
    return(
      <div>
        <Header />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.body
);
