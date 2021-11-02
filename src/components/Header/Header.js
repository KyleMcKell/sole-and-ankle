import React from 'react';
import styled from 'styled-components/macro';

import SuperHeader from '../SuperHeader';
import Logo from '../Logo';
import { COLORS } from '../../constants';

const Header = () => {
	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<Side>
					<Logo />
				</Side>
				<Nav>
					<NavLink href="/sale">Sale</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</Nav>
				<Side />
			</MainHeader>
		</header>
	);
};

const MainHeader = styled.div`
	border-bottom: 1px solid ${COLORS.gray[300]};
	height: 72px;
	padding: 20px 32px 16px;
	display: flex;
	align-items: baseline;
`;

const Nav = styled.nav`
	display: flex;
	gap: 48px;
	margin: 0 48px;
`;

const NavLink = styled.a`
	text-transform: uppercase;
	text-decoration: none;
	color: inherit;
	font-size: ${18 / 16}rem;

	&:first-of-type {
		color: ${COLORS.secondary};
	}
`;

const Side = styled.div`
	flex: 1;
`;

export default Header;
