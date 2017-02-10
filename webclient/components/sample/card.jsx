let React = require('react');
let ListItem = require('./list.jsx');
import { Card } from 'semantic-ui-react'
let List = React.createClass({
  render : function(){
    let jsonarray = this.props.data;
    if(jsonarray.length>0)
    {
    let ListItems = jsonarray.map(function(item) {
      return <ListItem key={arguments[1]}
        id={item.restaurant.R.res_id}
        name={item.restaurant.name}
        address = {item.restaurant.location.address}
        image = {item.restaurant.featured_image}
        rating = {item.restaurant.user_rating.aggregate_rating}/>;
      });
      return (<Card.Group style={{margin : 10}}> {ListItems}</Card.Group>);
    }
    else {
      return (<h1>Select some id and cuisine</h1>);
    }
  }
});
module.exports = List;
