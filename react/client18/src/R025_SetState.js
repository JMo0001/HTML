import { Component } from "react";

class R025_SetState extends Component{
    constructor(props){
        super(props);
        this.state={
            StateString: 'react',
        }
    }
    StateChange = (flag) =>{
        if(flag ==='direct') this.state.StateString='리액트'
        console.log(this.state);
        if(flag ==='setstate') this.setState({StateString:'리액트'})
        console.log(this.state);
    }
    render(){
        console.log("render() 실행")
        return(
            <div>
                <button onClick={(e) => this.StateChange('direct',e)}>
                    state 직접 변경</button>
                <button onClick={(e) => this.StateChange('setstate', e)}>
                    setState로 변경</button><br/>
                [state 변경하기] StateString:{this.state.StateString}
            </div>
        )
    }
    
    
}
export default R025_SetState;