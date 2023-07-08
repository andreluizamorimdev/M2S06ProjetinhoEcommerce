import{ Dispatch, SetStateAction } from "react"; 
import { IBanner } from "./IBanner";

export interface IBannerContextData {
    banner: IBanner;
    setBanner: Dispatch<SetStateAction<IBanner>>
}