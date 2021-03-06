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

    del(id) {
      let data=this.state.favsData;
      let arr=[];
      for(var obj of data) {
        if(obj._id != id) {
          arr.push(obj);
        }
      }
      this.setState({favsData:arr});
    }

    render() {
      let click = this.click.bind(this);
      let u=this.handlechange.bind(this);
      let delete1=this.del.bind(this);
      let favCards = this.state.favsData.map(function(card){
        return (
          <Card>
              <Image src={card.image} alt="restaurant image" style={{height: 200}}/>
              <Card.Content>
                  <Card.Header>{card.id}
                      : {card.name}</Card.Header>
                  <Card.Description>{card.address}  --</Card.Description>
              </Card.Content>

              {/* <Input type="text" name="comment" onChange={u}/> */}
              <Card.Content extra>
                  <a>
                      <Icon className='star' color="yellow"/>{card.rating} {card.comment}<br/><br/><br/>

                    </a>
                      <Card.Content extra>
                          Update Comments:<Input type="textarea" color="blue"
                            name="comment" onChange={u}/><br/><br/><br/>
                      {/* <Button color="grey" floated="left" onClick={u}>
                          <Icon className='add'/>Update</Button> */}
                         <Delete id={card.id} delete={delete1}/>
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
