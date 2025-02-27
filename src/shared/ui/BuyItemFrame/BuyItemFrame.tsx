import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";

import { BuyItemImage } from "@entities/trainingProgram/ui/BuyItemImage";
import { BuyItemProps } from "@shared/types/types";
import {
	BuyItemBlock,
	BuyItemTitleBlock,
	GeneralBuyItemBlock,
	BuyItemDescriptionBlock,
	BuyItemDescription,
	BuyItemButtonContainer,
} from "@assets/styles";
import {
	ArticleTitle,
	MainTitle,
	BuyItemDescriptionLongRead,
} from "../Typographies";
import { PriceText } from "../Typographies";
import { Button } from "../Button";
import { SuccessModal } from "../Modals/SuccessModal";
import { LongRead } from "../Typographies/Typographies";

export const BuyItemFrame: FC<BuyItemProps> = (props) => {
	const [isSuccessModalOpened, setIsSuccessModalOpened] = useState(false);

	const { title, longRead, price, imageUrl, itemType } = props;

	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
	return (
		<>
			<GeneralBuyItemBlock>
				<BuyItemBlock>
					<BuyItemTitleBlock>
						<MainTitle title={title} />
					</BuyItemTitleBlock>
					<BuyItemDescriptionBlock>
						<BuyItemDescription>
							<LongRead content={longRead} />
							<PriceText content={price} />
							<BuyItemButtonContainer>
								<Button
									title="Купить"
									onClick={() => {
										setIsSuccessModalOpened(true);
										// setTimeout(() => setIsSuccessModalOpened(false), 4000);
									}}
								/>
								<Button
									onClick={goBack}
									title="Назад"
								/>
							</BuyItemButtonContainer>
						</BuyItemDescription>
						<BuyItemImage imageUrl={imageUrl} />
					</BuyItemDescriptionBlock>
				</BuyItemBlock>
			</GeneralBuyItemBlock>
			<SuccessModal
				isOpen={isSuccessModalOpened}
				onClose={() => setIsSuccessModalOpened(false)}
				title={`${itemType} ${title} добавлен(а) в корзину`}
			/>
		</>
	);
};
