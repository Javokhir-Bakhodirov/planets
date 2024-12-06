import { StaticImageData } from "next/image";

export interface PlanetType {
    id: number;
    name: string;
    img: string;
    description: string;
    distance: string;
    travelTime: string;
}

export interface CrewType {
    id: number;
    img: StaticImageData;
    job: string;
    name: string;
    description: string;
}
