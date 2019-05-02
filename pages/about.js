import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends React.Component {
	render() {
		return (
			<BaseLayout>
				<BasePage className="base-page">
					<h1>'I am Index'</h1>
				</BasePage>
			</BaseLayout>
		);
	}
}

export default About;
