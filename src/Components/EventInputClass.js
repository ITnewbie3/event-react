import React, { Component } from 'react';

class EventInputClass extends Component {
    state = {
        message : '',
        username : '',
    }
    handleChage = (e) => {
        this.setState({
            [e.target.name]: e.target.value // 인풋이 여러개일때 target.name으로 접근가능
        })
    }
    handleClick = () => {
        console.log(`메세지는 ${this.state.message}이고 유저 네임은 ${this.state.username} 입니다.`);
        this.setState({
            message: '',
            username : '',
        })
    }
    // 키를 누르면 실행되는 함수
    handleKeyPress = (e) => {
        console.log(e);
        if(e.key === "Enter"){
            this.handleClick();
        }
    }
    render() {
       return (
            <div>
             <h1>이벤트 연습</h1>
             <input type="text" name="message" onChange={this.handleChage} value={this.state.message} onKeyPress={this.handleKeyPress}/>
             <input type="text" name="username" onChange={this.handleChage} value={this.state.username} onKeyPress={this.handleKeyPress}/>
             <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventInputClass;