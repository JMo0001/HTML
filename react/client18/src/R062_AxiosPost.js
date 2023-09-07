import axios from "axios";
import { Component } from "react";

class R062_AxiosPost extends Component{
    componentDidMount(){
        axios.post('http://date.jsontest.com/', {
            a:"react", b:200
        }).then(Response=>{alert(Response.data.date)})
    }

    render(){
        return(
            <h1>Axios post</h1>
        )
    }
}
export default R062_AxiosPost;