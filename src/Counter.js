import React, {Component} from 'react';

class Counter extends Component {
    // constructor(props) {
    //     super(props);

    //     //state의 초깃값 설정
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }
    state = {
        number: 0,
        fixedNumber: 0
    }

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                //onClick 함수 지정
                // onClick={() => {
                //     this.setState({number: number + 1});
                // }}

                //객체 대신 함수 인자 전달
                onClick={() => {
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });
                }}
                >+1</button>
            </div>
        );
    }
}

export default Counter;