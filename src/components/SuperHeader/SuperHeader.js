import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

import { COLORS, WEIGHTS } from '../../constants';
import Search from '../Search';

const SuperHeader = () => {
	return (
		<Container>
			<Blurb>Free shipping on domenstic orders over $75!</Blurb>
			<RightContainer>
				<Search />
				<HelpLink href="/">Help</HelpLink>
				<IconWrapper href="/">
					<Icon strokeWidth={1} id={'shopping-bag'} />
				</IconWrapper>
			</RightContainer>
		</Container>
	);
};

const Container = styled.div`
	background-color: ${COLORS.gray[900]};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 32px;
`;

const Blurb = styled.h3`
	color: ${COLORS.white};
	font-weight: ${WEIGHTS.normal};
`;

const RightContainer = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 300px;
	color: ${COLORS.gray[300]};
`;

const HelpLink = styled.a`
	text-decoration: none;
	color: inherit;
`;

const IconWrapper = styled.a`
	height: 20px;
	width: 20px;
	color: inherit;
`;

export default SuperHeader;
