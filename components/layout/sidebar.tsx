"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Logo from '@images/AgileOffice-logo.svg'
import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useExpendableSidebar } from "../use-sidebar"
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export interface NavItem {
  subMenu?: NavItem[],
  href?: any,
  disabled?: boolean,
  title: string,
  icon?: React.ReactNode

}
interface BusinessDashboardNavProps {
  title?: string;
  items: NavItem[]
}

export function Sidebar({ items, title }: BusinessDashboardNavProps) {
  const path = usePathname()

  const { isOpen, toggleSidebar } = useExpendableSidebar();

  const locale = useParams()?.locale
  const role = useParams()?.role

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.2,
      },
    },
  };




  // Replace the matched pattern with an empty string
  let modifiedPath = path.replace(new RegExp('^/' + locale + '/'), '/');
  modifiedPath = path.replace(new RegExp('^/' + role + '/'), '/');

  console.log(modifiedPath)

  if (!items?.length) {
    return null
  }

  return (
    <div

      className="relative bg-section">

      <div style={{ height: "calc(100vh - 100px)", width: "calc(100% + 8px)", marginLeft: "-8px" }} className="sticky pl-4 px-2 rounded-md bg-secondary top-[95px] pt-2 pb-2 ">

        <div className="relative h-full bg-secondary rounded-md overflow-scroll scrollbar-hide  rounded-lg md:w-[200px] ">


          <Accordion type="multiple" className="relative">
            <div className="relative p-0 w-full ">
              <div className="w-full  rounded-lg p-0 space-y-2">
                {/* <div onClick={() => toggleSidebar()} 
            className="absolute bg-secondary border-2 border-section z-40 cursor-pointer flex items-center rounded-full -right-4 top-4 p-2">
              {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </div> */}
                <div className="bg-section overflow-hidden rounded-lg" >
                  {items.map((navItem, index) => {
                    if (navItem?.subMenu) {
                      return <AccordionItem key={`${navItem?.title}${index}`} className="pb-0 border-b-secondary" value={`${navItem?.title}${index}`}>
                        <AccordionTrigger className={cn(
                          "group flex gap-2 flex-nowrap whitespace-nowrap items-center rounded-[12px] px-2 py-2 text-sm font-medium hover:bg-[rgba(0,0,0,0.1)]",
                          // path === navItem?.href ? "hover:bg-secondary" : "transparent hover:bg-secondary",
                          navItem?.disabled && "cursor-not-allowed opacity-80",
                          navItem?.subMenu?.map(item => item.href)?.includes(modifiedPath) && "bg-[rgba(200,250,250,0.08)] rounded-none"
                        )}>
                          <div className="flex items-center gap-2">
                            <div className={cn("p-2 rounded-[8px] bg-[rgba(200,250,250,0.05)] fill-secondary-foreground",
                              // path === navItem?.href ? "bg-sky-500 dark:bg-blue-600 text-secondary dark:text-secondary-foreground" : "transparent hover:bg-secondary"
                              // navItem?.subMenu?.map(item => item.href)?.includes(modifiedPath) && "bg-blue-500 dark:bg-blue-600 text-secondary dark:text-secondary-foreground"
                            )}>
                              {navItem?.icon}
                            </div>
                            <AnimatePresence>
                              {isOpen && <span className="text-sky-200">{navItem?.title}</span>}
                            </AnimatePresence>

                          </div>
                          <AnimatePresence>
                            {isOpen && <ChevronDown className="w-4 h-4" />}
                          </AnimatePresence>

                        </AccordionTrigger>
                        <AccordionContent className="pb-0 py-1">
                          <div className="pt-0 ml-6">
                            {navItem?.subMenu?.map((item, index) => {
                              return <Link key={`${index}`} prefetch={false} href={item?.disabled ? "/" : item?.href}>
                                <span
                                  className={cn(
                                    "group flex gap-2 flex-nowrap whitespace-nowrap items-center rounded-md mr-2 px-2 py-2 text-sm font-medium",
                                    modifiedPath == item?.href ? "hover:bg-[rgba(0,0,0,0.1)]" : "transparent hover:bg-[rgba(0,0,0,0.1)]",
                                    item?.disabled && "cursor-not-allowed opacity-80"
                                  )}
                                >
                                  <div className="flex items-center gap-2 fill-secondary-foreground">
                                    <div className={cn("p-2 rounded-[8px] ", modifiedPath == item?.href ? "bg-blue-500 dark:bg-sky-600 " : "transparent hover:bg-secondary ")}>
                                      {item?.icon}
                                    </div>
                                    <AnimatePresence>
                                      {isOpen && <span className="text-secondary-foreground">{item?.title}</span>}
                                    </AnimatePresence>
                                  </div>
                                </span>
                              </Link>
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    }

                    else
                      return (
                        navItem?.href && (
                          <Link key={index} prefetch={false} href={navItem?.disabled ? "/" : navItem?.href}>
                            <span
                              className={cn(
                                "group flex gap-2 flex-nowrap whitespace-nowrap items-center px-2 py-2 text-sm font-medium",
                                modifiedPath === navItem?.href ? "hover:bg-[rgba(0,0,0,0.1)]" : "transparent hover:bg-[rgba(0,0,0,0.1)]",
                                navItem?.disabled && "cursor-not-allowed opacity-80"
                              )}
                            >
                              <div className="flex items-center gap-2 ">
                                <div className={cn("p-2 rounded-[8px] bg-[rgba(200,250,250,0.05)] fill-secondary-foreground", modifiedPath === navItem?.href ? "bg-sky-500 dark:bg-sky-600" : "transparent hover:bg-secondary")}>
                                  {navItem?.icon}
                                </div>
                                <AnimatePresence>
                                  {isOpen && <span className="text-sky-200">{navItem?.title}</span>}
                                </AnimatePresence>
                              </div>
                            </span>
                          </Link>
                        )
                      )
                  })}
                </div>

                <span
                  className={cn(
                    "group flex bg-section rounded-xl gap-2 py-3 flex-nowrap whitespace-nowrap items-center rounded-[12px] px-3 text-sm font-medium",
                  )}
                >
                  <div className="flex justify-between w-full items-center">
                    <Link href='https://www.facebook.com/GenInvinci' className="p-2 fill-white bg-[rgba(200,250,250,0.2)] rounded-full">
                      <Facebook className="fill-section stroke-section" />
                    </Link>
                    <Link href='https://twitter.com/geninvinci' className="p-2 bg-[rgba(200,250,250,0.2)] rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x stroke-section" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                    </Link>
                    <Link href='https://www.linkedin.com/company/13275606' className="p-2 bg-[rgba(200,250,250,0.2)] stroke-section rounded-full">
                      <Instagram className="stroke-section" />
                    </Link>
                    <Link href='https://www.instagram.com/geninvinci' className="p-2 bg-[rgba(200,250,250,0.2)] stroke-section rounded-full">
                      <Linkedin className="stroke-section" />
                    </Link>
                  </div>
                </span>


                <div className="space-y-5 bg-section rounded-lg pt-4">
                  {/* <div className="flex gap-3 px-4 pr-2 w-full items-center">

                    <div className="flex-1">
                      <p>India</p>
                      <p className="text-secondary-foreground">+91 674 2972 316</p>
                    </div>
                    <Image src={'/images/ind.svg'} width={100} height={100} className="w-12 h-12" alt='' />
                  </div>
                  <div className="flex px-4 pr-2 gap-3 w-full items-center">

                    <div className="flex-1">
                      <p>Singapore</p>
                      <p className="text-muted-foreground">+65 816 719 13</p>
                    </div>
                    <Image src={'/images/singapore.svg'} width={100} height={100} className="w-12 h-12" alt='' />
                  </div>
                  <div className="flex px-4 pr-2 gap-3 w-full items-center">

                    <div className="flex-1">
                      <p>Vietnam</p>
                      <p className="text-muted-foreground">+84 703 316 415</p>
                    </div>
                    <Image src={'/images/vietnam.svg'} width={100} height={100} className="w-12 h-12" alt='' />
                  </div>
                  <div className="flex px-4 pr-2 gap-3 w-full items-center">

                    <div className="flex-1">
                      <p>UK</p>
                      <p className="text-muted-foreground">+44 7448 336618</p>
                    </div>
                    <Image src={'/images/eng.svg'} width={100} height={100} className="w-12 h-12" alt='' />
                  </div> */}
                  <div className="flex p-8 gap-3 w-full items-center">
                    <Image src={'/images/x.svg'} width={200} height={200} className="w-full" alt='' />
                  </div>
                </div>
              </div>
            </div>
          </Accordion>


        </div>

      </div>
    </div>
  )
}
