import { Component } from "react";

class R023_PropsNode extends Component{
    render(){
        return(
            <div style={{color:"red"}} >
                {this.props.children}
            </div>
        )
    }
}
export default R023_PropsNode;