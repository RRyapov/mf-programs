import { type FC } from "react";
import { useNavigate } from "react-router-dom";

import { BuyItemDescription } from "@assets/styles";
import { MainTitle } from "@shared/ui/Typographies";
import { ShortRead } from "@shared/ui/Typographies/Typographies";
import { Button } from "@shared/ui/Button";
import { ProgramType } from "../types/ProgramType";

export const BuyItemGeneralDescription: FC<Partial<ProgramType>> = ({
	id,
	name,
	shortText,
}) => {
	const navigate = useNavigate();
	return (
		<BuyItemDescription>
			<MainTitle title={name} />
			<ShortRead content={shortText} />
			<Button
				onClick={() => navigate(`/programs/${id}`)}
				title="Подробнее"
			/>
		</BuyItemDescription>
	);
};
