import { FaFacebook,  FaLinkedin, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from "react-icons/ri";
export const medias = [
  {
    icon: FaFacebook,  // Icon component
    color: 'text-blue-600', // Tailwind CSS color class
    link: 'https://www.facebook.com' // Social media profile URL
  },
  {
    icon: RiTwitterXLine ,
    color: 'text-blue-400',
    link: 'https://www.twitter.com/yourprofile'
  },
  {
    icon: FaInstagram,
    color: 'text-pink-600',
    link: 'https://www.instagram.com/skillontime/'
  },
  // Add more social media icons and links as needed
  {
    icon: FaLinkedin,
    color: 'text-blue-600',
    link: 'https://www.linkedin.com/company/skill-on-time/'
  },
];

