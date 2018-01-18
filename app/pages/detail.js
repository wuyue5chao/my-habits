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

class DetailTop extends React.Component{
    render(){
        return (
            <div className={styles['info-total']}>
                <div className={styles['item-tit']}>
                    <h3>仰卧起坐</h3>
                    <p className={styles['sub-tit']}>首次记录：2017年12月11日</p>
                </div>
                <div className={styles['item-amount']}>
                    <span>500</span><span>个</span>
                </div>
            </div>
        )
    }
}

class DetailInfoItem extends React.Component{
    render(){
        return (
            <div className={styles['info-detail-box']}>
                <h3>记录天数</h3>
                <div className={styles['info-box']+' '+styles.total}>
                    <p>
                        <span>32</span>
                        <span>累计记录</span>
                    </p>
                    <p>
                        <span>32</span>
                        <span>平均每周</span>
                    </p>
                    <p>
                        <span>32</span>
                        <span>最长连续</span>
                    </p>
                    <p>
                        <span>32</span>
                        <span>当前连续</span>
                    </p>
                </div>
            </div>
        )
    }
}

class DetailInfo extends React.Component{
    render(){
        return (
            <div className={styles['info-detail']}>
                <DetailInfoItem/>
                <DetailInfoItem/>
            </div>
        )
    }
}

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
                        {/*<span className={styles.switch+' '+styles.open}>
                        <i className={styles.block}></i>
                    </span>*/}
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
        <DetailTop/>
        <DetailInfo/>
        <DetailChart/>
        <DetailCanlender/>
    </section>
);

export default SiteDetail;