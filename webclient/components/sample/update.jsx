let React = require('react');
import {Button, Icon} from 'semantic-ui-react';
import $ from 'jquery';

/* Delete react componenet */
class Update extends React.Component {
   constructor() {
       super();
       this.state = {
         'update':[],
           id: ''
       }
       this.click = this.click.bind(this);
   }

   /* ajax call for Delete react componenet */
   click() {
     console.log('update clicked' + this.props.id)
     this.props.click(this.props.id);
   }


   /* Render function */
   render() {
       return (
           <div>
               <Button color = 'green' floated = 'right' onClick = {this.click.bind(this)}
                  value = {this.state.value}><Icon name = 'heart'/>update</Button>
                  {/* <Button.Group>
                         {/* <Button onClick = {this.click.bind(this)}
                           value = {this.state.value}><Icon name = 'delete'/>Delete</Button> */}
                         {/* <Button.Or /> */}
                       {/* <Button floated = 'right' positive onClick = {this.click.bind(this)}
                         value = {this.state.value}><Icon name = 'heart' floated = 'right'/>Update</Button> */}
                     {/* </Button.Group> */}
           </div>
       );
   }
}
module.exports = Update;
