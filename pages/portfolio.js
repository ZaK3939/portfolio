import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import axios from 'axios';

import { withRouter } from 'next/router';

class Portfolio extends React.Component {
	static async getInitialProps({ query }) {
		const portfolioId = query.id;
		let portfolio = {};
		try {
			const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
			portfolio = response.data;
		} catch (err) {
			console.error(err);
		}
		return { portfolio };
	}

	render() {
		const { portfolio } = this.props;
		return (
			<BaseLayout>
				<BasePage>
					<h1>'I am Index'</h1>
					<h1>{portfolio.title}</h1>
					<h1>BODY:{portfolio.body}</h1>
					<h1>ID:{portfolio.id}</h1>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default withRouter(Portfolio);
