import { Component } from "react";
import {Alert, UncontrolledAlert} from 'reactstrap';

class R034_ReactstrapAlerts extends Component{
    render(){
        return(
            <div>
                <Alert color="light">
                    simple Alert [color:light]
                </Alert>
                <UncontrolledAlert color="warning">
                    Uncoltrolled Alerts [color:warning]
                </UncontrolledAlert>
            </div>
        )
    }
}
export default R034_ReactstrapAlerts;