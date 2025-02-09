import { type FC } from "react";

import { ProgramImage } from "@assets/styles";

import { ITrainingProgram } from "../model/types/types";

export const BuyItemImage: FC<Partial<ITrainingProgram>> = ({
	id,
	imageUrl,
}) => (
	<ProgramImage>
		<img
			src={imageUrl}
			alt={`program-${id}`}
		/>
	</ProgramImage>
);
