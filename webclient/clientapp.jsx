var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var NavBar = require('./components/NavBar');
var Home = require('./clientapp1.jsx');
var {Favs} = require('./components/sample/favourites.jsx');
let login = require('./components/sample/login.jsx');

var MainComp = React.createClass({
  render:function(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={login}/>
    <Route component={MainComp}>
        <Route path="/home" component={Home}/>
        <Route path="/favs" component={Favs}/>
    </Route>
  </Router>,document.getElementById('app'));
