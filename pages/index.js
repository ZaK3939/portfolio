import React from 'react';
import Link from 'next/link';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/shared/SuperComponent';
import axios from 'axios';

class Index extends SuperComponent {
	static async getInitialProps() {
		let userData = {};

		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
			userData = response.data;
		} catch (err) {
			console.error(err);
		}
		return { InitialData: [ 1, 2, 3, 4 ], userData };
	}

	constructor(props) {
		super(props);

		this.state = {
			title: 'I am Index Page'
		};
	}
	componentDidMount() {
		console.log('componentDifMount');
	}
	updateTitle() {
		this.setState({ title: ' aima' });
	}

	render() {
		const { title } = this.state;
		const { userData, InitialData } = this.props;
		return (
			<BaseLayout>
				<h1 className="frompage"> 'I am Index' </h1>
				<h2>{title}</h2>
				<h2>{userData.title}</h2>
				<button
					onClick={() => {
						this.updateTitle();
					}}
				>
					cahnge
				</button>
			</BaseLayout>
		);
	}
}

export default Index;
