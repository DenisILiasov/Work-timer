import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../store/store";

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;