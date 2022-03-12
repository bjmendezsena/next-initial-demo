import React, { FC } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: FC<{ text: string; href: string }> = ({
  text,
  href,
}) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : {}}>{text}</a>
    </Link>
  );
};
