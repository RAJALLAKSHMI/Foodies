let React = require('react');
import {Button, Icon} from 'semantic-ui-react';
import $ from 'jquery';

/* Delete react componenet */
class Delete extends React.Component {
   constructor() {
       super();
       this.state = {
           id: ''
       }
       this.click = this.click.bind(this);
   }

   /* ajax call for Delete react componenet */
   click() {
     var id=this.props.id;
       $.ajax({
           url: 'http://localhost:8080/restaurant/delete',
           type: 'DELETE',
           data: {
               id: this.props.id
           },
           success: function(data) {
               console.log('deleted');
               this.props.delete(id);
           }.bind(this),
           error: function(err) {
               console.error(err.toString());
           }.bind(this)
       });
   }


   delete(id) {
     this.props.delete(id);
   }

   /* Render function */
   render() {
       return (
           <div>
               <Button color = 'red' floated = 'left' onClick = {this.click.bind(this)}
                  value = {this.state.value}><Icon name = 'delete'/>delete</Button>

                  {/* <Button.Group>
                         <Button onClick = {this.click.bind(this)}
                           value = {this.state.value}><Icon name = 'delete'/>Delete</Button>
                         <Button.Or />
                       {/* <Button positive>Update</Button> */}
                     {/* </Button.Group> */}
           </div>

       );
   }
}
module.exports = Delete;
