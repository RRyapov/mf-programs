import { type FC } from "react";
import { ITrainingProgram } from "@entities/trainingProgram/model/types/types";
import { BuyItemGeneralDescription } from "@entities/trainingProgram/ui/BuyItemGeneralDescription";
import { BuyItemImage } from "@entities/trainingProgram/ui/BuyItemImage";
import { ProgramBlock } from "@assets/styles";

export const TrainingProgram: FC<ITrainingProgram> = (props) => {
	return (
		<ProgramBlock>
			{props.position === 0 ? (
				<>
					<BuyItemGeneralDescription {...props} />
					<BuyItemImage {...props} />
				</>
			) : (
				<>
					<BuyItemImage {...props} />
					<BuyItemGeneralDescription {...props} />
				</>
			)}
		</ProgramBlock>
	);
};
