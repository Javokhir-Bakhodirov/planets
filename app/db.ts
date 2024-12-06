import moon from "@/public/img/moon.svg";
import mars from "@/public/img/mars.svg";
import europa from "@/public/img/europa.svg";
import titan from "@/public/img/titan.svg";
import { CrewType, PlanetType } from "./types";
import douglas from "@/public/img/douglas.png";
import victor from "@/public/img/victor.png";
import ansari from "@/public/img/ansari.png";
import mark from "@/public/img/mark.png";

export const planets: PlanetType[] = [
    {
        id: 1,
        name: "Moon",
        img: moon,
        description:
            "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400",
        travelTime: "3 days",
    },
    {
        id: 2,
        name: "Mars",
        img: mars,
        description:
            "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 MIL. km",
        travelTime: "9 months",
    },
    {
        id: 3,
        name: "Europa",
        img: europa,
        description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        travelTime: "3 years",
    },
    {
        id: 4,
        name: "Titan",
        img: titan,
        description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        travelTime: "7 years",
    },
];

export const crew: CrewType[] = [
    {
        id: 1,
        img: douglas,
        name: "Douglas Hurley",
        description:
            "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        job: "Commander",
    },
    {
        id: 2,
        img: mark,
        name: "MARK SHUTTLEWORTH",
        description:
            "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        job: "Mission Specialist ",
    },
    {
        id: 3,
        img: victor,
        name: "Victor Glover",
        description:
            "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        job: "PILOT ",
    },
    {
        id: 4,
        img: ansari,
        name: "Anousheh Ansari",
        description:
            "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        job: "Flight Engineer ",
    },
];

export const navbar: string[] = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
