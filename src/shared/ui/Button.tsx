import { StyledGeneralButton } from "@assets/styles";

import { FC, ReactNode } from "react";

type ButtonProps = {
	onClick?: () => void;
	title: string;
};

export const Button: FC<ButtonProps> = ({ onClick, title }) => (
	<StyledGeneralButton onClick={onClick}>{title}</StyledGeneralButton>
);
