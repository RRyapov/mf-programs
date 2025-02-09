import { StyledGeneralButton } from "@assets/styles";
import { FC } from "react";

type ButtonProps = {
	title: string;
	onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ title, onClick }) => (
	<StyledGeneralButton onClick={onClick}>{title}</StyledGeneralButton>
);
