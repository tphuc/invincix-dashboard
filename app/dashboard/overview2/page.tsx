import { Card } from "@tremor/react";
import Image from "next/image";
import LeadershipNote from "public/images/LeadershipNote.svg";
import EIIE from "public/images/EIIE.svg";
import IndustryWeServe from "./IndustryWeServe";
import PartnerShip from "./PartnerShip";
import OperationEfficiencyIndex from "./OperationEfficiencyIndex";
import Clientele from "./Clientele";
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
          <div className="relative grid grid-cols-1 md:grid-cols-2 w-full h-full bg-gradient-to-r from-[#1D2E3A] to-[#2d414f] min-h-[160px] rounded-lg space-y-2">
            <div className="relative flex items-center w-full juftify-center">
              <Image
                className="w-[86%] mx-auto p-[4%] md:p-[4%] lg:p-[10%]"
                width={800}
                height={800}
                src={'/leadershipnote.png'}
                alt=""
              />
            </div>

            <div className="p-[5%] md:pr-12 py-8 flex space-y-6 justify-center flex-col">
              <h1 className="text-[1.87rem] text-left text-gray-100 font-bold">
                Leadership note
              </h1>
              <p style={{lineHeight: '1.625rem'}} className="text-[0.9rem] text-gray-100">
                One of the things that never ceases to amaze us, is the lengths
                that most people go to overcomplicate even the simplest of
                problem statements.
              </p>

              <p style={{lineHeight: '1.625rem'}} className="text-[0.9rem] text-gray-100">
                Complexity confuses people. It undermines their confidence and
                is not just any enemy of execution, as Tony Robbins says, but it
                is one of the mortal enemies of success.
              </p>
            </div>

          </div>
        </div>

        <div className="col-span-12 md:col-span-4 h-full space-y-4 px-12 py-[6%] flex flex-col items-center jufity-center bg-gradient-to-r from-[#1D2E3A] to-[#2d414f] rounded-xl">

          <div className="flex w-full h-full items-center justify-center">
            <Image
              className="max-h-[200px] p-2"
              width={800}
              height={800}
              style={{ objectFit: "contain" }}
              src={'/celebrate7year.png'}
              alt=""
            />
          </div>
          <p  style={{lineHeight: '1.625rem'}} className="text-[0.9rem] text-justify">
            In the tapestry of our 7 invincible years of journey, we cherish a beacon of inspiration, a sense of purpose, an illuminating the path of success and an incredible memories with invincians & partners.
          </p>

        </div>

        <div className="relative col-span-12 p-8 bg-gradient-to-r from-[#1D2E3A] to-[#2d414f] rounded-xl ">
          <h1 className="text-4xl p-6 font-bold">Leadership team</h1>
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
                  width={300}
                  height={300}
                />
                <p>{item?.name}</p>
                <p className="text-secondary-foreground text-sm">
                  {item?.position}
                </p>
              </div>
            ))}
          </div>

        </div>

        <div className="relative bg-gradient-to-r from-[#1D2E3A] to-[#2d414f] p-6 col-span-12 space-y-0 rounded-xl ">
          <h1 className="text-4xl py-4 font-bold">Technology</h1>
          <div className="grid grid-cols-12 gap-2">

            <div className="col-span-12  md:col-span-9 grid grid-cols-4 gap-2">
              <div className="space-y-4 col-span-4 border border-gray-100/40 rounded-[5px] p-4" style={{ background: `linear-gradient(150.09deg, rgba(43, 124, 95, 0.69) 13.39%, rgba(83, 70, 166, 0) 86.61%)` }}>
                <p>Application dev / Maintenance / Modernization</p>
                <div className="grid lg:grid-cols-5 sm:grid-cols-1 md:grid-cols-3 relative gap-1.5 w-full">

                  <div className="border border-white/20 p-2 space-y-2 rounded-sm">
                    <Image
                      className="h-[50px] w-auto md:w-full min-h-[50px] px-4 py-1 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/php.png'}
                      alt=""
                    />
                    <p>Frameworks</p>
                    <div className="grid grid-cols-2 gap-1">
                      <Image
                        className="h-[50px] w-full min-h-[50px] px-2 lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/slim.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-full min-h-[50px] px-0 lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/lumen.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-full min-h-[50px] lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/laravel.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-full min-h-[50px] lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/codeigniter.png'}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="border border-white/20 p-2 space-y-2 rounded-sm">
                    <Image
                      className="h-[50px] w-auto md:w-full min-h-[50px] px-4 py-1 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{objectFit:"contain"}}
                      src={'/tech/python.png'}
                      alt=""
                    />
                    <p>Frameworks</p>
                    <div className="grid grid-cols-2 gap-1">
                      <Image
                        className="h-[50px] w-full min-h-[50px] lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/django.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-full min-h-[50px] lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/flask.png'}
                        alt=""
                      />

                    </div>
                  </div>

                  <div className="space-y-2 rounded-sm">
                    <div className="grid grid-cols-2 gap-1">
                      <Image
                        className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/microsoftnet.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/mern.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-auto min-h-[50px] lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/drupal.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-auto min-h-[50px] px-0 lg:px-1 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/wordpress.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-auto min-h-[50px] px-2 py-2 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/shopify.png'}
                        alt=""
                      />

                    </div>
                  </div>

                  <div className="border border-white/20 p-2 space-y-2 rounded-sm">
                    <p>RPA tool</p>
                    <div className="grid grid-cols-1 gap-1">
                      <Image
                        className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/uipath.png'}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="border border-white/20 p-2 space-y-2 rounded-sm">

                    <p>Low code platforms</p>
                    <div className="grid grid-cols-1 gap-1">
                      <Image
                        className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/outsystems.png'}
                        alt=""
                      />
                      <Image
                        className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                        width={300}
                        height={300}
                        style={{ objectFit: "contain" }}
                        src={'/tech/mendix.png'}
                        alt=""
                      />

                    </div>
                  </div>


                </div>
              </div>

              <div className="col-span-4 lg:col-span-1 border border-gray-100/40 md:col-span-2 sm:col-span-4 space-y-4 rounded-[5px] p-4" style={{background: `linear-gradient(123.66deg, rgba(188, 102, 102, 0.41) 7.16%, rgba(41, 40, 58, 0.09) 96.41%)`}}>
                <p>BI & reporting</p>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2">
                  <Image
                    className="h-[50px] w-auto min-h-[50px] px-[5%] py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/powerbi.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/tableau.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/looker.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/microstrategy.png'}
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-4 lg:col-span-1 border border-gray-100/40 md:col-span-2 sm:col-span-4 space-y-4 rounded-[5px] p-4" style={{background: `linear-gradient(124.94deg, rgba(134, 93, 175, 0.49) 9.88%, rgba(43, 37, 39, 0.37) 94.58%)`}}>
                <p>Testing / Quality insurance</p>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    className="h-[50px] w-auto min-h-[50px] lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/selenium.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-auto min-h-[50px] lg:px-2 md:px-0.5 py-0 md:py-0.5 lg:py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/loadrunner.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-auto min-h-[50px] px-2 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/locust.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-auto min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/loadui.png'}
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-4 lg:col-span-1 md:col-span-2 sm:col-span-4 space-y-4 border border-gray-100/40 rounded-[5px] p-4" style={{background: `linear-gradient(124.57deg, rgba(58, 87, 71, 0.47) 8.3%, rgba(45, 46, 59, 0.34) 93.51%)`}}>
                <p className="truncate text-ellipsis">Cloud computing (AWS / AZURE / GCP)</p>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    className="h-[50px] w-full min-h-[50px]  px-1 py-0 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/googlecloud.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/aws.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px]  px-1 py-0 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/microsoftazure.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px]  px-1 py-0 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/microstrategy.png'}
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-4 lg:col-span-1 md:col-span-2 sm:col-span-4 border border-gray-100/40 space-y-4 rounded-[5px] p-4" style={{background: `linear-gradient(122.41deg, rgba(69, 102, 54, 0.56) 7.3%, rgba(24, 73, 38, 0.23) 100%)`}}>
                <p>Dev Ops</p>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/jenkins.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/packer.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/docker.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/git.png'}
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 border border-gray-100/40 space-y-4 rounded-[5px] p-4" style={{background: `linear-gradient(104.12deg, #306760 18.41%, rgba(24, 50, 47, 0.31) 84.55%)`}}>
                <p>User experience</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2">
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/html5.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/css.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/jquery.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/figma.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/xd.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/invisionstudio.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/ps.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/ai.png'}
                    alt=""
                  />
                </div>
              </div>

              <div className="col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 border border-gray-100/40 space-y-4 bg-amber-400/40 rounded-[5px] p-4" style={{background: `linear-gradient(97.48deg, #566646 13.1%, rgba(68, 65, 52, 0.24) 93.88%)`}}>
                <p>DB / Warehouse / ELT</p>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2">
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/oracle.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/sqlserver.png'}
                    alt=""
                  />

                  <Image
                    className="h-[50px] w-full min-h-[50px] px-1 py-0 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/postgresql.png'}
                    alt=""
                  />

                  <Image
                    className="h-[50px] w-full min-h-[50px] px-4 py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/mysql.png'}
                    alt=""
                  />

                  <Image
                    className="h-[50px] w-full min-h-[50px] px-1 py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/informatica.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/mongodb.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/firebase.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/amazonrds.png'}
                    alt=""
                  />
                  <Image
                    className="h-[50px] w-full min-h-[50px] px-2 py-1 rounded-[8px] bg-white"
                    width={300}
                    height={300}
                    style={{ objectFit: "contain" }}
                    src={'/tech/amazonredshift.png'}
                    alt=""
                  />

                </div>
              </div>

            </div>

            <div className="col-span-12  md:col-span-3 h-auto gap-2">
              <div className="space-y-2">
                <div className="col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 border border-gray-100/40 space-y-4 rounded-[5px] p-4" style={{ background: `linear-gradient(150.09deg, rgba(194, 160, 75, 0.27) 13.39%, rgba(157, 148, 214, 0) 76.29%)` }}>
                  <p>Mobility</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/ionic.png'}
                      alt=""
                    />
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/flutter.png'}
                      alt=""
                    />
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-2 py-1 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/reactnative.png'}
                      alt=""
                    />
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/nodejs.png'}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 space-y-4 border border-gray-100/40 rounded-[5px] p-4" style={{ background: `linear-gradient(150.09deg, rgba(197, 108, 151, 0.45) 13.39%, rgba(88, 60, 255, 0) 86.61%)` }}>
                  <p>AI / ML</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/tensorflow.png'}
                      alt=""
                    />
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/amazonsagemaker.png'}
                      alt=""
                    />
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/pytorch.png'}
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-span-2 lg:col-span-2 md:col-span-4 sm:col-span-4 space-y-4 border border-gray-100/40 rounded-[5px] p-4" style={{ background: `linear-gradient(150.09deg, rgba(48, 141, 227, 0.17) 13.39%, rgba(66, 139, 113, 0.25) 86.61%)` }}>
                  <p>ERP / CRM</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/odoo.png'}
                      alt=""
                    />
                    <Image
                      className="h-[50px] w-full min-h-[50px] px-4 py-2 rounded-[8px] bg-white"
                      width={300}
                      height={300}
                      style={{ objectFit: "contain" }}
                      src={'/tech/salesforce.png'}
                      alt=""
                    />


                  </div>
                </div>
              </div>
            </div>


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

        <div className="col-span-12 grid grid-cols-12 gap-4  overflow-hidden">
          <div className="p-4 lg:p-[4%] md:p-4 w-full md:col-span-6 lg:col-span-5 col-span-full rounded-md space-y-5 bg-gradient-to-r from-[#1D2E3A] to-[#2d414f]">
            <p className="text-2xl font-bold">Industries we support</p>
            <p style={{lineHeight: '1.625rem'}} className="text-[0.875rem]">Our “Innovative Approach” is designed to drive  your business swiftly. Being resilient is our character throughout.</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center text-sm gap-2 py-1 ">
                <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"  style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/manufacturing.svg"}
                ></Image>
                </div>
                <p>Manufacturing</p>
              </div>

              <div className="flex items-center text-sm gap-2 py-1" >
                <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>

               
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/pharma.svg"}
                ></Image>
                 </div>
                <p>Pharmaceuticals</p>
              </div>

              <div className="flex items-center text-sm  gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/food.svg"}
                ></Image>
                </div>
                <p>Food & beverages </p>
              </div>

              <div className="flex items-center text-sm whitespace-nowrap truncate gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/ecommerce.svg"}
                ></Image>
                </div>
                <p>E-commerce</p>
              </div>

              <div className="flex items-center text-sm whitespace-nowrap truncate gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/logistics.svg"}
                ></Image>
                </div>
                <p>Logistics</p>
              </div>

              <div className="flex items-center text-sm gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/education.svg"}
                ></Image>
                </div>
                <p>Education & research</p>
              </div>

              <div className="flex items-center text-sm gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/retail.svg"}
                ></Image>
                </div>
                <p>Retail</p>
              </div>

              <div className="flex items-center text-sm gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/energy.svg"}
                ></Image>
                </div>
                <p>Energy</p>
              </div>


              <div className="flex items-center text-sm gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/finance.svg"}
                ></Image>
                </div>
                <p>Finance</p>
              </div>

              <div className="flex items-center text-sm gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/ngos.svg"}
                ></Image>
                </div>
                <p>NGOs</p>
              </div>

              <div className="flex items-center text-sm gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/nonprofit.svg"}
                ></Image>
                </div>
                <p>Non-profit organizations</p>
              </div>
              <div className="flex items-center text-sm gap-2 py-1" >
              <div className="min-w-[36px] md:w-[36px] lg:w-[46px] aspect-square flex items-center justify-center aspect-square border border-white/20 rounded-[5px]"   style={{ background: 'linear-gradient(150.58deg, rgba(75, 75, 75, 0.01), rgba(255, 255, 255, 0.09))' }}>
                <Image
                  width={100}
                  height={100}
                  className="w-full h-full aspect-square p-1.5"
                  alt=""
                  style={{ objectFit: "contain" }}
                  src={"/industries/product.svg"}
                ></Image>
                </div>
                <p>Product development</p>
              </div>
            </div>
          </div>
          <div className="lg:p-12 col-span-full md:col-span-6 lg:col-span-7 rounded-md p-4 bg-gradient-to-r from-[#1d2e3a] to-[#2d414f] space-y-4">
            
            <p className="text-2xl font-bold">Client landscape</p>
            <Image
              width={800}
              height={800}
              className="w-full px-[4%] pt-8"
              alt=""
              style={{ objectFit: "contain" }}
              src={"/geography.png"}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
