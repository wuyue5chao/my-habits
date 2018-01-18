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

const eleHabitDetail = {
    name: '仰卧起坐',
    time: '2017年12月11日',
    number: 500,
    unit: '个',
    total: {
        n1: 53,
        n2: 34,
        n3: 43,
        n4: 12
    },
    passed: {
        n1: 43,
        n2: 24,
        n3: 33,
        n4: 5
    }
};

const DetailTop = (props) => (
    <div className={styles['info-total']}>
        <div className={styles['item-tit']}>
            <h3>{props.name}</h3>
            <p className={styles['sub-tit']}>首次记录：{props.time}</p>
        </div>
        <div className={styles['item-amount']}>
            <span>{props.number}</span><span>{props.unit}</span>
        </div>
    </div>
);

const InfoBoxItem = (props) => (
    <p>
        <span>{props.number}</span>
        <span>{props.text}</span>
    </p>
);

const InfoBox = (props) => (
    <div className={styles['info-detail-box']}>
        <h3>{props.status === 'total' ? '记录天数' : '合格天数'}</h3>
        <div className={styles['info-box']+' '+(props.status === 'total' ? styles.total : styles.passed)}>
            <InfoBoxItem number={props.n1} text="累计记录" />
            <InfoBoxItem number={props.n2} text="平均每周" />
            <InfoBoxItem number={props.n3} text="最长连续" />
            <InfoBoxItem number={props.n4} text="当前连续" />
        </div>
    </div>
);

const DetailInfo = () => (
    <div className={styles['info-detail']}>
        <InfoBox status="total" n1={eleHabitDetail.total.n1} n2={eleHabitDetail.total.n2} n3={eleHabitDetail.total.n3} n4={eleHabitDetail.total.n4}/>
        <InfoBox status="passed" n1={eleHabitDetail.passed.n1} n2={eleHabitDetail.passed.n2} n3={eleHabitDetail.passed.n3} n4={eleHabitDetail.passed.n4}/>
    </div>
);

class DetailChart extends React.Component{
    render(){
        return (
            <div className={styles['info-chart']}>
                <ul className={styles['common-tab']}>
                    <li>合格趋势</li>
                    <li className={styles.on}>数量趋势</li>
                </ul>
                <div className={styles.chart}>

                </div>
            </div>
        )
    }
}

class DetailCanlender extends React.Component{
    render(){
        return (
            <div className={styles['info-canlender']}>
                <div className={styles['current-month']}>
                    <span>2017年12月</span>
                    <p>
                        <span>显示数量</span>
                        <Switch/>
                    </p>
                </div>
                <div className={styles['canlender-box']}>
                    <div className={styles.week}>
                        <span>周日</span><span>周一</span><span>周二</span><span>周三</span><span>周四</span><span>周五</span><span>周六</span>
                    </div>
                    <div className={styles.date}>
                        <div className={styles.datebox}>
                        </div>
                        <div className={styles.datebox}>
                            <div className={styles.itm}>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className={styles.marks}>查看所有备注</p>
            </div>
        )
    }
}

const SiteDetail = () => (
    <section className={styles.centerWrap}>
        <DetailTop name={eleHabitDetail.name} time={eleHabitDetail.time} number={eleHabitDetail.number} unit={eleHabitDetail.unit} />
        <DetailInfo/>
        <DetailChart/>
        <DetailCanlender/>
    </section>
);

export default SiteDetail;