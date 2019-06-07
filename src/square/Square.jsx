import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    handleOnClick = () => {
        this.setState({ value: 'X' })
    }

    render() {
        return (
            <button className="square" onClick={this.handleOnClick}>
                {this.state.value}
            </button>
        )
    }
}

export default Square 