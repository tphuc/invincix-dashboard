import TeltoLogo from "@/public/logos/TeltoLogo.svg";
import LoginLock from "@/public/images/LoginLock.svg";
import Invincix from "@/public/images/Invincix.svg";
import BottomHero from "@/public/images/BottomHero.svg";
import Geninvinci from "@/public/images/geninvinci.svg";
import Hero from "@/public/images/Hero2.png";
import LoginLine1 from "@/public/images/LoginLine1.svg";
import LoginLine2 from "@/public/images/LoginLine2.svg";
import AUnitInvincix from "@/public/images/AUnitInvincix.svg";
import GreetingRobotLeft from "@/public/images/GreetingRobotLeft.svg";
import AgileOfficeLogo from "@/public/images/AgileOffice-logo.svg";
import Image from "next/image";
import "./styles.css";
import ThemeButton from "@/components/theme-button";
import LanguageButton from "@/components/language-button";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {

  return (
    <div className="bg-secondary min-h-screen min-w-screen p-0 md:p-4 text-white overflow-hidden flex items-center justify-center">
      <div className="min-h-[calc(100vh-2rem)] bg-sky-800  min-w-[calc(100vw-2rem)] max-w-[calc(100vw-2rem)] py-4 px-4 rounded-lg bg-[#1D2026] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex flex-row ">
            <Image
              src={Geninvinci}
              alt=""
              className="h-[60px] md:h-[40px] w-auto pl-5"
              width={100}
              height={40}
            />
            <div className="hidden md:block relative top-[-20px] ml-10">
              <Image src={LoginLine1} alt="line" />
            </div>
            {/* <p>{t("telto_brief")}</p> */}
          </div>
          {/* <div className="hidden md:block relative top-[-20px] left-[-20%]">
            <Image src={LoginLine1} alt="line" />
          </div> */}
          {/* <div className="flex items-center space-x-3">
            <ThemeButton />
            <LanguageButton locale={params.locale} />
          </div> */}
        </div>
        <div className="grid grid-cols-3 gap-0">
          <div className="hidden md:block md:col-span-2 relative z-10">
            <div className="flex justify-end relative right-[200px]">
              <Image src={Hero} alt="Tools vector" />
            </div>
            {/* <div className="absolute left-[-25px] top-[30%] scale-110 z-10">
              <Image src={LoginLine2} alt="line" />
            </div> */}
          </div>

          <div className="col-span-3 md:col-span-1">
            <div className="rounded-lg bg-gradient-to-b from-blue-800 to-cyan-600 pt-8">
              <div className="flex items-center justify-center">
                <Image src={LoginLock} alt="Lock" />
              </div>
              <div className="relative z-50">{children}</div>
            </div>
          </div>
        </div>

        <div className="relative w-full flex px-4 items-end justify-between">
          <div className="relative space-y-1 z-30">
            <Image src={Invincix} alt="product logo" />
            <p>{"Simplicity is our culture and simplification is what we do"}</p>
          </div>

          <div className="absolute flex items-center justify-center -bottom-4 left-0 w-full">
            <Image
              width={200}
              height={200}
              className="w-auto h-[200px] opacity-100"
              src={BottomHero}
              alt="product logo"
            />
          </div>

          <div className="flex space-x-3 items-end">
            <p>©2024 Invincix. All Rights Reserved.</p>

            {/* <Image src={AUnitInvincix} alt="Invincix Unit" /> */}
            <div className="">
              <Image src={GreetingRobotLeft} alt="greeting robot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
