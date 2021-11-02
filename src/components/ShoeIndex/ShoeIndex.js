import React from 'react';
import styled from 'styled-components';

import Breadcrumbs from '../Breadcrumbs';

import { WEIGHTS } from '../../constants';

const ShoeIndex = () => {
	return (
		<Wrapper>
			<MainColumn>
				<Header>
					<Title>Running</Title>
				</Header>
			</MainColumn>
			<LeftColumn>
				<Breadcrumbs>
					<Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="sale/shoes">Shoes</Breadcrumbs.Crumb>
				</Breadcrumbs>
			</LeftColumn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
`;

const LeftColumn = styled.div`
	width: 280px;
`;

const MainColumn = styled.div`
	flex: 1;
`;

const Header = styled.header`
	display: flex;
`;

const Title = styled.h2`
	font-size: ${24 / 16}rem;
	font-weight: ${WEIGHTS.medium};
	justify-content: space-between;
`;

export default ShoeIndex;
