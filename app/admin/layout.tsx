import { NavBar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import Invincix from "@/public/images/Invincix.svg";
// import './chart.css'
import Image from "next/image";
import BottomHero from "@/public/images/BottomHero.svg";
import Link from "next/link";

export default function WrappedLayout({ children, role, locale }: { children: any; locale: string; role?: string }) {

    return <div className="relative min-h-screen bg-secondary w-full scrollbar-hide">

        <div className="sticky backdrop-blur-lg w-full top-0 z-40 bg-background/90 ">
            <NavBar />
        </div> 

        <div style={{ maxWidth: "100vw" }} className="relative scrollbar-hide flex flex-row bg-section  rounded-tr-lg">
            <div className="hidden relative sm:flex md:flex">

                <Sidebar
                    items={[
                        {
                            title: "Dashboard",
                            href: "/dashboard/overview2",
                            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v8h-6z" /><path d="M4 16h6v4h-6z" /><path d="M14 12h6v8h-6z" /><path d="M14 4h6v4h-6z" /></svg>
                        },
                        {
                            title: "Users",
                            href: "/admin/users",
                            icon:  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-cog" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>
                        },
                        {
                            title: "Data",
                            href: "/admin/dataset",
                            icon:  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-database"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" /><path d="M4 6v6a8 3 0 0 0 16 0v-6" /><path d="M4 12v6a8 3 0 0 0 16 0v-6" /></svg>
                        },
                    ]
                    } />
            </div>
            <div style={{ width: "calc(100% - 50px)" }} className="relative  flex-1 rounded-sm  bg-section min-h-screen p-4">

                {children}

                <div className="relative pt-[200px]  w-full flex px-4 items-end justify-between">
                    <div className="relative space-y-1 z-30">
                        <Image src={Invincix} alt="product logo" />
                        <p>©2024. INVINCIX . All Rights Reserved.</p>
                    </div>

                    <div className="absolute flex -bottom-5 items-center justify-center left-0 w-full">
                        <Image width={200} height={200} className="w-auto h-[200px] opacity-80" src={BottomHero} alt="product logo" />
                    </div>


                    <div className="flex space-x-3 gap-2 items-end z-50">

                    
                           <Link target="_blank" href='https://www.invincix.com/privacy-policy/'>Privacy Policy</Link>
                           <Link target="_blank" href='https://www.invincix.com/terms-of-use/'>Terms Of Use</Link>
                        
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