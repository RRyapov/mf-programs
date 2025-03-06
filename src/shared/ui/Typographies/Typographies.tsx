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
	SuccessModalTitleContainer,
} from "@assets/styles";
import { FC } from "react";

type TitleProps = {
	title: string;
};

type TextProps = {
	content: string;
};

export const MainTitle: FC<TitleProps> = ({ title }) => (
	<TitleContainer>
		<StyledMainTitle>{title}</StyledMainTitle>
	</TitleContainer>
);

export const MediumTitle: FC<TitleProps> = ({ title }) => (
	<TitleContainer>
		<StyledMediumTitle>{title}</StyledMediumTitle>
	</TitleContainer>
);

export const ArticleTitle: FC<TitleProps> = ({ title }) => (
	<TitleContainer>
		<StyledArticleTitle>{title}</StyledArticleTitle>
	</TitleContainer>
);

export const SuccessModalTitle: FC<TitleProps> = ({ title }) => (
	<SuccessModalTitleContainer>
		<StyledArticleTitle>{title}</StyledArticleTitle>
	</SuccessModalTitleContainer>
);



export const ArticleText: FC<TextProps> = ({ content }) => (
	<TitleContainer>
		<StyledArticleText>{content}</StyledArticleText>
	</TitleContainer>
);

export const LastWordText: FC<TextProps> = ({ content }) => (
	<LastWordContainer>
		<StyledArticleText>{content}</StyledArticleText>
	</LastWordContainer>
);

export const PriceText: FC<TextProps> = ({ content }) => (
	<PriceTextContainer>
		<StyledArticleTitle>{content}</StyledArticleTitle>
	</PriceTextContainer>
);

export const BuyItemDescriptionShortRead: FC<TextProps> = ({ content }) => (
	<ProgramShortReadContainer>
		<StyledArticleText>{content}</StyledArticleText>
	</ProgramShortReadContainer>
);

export const BuyItemDescriptionLongRead: FC<TextProps> = ({ content }) => (
	<ProgramLongReadContainer>
		<BuyItemLongRead>{content}</BuyItemLongRead>
	</ProgramLongReadContainer>
);

export const LongRead: FC<{ content: string }> = ({ content }) => (
	<ProgramLongReadContainer>
		<BuyItemLongRead>{content}</BuyItemLongRead>
	</ProgramLongReadContainer>
);

export const ShortRead: FC<TextProps> = ({ content }) => (
	<ProgramShortReadContainer>
		<StyledArticleText>{content}</StyledArticleText>
	</ProgramShortReadContainer>
);
