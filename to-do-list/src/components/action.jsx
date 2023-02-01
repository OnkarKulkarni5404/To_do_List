import React, {Component} from 'react' ;

export default class Action extends Component  {
    
state = {
    count:0
};

onkar = "Onkar";

render(){
    return(
        <div>
            <span>
                {this.printCount()}
            </span>
            <button
                className = "badge badge-primary m-2"
                onClick = {this.handleIncrement} 
                >Click me
            </button>
        </div>
    );
}

printCount()
{
   const { count } = this.state;
   return count === 0 ? "Zero" : count ; 
}

handleIncrement = () =>
{
this.setState({ count: this.state.count+1 })
console.log("Increment done")

}
}
