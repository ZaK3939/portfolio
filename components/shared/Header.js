// import React from 'react'

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<React.Fragment>
// <Link href="/">
// 	<a>Home</a>
// </Link>

// 				<Link href="/about">
// 					<a> About </a>
// 				</Link>

// 				<Link href="/portfolios">
// 					<a> Portfolios </a>
// 				</Link>

// 				<Link href="/blogs">
// 					<a> Blogs </a>
// 				</Link>

// 				<Link href="/cv">
// 					<a> CV </a>
// 				</Link>
// 			</React.Fragment>
// 		);
// 	}
// }

// export default Header;

import React from 'react';
import Link from 'next/link';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const BsNavLink = (props) => {
	const { route, title } = props;
	return (
		<Link className="port-navbar-link" href={route}>
			<a className="nav-link">{title}</a>
		</Link>
	);
};

const Login = () => {
	return <span className="nav-link port-navbar-link clickable">Login</span>;
};

const Logout = () => {
	return <span className="nav-link port-navbar-link clickable">LogOut</span>;
};

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
					<NavbarBrand className="port-navbar-brand" href="/">
						ZaK3939
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/" title="Home" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/about" title="About" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/portfolios" title="Portfolios" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/blogs" title="Blogs" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<BsNavLink route="/cv" title="CV" />
							</NavItem>
							<NavItem className="port-navbar-item">
								<Login />
							</NavItem>
							<NavItem className="port-navbar-item">
								<Logout />
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
