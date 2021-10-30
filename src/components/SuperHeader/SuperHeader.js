import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import Search from '../Search';

import { COLORS, WEIGHTS } from '../../constants';

const SuperHeader = () => {
	return (
		<Wrapper>
			<Blurb>Free shipping on domenstic orders over $75!</Blurb>
			<RightContainer>
				<Search />
				<HelpLink href="/">Help</HelpLink>
				<IconWrapper href="/">
					<Icon
						strokeWidth={1}
						id={'shopping-bag'}
						size={24}
						color={COLORS.white}
					/>
				</IconWrapper>
			</RightContainer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${COLORS.gray[900]};
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 12px 32px;
	font-size: ${14 / 16} px;
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
	align-items: baseline;
`;

const HelpLink = styled.a`
	text-decoration: none;
	color: inherit;
`;

const IconWrapper = styled.a`
	height: 24px;
	width: 24px;
	color: inherit;
	pointer-events: none;
	align-self: center;

	&:hover {
		color: ${COLORS.white};
	}
`;

export default SuperHeader;
