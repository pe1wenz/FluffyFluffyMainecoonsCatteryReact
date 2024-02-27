import litterFCoverImage from '../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith1.jpeg'

import Faith4W1 from '../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith1.jpeg';
import Faith4W2 from '../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith2.jpeg';
import Faith4W3 from '../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith3.jpeg';
import Faith4W4 from '../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith4.jpeg';
import Faith4W5 from '../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith5.jpeg';
import Faith4W6 from '../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith6.jpeg';

import Faith6W1 from '../assets/images/litter-images/litter-f/Faith/photos/6weeks/Faith1.jpeg';
import Faith6W2 from '../assets/images/litter-images/litter-f/Faith/photos/6weeks/Faith2.jpeg';
import Faith6W3 from '../assets/images/litter-images/litter-f/Faith/photos/6weeks/Faith3.jpeg';
import Faith6W4 from '../assets/images/litter-images/litter-f/Faith/photos/6weeks/Faith4.jpeg';
import Faith6W5 from '../assets/images/litter-images/litter-f/Faith/photos/6weeks/Faith5.jpeg';
import Faith6W6 from '../assets/images/litter-images/litter-f/Faith/photos/6weeks/Faith6.jpeg';

import Faith11W1 from '../assets/images/litter-images/litter-f/Faith/photos/11weeks/Faith1.jpeg';
import Faith11W2 from '../assets/images/litter-images/litter-f/Faith/photos/11weeks/Faith2.jpeg';
import Faith11W3 from '../assets/images/litter-images/litter-f/Faith/photos/11weeks/Faith3.jpeg';
import Faith11W4 from '../assets/images/litter-images/litter-f/Faith/photos/11weeks/Faith4.jpeg';
import Faith11W5 from '../assets/images/litter-images/litter-f/Faith/photos/11weeks/Faith5.jpeg';
import Faith11W6 from '../assets/images/litter-images/litter-f/Faith/photos/11weeks/Faith6.jpeg';

import Faith14W1 from '../assets/images/litter-images/litter-f/Faith/photos/14weeks/Faith1.jpeg';
import Faith14W2 from '../assets/images/litter-images/litter-f/Faith/photos/14weeks/Faith2.jpeg';
import Faith14W3 from '../assets/images/litter-images/litter-f/Faith/photos/14weeks/Faith3.jpeg';
import Faith14W4 from '../assets/images/litter-images/litter-f/Faith/photos/14weeks/Faith4.jpeg';
import Faith14W5 from '../assets/images/litter-images/litter-f/Faith/photos/14weeks/Faith5.jpeg';
import Faith14W6 from '../assets/images/litter-images/litter-f/Faith/photos/14weeks/Faith6.jpeg';

import Farley4W1 from '../assets/images/litter-images/litter-f/Farley/photos/4weeks/Farley1.jpeg';
import Farley4W2 from '../assets/images/litter-images/litter-f/Farley/photos/4weeks/Farley2.jpeg';
import Farley4W3 from '../assets/images/litter-images/litter-f/Farley/photos/4weeks/Farley3.jpeg';
import Farley4W4 from '../assets/images/litter-images/litter-f/Farley/photos/4weeks/Farley4.jpeg';
import Farley4W5 from '../assets/images/litter-images/litter-f/Farley/photos/4weeks/Farley5.jpeg';
import Farley4W6 from '../assets/images/litter-images/litter-f/Farley/photos/4weeks/Farley6.jpeg';

// const generateImagePaths = (litterNumber:string, prefix: string, age: string, count: number): string[] => {
//     return Array.from({ length: count }, (_, index) => require(`../assets/images/litter-images/${litterNumber}/${prefix}/photos/${age}/${prefix}${index + 1}.jpeg`).default);
// };

const generateImagePaths = (prefix: string, age: string, count: number): string[] => {
    return Array.from({ length: count }, (_, index) => {
        // Use the statically imported images
        return require(`../assets/images/litter-images/litter-f/${prefix}/photos/${age}/${prefix}${index + 1}.jpeg`).default;
    });
};

export const LitterFListingData = [
    {
        name: 'Faith',
        gender:'Female',
        color:'Black & White',
        birthday:'07/10/2023',
        availability:'Sold',
        path:'faith',
        litterName:'F',
        images:[
            {
                title: 'Miss.Faith',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Faith4W1,
                alt:'Miss Faith slide 1'
            },
            {
                title: 'Miss.Faith',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Faith4W2,
                alt:'Miss Faith slide 2'
            },
            {
                title: 'Miss.Faith',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Faith4W3,
                alt:'Miss Faith slide 3'
            },
            {
                title: 'Miss.Faith',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Faith4W4,
                alt:'Miss Faith slide 4'
            },
            {
                title: 'Miss.Faith',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Faith4W5,
                alt:'Miss Faith slide 5'
            },
            {
                title: 'Miss.Faith',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Faith4W6,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '6weeks',
                path: '',
                label: 'View Video',
                image: Faith6W1,
                alt:'Miss Faith slide'
            },
            {
                title: 'Miss.Faith',
                comment: '6weeks',
                path: '',
                label: 'View Video',
                image: Faith6W2,
                alt:'Miss Faith slide 2'
            },
            {
                title: 'Miss.Faith',
                comment: '6weeks',
                path: '',
                label: 'View Video',
                image: Faith6W3,
                alt:'Miss Faith slide 3'
            },
            {
                title: 'Miss.Faith',
                comment: '6weeks',
                path: '',
                label: 'View Video',
                image: Faith6W4,
                alt:'Miss Faith slide 4'
            },
            {
                title: 'Miss.Faith',
                comment: '6weeks',
                path: '',
                label: 'View Video',
                image: Faith6W5,
                alt:'Miss Faith slide 5'
            },
            {
                title: 'Miss.Faith',
                comment: '6weeks',
                path: '',
                label: 'View Video',
                image: Faith6W6,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '11weeks',
                path: '',
                label: 'View Video',
                image: Faith11W1,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '11weeks',
                path: '',
                label: 'View Video',
                image: Faith11W2,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '11weeks',
                path: '',
                label: 'View Video',
                image: Faith11W3,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '11weeks',
                path: '',
                label: 'View Video',
                image: Faith11W4,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '11weeks',
                path: '',
                label: 'View Video',
                image: Faith11W5,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '11weeks',
                path: '',
                label: 'View Video',
                image: Faith11W6,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '14weeks',
                path: '',
                label: 'View Video',
                image: Faith14W1,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '14weeks',
                path: '',
                label: 'View Video',
                image: Faith14W2,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '14weeks',
                path: '',
                label: 'View Video',
                image: Faith14W3,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '14weeks',
                path: '',
                label: 'View Video',
                image: Faith14W4,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '14weeks',
                path: '',
                label: 'View Video',
                image: Faith14W5,
                alt:'Miss Faith slide 6'
            },
            {
                title: 'Miss.Faith',
                comment: '14weeks',
                path: '',
                label: 'View Video',
                image: Faith14W6,
                alt:'Miss Faith slide 6'
            }
        ]
    }
    ,
    {
        name: 'Farley',
        gender:'Male',
        color:'Black & White',
        birthday:'07/10/2023',
        availability:'Sold',
        path:'farley',
        litterName:'F',
        images: [
            {
                title: 'Mr.Farley',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Farley4W1,
                alt:'Mr Farley slide'
            },
            {
                title: 'Mr.Farley',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Farley4W2,
                alt:'Mr Farley slide'
            },
            {
                title: 'Mr.Farley',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Farley4W3,
                alt:'Mr Farley slide'
            },
            {
                title: 'Mr.Farley',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Farley4W4,
                alt:'Mr Farley slide'
            },
            {
                title: 'Mr.Farley',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Farley4W5,
                alt:'Mr Farley slide'
            },
            {
                title: 'Mr.Farley',
                comment: '4weeks',
                path: '',
                label: 'View Video',
                image: Farley4W6,
                alt:'Mr Farley slide'
            },
        ],
    }
]

export const LittersListingData = [
    {
        litterName:'Litter F',
        litterCoverImage:litterFCoverImage,
        litterBirthday:'07/10/2023',
        litterLink:'litter-f',
        LitterFListingData
    }
    ,
    {
        litterName:'Litter F',
        litterCoverImage:litterFCoverImage,
        litterBirthday:'07/10/2023',
        litterLink:'litter-f',
        LitterFListingData
    }
]