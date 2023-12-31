import { Component } from "react";
import { Button, Fade } from "reactstrap";

class R043_ReactstrapFade extends Component{
    constructor(props){
        super(props);
        this.state={fadeInOut:false}
    }
    toggle=(e) => {
        this.setState({fadeInOut:!this.state.fadeInOut})
    }
    render(){
        return(
            <div>
                <button color="success" onClick={this.toggle}>
                    Fade In/Out
                </button>
                <Fade in={this.state.fadeInOut} tag={'h1'}>
                    aaakakkakakakakakakakakaaaa
                </Fade>
            </div>
        )
    }
}
export default R043_ReactstrapFade;