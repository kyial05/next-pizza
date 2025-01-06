import { Product } from "@prisma/client"
import { axiosInsatnce } from "./instance"
import { ApiRoutes } from "./constants";

export const search = async (query: string): Promise<Product[]> => {
  return (await axiosInsatnce.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: {query}})).data;
}