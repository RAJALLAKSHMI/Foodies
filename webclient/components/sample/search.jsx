import React from 'react';
import ReactDOM from 'react-dom';
// import Child from './components/sample';
 import Fav from './favourites.jsx';
import {Button} from 'semantic-ui-react'

class search extends React.Component {
    constructor() {
        super();
        this.state = {
            "id": "",
            "cuisine": ""
        }
        this.Clickfn = this.Clickfn.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    Clickfn(id, cuisine)
    {
        this.props.change(id, cuisine);
    }
    onChange(name)
    {
        this.setState({
            [name.target.name]: name.target.value
        });
    }
    render() {
        return (
            <div>
                <form>
                    Enter cityid:<input type="text" name="cityid"
                      placeholder="enter cityid" onChange={this.onChange}/><br/><br/>
                  Enter cuisine: <input type="text" name="cuisine"
                      placeholder="enter cuisine" onChange={this.onChange}/><br/><br/>
                </form>
                <button type="button" onClick={this.Clickfn
                  .bind(this, this.state.id, this.state.cuisine)}>search</button><br/><br/><br/>
                 {/* <Button floated='right' onClick={this.view}>view favourites</Button> */}
                {/* <Fav/> */}
            </div>
        )

    }
}
export default search;
