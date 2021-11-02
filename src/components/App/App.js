import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
	const [sortValue, setSortValue] = React.useState('newest');

	return (
		<>
			<Header />
			<Main>
				<ShoeIndex sortValue={sortValue} setSortValue={setSortValue} />
			</Main>
		</>
	);
};

const Main = styled.main`
	padding: 64px 32px;
`;

export default App;
