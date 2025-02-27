import { type FC } from "react";

import { BuyItemGeneralDescription } from "@entities/trainingProgram/ui/BuyItemGeneralDescription";
import { BuyItemImage } from "@entities/trainingProgram/ui/BuyItemImage";
import { ProgramBlock } from "@assets/styles";
import { TrainingProgramType } from "@entities/trainingProgram/types/TrainingProgram";

export const TrainingProgram: FC<TrainingProgramType> = (props) => {
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
