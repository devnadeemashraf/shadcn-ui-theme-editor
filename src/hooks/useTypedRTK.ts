import { useDispatch, useSelector } from "react-redux";
import { RootState, type AppDispatch } from "@/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T): T => {
  return useSelector(selector);
};
