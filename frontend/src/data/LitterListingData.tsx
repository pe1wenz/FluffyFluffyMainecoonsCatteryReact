import litterFCoverImage from '../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith3.jpeg'
export const LitterFListingData = [
    {
        name: 'Faith',
        gender:'Female',
        birthday:'07/10/2023',
        availability:'Sold',
        path:'/faith',
        images:[
            {
                age: '4weeks',
                ...Array.from({length: 6}, (_, index) => ({
                    [`FaithFourWeeksImage${index + 1}`]: require(`../assets/images/litter-images/litter-f/Faith/photos/4weeks/Faith${index + 1}.jpeg`).default,
                })),
            }
            // },
            // {
            //     age: '6weeks',
            //     ...Array.from({ length: 6 }, (_, index) => ({
            //         [`FaithSixWeeksImage${index + 1}`]: require(`../assets/images/litter-images/litter-f/Faith/photos/6weeks/Faith${index + 1}.jpeg`).default,
            //     })),
            // },
            // {
            //     age: '11weeks',
            //     ...Array.from({ length: 6 }, (_, index) => ({
            //         [`FaithElevenWeeksImage${index + 1}`]: require(`../assets/images/litter-images/litter-f/Faith/photos/11weeks/Faith${index + 1}.jpeg`).default,
            //     })),
            // },
            // {
            //     age: '14weeks',
            //     ...Array.from({ length: 6 }, (_, index) => ({
            //         [`FaithFourteenWeeksImage${index + 1}`]: require(`../assets/images/litter-images/litter-f/Faith/photos/14weeks/Faith${index + 1}.jpeg`).default,
            //     })),
            // }
        ]
    }
]

export const LittersListingData = [
    {
        litterName:'Litter F',
        litterCoverImage:litterFCoverImage,
        litterBirthday:'07/10/2023',
        litterLink:'/litter-f',
        LitterFListingData
    }
    ,
    {
        litterName:'Litter F',
        litterCoverImage:litterFCoverImage,
        litterBirthday:'07/10/2023',
        litterLink:'/litter-f',
        LitterFListingData
    }
    ,
    {
        litterName:'Litter F',
        litterCoverImage:litterFCoverImage,
        litterBirthday:'07/10/2023',
        litterLink:'/litter-f',
        LitterFListingData
    },
    {
        litterName:'Litter F',
        litterCoverImage:litterFCoverImage,
        litterBirthday:'07/10/2023',
        litterLink:'/litter-f',
        LitterFListingData
    }
]