import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import * as PATH from "@/const/paths";

import { authOptions } from "@/const/authOptions";



export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

 return session?.user
}

export async function validateUserPath() {
  const user = await getCurrentUser();
  // const userRole = first(user?.transformedData)?.rolename || user?.user_type;
  // console.log(
  //   "🚀 ~ file: index.ts:16 ~ validateUserPath ~ userRole:",
  //   userRole
  // );

  if (!user) {
    redirect(PATH.LOGIN);
  } else {
    redirect('/employee')
  }
}

export function millisToMinutesAndSeconds(millis: any) {
  var minutes = Math.floor(millis / 60000);
  var seconds: any = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export function convertMinutes(minutes: any) {
  let days = Math.floor(minutes / 1440); // 1 day = 1440 minutes
  let hours = Math.floor((minutes % 1440) / 60); // 1 hour = 60 minutes
  let remainingMinutes = minutes % 60;

  if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""}${hours > 0 ? `, ${hours} hour${hours > 1 ? "s" : ""}` : ""
      }${remainingMinutes > 0
        ? `, ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`
        : ""
      }`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}${remainingMinutes > 0
        ? `, ${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`
        : ""
      }`;
  } else {
    return `${remainingMinutes} minute${remainingMinutes > 1 ? "s" : ""}`;
  }
}
