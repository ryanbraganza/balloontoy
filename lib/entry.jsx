var React = require('react');
var ReactDOM = require('react-dom');

var BalloonToy = React.createClass({
  render: function() {
    return (
      <div>
        Balloon Toy
      </div>
    );
  }
});

ReactDOM.render(<BalloonToy />, document.querySelector('#react'));
