import React from 'react';
import $ from 'jquery';
import {Input, Card, Image, Icon, Button} from 'semantic-ui-react';
import Delete from './delete.jsx'
import Update from './update.jsx'
export class Favs extends React.Component {
  constructor() {
  super();
    this.handlechange= this.handlechange.bind(this);
    this.state = {
      favsData: [] ,comment: ' '

      // this.state = { value : ''};
    }
  }
  handlechange(event)
  {
    this.setState({
        comment: event.target.value
    });
  }

  click(id) {
    console.log('inside click fav')
    let comment = this.state.comment;
      $.ajax({
          url: 'http://localhost:8080/restaurant/update',
          type: 'PUT',
          data: {
              id: id,
              comment:comment
          },
          success: function(data) {
            this.setState({'update':data})
            console.log(comment);
            console.log('UPDATED'+id);
          //  console.log('UPDATED');
          }.bind(this),
          error: function(err) {
              console.error(err.toString());
          }.bind(this)
      });
  }

  componentDidMount() {
        console.log('mounting done!');
        $.ajax({
            url: 'http://localhost:8080/Restaurant/find',
            type: 'GET',
            success: function(data) {
                console.log('xyz! ', data);
                this.setState({favsData: data});
            }.bind(this),
            error: function(err) {
                console.log('xyz! ', err);
            }.bind(this)
        });
    }

    render() {
      let click = this.click.bind(this);
      let u=this.handlechange.bind(this);
      let favCards = this.state.favsData.map(function(card){
        return (
          <Card>
              <Image src={card.image} alt="restaurant image" style={{height: 200}}/>
              <Card.Content>
                  <Card.Header>{card.id}
                      : {card.name}</Card.Header>
                  <Card.Description>{card.address}  --</Card.Description>
              </Card.Content>

              <Input type="text" name="comment" onChange={u}/>
              <Card.Content extra>
                  <a>
                      <Icon className='smile'/>{card.rating} {card.comment}

                    </a>
                      <Card.Content extra>
                      {/* <Button color="grey" floated="left" onClick={u}>
                          <Icon className='add'/>Update</Button> */}
                         <Delete id={card.id}/>
                          <Update id={card.id} comment={card.comment} click={click}/>
                  </Card.Content>
              </Card.Content>
          </Card>
        );
      });

        return (
              <div className="ui four cards">
                {favCards}
              </div>
        );
    }
}
