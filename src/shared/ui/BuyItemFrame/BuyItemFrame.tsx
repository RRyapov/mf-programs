import { type FC } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AddedToCartModal } from "@features/modalWindows/addedToCartModalWindow/ui/AddedToCartModal";
import { BuyItemImage } from "@entities/trainingProgram/ui/BuyItemImage";
import { useChangeModalWindow } from "@shared/model/modalChangerStore/modalChangerStore";
import { BuyItemProps } from "@shared/types/types";
// import { BuyItemButtonContainer } from "../buttons/buttonsContainers";
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
// import { PriceText } from "../Typographies/Typographies";

export const BuyItemFrame: FC<BuyItemProps> = (props) => {
	const { openModalState, setOpenModalState } = useChangeModalWindow();
	const {
		title,
		longText,
		price,
		imageUrl,
		itemType,
		activeModal,
		setActiveModal,
	} = props;

	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};
	return (
		<GeneralBuyItemBlock>
			<BuyItemBlock>
				<BuyItemTitleBlock>
					<MainTitle content={title} />
				</BuyItemTitleBlock>
				<BuyItemDescriptionBlock>
					<BuyItemDescription>
						<BuyItemDescriptionLongRead content={longText} />
						<PriceText content={price} />
						<BuyItemButtonContainer>
							<Button
								title="Купить"
								onClick={() => {
									setOpenModalState(true);
									setTimeout(() => setOpenModalState(false), 4000);
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
			{/* {openModalState ? (
				<AddedToCartModal
					activeModal={activeModal}
					setActiveModal={setActiveModal}
				>
					<ArticleTitle children={`${itemType} ${title} добавлен(а) в корзину`} />
				</AddedToCartModal>
			) : (
				<></>
			)} */}
		</GeneralBuyItemBlock>
	);
};
