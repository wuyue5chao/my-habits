import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Canlender from '../js/canlender.js';
import styles from '../css/app.scss';

class ItemProgress extends  React.Component{
	render(){
		return (
			<div className={styles['itm-progress']}>
				<span className={styles.pass}></span>
				<span></span>
				<span></span>
				<span className={styles.pass}></span>
				<span></span>
				<span className={styles.fail}></span>
				<span className={styles.pass}></span>
			</div>
		)
	}
}

class ItemOptions extends React.Component{
	render(){
		return (
			<div className={styles['itm-sets']}>
				<span className={styles['arrow-up']}></span>
				<div className={styles['set-lists']}>
					<span>删除</span>
					<span>计数</span>
					<span>跳过</span>
					<span>备注</span>
				</div>
			</div>
		)
	}
}

class TodayItem extends React.Component{
	render(){
		return (
			<div className={styles['today-list']}>
				<div className={styles.item}>
					<div className={styles['itm-habit']}>
						<div className={styles['h-icon']}>
							<div className={styles['h-circle']+' '+styles.pass}>
								<span>{this.props.number}</span>
								<span>{this.props.unit}</span>
							</div>
						</div>
						<div className={styles['h-info']}>
							<p className={styles.name}><strong>{this.props.name}</strong></p>
							<p className={styles.log}>{this.props.log}</p>
						</div>
						<div className={styles['h-set']}>
							<div><Link to="/detail">detail</Link></div>
						</div>
					</div>
					<ItemProgress/>
					<ItemOptions/>
				</div>

				<Route exact path="/detail" component={Detail}/>
			</div>
		)
	}
}

class TodayList extends React.Component{
	render(){
		return (
			<section className={styles['centerWrap-index']}>
				<TodayItem number="200" unit="个" name="空中自行车" log="第一天 坚持！"/>
				<TodayItem number="30" unit="min" name="倒立" log="瘦腿哈哈！"/>
			</section>
		)
	}
}

class SiteIndex extends React.Component{
	render(){
		return (
			<div>
				<Canlender/>
				<TodayList/>
			</div>
		);
	}
}

const Detail = () => (
	<div className={styles.centerWrap}>detail</div>
);

export default SiteIndex;