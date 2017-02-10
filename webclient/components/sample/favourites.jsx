let React = require('react');
import $ from 'jquery';
import {Card, Image, Icon, Button} from 'semantic-ui-react'
let ListItem = React.createClass({
    onUpdate(){
      let data = this.props;
      $.ajax({
        url: 'http://localhost:8080/Restaurant/find',
        type: 'GET',
        data: data,
        success: function(result) {
          console.log('xyz! ', result);
        },
        error: function(err) {
          console.log('xyz! ', err);
        }
      });
    },
    render: function() {
        let img = this.props.image;
        return (
            <Card>
                <Image src={img} alt="restaurant image" style={{
                    height: 200
                }}/>
                <Card.Content>
                    <Card.Header>{this.props.id}
                        : {this.props.name}</Card.Header>
                    <Card.Description>{this.props.address}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon className='smile'/>{this.props.rating}
                    </a>
                </Card.Content>
                <Button floated='right'>view favourites</Button>
                <Button color="green"onClick={this.onUpdate}>
                  <Icon className='Update'/>Update</Button>
                  <Button color="green"onClick={this.onDelete}>
                    <Icon className='delete'/>Delete</Button>
            </Card>

        );
    }
});
module.exports = ListItem;
