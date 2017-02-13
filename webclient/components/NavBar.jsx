let React = require('react');
let {Link} = require('react-router');
let NavBar = React.createClass({

render: function() {
  return(
    <div>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/favs">Favs</Link></li>
    </div>
  );
}
});

module.exports = NavBar;
