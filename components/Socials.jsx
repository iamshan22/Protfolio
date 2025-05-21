"use client";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

const socialLinks = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/share/16TXz8vkgD/",
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: "https://www.instagram.com/shan__kona?igsh=MW40OWowa3BwNzA1Ng==",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/iamshan22",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/shan-kona",
  },
];

const Socials = ({ containerStyles, iconStyle }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.path}
          className={iconStyle}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
