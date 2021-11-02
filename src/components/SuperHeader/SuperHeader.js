import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import Search from '../Search';

import { COLORS, WEIGHTS } from '../../constants';

const SuperHeader = () => {
	return (
		<Wrapper>
			<Blurb>Free shipping on domenstic orders over $75!</Blurb>
			<Search />
			<HelpLink href="/help">Help</HelpLink>
			<IconWrapper href="/cart">
				<Icon
					strokeWidth={1}
					id={'shopping-bag'}
					size={20}
					color={COLORS.white}
				/>
			</IconWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	padding: 0px 32px;
	gap: 24px;
	font-size: ${14 / 16}rem;
	color: ${COLORS.gray[300]};
	background-color: ${COLORS.gray[900]};
`;

const Blurb = styled.h3`
	color: ${COLORS.white};
	font-weight: ${WEIGHTS.normal};
	margin-right: auto;
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
