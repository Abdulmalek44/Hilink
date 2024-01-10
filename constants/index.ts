import person1 from "../public/person-1.png";
import person2 from "../public/person-2.png";
import person3 from "../public/person-3.png";
import person4 from "../public/person-4.png";
import map from "../public/map.svg";
import calendar from "../public/calendar.svg";
import tech from "../public/tech.svg";
import location from "../public/location.svg";
import facebook from "../public/facebook.svg";
import instagram from "../public/instagram.svg";
import twitter from "../public/twitter.svg";
import youtube from "../public/youtube.svg";
import wordpress from "../public/wordpress.svg";


// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
    person1,
    person2,
    person3,
    person4,

];

// FEATURES SECTION
export const FEATURES = [
    {
        title: 'Real maps can be offline',
        icon: map,
        variant: 'green',
        description:
            'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
        title: 'Set an adventure schedule',
        icon: calendar,
        variant: 'green',
        description:
            "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
        title: 'Technology using augment reality',
        icon: tech,
        variant: 'green',
        description:
            'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
        title: 'Many new locations every month',
        icon: location,
        variant: 'orange',
        description:
            'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
    {
        title: 'Learn More',
        links: [
            'About Hilink',
            'Press Releases',
            'Environment',
            'Jobs',
            'Privacy Policy',
            'Contact Us',
        ],
    },
    {
        title: 'Our Community',
        links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Admin Officer', value: '123-456-7890' },
        { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
};

export const SOCIALS = {
    title: 'Social',
    links: [
        facebook,
        instagram,
        twitter,
        youtube,
        wordpress,
    ],
};