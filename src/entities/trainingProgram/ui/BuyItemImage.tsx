import { type FC } from "react";

import { ProgramImage } from "@assets/styles";

import { ProgramType } from "../types/ProgramType";

export const BuyItemImage: FC<Partial<ProgramType>> = ({ id, imageUrl }) => (
	<ProgramImage>
		<img
			src={imageUrl}
			alt={`program-${id}`}
		/>
	</ProgramImage>
);
