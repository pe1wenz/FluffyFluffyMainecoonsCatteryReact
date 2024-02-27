import ImageOne from '../assets/images/slider_imgs/slider_img1.jpeg'
import ImageTwo from '../assets/images/slider_imgs/slider_img2.jpeg'
import ImageThree from '../assets/images/slider_imgs/slider_img3.jpeg'
import ImageFour from '../assets/images/slider_imgs/slider_img4.jpeg'

export const SliderData = [
    {
        title: 'Kittens',
        comment: 'See Our Current and Past Kittens',
        path: '/kittens',
        label: 'View Kittens',
        image: ImageOne,
        alt:'home kitten slide'
    },
    {
        title: 'Our Cats',
        comment: 'See Our Lovely King and Queens',
        path: '/our-cats',
        label: 'View',
        image: ImageTwo,
        alt:'home king and queens slide'
    },
    {
        title: 'Owning',
        comment: 'Information about owning our kittens',
        path: '/owning',
        label: 'View',
        image: ImageThree,
        alt:'home owning information slide'
    },
    {
        title: 'About Us',
        comment: 'Information about us',
        path: '/about-us',
        label: 'Who we are',
        image: ImageFour,
        alt:'home about us information slide'
    }
]