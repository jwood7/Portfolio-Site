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
import lilpig1 from "../Images/lilpig1.jfif";
import lilpig2 from "../Images/lilpig2.jfif";
import lilpig3 from "../Images/lilpig3.jfif";
import lilpig4 from "../Images/lilpig4.jfif";
import lilpigthumb from "../Images/lilpigthumb.jpg";
import BlockProgramming from "../Images/BlockProgrammer.png";
import BlockProgrammingThumb from "../Images/BlockProgrammerThumb.png";

export default {
    images: [
        {
            id: 0,
            carousel: [lilpig1, lilpig2, lilpig3, lilpig4],
            link: "https://steamcommunity.com/sharedfiles/filedetails/?id=3072567312",
            linkLabel: "Steam Workshop Page",
            thumb: lilpigthumb,
            alt: 'Counter-Strike 2 Map: Lil Pig',
            text: "A CS2 map built in the Hammer editor, created in Fall 2023.\nThis map features a rudimentary minimap, some destructible objects on the top floor (the books and the statues), long sight lines for snipers on the ground and top floor, and vents and close combat in the basement. \nIt is meant for the classic game mode, as it has two bomb sites."
        },
        {
            id: 1,
            carousel: [Orbit1, Orbit2, Orbit3, Orbit4, Orbit5],
            link: "https://yakobay.itch.io/orbit",
            linkLabel: "Itch.io",
            thumb: OrbitThumb,
            alt: 'Unity 3D Game:  Orbit',
            text: 'A 3d space flight game made in Unity, initially for Game Design III at Stevens Institute of Technology in Spring 2023. I created this game because I wanted to build something that leveraged Unity’s space physics capabilities while providing an engaging and non-violent adventure game. \nPlatform:  Unity',
        },
        {
            id: 2,
            carousel: [Jo1, Jo2, Jo3, Jo4],
            link: "https://yakobay.itch.io/jo-the-space-janitor",
            linkLabel: "Itch.io",
            thumb: JoThumb,
            alt: 'Unity 3D Game:  Jo The Space Janitor 3D',
            text: "Final project made for Game Design II at Stevens Institute of Technology in Spring 2022. Designed as a narrative prequel to Frank's Cleaning Service, It is a Unity3D game where you vacuum up slime, upgrade a vacuum, and open doors.",
        },
        {
            id: 3,
            carousel: [FranksCleaning1, FranksCleaning2, FranksCleaning3],
            link: "https://yakobay.itch.io/franks-cleaning-service",
            linkLabel: "Itch.io",
            thumb: FranksCleaningThumb,
            alt: "Unity 3D Game:  Frank’s Cleaning Service",
            text: "Final project made for Game Design I at Stevens Institue of Technology in Fall 2021. A 2D platformer made in Unity where you play as a space janitor who cleans up slime and uses a vacuum to fly, while uncovering a space station's mysteries.",
        },
        {
            id: 4,
            carousel: [Davis],
            link: "https://yakobay.itch.io/davis-kitchen",
            linkLabel: "Itch.io",
            thumb: DavisThumb,
            alt: 'Unity Scene:  Davis Kitchen',
            text: 'A 3D environment made in Unity, based off of the kitchen in my freshman dorm. Created for Game Design II at Stevens Institute of Technology in Spring 2022. '
        },
        {
            id: 5,
            carousel: [FreeTheFish],
            link: "https://yakobay.itch.io/free-the-fish",
            linkLabel: "Itch.io",
            thumb: FreeTheFishThumb,
            alt: 'Unity 2D Level: Free The Fish',
            text: 'Created as a point-and-click/escape room game for Game Design I at Stevens Institute of Technology in Fall 2021. Made in Unity.'
        },
        {
            id: 6,
            carousel: [Alice],
            link: "https://yakobay.itch.io/alice-in-wonderland",
            linkLabel: "Itch.io",
            thumb: AliceThumb,
            alt: 'Bitsy Game: Alice In Wonderland',
            text: 'A bitsy recreation of Alice in Wonderland, made in Fall 2021 for Game Design I at Stevens Institute of Technology.'
        },
        {
            id: 7,
            carousel: [ThreeLittlePigs],
            link: "https://yakobay.itch.io/three-little-pigs",
            linkLabel: "Itch.io",
            thumb: ThreeLittlePigs,
            alt: 'Three Little Pigs',
            text: 'A bitsy recreation of The Three Little Pigs, made in Fall 2021 for Game Design I at Stevens Institute of Technology.'
        },
        {
            id: 8,
            link: "https://youtu.be/g6uI4D60Q2c",
            linkLabel: "Youtube",
            carousel: [StealthPlatformer],
            thumb: StealthPlatformerThumb,
            alt: "Unity 2D Demo: Vietnamese Historical Stealth Platformer",
            text: "A demo for a 2D stealth platformer that takes place in a historical Vietnam setting. Created in Unity, December 2018",
        },
        {
            id: 9,
            link: "https://github.com/jwood7/Block-Programming-Platformer",
            linkLabel: "GitHub",
            carousel: [BlockProgramming],
            thumb: BlockProgrammingThumb,
            alt: "Unity 2D Prototype: Block-Porgramming Platformer",
            text: "Prototype created for a pre-college game design course at Parsons School of Design\nIn the game, the player controls a robot through platforming puzzles with 'programmable' objects The player uses collectable 'code chunks' to program the objects, giving basic directions such as movement to the objects, as well as basic coding concepts such as loops.\nThe intention is to teach players basic coding concepts, by familiarizing them with block programming using the puzzles. \nCreated in Unity, Summer 2018",
        },
        
    ]
};