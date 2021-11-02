import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';

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
				<Spacer size={42} axis={'vertical'} />
				<ShoeSidebar />
			</LeftColumn>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: baseline;
	gap: 32px;
`;

const LeftColumn = styled.div`
	flex-basis: 248px;
`;

const MainColumn = styled.div`
	flex: 1;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const Title = styled.h2`
	font-size: ${24 / 16}rem;
	font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
