import React,{Component} from 'react';

export default  class Clock extends Component {
    constructor () {
        super();
        this.state = {
            date: new Date()
        }
    }
    componentWillMount () {
        this.timer = setInterval(() => {
            this.setState({date: new Date()});
        },1000);
    }

    render() {
        return (
            <div>
                <p>现在的时间是</p>
                {
                    /*<h1>{this.state.date.toLocaleTimeString()}</h1>*/
                    this.state.date.getHours() + ":" + this.state.date.getMinutes() + ":" + this.state.date.getSeconds()
                }
            </div>
        );
    }

    componentWillUnmount (){
        clearInterval(this.timer);
    }
}