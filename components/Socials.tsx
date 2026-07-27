
import TrackingLink from "@/components/tracking/tracking-link";
import type { TrackingActionKey } from "@/types/tracking";
import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook} from "react-icons/fa"

const social: {
  actionKey: TrackingActionKey;
  label: string;
  icon: React.ReactNode;
  path: string;
}[] = [
  {actionKey: "github", label: "GitHub", icon : <FaGithub/>, path: "https://github.com/ahmdriyo"},
  {actionKey: "linkedin", label: "LinkedIn", icon : <FaLinkedinIn/>, path: "https://www.linkedin.com/in/ahmd-riyo/"},
  {actionKey: "facebook", label: "Facebook", icon : <FaFacebook/>, path: "https://web.facebook.com/profile.php?id=100027316463821"},
  {actionKey: "instagram", label: "Instagram", icon : <FaInstagram/>, path: "https://www.instagram.com/ahmd_riyo/?hl=id"},
]

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}
const Socials: React.FC <SocialProps> = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item) => {
        return(
          <TrackingLink
          key={item.actionKey}
          actionKey={item.actionKey}
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={iconStyles}
          >
          {item.icon}
          </TrackingLink>
        )
      })}
    </div>
  )
}

export default Socials
