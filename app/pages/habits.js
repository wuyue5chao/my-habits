import React from 'react';
import ReactDOM from 'react-dom';
import Canlender from '../js/canlender.js';
import styles from '../css/app.scss';

class HabitsItem extends React.Component{
    render(){
        const isGood = true;
        return(
            <div className={styles['itm-habit']}>
                <div>
                    <p>{this.props.habitName}</p>
                    <p>
                        <span className={isGood ? styles.fontgreen : styles.fontred}>{this.props.habitIs}</span>
                        <span>{this.props.habitStyle}</span>
                    </p>
                </div>
                <div>
                    <a href="add.html"><i className="icons icono-caretRight"></i></a>
                </div>
            </div>
        )
    }
}

const HabitsList = () => (
    <div>
        <h3>激活中</h3>
        <div className={styles['habits-list']}>
            <HabitsItem habitName="空中自行车" habitIs="有益" habitStyle="记录数量"/>
            <HabitsItem habitName="俯卧撑" habitIs="无益" habitStyle="记录是否"/>
        </div>
    </div>
);

const HabitsWrap = () => (
    <div className={styles.habitsWrap}>
        <HabitsList/>
    </div>
);

const SiteHabits = () => (
    <section className={styles.centerWrap}>
        <HabitsWrap/>
    </section>
);

export default SiteHabits;

