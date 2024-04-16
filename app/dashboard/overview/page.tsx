import { Card } from "@tremor/react";
import Image from "next/image";
import LeadershipNote from "@/public/images/LeadershipNote.svg";
import EIIE from "@/public/images/EIIE.svg";
import OperationEfficiencyIndex from "./OperationEfficiencyIndex";
import { ArrowTopLeftIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { getCurrentUser } from "@/utils";
const leadershipTeams = [
  {
    url: "/profile/abhijit.jpg",
    name: "Abhijit",
    position: "Chief Mentor",
  },
  {
    url: "/profile/suraj.png",
    name: "Suraj",
    position: "Technology Anchor",
  },
  {
    url: "/profile/manas.jpg",
    name: "Manas",
    position: "Enterprise Anchor",
  },
  {
    url: "/profile/rakesh.jpg",
    name: "Rakesh",
    position: "UX Anchor",
  },
  {
    url: "/profile/wj.png",
    name: "Wai Jeat",
    position: "SME",
  },
  {
    url: "/profile/niranjan.jpeg",
    name: "Niranjan",
    position: "Delivery Anchor",
  },
  {
    url: "/profile/sanjit.jpeg",
    name: "Sanjeet",
    position: "QA Anchor",
  },
  {
    url: "/profile/sailesh.png",
    name: "Sailesh",
    position: "Data Anchor",
  },

  {
    url: "/profile/aman.jpg",
    name: "Aman",
    position: "Country Head, Vietnam",
  },
  {
    url: "/profile/subhabrata.png",
    name: "Subhabrata",
    position: "Technical Architect",
  },
  {
    url: "/profile/ashutosh.png",
    name: "Ashutosh",
    position: "Technical Architect",
  },
  {
    url: "/profile/ajit.jpg",
    name: "Ajit",
    position: "Development Lead, Vietnam",
  },

];

export default async function Page() {
  const user = await getCurrentUser()
  console.log(79, user)
  return (
    <div className="flex overflow-visible pt-10 w-full ">
      <div className="w-full align-start grid  grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8 h-full flex flex-col space-y-6">
          <div className="relative w-full h-full bg-indigo-500/50 p-4 min-h-[300px] rounded-lg space-y-2">
            <h1 className="text-4xl  text-cyan-300 pl-4 font-bold">
              Leadership Note
            </h1>
            <div className="p-6 space-y-2 pt-16 mr-[40%]">
              <p className="text-lg font-light">
                One of the things that never ceases to amaze us, is the lengths
                that most people go to overcomplicate even the simplest of
                problem statements.
              </p>

              <p className="text-lg font-light">
                Complexity confuses people. It undermines their confidence and
                is not just any enemy of execution, as Tony Robbins says, but it
                is one of the mortal enemies of success.
              </p>
            </div>
            <Image
              className="absolute bottom-4 opacity-50 right-4 z-1"
              width={200}
              height={200}
              src={LeadershipNote}
              alt=""
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 space-y-2 p-4 bg-sky-900/20 rounded-xl">
          {/* <h1 className='text-4xl  text-amber-300 -mt-10 font-heading'>Leadership Team</h1> */}

          <Image
            className="w-full"
            width={400}
            height={400}
            src={EIIE}
            alt=""
          />
          {/* <p className='text-3xl font-heading'>One of the things that never ceases to amaze us, is the lengths that most people go to overcomplicate even the simplest of problem statements.
          </p>
          <p className='text-3xl font-heading'>Complexity confuses people. It undermines their confidence and is not just any enemy of execution, as Tony Robbins says, but it is one of the mortal enemies of success.
          </p> */}
        </div>

        <div className="relative bg-sky-900/20 col-span-12 space-y-2 rounded-xl ">
          <h1 className="text-4xl p-6 font-bold">Leadership Team</h1>
          <div className="w-full relative py-6 flex items-stretch overflow-x-scroll scrollbar-hide gap-4 px-4">
            {leadershipTeams?.map((item) => (
              <div
                key={item?.name}
                className="text-center space-y-1 flex flex-col items-center min-w-[120px] h-full"
              >
                <Image
                  alt=""
                  className="w-[100px] aspect-square bg-sky-100 rounded-full border-2 border-sky-700"
                  src={item?.url}
                  width={140}
                  height={140}
                />
                <p>{item?.name}</p>
                <p className="text-secondary-foreground text-sm">
                  {item?.position}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-sky-900/20 col-span-12 space-y-2 rounded-xl ">
          <h1 className="text-4xl p-6 font-bold">Journey so far</h1>
          <div className="relative py-6 flex items-stretch overflow-x-scroll scrollbar-hide gap-4 px-4">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-teal-400 font-bold text-xl">2017</p>
              <div className="w-10 h-10 border-[10px] z-10 bg-section border-teal-500 rounded-full" />
              <div className="bg-teal-600/50 rounded-xl p-4 text-center w-[200px] space-y-6">
                <p className="text-yellow-400 text-xl">Incepted</p>
                <p>Idea of GENINVINCI and INVINCIX is incepted by few brains</p>
              </div>
              <div className="relative w-full space-y-2">
                <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-4 py-1 w-full">
                  <Image
                    src={`/client/invincix_bhu.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="text-teal-400 font-bold text-xl">2018</p>
              <div className="w-10 h-10 border-[10px] z-10 bg-section border-teal-500 rounded-full" />
              <div className="bg-teal-600/50 rounded-xl p-4 text-center w-[200px] space-y-6">
                <p className="text-yellow-400 text-xl">Discovered</p>
                <p>Registered and 1st partner onboarded</p>
              </div>
              <div className="relative w-full space-y-2">
                <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-4 py-1 w-full">
                  <Image
                    src={`/client/sindia.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="text-teal-400 font-bold text-xl">2019</p>
              <div className="w-10 h-10 border-[10px] z-10 bg-section border-teal-500 rounded-full" />
              <div className="bg-teal-600/50 rounded-xl p-4 text-center w-[200px] space-y-6">
                <p className="text-yellow-400 text-xl">Partnered</p>
                <p>Global partnership, product conceptualization</p>
              </div>
              <div className="relative w-full space-y-2">
                <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-4 py-1 w-full">
                  <Image
                    src={`/client/odisha.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-6 py-1 w-full">
                  <Image
                    src={`/client/invincix_sing.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-[6px] px-4 py-2 w-full">
                  <Image
                    src={`/client/NeuralSpace_2019.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="text-teal-400 font-bold text-xl">2020</p>
              <div className="w-10 h-10 border-[10px] z-10 bg-section border-teal-500 rounded-full" />
              <div className="bg-teal-600/50 rounded-xl p-4 text-center w-[200px] space-y-6">
                <p className="text-yellow-400 text-xl">Engaged</p>
                <p>15+ international customers engaged with us</p>
              </div>
              <div className="relative w-full space-y-2">
                <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-4 py-1 w-full">
                  <Image
                    src={`/client/vsi.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="text-teal-400 font-bold text-xl">2021</p>
              <div className="w-10 h-10 border-[10px] z-10 bg-section border-teal-500 rounded-full" />
              <div className="bg-teal-600/50 rounded-xl p-4 text-center w-[200px] space-y-6">
                <p className="text-yellow-400 text-xl">Enhanced</p>
                <p>Technology partnership, global delivery model</p>
              </div>
              <div className="relative w-full space-y-2">
                <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-4 py-1 w-full">
                  <Image
                    src={`/client/Zikshaa.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="text-teal-400 font-bold text-xl">2022</p>
              <div className="w-10 h-10 border-[10px] z-10 bg-section border-teal-500 rounded-full" />
              <div className="bg-teal-600/50 rounded-xl p-4 text-center w-[200px] space-y-6">
                <p className="text-yellow-400 text-xl">Expanded</p>
                <p>
                  Expanded business to US and Europe with new niche technologies
                </p>
              </div>
              <div className="relative w-full space-y-2">
                <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-6 py-1 w-full">
                  <Image
                    src={`/client/invincix_vn.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-6 py-1 w-full">
                  <Image
                    src={`/client/invincix_uk.png`}
                    alt=""
                    width={180}
                    height={100}
                    className="w-full max-h-[60px]"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="text-teal-400 font-bold text-xl">2023</p>
              <div className="w-10 h-10 border-[10px] z-10 bg-section border-teal-500 rounded-full" />
              <div className="bg-teal-600/50 rounded-xl p-4 text-center w-[200px] space-y-6">
                <p className="text-yellow-400 text-xl">Explored</p>
              </div>
              <div className="flex items-center justify-center bg-white/90 rounded-[6px] px-4 py-2 w-full">
                <Image
                  src={`/client/xprodedge 2.png`}
                  alt=""
                  width={180}
                  height={100}
                  className="w-full max-h-[60px]"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="w-[90%] bg-teal-400 h-1 absolute top-[78px] mx-[80px]" />
          </div>
        </div>

        {/* 
        <div className='relative bg-sky-900/20 p-6 col-span-6 space-y-2 rounded-xl '>
          <IndustryWeServe />
        </div>

        <div className='col-span-6'>
          <PartnerShip />
        </div> */}

        <div className="col-span-12">
          <OperationEfficiencyIndex />
        </div>

        {/* <div className='col-span-12'>
          <Clientele />
        </div> */}

        <div className="col-span-12 grid grid-cols-2 rounded-md overflow-hidden">
          <div className="p-[8%] w-full flex items-center justify-center bg-gradient-to-b  from-teal-500/40 text-center to-sky-500/40">
            <Image
              src="/client/bxd.svg"
              alt=""
              width={400}
              height={400}
              className="w-full opacity-80"
            ></Image>
          </div>
          <div className="p-[8%] bg-secondary/50 space-y-4">
            <p className="text-4xl">
              <span className="text-red-600">B</span>usiness e
              <span className="text-red-600">X</span>perience{" "}
              <span className="text-red-600">D</span>elivery
            </p>
            <div className="space-y-2">
              <div className="flex gap-4">
                <div className="min-w-16">
                  <ArrowTopRightIcon className="w-6 h-6" />
                </div>

                <p>
                  Direct dealings with the business definition and objective
                </p>
              </div>

              <div className="flex gap-4">
                <div className="min-w-16">
                  <ArrowTopRightIcon className="w-6 h-6" />
                </div>
                <p>
                  Continuous collaboration with the business is conceivable
                  which empowers us to have a clear understanding of what the
                  business is anticipating and also of the end results expected
                  by the business
                </p>
              </div>

              <div className="flex gap-4">
                <div className="min-w-16">
                  <ArrowTopRightIcon className="w-6 h-6" />
                </div>
                <p>
                  Increasing expectation on better conversions, retentions and
                  repeat usage of IT products/services
                </p>
              </div>
              <div className="flex gap-4">
                <div className="min-w-16">
                  <ArrowTopRightIcon className="w-6 h-6" />
                </div>
                <p>
                  Increasing demand on users productivity and acceptance of a
                  product
                </p>
              </div>
              <div className="flex gap-4">
                <div className="min-w-16">
                  <ArrowTopRightIcon className="w-6 h-6" />
                </div>
                <p>
                  Transparent project status and clear communication at all
                  levels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
