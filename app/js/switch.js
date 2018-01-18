import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/app.scss';

class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state = {isOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }))
    }

    render(){
        return (
            <span className={styles.switch + ' ' + styles[this.state.isOn ? 'on' : '']} onClick={this.handleClick}>
                <i className={styles.block}></i>
            </span>
        )
    }
}

export default Switch;
