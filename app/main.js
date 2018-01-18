import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import styles from './css/app.scss';
import SiteIndex from './pages/index.js';
import SiteHabits from './pages/habits.js';
import SiteDetail from './pages/detail.js';
import SiteAdd from './pages/add.js';



const AppFrame = () => (
	<Router>
		<div>
			<header>
				<span className={styles.icons}><Link to="/habits"><i className={styles['icon-hamburger']}></i></Link></span>
				<h2>TODAY</h2>
				<span className={styles.icons}><Link to="/add"><i className={styles['icon-plus']}></i></Link></span>
			</header>

			<footer>
				<nav>
					<ul className={styles.navigation}>
						<li><Link to="/">TODAY</Link></li>
						<li><Link to="/habits">HABITS</Link></li>
						<li><Link to="/set">SET</Link></li>
					</ul>
				</nav>
			</footer>

			<Route exact path="/" component={Home}/>

			<Route exact path="/habits" component={Habits}/>
			<Route exact path="/add" component={Add}/>
			<Route exact path="/set" component={Detail}/>
		</div>
	</Router>
);

const Home = () => (
	<SiteIndex/>
);

const Detail = () => (
	<SiteDetail/>
);

/*const Detail = ({match}) => (
	<div className={styles.centerWrap}>
		<h2>Detail</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>render with react</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>components</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>props v. state</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic}/>
		<Route exact path={match.url} render={() => (
			<h3>Please select a topic.</h3>
		)} />
	</div>
);

const Topic = ({match}) => (
	<div className={styles.centerWrap}>
		111
		<h3>{match.params.topicId}</h3>
	</div>
)*/

const Add = () => (
	<SiteAdd />
);

const Habits = () => (
	<SiteHabits/>
);

const Set = () => (
	<div className={styles.centerWrap}>
		<h2>Set</h2>
	</div>
);

ReactDOM.render(
	<AppFrame/>,
	document.getElementById('root')
);
