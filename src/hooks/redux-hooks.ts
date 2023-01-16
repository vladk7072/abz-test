import { DispatchType, StateType } from '../redux/redux';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
export const useAppDispatch = useDispatch<DispatchType>;