import React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

import { COLORS } from '../../constants';

const Search = () => {
	return (
		<Wrapper>
			<IconWrapper>
				<Icon id={'search'} size={16} strokeWidth={2} />
			</IconWrapper>
			<TextInput placeholder={'Search...'} />
		</Wrapper>
	);
};

const Wrapper = styled.label`
	color: inherit;
	position: relative;
`;

const TextInput = styled.input`
	max-width: 175px;
	background: none;
	border: none;
	border-bottom: 1px solid ${COLORS.gray[300]};
	height: 28px;
	padding-left: 28px;
	font-size: inherit;
	color: inherit;

	&:focus {
		outline: 2px solid black;
		outline: 5px auto -webkit-focus-ring-color;
	}

	&::placeholder {
		font-weight: 400;
		color: ${COLORS.gray[500]};
	}
`;

const IconWrapper = styled.div`
	width: 16px;
	height: 16px;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	margin: auto 0;
	pointer-events: none;
`;

export default Search;
