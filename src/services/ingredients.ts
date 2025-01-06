import { axiosInsatnce } from "./instance"
import { ApiRoutes } from "./constants";
import { Ingredient } from "@prisma/client";

export const getAll = async (): Promise<Ingredient[]> => {
  return (await axiosInsatnce.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data;
}