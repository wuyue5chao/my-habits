import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Canlender from '../js/canlender.js';
import Switch from '../js/switch.js';
import styles from '../css/app.scss';

class ActGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                <div className={styles.actgroup}>
                    <div className={styles.actbox}>
                        <span>行为名称</span>
                        <p><input type="text" placeholder="请输入行为名称" value=""/></p>
                    </div>
                </div>
                <div className={styles.actgroup}>
                    <p className={styles.tip}>是否有益</p>
                    <div className={styles.actbox + ' ' + styles. selected}>
                        <span><em className={styles.fontgreen}>有益</em></span>
                        <i className={styles['icon-mark']}></i>
                    </div>
                    <div className={styles.actbox}>
                        <span><em className={styles.fontred}>无益</em></span>
                        <i className={styles['icon-mark']}></i>
                    </div>
                </div>
                <div className={styles.actgroup}>
                    <div className={styles.actbox}>
                        <span>量化记录</span>
                        <p>
                            <Switch />
                        </p>
                    </div>
                    <p className={styles.tip}>
                        记录此行为具体的完成数量<br/>
                        关闭量化记录，则简单记录是否做了此行为
                    </p>
                </div>
            </div>
        )
    }
}

const AddList = () => (
    <ActGroup />
);

const SiteAdd = () => (
    <section className={styles.centerWrap}>
        <AddList />
    </section>
);

export default SiteAdd;