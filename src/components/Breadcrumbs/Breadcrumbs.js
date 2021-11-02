import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const Breadcrumbs = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({ href, children, ...rest }) => {
	return (
		<CrumbWrapper>
			<CrumbLink href={href} {...rest}>
				{children}
			</CrumbLink>
		</CrumbWrapper>
	);
};

const Wrapper = styled.nav`
	display: flex;
	font-size: ${14 / 16}rem;
`;

const CrumbWrapper = styled.div`
	&:not(:first-of-type) {
		margin-left: 8px;

		&::before {
			content: '/';
			color: ${COLORS.gray[300]};
			margin-right: 8px;
		}
	}
`;

const CrumbLink = styled.a`
	color: ${COLORS.gray[700]};
	text-decoration: none;

	&:hover {
		color: ${COLORS.gray[900]};
		cursor: pointer;
	}
`;

export default Breadcrumbs;
