import React from 'react';
import ReactDOM from 'react-dom';
import Canlender from '../js/canlender.js';
import styles from '../css/app.scss';

class HabitsItem extends React.Component{
    render(){
        return(
            <div className={styles['itm-habit']}>
                <div>
                    <p>{this.props.name}</p>
                    <p>
                        <span className={this.props.isGood ? styles.fontgreen : styles.fontred}>{this.props.isGood ? '有益' : '无益'}</span>
                        <span className={styles.txt}>{this.props.style ? '记录数量' : '记录是/否'}</span>
                    </p>
                </div>
                <div>
                    <a href="add.html"><i className={styles['icon-arrow-rt']}></i></a>
                </div>
            </div>
        )
    }
}


const eleHabitsList = [
    //isGood => true: 有益 false: 无益
    //style => 1: 记录数量 0: 记录是否
    //isActive => 1: 激活中 0: 未激活
    {name: '空中自行车', isGood: true, style: 1, isActive: 1},
    {name: '俯卧撑', isGood: true, style: 1, isActive: 1},
    {name: '晚睡', isGood: false, style: 0, isActive: 0}
];

class HabitsList extends React.Component{
    render(){
        return (
            <div>
                <h3>{this.props.isActive ? '激活中' : '未激活'}</h3>
                <div className={styles['habits-list']}>
                    {eleHabitsList.map((ele,index) => {
                        if(ele.isActive === this.props.isActive){
                            return (
                                <HabitsItem key={index} name={ele.name} isGood={ele.isGood} style={ele.style} />
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
};

const HabitsWrap = () => (
    <div className={styles.habitsWrap}>
        <HabitsList isActive={1}/>
        <HabitsList isActive={0}/>
    </div>
);

const SiteHabits = () => (
    <section className={styles.centerWrap}>
        <HabitsWrap/>
    </section>
);

export default SiteHabits;

