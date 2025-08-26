import React from "react";
import Image from "next/image";
import whitelogoImage from "../../public/images/logo.png";
import darkLogoImage from "../../public/images/logo-dark.png";
import mobileLogo from "../../public/images/pre-logo.png";

export default function Logo() {
  return (
    <div className="cursor-pointer">
      <Image src={whitelogoImage} width={230} height={60} alt="Logo" />
    </div>
  );
}
