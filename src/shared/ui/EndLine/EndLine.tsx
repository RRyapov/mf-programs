import { EndLineStyle } from "@assets/styles";
import { Box } from "@mui/material";
import { type FC } from "react";

export const EndLine: FC = () => (
	<Box sx={{ ...EndLineStyle }}>
		<img
			src="https://i.postimg.cc/7ZBPwbF5/blue-line.png"
			alt="blue-line-division"
		/>
	</Box>
);
