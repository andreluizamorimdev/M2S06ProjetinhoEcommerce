import{ Dispatch, SetStateAction } from "react"; 
import { IBanner } from "./IBanner";

export interface IBannerContextData {
    bannerData: IBanner;
    setBannerData: Dispatch<SetStateAction<IBanner>>
}