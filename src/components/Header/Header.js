import React from 'react';
import styled from 'styled-components/macro';

import SuperHeader from '../SuperHeader';
import Logo from '../Logo';

const Header = () => {
	return (
		<Wrapper>
			<SuperHeader />
			<MainHeader>
				<Logo />
				<Nav>
					<NavLink>Sale</NavLink>
					<NavLink>New Releases</NavLink>
					<NavLink>Men</NavLink>
					<NavLink>Women</NavLink>
					<NavLink>Kids</NavLink>
					<NavLink>Collections</NavLink>
				</Nav>
			</MainHeader>
		</Wrapper>
	);
};

const Wrapper = styled.header``;

const MainHeader = styled.div``;

const Nav = styled.nav``;

const NavLink = styled.a`
	text-transform: uppercase;
`;

export default Header;
