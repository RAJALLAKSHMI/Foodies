import React from 'react';
import ReactDOM from 'react-dom';
// import Child from './components/sample';
import fav from './favourites.jsx';

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
                <button type="button">view list</button>
                {/* <fav/> */}
            </div>
        )

    }
}
export default search;
