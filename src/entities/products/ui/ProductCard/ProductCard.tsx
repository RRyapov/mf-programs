import { FC } from "react";
import { ProductImageBox, StyledContainer } from "@assets/styles";

import { MediumTitle } from "@shared/ui/Typographies";
import { Button } from "@shared/ui/Button";

type ProductCardProps = {
	imageUrl: string;
	imageAlt: string;
	titleText: string;
};

export const ProductCard: FC<ProductCardProps> = (props) => {
	const { imageUrl, imageAlt, titleText } = props;
	return (
		<StyledContainer>
			<ProductImageBox>
				<img
					src={imageUrl}
					alt={imageAlt}
				/>
			</ProductImageBox>
			<MediumTitle content={titleText} />
			<Button title="Подробнее" />
		</StyledContainer>
	);
};
