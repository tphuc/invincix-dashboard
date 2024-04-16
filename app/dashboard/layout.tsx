import { NavBar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import Invincix from "@/public/images/Invincix.svg";
import './chart.css'
import Image from "next/image";
import BottomHero from "@/public/images/BottomHero.svg";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/utils";

export default async function WrappedLayout({ children, role, locale }: { children: any; locale: string; role?: string }) {
    const user = (await getCurrentUser()) as any;
    if (!user?.id) {
        redirect('/login')
    }
    return <div className="relative min-h-screen bg-secondary w-full scrollbar-hide">

        <div className="sticky backdrop-blur-lg w-full top-0 z-40 bg-background/90 ">
            <NavBar />
        </div>

        <div style={{ maxWidth: "100vw" }} className="relative scrollbar-hide flex flex-row bg-section  rounded-tr-lg">
            <div className="hidden relative sm:flex md:flex">

                <Sidebar
                    items={
                        [
                        {
                            title: "INVINCIX Overview",
                            href: "/dashboard/overview2",
                            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4h6v8h-6z" /><path d="M4 16h6v4h-6z" /><path d="M14 12h6v8h-6z" /><path d="M14 4h6v4h-6z" /></svg>
                        },
                        {
                            title: "Human Capital",
                            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" strokeWidth="0" fill="currentColor" /></svg>,
                            subMenu: [

                                {
                                    title: "Capacity",
                                    href: "/dashboard/human-capital-demographics",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-cog" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>
                                },
                                {
                                    title: "Capability",
                                    href: "/dashboard/human-capital-skills",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-accessible" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1" /><circle cx="12" cy="7.5" r=".5" fill="currentColor" /></svg>
                                },
                                {
                                    title: "Mobilisation",
                                    href: "/dashboard/human-capital-recruitment",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M16 19h6" /><path d="M19 16v6" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /></svg>
                                },


                                // {
                                //     title: "Human Capital Analysis",
                                //     href: "/dashboard/human-capital-analysis",
                                //     icon: <Dot />
                                // }
                            ]
                        },
                        {
                            title: "Delivery",
                            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><rect x="2" y="3" width="20" height="4" rx="2" strokeWidth="0" fill="currentColor" /><path d="M19 9c.513 0 .936 .463 .993 1.06l.007 .14v7.2c0 1.917 -1.249 3.484 -2.824 3.594l-.176 .006h-10c-1.598 0 -2.904 -1.499 -2.995 -3.388l-.005 -.212v-7.2c0 -.663 .448 -1.2 1 -1.2h14zm-5 2h-4l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h4l.117 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" strokeWidth="0" fill="currentColor" /></svg>,
                            subMenu: [
                                {
                                    title: "CSAT",
                                    href: "/dashboard/delivery-customer",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mushroom-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 15v4a3 3 0 0 1 -5.995 .176l-.005 -.176v-4h6zm-10.1 -2a1.9 1.9 0 0 1 -1.894 -1.752l-.006 -.148c0 -5.023 4.027 -9.1 9 -9.1s9 4.077 9 9.1a1.9 1.9 0 0 1 -1.752 1.894l-.148 .006h-14.2z" strokeWidth="0" fill="currentColor" /></svg>
                                },
                                {
                                    title: "Quality",
                                    href: "/dashboard/delivery-quality",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shield-check-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.998 2l.118 .007l.059 .008l.061 .013l.111 .034a.993 .993 0 0 1 .217 .112l.104 .082l.255 .218a11 11 0 0 0 7.189 2.537l.342 -.01a1 1 0 0 1 1.005 .717a13 13 0 0 1 -9.208 16.25a1 1 0 0 1 -.502 0a13 13 0 0 1 -9.209 -16.25a1 1 0 0 1 1.005 -.717a11 11 0 0 0 7.531 -2.527l.263 -.225l.096 -.075a.993 .993 0 0 1 .217 -.112l.112 -.034a.97 .97 0 0 1 .119 -.021l.115 -.007zm3.71 7.293a1 1 0 0 0 -1.415 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" strokeWidth="0" fill="currentColor" /></svg>
                                },
                                {
                                    title: "Processes",
                                    href: "/dashboard/delivery-process",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-direction-sign-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10.52 2.614a2.095 2.095 0 0 1 2.835 -.117l.126 .117l7.905 7.905c.777 .777 .816 2.013 .117 2.836l-.117 .126l-7.905 7.905a2.094 2.094 0 0 1 -2.836 .117l-.126 -.117l-7.907 -7.906a2.096 2.096 0 0 1 -.115 -2.835l.117 -.126l7.905 -7.905zm5.969 9.535l.01 -.116l-.003 -.12l-.016 -.114l-.03 -.11l-.044 -.112l-.052 -.098l-.076 -.105l-.07 -.081l-3.5 -3.5l-.095 -.083a1 1 0 0 0 -1.226 0l-.094 .083l-.083 .094a1 1 0 0 0 0 1.226l.083 .094l1.792 1.793h-5.085l-.117 .007a1 1 0 0 0 0 1.986l.117 .007h5.085l-1.792 1.793l-.083 .094a1 1 0 0 0 1.403 1.403l.094 -.083l3.5 -3.5l.097 -.112l.05 -.074l.037 -.067l.05 -.112l.023 -.076l.025 -.117z" strokeWidth="0" fill="currentColor" /></svg>
                                },

                            ]
                        },
                        {
                            title: "Org Performance",
                            href: "/dashboard/key-info",
                            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-graph-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12zm-2.293 6.293a1 1 0 0 0 -1.414 0l-2.293 2.292l-1.293 -1.292a1 1 0 0 0 -1.414 0l-3 3a1 1 0 0 0 0 1.414l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l1.293 1.292a1 1 0 0 0 1.414 -1.414l-2 -2z" strokeWidth="0" fill="currentColor" /></svg>
                        },
                        {
                            title: "Shoot a Query",
                            href: "#",
                            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle-2-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5.821 4.91c3.898 -2.765 9.469 -2.539 13.073 .536c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447 -7.965 4.583 -12.231 2.805l-.232 -.101l-4.375 .931l-.075 .013l-.11 .009l-.113 -.004l-.044 -.005l-.11 -.02l-.105 -.034l-.1 -.044l-.076 -.042l-.108 -.077l-.081 -.074l-.073 -.083l-.053 -.075l-.065 -.115l-.042 -.106l-.031 -.113l-.013 -.075l-.009 -.11l.004 -.113l.005 -.044l.02 -.11l.022 -.072l1.15 -3.451l-.022 -.036c-2.21 -3.747 -1.209 -8.392 2.411 -11.118l.23 -.168z" strokeWidth="0" fill="currentColor" /></svg>
                        },
                        {
                            title: "Settings",
                            href: "#",
                            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.647 4.081a.724 .724 0 0 0 1.08 .448c2.439 -1.485 5.23 1.305 3.745 3.744a.724 .724 0 0 0 .447 1.08c2.775 .673 2.775 4.62 0 5.294a.724 .724 0 0 0 -.448 1.08c1.485 2.439 -1.305 5.23 -3.744 3.745a.724 .724 0 0 0 -1.08 .447c-.673 2.775 -4.62 2.775 -5.294 0a.724 .724 0 0 0 -1.08 -.448c-2.439 1.485 -5.23 -1.305 -3.745 -3.744a.724 .724 0 0 0 -.447 -1.08c-2.775 -.673 -2.775 -4.62 0 -5.294a.724 .724 0 0 0 .448 -1.08c-1.485 -2.439 1.305 -5.23 3.744 -3.745a.722 .722 0 0 0 1.08 -.447c.673 -2.775 4.62 -2.775 5.294 0zm-2.647 4.919a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" strokeWidth="0" fill="currentColor" /></svg>
                        },
                        {
                            title: "Help",
                            href: "#",
                            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help-square-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 2a3 3 0 0 1 2.995 2.824l.005 .176v14a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h14zm-7 13a1 1 0 0 0 -.993 .883l-.007 .117l.007 .127a1 1 0 0 0 1.986 0l.007 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm1.368 -6.673a2.98 2.98 0 0 0 -3.631 .728a1 1 0 0 0 1.44 1.383l.171 -.18a.98 .98 0 0 1 1.11 -.15a1 1 0 0 1 -.34 1.886l-.232 .012a1 1 0 0 0 .111 1.994a3 3 0 0 0 1.371 -5.673z" strokeWidth="0" fill="currentColor" /></svg>
                        }
                    ]
                    } />
            </div>
            <div style={{ width: "calc(100% - 50px)" }} className="relative  flex-1 rounded-sm  bg-section min-h-screen p-4">

                {children}

                <div className="relative pt-[200px]  w-full flex px-4 items-end justify-between">
                    <div className="relative flex gap-4 items-center flex-wrap space-y-1 z-30">
                        <Image src={Invincix} alt="product logo" />
                        <p className="text-[0.875rem]">Simplicity is our culture
                            <br/>
                            and simplification is what we do</p>
                    </div>

                    <div className="absolute flex -bottom-5 items-center justify-center left-0 w-full">
                        <Image width={200} height={200} className="w-auto h-[100px] opacity-60" src={BottomHero} alt="product logo" />
                    </div>


                    <div className="flex space-x-3 flex-wrap gap-2 items-end z-50">
                        <Link className="text-[0.875rem]" target="_blank" href='https://www.invincix.com/privacy-policy/'>Privacy Policy</Link>
                        <Link className="text-[0.875rem]" target="_blank" href='https://www.invincix.com/terms-of-use/'>Terms Of Use</Link>

                    </div>
                </div>

            </div>
        </div>



    </div>
}


{/* <div className="relative flex min-h-screen w-full flex-col">
            <header className="sticky backdrop-blur-lg w-full top-0  z-40 bg-background/90 border-b border-border">
                <div className="flex items-center max-w-screen-2xl mx-auto w-full justify-between py-3 md:py-4">
                    <MainNav 
                        items={dashboardConfig.mainNav} 
                    />
                    <nav className="flex items-center gap-2 px-4">
                        <UserCart user={user}/>
                        {user ? <UserAccountNav user={user} businesses={businesses}/> : <Link
                            href="/login"
                            className={cn(
                                buttonVariants({ variant: "default", size:"default" }),
                                "px-4"
                            )}
                        >
                            Đăng nhập
                        </Link>}
                    </nav>
                </div>
            </header>
            <main className="w-full flex flex-col pb-4 flex-1 gap-4">{children}</main>
        </div> */}