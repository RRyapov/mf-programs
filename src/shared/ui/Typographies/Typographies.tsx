import {
	TitleContainer,
	StyledMainTitle,
	StyledMediumTitle,
	StyledArticleText,
	LastWordContainer,
	PriceTextContainer,
	ProgramShortReadContainer,
	ProgramLongReadContainer,
	BuyItemLongRead,
	StyledArticleTitle,
} from "@assets/styles";
import { SxProps, Theme } from "@mui/material";
import { FC } from "react";

type TitleProps = {
	content: string;
	sx?: SxProps<Theme> | undefined;
};

export const MainTitle: FC<TitleProps> = ({ content }) => (
	<TitleContainer>
		<StyledMainTitle>{content}</StyledMainTitle>
	</TitleContainer>
);

export const MediumTitle: FC<TitleProps> = ({ content }) => (
	<TitleContainer>
		<StyledMediumTitle>{content}</StyledMediumTitle>
	</TitleContainer>
);

export const ArticleText: FC<TitleProps> = ({ content }) => (
	<TitleContainer>
		<StyledArticleText>{content}</StyledArticleText>
	</TitleContainer>
);

export const LastWordText: FC<TitleProps> = ({ content }) => (
	<LastWordContainer>
		<StyledArticleText>{content}</StyledArticleText>
	</LastWordContainer>
);

export const ArticleTitle: FC<TitleProps> = ({ content }) => (
	<TitleContainer>
		<StyledArticleTitle>{content}</StyledArticleTitle>
	</TitleContainer>
);

export const PriceText: FC<TitleProps> = ({ content }) => (
	<PriceTextContainer>
		<StyledArticleTitle>{content}</StyledArticleTitle>
	</PriceTextContainer>
);

export const BuyItemDescriptionShortRead: FC<TitleProps> = ({ content }) => (
	<ProgramShortReadContainer>
		<StyledArticleText>{content}</StyledArticleText>
	</ProgramShortReadContainer>
);

export const BuyItemDescriptionLongRead: FC<TitleProps> = ({ content }) => (
	<ProgramLongReadContainer>
		<BuyItemLongRead>{content}</BuyItemLongRead>
	</ProgramLongReadContainer>
);
