import React, { Component } from 'react';
import './RefSample.css';

class RefClassSample extends Component {
    input = React.createRef();
    state = {
        password: '',
        cliked: false,
        validated: false,
    }
    handleChage = (e) => {
        this.setState({
            password: this.input.current.value
        })
    }
    handleButtonclick = () => {
        this.setState({
            cliked: true,
            validated: this.state.password ==='0000'
        })
        // 돔요소는 ref.current 
        this.input.current.focus();
    }
    render() {
        return (
            <div>
                {/* 선택하려는 DOM요소의 ref속성으로 지정 */}
                <input type="password" value={this.state.password} ref={this.input}
                onChange={this.handleChage} className={this.state.cliked ? (this.state.validated ? 'success' : 'failure') : ''} />
                <button onClick={this.handleButtonclick}>확인</button>
            </div>
            );
    }
}

export default RefClassSample;