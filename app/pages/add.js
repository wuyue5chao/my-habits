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

const ActBox = (props) => (
    <div className={styles.actbox}>
        <span>{props.title}</span>
        <p>{props.children}</p>
    </div>
);

const ActBoxTip = (props) => (
    <p className={styles.tip}>{props.tip}</p>
);

const ActGroupItem = (props) => (
    <div className={styles.actgroup}>
        {props.children}
    </div>
);

class RecordStyle extends React.Component{
    render(){
        return (
            <ActGroupItem>
                <ActBoxTip tip="是否有益"/>
                <ActBox title="有益">
                    <i className={styles['icon-mark']}></i>
                </ActBox>
                <ActBox title="无益">
                    <i className={styles['icon-mark']}></i>
                </ActBox>
            </ActGroupItem>
        )
    }
}

const QuantizedRecord = () => (
    <div>
        <ActGroupItem>
            <ActBox title="合格基准">
                <input type="text" placeholder="请输入每日合格基准" value=""/>
            </ActBox>
            <ActBoxTip tip="每日记录的值大于或等于此基准值视为合格"/>
        </ActGroupItem>
        <ActGroupItem>
            <ActBox title="记录单位">
                <input type="text" placeholder="请输入单位" value=""/>
            </ActBox>
            <ActBoxTip tip="例如：公里、分钟、个..."/>
        </ActGroupItem>
    </div>
);

class ActGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                <ActGroupItem>
                    <ActBox title="行为名称">
                        <input type="text" placeholder="请输入行为名称" value=""/>
                    </ActBox>
                </ActGroupItem>

                <RecordStyle />

                <ActGroupItem>
                    <ActBox title="量化记录">
                        <Switch />
                    </ActBox>
                    <ActBoxTip tip={`记录此行为具体的完成数量<br/>关闭量化记录，则简单记录是否做了此行为`} />
                </ActGroupItem>

                <QuantizedRecord />

                <ActGroupItem>
                    <ActBox title="行为频率">
                        <a href="week.html">
                            <input type="text" placeholder="请选择频率" value=""/>
                            <i className={styles['icon-arrow-rt']}></i>
                        </a>
                    </ActBox>
                </ActGroupItem>
                <ActGroupItem>
                    <ActBox title="打开提醒">
                        <Switch />
                    </ActBox>
                </ActGroupItem>
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