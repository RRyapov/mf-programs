import { type FC } from "react";

import {
	ModalContainer,
	ModalContent,
	StyledArticleTitle,
	TitleContainer,
} from "@assets/styles";

import { Button } from "../Button";
import { Dialog } from "@mui/material";
import { ArticleText, MediumTitle } from "../Typographies";
import { SuccessModalTitle } from "../Typographies/Typographies";

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

		<Dialog sx={{
			"& .MuiDialog-paper.MuiPaper-root": {
				borderRadius: "25px !important"
			}
		}} open={isOpen} onClose={onClose}>
			<ModalContent>
				<SuccessModalTitle title={title} />
				<Button sx={{ mb: "25px" }}
					onClick={onClose}
					title="Закрыть"
				/>
			</ModalContent>
		</Dialog>
	);
