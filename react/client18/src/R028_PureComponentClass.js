import { PureComponent } from "react";

class R028_PureComponentClass extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            StateString:'react',
            StateArrayObj: ['react', {react:'200'}]
        }        
    }
    buttonClick = (type) =>{
        if(type === 'String'){
            this.setState({StateString:'reactaaa'});
        }else{
            this.setState( {StateArrayObj:['react', {react:'20000'}] });
        }
    }
    render(){
        console.log('render() 실행')
        return(
            <div>
                <button onClick={e => this.buttonClick('String')}>문자열 변경{this.state.StateString}</button>
                <button onClick={e => this.buttonClick('ArrayObject')}>객체 배열 변경{this.state.StateArrayObj[1].react}</button>
            </div>
        )
    }
}
export default R028_PureComponentClass;