"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
// import { useRouter } from "next/router";

type Props = {
  children?: ReactNode;
  session: any; // new change
};

const AuthProvider = ({ children, session }: Props) => {
  // const path = usePathname();
  // let sessionN = Cookies.get("session");

  // if (path === "/login" && sessionN) {
  //   redirect("/dashboard/overview");
  // } else if (!sessionN && path !== "/login") {
  //   redirect("/login");
  // }
  
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
