import { StyledGeneralButton } from "@assets/styles";
import { SxProps, Theme } from "@mui/material";

import { FC, ReactNode } from "react";

type ButtonProps = {
	onClick?: () => void;
	title: string;
	sx?: SxProps<Theme>
};

export const Button: FC<ButtonProps> = ({ onClick, title, sx }) => (
	<StyledGeneralButton sx={sx} onClick={onClick}>{title}</StyledGeneralButton>
);
