import React, { Component } from 'react';

class Gugudan extends Component {
    constructor(props){
        super(props)
        this.state = {
            first: Math.ceil(Math.random()*9),
            second: Math.ceil(Math.random()*9),
            value: '',
            result: '',
            result_value: ''
            //바꿀 수 있는 값들을 state로 만들어 관리
        }
    }
    onChange = (e)=>{
        this.setState({value:e.target.value})
    }
    onSubmit = (e)=>{
        e.preventDefault()
        if(parseInt(this.state.value) === this.state.first*this.state.second){
            this.setState({
                result: '정답',
                first: Math.ceil(Math.random()*9), //ceil: 소수점 올림, round: 소수점 반올림, floor: 소수점 삭제
                second: Math.ceil(Math.random()*9),
                value: '',
                result_value: '('+this.state.value+')'
            })
        }else{
            this.setState({
                result: '오답',
                value: '',
                result_value:''
            })
        // console.log(typeof())
        }
    }
    render() {
        return (
            <div style={{padding: 20}}>
                <h1>Gugudan Game</h1>
                <h3>{this.state.first}곱하기 {this.state.second}은?</h3>
                <form onSubmit={this.onSubmit}>
                    <input type='number' value={this.state.value} onChange={this.onChange}></input>
                    <button>입력</button>
                </form>
                <h2>결과: {this.state.result}{this.state.result_value}</h2>
            </div>
        );
    }
}

export default Gugudan;