import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/app.scss';

class Canlender extends React.Component{
    render(){
        return (
            <div className={styles['canlender-box']+' '+styles['canlender-fix']}>
                <div className={styles.week}>
                    <span>周日</span><span>周一</span><span>周二</span><span>周三</span><span>周四</span><span>周五</span><span>周六</span>
                </div>
                <div className={styles.date}>
                    <div className={styles.datebox}>
                        <div className={styles.block}>
                            <span>1</span>
                        </div>
                    </div>
                    <div className={styles.datebox}>
                        <div className={styles.block}>
                            <span>2</span>
                        </div>
                    </div>
                    <div className={styles.datebox}>
                        <div className={styles.block}>
                            <span>3</span>
                        </div>
                    </div>
                    <div className={styles.datebox+' '+styles.current}>
                        <div className={styles.block}>
                            <span>4</span>
                        </div>
                    </div>
                    <div className={styles.datebox}>
                        <div className={styles.block}>
                            <span>5</span>
                        </div>
                    </div>
                    <div className={styles.datebox}>
                        <div className={styles.block}>
                            <span>6</span>
                        </div>
                    </div>
                    <div className={styles.datebox}>
                        <div className={styles.block}>
                            <span>7</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Canlender;
