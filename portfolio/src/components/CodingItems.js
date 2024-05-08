import PortfolioWebsite from '../Images/PortfolioWebsite.png';
import PortfolioWebsiteThumb from '../Images/PortfolioWebsiteThumb.png';
import VoteBot from '../Images/VoteBot.png';
import BalanceBot from '../Images/BalanceBot.png';
import Thotify1 from '../Images/Thotify1.png';
import Thotify2 from '../Images/Thotify2.png';
import Thotify3 from '../Images/Thotify3.png';
import Thotify4 from '../Images/Thotify4.png';
import Thotify5 from '../Images/Thotify5.png';
import Thotify6 from '../Images/Thotify6.png';
import ThotifyThumb from '../Images/ThotifyThumb.png';
import BeautyPlus from '../Images/Beauty_Plus.png';
import ParkingAppThumb from '../Images/ParkingAppThumb.png';
import ParkingApp1 from '../Images/ParkingApp1.png';
import ParkingApp2 from '../Images/ParkingApp2.png';
import ParkingApp3 from '../Images/ParkingApp3.png';

export default {
    images: [
        {id: 6,
            carousel: [ParkingApp1, ParkingApp2, ParkingApp3],
            thumb: ParkingAppThumb,
            link: "https://www.figma.com/file/G2I6Ch6BnQPilwrtgFLn7O/Untitled?type=design&node-id=101-826&mode=design&t=yDr4Fc2xnrDtSjAc-0",
            linkLabel: "Figma",
            alt: 'Web Design: Parking Assistant Mobile',
            text: 'A frontend design for a parking app, created for a contract with MindIT. Created in the spring of 2024, using Figma and then CSS.'
        },
        {id: 5,
            carousel: [BeautyPlus],
            thumb: BeautyPlus,
            link: "http://138.197.28.234/",
            linkLabel: "Beauty Plus Website",
            alt: 'Website: Beauty Plus',
            text: 'A website built for a contract with the Beauty Plus Network using Gatsby, React, and TypeScript, based on an older Wordpress site. Now hosted on a Digital Ocean Droplet, using NGINX and Ubuntu at https://beautyplusnetwork.org/'
        },
        {
            id: 4,
            carousel: [PortfolioWebsite],
            thumb: PortfolioWebsiteThumb,
            link: "https://github.com/jwood7/Portfolio-Site",
            linkLabel: "GitHub",
            alt: 'Website: Portfolio Site',
            text: 'A react app that displays my game design, art, and coding projects. Hosted on a Digital Ocean Droplet, using NGINX and Ubuntu. Created in the winter of 2023.',
        },
        {
            id: 3,
            carousel: [BalanceBot],
            thumb: BalanceBot,
            link: "https://github.com/jwood7/BalanceBot",
            linkLabel: "GitHub",
            alt: 'Discord Bot: Balance Bot',
            text: 'A discord bot that connects to two separate APIs to gather info on player stats, and then balances them between teams. Created in the fall of 2023.',
        },
        {
            id: 2,
            carousel: [VoteBot],
            thumb: VoteBot,
            link: "https://github.com/jwood7/VoteBot",
            linkLabel: "GitHub",
            alt: 'Discord Bot: Vote Bot',
            text: 'A discord bot that allows users to rate Counterstrike maps on a scale of 1-5 on the site stats.geekfestclan.com, and then displays the results. It also retrieves the workshop id of the map for admins to use to open the map in-game. Created in the summer of 2023.',
        },
        {
            id: 1,
            carousel: [Thotify1, Thotify2, Thotify3, Thotify4, Thotify5, Thotify6],
            thumb: ThotifyThumb,
            link:"https://github.com/jwood7/SpotifyMatchSite",
            linkLabel: "GitHub",
            alt: 'Website: Spotify Matching Site',
            text: 'A website that matches you with a friend based on your Spotify listening history. Created for Web Development III in Fall 2022.',
        },
        
    ]
};