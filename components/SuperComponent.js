import React from 'react';
import BaseLayout from './layouts/BaseLayout';

class SuperComponent extends React.Component {
	constructor(props) {
		super(props);
		this.someVariale = 'hussome';
	}

	alertNama(title) {
		alert(title);
	}
	render() {
		return (
			<BaseLayout>
				<h1>'I am Indexdsddd'</h1>
			</BaseLayout>
		);
	}
}

export default SuperComponent;
