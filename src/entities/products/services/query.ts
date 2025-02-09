import { useQuery } from "@tanstack/react-query";
import { type ProductsForMainPageResponse } from "../types/types";
import { primaryApi } from "@shared/config/ky";

interface IGetProducts {
  productsForMainPage: ProductsForMainPageResponse[];
}

const PRODUCTS_FOR_MAIN_PAGE = "products-for-main-page" as const;


export const useQueryProductsForMainPage = () =>
  useQuery<IGetProducts[]>({
    queryKey: [PRODUCTS_FOR_MAIN_PAGE],
    queryFn: () => primaryApi.get("products").json(),
  });