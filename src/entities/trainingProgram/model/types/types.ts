import { ProgramType } from "@entities/trainingProgram/types/ProgramTypes";


export type ITrainingProgram = ProgramType & {
  position: number;
};

export interface IGetPrograms {
  programs: ITrainingProgram[];
}
