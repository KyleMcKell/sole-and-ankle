import React from 'react';
import styled from 'styled-components';

import Breadcrumbs from '../Breadcrumbs';

import { WEIGHTS } from '../../constants';
import Select from '../Select';

const ShoeIndex = ({ sortValue, setSortValue }) => {
	return (
		<Wrapper>
			<MainColumn>
				<Header>
					<Title>Running</Title>
					<Select
						label="Sort"
						value={sortValue}
						onChange={(ev) => setSortValue(ev.target.value)}
					>
						<option value="newest">Newest Releases</option>
						<option value="price">Price</option>
					</Select>
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
	align-items: center;
`;

const LeftColumn = styled.div`
	width: 280px;
`;

const MainColumn = styled.div`
	flex: 1;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h2`
	font-size: ${24 / 16}rem;
	font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
