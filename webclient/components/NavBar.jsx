let React = require('react');
let {Link} = require('react-router');
import {Input, Menu, Segment, Button} from 'semantic-ui-react'
import $ from 'jquery';
class NavBar extends React.Component{
logoutCall() {
  $.ajax({
    url:"http://localhost:8080/users/logout",
    type: 'GET',
    // datatype: 'JSON',
    // data:{username :this.state.username,password:this.state.password},
    success: function(res)
    {
      if (typeof res.redirect == 'string'){
        window.location.replace(window.location.protocol + "//" + window.location.host + res.redirect);
        console.log(res.responseText);
    }
      // browserHistory.push('/');
    },
    error: function(err)
    {
      alert("error occurred while logging out",err);
      console.log(err.responseText);
    }
  });
}
render(){
  return(
    // <div>
    //   <li><Link to="/home">Home</Link></li>
    //   <li><Link to="/favs">Favs</Link></li>
    // </div>
    <Menu pointing>
                   <Link to='/home'>
                       <Menu.Item name='home'/>
                   </Link>
                   <Link to='/favs'>
                       <Menu.Item name='favs'/>
                   </Link>
                   <Menu.Menu position='right'>
                        <Link to='/'>
                           <Button size='large' onClick={this.logoutCall.bind(this)} color='green'>signup</Button>
                        </Link> 
                   </Menu.Menu>
               </Menu>
  );
}
}

module.exports = NavBar;
