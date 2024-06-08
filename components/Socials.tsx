
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTelegram, FaInstagram, FaFacebook} from "react-icons/fa"
const social = [
  {icon : <FaGithub/>, path: "https://github.com/ahmdriyo"},
  {icon : <FaLinkedinIn/>, path: "https://www.linkedin.com/in/ahmd-riyo/"},
  {icon : <FaFacebook/>, path: "https://web.facebook.com/profile.php?id=100027316463821"},
  {icon : <FaInstagram/>, path: "https://www.instagram.com/ahmd_riyo/?hl=id"},
]

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}
const Socials: React.FC <SocialProps> = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item,index) => {
        return(
          <Link
          key={index}
          href={item.path}
          target="_blank"
          className={iconStyles}
          >
          {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials