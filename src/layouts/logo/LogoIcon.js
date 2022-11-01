import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import LogoDark from "../../../assets/images/logos/logo-dark.svg";

const LogoIcon = () => {
  return (
    <Link href="/">
      <Image width={20} height={20} src={LogoDark} alt={LogoDark} />
    </Link>
  );
};

export default LogoIcon;
