import React from 'react';
import styled from 'styled-components/macro';
import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
	return (
		<>
			<Header />
			<Main>
				<ShoeIndex />
			</Main>
		</>
	);
};

const Main = styled.main`
	padding: 64px 32px;
`;

export default App;
