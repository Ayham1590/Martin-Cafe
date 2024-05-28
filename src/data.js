// import icons
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
// import images
import AboutImg from '../src/assets/img/about/plate.png';
import ModelWhiteImg from '../src/assets/img/model-white.png';
import ModelBlackImg from '../src/assets/img/model-black.png';
import MenuImg1 from '../src/assets/img/menu/food1.jpeg';
import MenuImg2 from '../src/assets/img/menu/food2.jpg';
import MenuImg3 from '../src/assets/img/menu/food3.jpg';
import MenuImg4 from '../src/assets/img/menu/food4.jpg';
import MenuImg5 from '../src/assets/img/menu/more.jpg';
import TeamImg from '../src/assets/img/team/team.png';
import Avatar1 from '../src/assets/img/testimonial/avatar1.png';
import Avatar2 from '../src/assets/img/testimonial/avatar2.png';
import Avatar3 from '../src/assets/img/testimonial/avatar3.png';

export const navData = [
  { href: '', name: 'home' },
  { href: '', name: 'about' },
  { href: '', name: 'menu' },
  { href: '', name: 'team' },
  { href: '', name: 'contact' },
];

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Martin Cafe',
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Find out more',
};

export const socialData = [

  { href: 'https://www.facebook.com/martincafe.pattaya?mibextid=LQQJ4d', target: "_blank", icon: <FaFacebookF /> },
  { href: 'https://www.instagram.com/martincafesws/?igshid=MjkzY2Y1YTY%3D&fbclid=IwAR3zpu7r6BwbWTMwO2T_kyMZLIkvOfH3-S5EOqQ7NkkZyNFrb7lkeCgl-VM', icon: <FaInstagram /> },
  { href: 'https://www.tiktok.com/@martincafethailand?_t=8a45pAkUYZF&_r=1&fbclid=IwAR3O0Xl2dZxiIW4bx9VPDLMW1qlnyK1MjrpolHwfyQWZvnGlvrxeJwTrHWI', icon: <FaTiktok /> },
];

export const aboutData = {
  pretitle: 'our story',
  title: 'who we are',
  subtitle:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur, quasi minima molestiae ex exercitationem culpa quisquam architecto quaerat, iusto dolores labore, sapiente magni rem commodi aperiam ad dolorem neque ducimus. Placeat vel non quod quis pariatur a aperiam, aliquam adipisci voluptatum voluptatem sit cupiditate dolore natus beatae earum omnis.',
  btnText: 'find out more',
  image: AboutImg,
};

export const menuData = {
  title: 'delicious flavour of autumn',
  subtitle: 'view all menu for tasty meal today',
  btnText: 'view complete menu',
  modelImg: MenuImg5,
  menuItems: [
    {
      image: MenuImg1,
      name: 'Chocolate Waffle',
      price: '฿120',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg2,
      name: 'Iced Coffee',
      price: '฿85',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg3,
      name: 'Tuna Croissant',
      price: '฿145',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
    {
      image: MenuImg4,
      name: 'Waffle & Coffee Set',
      price: '฿160',
      description: 'Class aptent taciti ciosqu litora torquent per',
    },
  ],
};

export const teamData = {
  pretitle: 'our team',
  title: 'meet our team',
  sub1: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci repudiandae enim ratione corrupti voluptatum suscipit distinctio dolor.',
  sub2: 'Sequi exercitationem quae deserunt reiciendis nesciunt perferendis atque quisquam, odit facere! Minima esse reiciendis, magnam fugiat totam maxime consequatur perspiciatis voluptas consequuntur.',
  teamImg: TeamImg,
};

export const testimonialData = {
  title: "what client's say ",
  subtitle: '1500+ statisfied clients',
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar1,
      name: 'Rick Thompson',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar2,
      name: 'John Doe',
      occupation: 'CEO of Delightful',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quas ipsum eius voluptatibus. Quod ipsum ullam id facere a beatae incidunt eaque, veritatis architecto cum perferendis debitis tempora.',
      image: Avatar3,
      name: 'Henry A.',
      occupation: 'CEO of Delightful',
    },
  ],
};


export const footerData = {
  contact: {
    title: 'contact location',
    address: 'Chalerm Prakiat Soi 67, SWS Building',
    phone: '06 1491 4408',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: 'https://www.facebook.com/martincafe.pattaya?mibextid=LQQJ4d', icon: <FaFacebookF /> },
      { href: 'https://www.instagram.com/martincafesws/?igshid=MjkzY2Y1YTY%3D&fbclid=IwAR3zpu7r6BwbWTMwO2T_kyMZLIkvOfH3-S5EOqQ7NkkZyNFrb7lkeCgl-VM', icon: <FaInstagram /> },
      { href: 'https://www.tiktok.com/@martincafethailand?_t=8a45pAkUYZF&_r=1&fbclid=IwAR3O0Xl2dZxiIW4bx9VPDLMW1qlnyK1MjrpolHwfyQWZvnGlvrxeJwTrHWI', icon: <FaTiktok /> },
    ],
  },
};
