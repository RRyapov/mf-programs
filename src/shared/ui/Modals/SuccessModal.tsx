import { type FC } from "react";

import {
	ModalContainer,
	ModalContent,
	StyledArticleTitle,
	TitleContainer,
} from "@assets/styles";

import { Button } from "../Button";

interface SuccessModalTypes {
	isOpen: boolean;
	onClose: () => void;
	title: string;
}

export const SuccessModal: FC<SuccessModalTypes> = ({
	isOpen,
	onClose,
	title,
}) =>
	isOpen && (
		<ModalContainer>
			<ModalContent>
				<TitleContainer>
					<StyledArticleTitle>{title}</StyledArticleTitle>
				</TitleContainer>
				<Button
					onClick={onClose}
					title="Закрыть"
				/>
			</ModalContent>
		</ModalContainer>
	);
