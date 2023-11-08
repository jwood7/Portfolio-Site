import StealthPlatformer from '../Images/stealth_platformer.png';
import StealthPlatformerThumb from '../Images/stealth_platformer_thumb.png';
import ThreeLittlePigs from '../Images/Three Little Pigs.png';
import Alice from '../Images/Alice In Wonderland.png';
import AliceThumb from '../Images/Alice In Wonderland Thumb.png';
import FreeTheFish from '../Images/Free The Fish.png';
import FreeTheFishThumb from '../Images/Free The Fish Thumb.png';
import Davis from '../Images/Davis Kitchen.png';
import DavisThumb from '../Images/Davis Kitchen Thumb.png';
import FranksCleaning1 from "../Images/Frank's Cleaning Service 1.png";
import FranksCleaning2 from "../Images/Frank's Cleaning Service 2.png";
import FranksCleaning3 from "../Images/Frank's Cleaning Service 3.png";
import FranksCleaningThumb from "../Images/Frank's Cleaning Service Thumb.png";
import Jo1 from "../Images/jo1.png";
import Jo2 from "../Images/jo2.png";
import Jo3 from "../Images/jo3.png";
import Jo4 from "../Images/jo4.png";
import JoThumb from "../Images/jothumb.png";
import Orbit1 from "../Images/Orbit Screenshot 1.png";
import Orbit2 from "../Images/Orbit Screenshot 2.png";
import Orbit3 from "../Images/Orbit Screenshot 3.png";
import Orbit4 from "../Images/Orbit Screenshot 4.png";
import Orbit5 from "../Images/Orbit Screenshot 5.png";
import OrbitThumb from "../Images/Orbit Thumb.png";

export default {
    images: [
        {
            id: 1,
            carousel: [Orbit1, Orbit2, Orbit3, Orbit4, Orbit5],
            link: "https://yakobay.itch.io/orbit",
            thumb: OrbitThumb,
            alt: 'Orbit Game',
            text: 'A 3d space flight game made in Unity, initially for Game Design III at Stevens Institute of Technology in Spring 2023.',
        },
        {
            id: 2,
            carousel: [Jo1, Jo2, Jo3, Jo4],
            link: "https://yakobay.itch.io/jo-the-space-janitor",
            thumb: JoThumb,
            alt: 'Jo The Space Janitor 3D',
            text: 'Final project made for Game Design II at Stevens Institute of Technology in Spring 2022. A Unity3D game where you vacuum up slime, upgrade a vacuum, and open doors.',
        },
        {
            id: 3,
            carousel: [FranksCleaning1, FranksCleaning2, FranksCleaning3],
            link: "https://yakobay.itch.io/franks-cleaning-service",
            thumb: FranksCleaningThumb,
            alt: "Frank's Cleaning Service",
            text: 'Final project made for Game Design I at Stevens Institue of Technology in Fall 2021. A 2D platformer made in Unity where you play as a space janitor who cleans up slime and uses a vacuum to fly.',
        },
        {
            id: 4,
            carousel: [Davis],
            link: "https://yakobay.itch.io/davis-kitchen",
            thumb: DavisThumb,
            alt: 'Davis Kitchen',
            text: 'A 3D environment made in Unity, created for Game Design II at Stevens Institute of Technology in Spring 2022. '
        },
        {
            id: 5,
            carousel: [FreeTheFish],
            link: "https://yakobay.itch.io/free-the-fish",
            thumb: FreeTheFishThumb,
            alt: 'Free The Fish',
            text: 'Created as a point-and-click/escape room game for Game Design I at Stevens Institute of Technology in Fall 2021. Made in Unity.'
        },
        {
            id: 6,
            carousel: [Alice],
            link: "https://yakobay.itch.io/alice-in-wonderland",
            thumb: AliceThumb,
            alt: 'Alice In Wonderland',
            text: 'A bitsy recreation of Alice in Wonderland, made in Fall 2021 for Game Design I at Stevens Institute of Technology.'
        },
        {
            id: 7,
            carousel: [ThreeLittlePigs],
            link: "https://yakobay.itch.io/three-little-pigs",
            thumb: ThreeLittlePigs,
            alt: 'Three Little Pigs',
            text: 'A bitsy recreation of The Three Little Pigs, made in Fall 2021 for Game Design I at Stevens Institute of Technology.'
        },
        {
            id: 8,
            link: "https://youtu.be/g6uI4D60Q2c",
            carousel: [StealthPlatformer],
            thumb: StealthPlatformerThumb,
            alt: "Vietnamese Historical Stealth Platformer Demo",
            text: "... Created in Unity, December 2018",
        },
        
    ]
};