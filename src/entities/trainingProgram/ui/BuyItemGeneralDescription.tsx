import { type FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BuyItemDescription } from "@assets/styles";
import { MainTitle } from "@shared/ui/Typographies";
import { BuyItemDescriptionShortRead } from "@shared/ui/Typographies/Typographies";
import { ITrainingProgram } from "../model/types/types";
import { Button } from "@shared/ui/Button";

export const BuyItemGeneralDescription: FC<Partial<ITrainingProgram>> = ({
	id,
	name,
	shortText,
}) => {
	const navigate = useNavigate();
	return (
		<BuyItemDescription>
			<MainTitle content={name} />
			<BuyItemDescriptionShortRead content={shortText} />
			<Button
				onClick={() => navigate(`/programs/${id}`)}
				title="Подробнее"
			/>
		</BuyItemDescription>
	);
};
