import { ImageSourcePropType } from "react-native";

export interface SliderItemInterface {
    id: number;
    title: string;
    image: ImageSourcePropType;
    description: string;
}