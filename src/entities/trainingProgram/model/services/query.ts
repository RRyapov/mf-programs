import { useQuery } from "@tanstack/react-query";
// import { ProductsForMainPageResponse } from "@entities/products/model/types/types";
import { primaryApi } from "@shared/config/ky/index";
import { IGetPrograms } from "../types/types";

// export interface IGetPrograms {
//   programs: ITrainingProgram[];
// }

const PROGRAMS = "programs" as const;

export const useQueryPrograms = () =>
  useQuery<IGetPrograms[]>({
    queryKey: [PROGRAMS],
    queryFn: () => primaryApi.get("programs").json(),
  });