import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
	slug,
	name,
	imageSrc,
	price,
	salePrice,
	releaseDate,
	numOfColors,
}) => {
	const variant =
		typeof salePrice === 'number'
			? 'on-sale'
			: isNewShoe(releaseDate)
			? 'new-release'
			: 'default';

	return (
		<Link href={`/shoe/${slug}`}>
			<Wrapper>
				<ImageWrapper>
					{variant === 'on-sale' && <SaleFlag>Sale</SaleFlag>}
					{variant === 'new-release' && <NewFlag>Just released!</NewFlag>}
					<Image src={imageSrc} />
				</ImageWrapper>
				<Spacer size={12} />
				<Row>
					<Name>{name}</Name>
					<Price variant={variant}>{formatPrice(price)}</Price>
				</Row>
				<Row>
					<ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
					{variant === 'on-sale' ? (
						<SalePrice>{formatPrice(salePrice)}</SalePrice>
					) : undefined}
				</Row>
			</Wrapper>
		</Link>
	);
};

const Link = styled.a`
	color: inherit;
	text-decoration: none;
`;

const Wrapper = styled.article`
	display: flex;
	flex-direction: column;
`;

const ImageWrapper = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 16px 16px 4px 4px;
`;

const Flag = styled.div`
	position: absolute;
	top: 12px;
	right: -4px;
	color: ${COLORS.white};
	padding: 10px;
	font-size: ${14 / 16}rem;
	border-radius: 2px;
	font-weight: ${WEIGHTS.medium};
`;

const SaleFlag = styled(Flag)`
	background-color: ${COLORS.primary};
`;

const NewFlag = styled(Flag)`
	background-color: ${COLORS.secondary};
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Name = styled.h3`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.gray[900]};
`;

const Price = styled.span.attrs(({ variant }) => ({
	style: {
		'--textDecoration': `${variant === 'on-sale' ? 'line-through' : undefined}`,
		'--color': `${variant === 'on-sale' ? COLORS.gray[700] : undefined}`,
	},
}))`
	text-decoration: var(--textDecoration);
	color: var(--color);
`;

const SalePrice = styled.span`
	font-weight: ${WEIGHTS.medium};
	color: ${COLORS.primary};
`;

const ColorInfo = styled.p`
	font-weight: ${WEIGHTS.normal};
	color: ${COLORS.gray[700]};
`;

export default ShoeCard;
