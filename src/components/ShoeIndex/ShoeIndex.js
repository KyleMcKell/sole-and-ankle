import React from 'react';
import styled from 'styled-components';

const ShoeIndex = () => {
	return (
		<Wrapper>
			<MainColumn>
				<h2>Middle</h2>
			</MainColumn>
			<LeftColumn>
				<h2>Left</h2>
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

export default ShoeIndex;
