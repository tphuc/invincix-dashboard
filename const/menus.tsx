import {
  Home,
  ClipboardList,
  ClipboardCheck,
  Settings,
  BarChartBig,
  Users2,
  Receipt,
  DollarSign,
  Package,
  Archive,
  LayoutDashboard,
  Briefcase,
  Shield,
  Users,
  List,
  Dot,
  Grid,
  LayoutGrid,
  Folder,
  ArrowLeft,
  Calendar,
  LogOut,
  Crown,
  FolderArchive,
  Lightbulb,
  StretchHorizontal,
} from "lucide-react";
import * as PATH from "./paths";
import { NavItem } from "@/components/layout/sidebar";
import { locale } from "moment";

export const getUserMenu = (locale: string, userRole: string, t: any) => {
  const addLocaleToLink = (link: string) => {
    const pathWithLocale = `/${locale}${link}`;
    return pathWithLocale;
  };

  const transformMenu = (originalMenu) => {
    return originalMenu.map((item) => {
      return {
        ...item,
        link: addLocaleToLink(item.link),
        title: t("menu." + item.title),
      };
    });
  };

  switch (userRole) {
    case "Mechanic":
      return transformMenu(MechanicMenus);
    case "Supervisor":
      return transformMenu(SupervisorMenus);
    case "Partner":
      return transformMenu(PartnerMenus);
    case "Owner":
      return transformMenu(OwnerMenus);
    default:
      return [];
  }
};

interface MenuT {
  icon: React.ReactNode;
  link: string;
  title: string;
}

export const MechanicMenus: MenuT[] = [
  {
    icon: <ClipboardList />,
    title: "pending_tasks",
    link: PATH.MECHANIC_PENDING_TASK,
  },
  {
    icon: <ClipboardCheck />,
    title: "completed_tasks",
    link: PATH.MECHANIC_COMPLETED_TASK,
  },
];

export const PartnerMenus: MenuT[] = [
  {
    icon: <Home />,
    title: "home",
    link: PATH.PARTNER_HOME,
  },
  {
    icon: <Settings />,
    title: "settings",
    link: PATH.PARTNER_SETTINGS,
  },
  {
    icon: <BarChartBig />,
    title: "reports",
    link: PATH.PARTNER_REPORTS,
  },
  {
    icon: <Users2 />,
    title: "teams",
    link: PATH.PARTNER_TEAMS,
  },
  {
    icon: <Receipt />,
    title: "expenses/revenue_log",
    link: PATH.PARTNER_EXPENSES_REVENUE_LOG,
  },
];

export const OwnerMenus: MenuT[] = [
  {
    icon: <Home />,
    title: "home",
    link: PATH.OWNER_HOME,
  },
  {
    icon: <Settings />,
    title: "settings",
    link: PATH.OWNER_SETTINGS,
  },
];

export const SupervisorMenus: MenuT[] = [
  {
    icon: <Home />,
    title: "home",
    link: PATH.SUPERVISOR_HOME,
  },
  {
    icon: <ClipboardList />,
    title: "job_card",
    link: PATH.SUPERVISOR_JOB_CARD,
  },
  {
    icon: <DollarSign />,
    title: "payment",
    link: PATH.SUPERVISOR_PAYMENT,
  },
  {
    icon: <Package />,
    title: "spare_part_request",
    link: PATH.SUPERVISOR_SPARE_PART_REQUEST,
  },
  {
    icon: <Settings />,
    title: "configuration",
    link: PATH.SUPERVISOR_CONFIGURATION,
  },
  {
    icon: <Users2 />,
    title: "teams",
    link: PATH.SUPERVISOR_SPARE_TEAMS,
  },
  {
    icon: <Archive />,
    title: "archive_job_card",
    link: PATH.SUPERVISOR_SPARE_ARCHIVE_JOB_CARD,
  },
];



export const EmployeeSideBarItems = [
  {
    title: 'Dashboard',
    href: "/employee",
    icon: <LayoutDashboard />,
  },
  {
    title: 'My Briefcase',
    href: "/employee",
    subMenu: [
      {
        href: "/employee/briefcase/profile",
        title: "Profile",
        icon: <Dot />
      },
      {
        href: "/employee/briefcase/salary-slip",
        title: "Salary Slip",
        icon: <Dot />
      },
      {
        href: "/employee/briefcase/salary-revision",
        title: "Salary Revision",
        icon: <Dot />
      },
      {
        href: "/employee/briefcase/my-request",
        title: "My Request",
        icon: <Dot />
      },
      {
        href: "/employee/briefcase/my-reward",
        title: "My Reward Points",
        icon: <Dot />
      }
    ],

    icon: <Briefcase />
  },
  {
    title: 'My Essential',
    href: "/employee/",
    icon: <Shield />,
    subMenu: [
      {
        href: "/employee/essential/standard",
        title: "Geninvinci Standard",
        icon: <Dot />
      },
      {
        href: "/employee/essential/secret",
        title: "Manage Secret",
        icon: <Dot />
      },

    ],
  },
  {
    title: 'Invincians',
    href: "/employee/invincians",
    icon: <Users />
  },
  {
    title: 'My Reportees',
    href: "/employee/reportees",
    icon: <List />
  },
  {
    title: 'Leave',
    href: "/employee/leave",
    icon: <List />
  },
  {
    title: 'Assessment',
    icon: <LayoutGrid />,
    subMenu: [
      {
        href: "/employee/assessment/evaluation",
        title: "Evaluation",
        icon: <Dot />
      },
      {
        href: "/employee/assessment/improve",
        title: "Let us improve",
        icon: <Dot />
      },
    ],
  },
  {
    title: 'Geninvinci',
    icon: <LayoutGrid />,
    subMenu: [
      {
        href: "/employee/geninvinci/event",
        title: "Events",
        icon: <Dot />
      },
      {
        href: "/employee/geninvinci/news",
        title: "News",
        icon: <Dot />
      },
    ],
  },
]

export const HRSideBarItems = [
  {
    title: 'Dashboard',
    href: "/hr",
    icon: <LayoutDashboard />,
  },
  {
    title: 'My Briefcase',
    href: "/hr",
    subMenu: [
      {
        href: "/hr/briefcase/profile",
        title: "Profile",
        icon: <Dot />
      },
      {
        href: "/hr/briefcase/salary-slip",
        title: "Salary Slip",
        icon: <Dot />
      },
      {
        href: "/hr/briefcase/salary-revision",
        title: "Salary Revision",
        icon: <Dot />
      },
      {
        href: "/hr/briefcase/my-request",
        title: "My Request",
        icon: <Dot />
      },
      {
        href: "/hr/briefcase/my-reward",
        title: "My Reward Points",
        icon: <Dot />
      }
    ],

    icon: <Briefcase />
  },
  {
    title: 'My Essential',
    href: "/hr/",
    icon: <Shield />,
    subMenu: [
      {
        href: "/hr/essential/standard",
        title: "Geninvinci Standard",
        icon: <Dot />
      },
      {
        href: "/hr/essential/secret",
        title: "Manage Secret",
        icon: <Dot />
      },

    ],
  },
  {
    title: 'Invincians',
    href: "/hr/invincians",
    icon: <Users />
  },
  {
    title: 'My Reportees',
    href: "/hr/reportees",
    icon: <List />
  },
  {
    title: 'Leave',
    href: "/hr/leave",
    icon: <List />
  },
  {
    title: 'Finance',
    icon: <Briefcase />,
    subMenu: [
      {
        href: "/hr/finance/income-customers",
        title: "Customers",
        icon: <Dot />
      },
      {
        href: "/hr/finance/projects",
        title: "Projects",
        icon: <Dot />
      },
      {
        href: "/hr/finance/consultant",
        title: "Consultants",
        icon: <Dot />
      },

    ],
  },
  {
    title: 'Recruitments',
    href: "/hr/recruitment",
    icon: <Folder />
  },
  {
    title: 'Assessment',
    icon: <LayoutGrid />,
    subMenu: [
      {
        href: "/hr/assessment/evaluation",
        title: "Evaluation",
        icon: <Dot />
      },
      {
        href: "/hr/assessment/improve",
        title: "Let us improve",
        icon: <Dot />
      },
    ],
  },
  {
    title: 'Geninvinci',
    icon: <LayoutGrid />,
    subMenu: [
      {
        href: "/hr/geninvinci/event",
        title: "Events",
        icon: <Dot />
      },
      {
        href: "/hr/geninvinci/news",
        title: "News",
        icon: <Dot />
      },
    ],
  },
]


export const HRFinanceSideBarItems = [
  {
    title: "Back",
    href: "/hr/",
    icon: <ArrowLeft />
  },
  {
    title: 'Overview',
    href: "/hr/finance/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    title: 'Incomes',
    icon: <Briefcase />,
    subMenu: [
      {
        href: "/hr/finance/income-customers",
        title: "Customers",
        icon: <Dot />
      },


    ],
  },
  {
    title: 'Budget',
    icon: <Folder />,
    subMenu: [
      {
        href: "/hr/finance/plan-budget",
        title: "Planned Budget",
        icon: <Dot />
      },
      {
        href: "/hr/finance/budget-tracking",
        title: "Budget Tracking",
        icon: <Dot />
      },
    ],
  },
  {
    title: 'Expenses',
    icon: <Folder />,
    subMenu: [
      {
        href: "/hr/finance/expense-payment",
        title: "Payments",
        icon: <Dot />
      },
      {
        href: "/hr/finance/expense-vendor",
        title: "Vendors",
        icon: <Dot />
      },
    ],
  },
  {
    title: 'Banking',
    icon: <Folder />,
    subMenu: [
      {
        href: "/hr/finance/banking-account",
        title: "Accounts",
        icon: <Dot />
      },
      {
        href: "/hr/finance/banking-transfer",
        title: "Transfers",
        icon: <Dot />
      },
    ],
  },
  {
    title: 'Settings',
    icon: <Folder />,
    subMenu: [
      {
        href: "/hr/finance/setting-general",
        title: "Generals",
        icon: <Dot />
      },
      {
        href: "/hr/finance/setting-categories",
        title: "Categories",
        icon: <Dot />
      },
      {
        href: "/hr/finance/setting-taxes",
        title: "Taxes",
        icon: <Dot />
      },
    ],
  },
]

export const DirectorSideBarItems = [
  {
    title: 'Dashboard',
    href: "/director",
    icon: <LayoutDashboard />,
  },
  {
    title: 'My Briefcase',
    href: "/director",
    subMenu: [
      {
        href: "/director/briefcase/profile",
        title: "Profile",
        icon: <Dot />
      },
      {
        href: "/director/briefcase/salaryslip",
        title: "Salary Slip",
        icon: <Dot />
      },
      {
        href: "/director/briefcase/salaryrevisions",
        title: "Salary Revision",
        icon: <Dot />
      },
      {
        href: "/director/briefcase/requests",
        title: "My Request",
        icon: <Dot />
      },
      {
        href: "/director/briefcase/reward",
        title: "My Reward Points",
        icon: <Dot />
      }
    ],

    icon: <Briefcase />
  },
  {
    title: 'My Essential',
    href: "/director/",
    icon: <Shield />,
    subMenu: [
      {
        href: "/director/essentials/organisationpolicy",
        title: "Geninvinci Standard",
        icon: <Dot />
      },
      {
        href: "/director/essentials/managesecret",
        title: "Manage Secret",
        icon: <Dot />
      },

    ],
  },
  {
    title: 'Invincians',
    href: "/employee/invincians",
    icon: <Users />
  },
  {
    title: 'My Reportees',
    href: "/employee/reportees",
    icon: <List />
  },
  {
    title: 'Leave',
    href: "/director/leave",
    icon: <List />
  },
  {
    title: 'Attandance',
    href: "/director/attandance",
    icon: <Folder />
  },
  {
    title: 'Assets',
    href: "/director/assets",
    icon: <StretchHorizontal/>
  },
  {
    title: 'Assessment',
    icon: <LayoutGrid />,
    subMenu: [
      {
        href: "/employee/assessment/evaluation",
        title: "Evaluation",
        icon: <Dot />
      },
      {
        href: "/employee/assessment/improve",
        title: "Let us improve",
        icon: <Dot />
      },
    ],
  },
  {
    title: 'Geninvinci',
    icon: <LayoutGrid />,
    subMenu: [
      {
        href: "/director/activities/events",
        title: "Events",
        icon: <Dot />
      },
      {
        href: "/director/activities/news",
        title: "News",
        icon: <Dot />
      },
    ],
  },
]


export const createUniversalSidebarItems = ({ rootUrl, role, }: { rootUrl?: string, role?: string }): NavItem[] => {
  return [
    {
      title: 'Dashboard',
      href: `${rootUrl}/dashboard`,
      icon: <svg width="31" height="31" viewBox="0 0 31 31" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.14935 9.5C6.14935 7.61438 6.14935 6.67157 6.73514 6.08579C7.32093 5.5 8.26373 5.5 10.1494 5.5C12.035 5.5 12.9778 5.5 13.5636 6.08579C14.1494 6.67157 14.1494 7.61438 14.1494 9.5V20.5C14.1494 22.3856 14.1494 23.3284 13.5636 23.9142C12.9778 24.5 12.035 24.5 10.1494 24.5C8.26373 24.5 7.32093 24.5 6.73514 23.9142C6.14935 23.3284 6.14935 22.3856 6.14935 20.5V9.5Z" stroke="inherit" strokeWidth="1.5" />
        <path d="M17.1494 18.5C17.1494 16.6144 17.1494 15.6716 17.7351 15.0858C18.3209 14.5 19.2637 14.5 21.1494 14.5C23.035 14.5 23.9778 14.5 24.5636 15.0858C25.1494 15.6716 25.1494 16.6144 25.1494 18.5V20.5C25.1494 22.3856 25.1494 23.3284 24.5636 23.9142C23.9778 24.5 23.035 24.5 21.1494 24.5C19.2637 24.5 18.3209 24.5 17.7351 23.9142C17.1494 23.3284 17.1494 22.3856 17.1494 20.5V18.5Z" stroke="inherit" strokeWidth="1.5" />
        <path d="M17.1494 8.5C17.1494 7.56812 17.1494 7.10218 17.3016 6.73463C17.5046 6.24458 17.8939 5.85523 18.384 5.65224C18.7515 5.5 19.2175 5.5 20.1494 5.5H22.1494C23.0812 5.5 23.5472 5.5 23.9147 5.65224C24.4048 5.85523 24.7941 6.24458 24.9971 6.73463C25.1494 7.10218 25.1494 7.56812 25.1494 8.5C25.1494 9.43188 25.1494 9.89782 24.9971 10.2654C24.7941 10.7554 24.4048 11.1448 23.9147 11.3478C23.5472 11.5 23.0812 11.5 22.1494 11.5H20.1494C19.2175 11.5 18.7515 11.5 18.384 11.3478C17.8939 11.1448 17.5046 10.7554 17.3016 10.2654C17.1494 9.89782 17.1494 9.43188 17.1494 8.5Z" stroke="inherit" strokeWidth="1.5" />
      </svg>
      ,
    },
    {
      title: 'Briefcase',

      icon: <svg width="31" height="31" viewBox="0 0 31 31" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.29321 17.9386C5.29321 14.1674 5.29321 12.2817 6.46479 11.1102C7.63636 9.9386 9.52198 9.9386 13.2932 9.9386H17.2932C21.0644 9.9386 22.9501 9.9386 24.1216 11.1102C25.2932 12.2817 25.2932 14.1674 25.2932 17.9386C25.2932 21.7098 25.2932 23.5955 24.1216 24.767C22.9501 25.9386 21.0644 25.9386 17.2932 25.9386H13.2932C9.52198 25.9386 7.63636 25.9386 6.46479 24.767C5.29321 23.5955 5.29321 21.7098 5.29321 17.9386Z" strokeWidth="1.5" />
        <path d="M19.2932 9.9386C19.2932 8.05298 19.2932 7.11017 18.7074 6.52439C18.1216 5.9386 17.1788 5.9386 15.2932 5.9386C13.4076 5.9386 12.4648 5.9386 11.879 6.52439C11.2932 7.11017 11.2932 8.05298 11.2932 9.9386" strokeWidth="1.5" />
        <path d="M20.2932 12.9386C20.2932 13.4909 19.8455 13.9386 19.2932 13.9386C18.7409 13.9386 18.2932 13.4909 18.2932 12.9386C18.2932 12.3863 18.7409 11.9386 19.2932 11.9386C19.8455 11.9386 20.2932 12.3863 20.2932 12.9386Z" fill="#838383" />
        <path d="M12.2932 12.9386C12.2932 13.4909 11.8455 13.9386 11.2932 13.9386C10.7409 13.9386 10.2932 13.4909 10.2932 12.9386C10.2932 12.3863 10.7409 11.9386 11.2932 11.9386C11.8455 11.9386 12.2932 12.3863 12.2932 12.9386Z" fill="#838383" />
      </svg>
      ,
      subMenu: [
        {
          href: `${rootUrl}/briefcase/profile`,
          title: 'Profile',
          icon: <Dot />
        },
        {
          href: `${rootUrl}/briefcase/requests`,
          title: 'Request',
          icon: <Dot />
        },
        {
          href: `${rootUrl}/briefcase/salary-slip`,
          title: 'Salary Slips',
          icon: <Dot />
        },
        {
          href: `${rootUrl}/briefcase/salary-revision`,
          title: 'Salary Revisions',
          icon: <Dot />
        },
      ]
    },
    {
      title: 'Essentials',
      icon: <svg width="31" height="31" viewBox="0 0 31 31" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.82019 14.02C6.82019 10.8225 6.82019 9.22367 7.19771 8.6858C7.57522 8.14793 9.07851 7.63335 12.0851 6.60419L12.6579 6.40811C14.2252 5.87163 15.0088 5.60339 15.8202 5.60339C16.6316 5.60339 17.4152 5.87163 18.9825 6.40811L19.5553 6.60419C22.5619 7.63335 24.0652 8.14793 24.4427 8.6858C24.8202 9.22367 24.8202 10.8225 24.8202 14.02C24.8202 14.503 24.8202 15.0268 24.8202 15.5948C24.8202 21.2328 20.5812 23.9689 17.9216 25.1307C17.2002 25.4458 16.8395 25.6034 15.8202 25.6034C14.8009 25.6034 14.4402 25.4458 13.7188 25.1307C11.0592 23.9689 6.82019 21.2328 6.82019 15.5948C6.82019 15.0268 6.82019 14.503 6.82019 14.02Z" strokeWidth="1.5" />
        <path d="M6.82019 14.6034L15.8202 11.6034L24.8202 14.6034" strokeWidth="1.5" />
        <path d="M15.8202 5.60339V25.1034" strokeWidth="1.5" />
      </svg>,
      subMenu: [
        {
          href: `${rootUrl}/essentials/org-policy`,
          title: 'Organization Policy',
          icon: <Dot />
        },
        {
          href: `${rootUrl}/essentials/secrets`,
          title: 'Secrets',
          icon: <Dot />
        },
      ]
    },
    {
      title: "Attendance",
      icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.76489 14.9944C5.76489 11.2231 5.76489 9.33753 6.93647 8.16596C8.10804 6.99438 9.99366 6.99438 13.7649 6.99438H17.7649C21.5361 6.99438 23.4217 6.99438 24.5933 8.16596C25.7649 9.33753 25.7649 11.2231 25.7649 14.9944V16.9944C25.7649 20.7656 25.7649 22.6512 24.5933 23.8228C23.4217 24.9944 21.5361 24.9944 17.7649 24.9944H13.7649C9.99366 24.9944 8.10804 24.9944 6.93647 23.8228C5.76489 22.6512 5.76489 20.7656 5.76489 16.9944V14.9944Z" strokeWidth="1.5" />
        <path d="M10.7649 6.99438V5.49438" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.7649 6.99438V5.49438" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.26489 11.9944H25.2649" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.7649 19.9944C21.7649 20.5467 21.3172 20.9944 20.7649 20.9944C20.2126 20.9944 19.7649 20.5467 19.7649 19.9944C19.7649 19.4421 20.2126 18.9944 20.7649 18.9944C21.3172 18.9944 21.7649 19.4421 21.7649 19.9944Z" />
        <path d="M21.7649 15.9944C21.7649 16.5467 21.3172 16.9944 20.7649 16.9944C20.2126 16.9944 19.7649 16.5467 19.7649 15.9944C19.7649 15.4421 20.2126 14.9944 20.7649 14.9944C21.3172 14.9944 21.7649 15.4421 21.7649 15.9944Z" />
        <path d="M16.7649 19.9944C16.7649 20.5467 16.3172 20.9944 15.7649 20.9944C15.2126 20.9944 14.7649 20.5467 14.7649 19.9944C14.7649 19.4421 15.2126 18.9944 15.7649 18.9944C16.3172 18.9944 16.7649 19.4421 16.7649 19.9944Z" />
        <path d="M16.7649 15.9944C16.7649 16.5467 16.3172 16.9944 15.7649 16.9944C15.2126 16.9944 14.7649 16.5467 14.7649 15.9944C14.7649 15.4421 15.2126 14.9944 15.7649 14.9944C16.3172 14.9944 16.7649 15.4421 16.7649 15.9944Z" />
        <path d="M11.7649 19.9944C11.7649 20.5467 11.3172 20.9944 10.7649 20.9944C10.2126 20.9944 9.76489 20.5467 9.76489 19.9944C9.76489 19.4421 10.2126 18.9944 10.7649 18.9944C11.3172 18.9944 11.7649 19.4421 11.7649 19.9944Z" />
        <path d="M11.7649 15.9944C11.7649 16.5467 11.3172 16.9944 10.7649 16.9944C10.2126 16.9944 9.76489 16.5467 9.76489 15.9944C9.76489 15.4421 10.2126 14.9944 10.7649 14.9944C11.3172 14.9944 11.7649 15.4421 11.7649 15.9944Z" />
      </svg>
      ,
      href: `${rootUrl}/attendance`,
    },
    {
      title: "Leave",
      icon: <svg width="31" height="31" viewBox="0 0 31 31" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7649 18.9945C11.7649 21.8229 11.7649 23.2371 12.6436 24.1158C13.5223 24.9945 14.9365 24.9945 17.7649 24.9945H18.7649C21.5933 24.9945 23.0075 24.9945 23.8862 24.1158C24.7649 23.2371 24.7649 21.8229 24.7649 18.9945V10.9945C24.7649 8.16608 24.7649 6.75187 23.8862 5.87319C23.0075 4.99451 21.5933 4.99451 18.7649 4.99451H17.7649C14.9365 4.99451 13.5223 4.99451 12.6436 5.87319C11.7649 6.75187 11.7649 8.16608 11.7649 10.9945" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.7649 22.4945C9.40787 22.4945 8.22936 22.4945 7.49713 21.7623C6.76489 21.03 6.76489 19.8515 6.76489 17.4945V12.4945C6.76489 10.1375 6.76489 8.95897 7.49713 8.22674C8.22936 7.49451 9.40787 7.49451 11.7649 7.49451" strokeWidth="1.5" />
        <path d="M9.76489 14.9945L18.7649 14.9945M18.7649 14.9945L16.2649 17.4945M18.7649 14.9945L16.2649 12.4945" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
      </svg>
      ,
      href: `${rootUrl}/leave`,
    },
    {
      title: "Rewards & Feedback",
      icon: <svg width="31" height="31" viewBox="0 0 31 31" fill='none' stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9358 7.9292C22.1108 7.94131 23.2887 8.03776 24.0571 8.80614C24.9358 9.68482 24.9358 11.099 24.9358 13.9275V19.9275C24.9358 22.7559 24.9358 24.1701 24.0571 25.0488C23.1784 25.9275 21.7642 25.9275 18.9358 25.9275H12.9358C10.1074 25.9275 8.69315 25.9275 7.81447 25.0488C6.93579 24.1701 6.93579 22.7559 6.93579 19.9275V13.9275C6.93579 11.099 6.93579 9.68482 7.81447 8.80614C8.58285 8.03776 9.76076 7.94131 11.9358 7.9292" strokeWidth="1.5" />
        <path d="M14.4358 17.9275H20.9358" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.9358 17.9275H11.4358" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.9358 14.4275H11.4358" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.9358 21.4275H11.4358" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.4358 14.4275H20.9358" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.4358 21.4275H20.9358" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.9358 7.42749C11.9358 6.59906 12.6074 5.92749 13.4358 5.92749H18.4358C19.2642 5.92749 19.9358 6.59906 19.9358 7.42749V8.42749C19.9358 9.25592 19.2642 9.92749 18.4358 9.92749H13.4358C12.6074 9.92749 11.9358 9.25592 11.9358 8.42749V7.42749Z" strokeWidth="1.5" />
      </svg>
      ,
      subMenu: [
        {
          href: `${rootUrl}/rewards/evaluations`,
          title: 'Evaluations',
          icon: <Dot />
        },
        {
          href: `${rootUrl}/rewards/feedbacks`,
          title: 'Feedbacks',
          icon: <Dot />
        },
      ]
    },
    {
      title: "Employees",
      icon: <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15.9358" cy="9.2627" r="4" strokeWidth="1.5"/>
      <path d="M21.9358 12.2627C23.5926 12.2627 24.9358 11.1434 24.9358 9.7627C24.9358 8.38198 23.5926 7.2627 21.9358 7.2627" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9.93579 12.2627C8.27894 12.2627 6.93579 11.1434 6.93579 9.7627C6.93579 8.38198 8.27894 7.2627 9.93579 7.2627" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="15.9358" cy="20.2627" rx="6" ry="4" strokeWidth="1.5"/>
      <path d="M23.9358 22.2627C25.69 21.878 26.9358 20.9038 26.9358 19.7627C26.9358 18.6216 25.69 17.6474 23.9358 17.2627" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7.93579 22.2627C6.18154 21.878 4.93579 20.9038 4.93579 19.7627C4.93579 18.6216 6.18154 17.6474 7.93579 17.2627" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      
      ,
      href: `${rootUrl}/employee`,
    },

    {
      title: "Activities",
      icon: <Lightbulb width={30} />,
      subMenu: [
        {
          href: `${rootUrl}/activities/events`,
          title: 'Events',
          icon: <Dot />
        },
        {
          href: `${rootUrl}/activities/news`,
          title: 'News',
          icon: <Dot />
        },
        {
          href: `${rootUrl}/activities/`,
          title: 'Announcement',
          icon: <Dot />
        },
        {
          href: `${rootUrl}/activities/`,
          title: 'Todo lists',
          icon: <Dot />
        },
      ]
    },
    {
      title: "Assets & Inventory",
      icon: <FolderArchive width={30} />,
      href: `${rootUrl}/assets`,
      // subMenu: [
      //   {
      //     title: 'Floating Assets',
      //     href: `${rootUrl}/assets`,
      //     icon: <Dot />
      //   },
      //   {
      //     title: 'Fixed Assets',
      //     href: `${rootUrl}/assets`,
      //     icon: <Dot />
      //   }
      // ]
    },
    {
      title: "Recruitments",
      icon: <FolderArchive width={30} />,
      subMenu: [

        {
          title: 'Overview',
          href: `${rootUrl}/assets`,
          icon: <Dot />
        },
        {
          title: 'Resume',
          href: `${rootUrl}/assets`,
          icon: <Dot />
        },
        {
          title: 'Interview',
          href: `${rootUrl}/assets`,
          icon: <Dot />
        },
        {
          title: 'Schedule Interview',
          href: `${rootUrl}/assets`,
          icon: <Dot />
        },
        {
          title: 'Offer Letter',
          href: `${rootUrl}/assets`,
          icon: <Dot />
        },
        {
          title: 'Meetin rounds',
          href: `${rootUrl}/assets`,
          icon: <Dot />
        },
      ]
    },
    {
      title: "Mentor tasks",
      icon: <FolderArchive width={30} />,
      subMenu: [
        {
          title: 'Reportees',
          href: `${rootUrl}/reportees`,
          icon: <Dot />
        },
        {
          title: 'Pending Approvals',
          href: `${rootUrl}/reportees`,
          icon: <Dot />
        }
      ]
    },
    {

      title: "Project",
      icon: <FolderArchive width={30} />,
      subMenu: [
        {
          title: 'Overview',
          href: `${rootUrl}/reportees`,
          icon: <Dot />
        },
        {
          title: 'Allocation',
          href: `${rootUrl}/reportees`,
          icon: <Dot />
        }
      ]
    },
    {
      title: "Oppotunities",
      icon: <FolderArchive width={30} />,
      subMenu: [
        {
          title: 'Customers',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
       
      ]
    },
    {
      title: "Documents",
      icon: <Folder width={30} />,
      subMenu: [
        {
          title: 'Proposals',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'NDA',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'MSA',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'Aggrements',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
      ]
    },
    {
      title: "Documents",
      icon: <Folder width={30} />,
      subMenu: [
        {
          title: 'Proposals',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'NDA',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'MSA',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'Aggrements',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
      ]
    },
    {
      title: "Payroll",
      icon: <Folder width={30} />,
      subMenu: [
        {
          title: 'Compensation',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'Salary Process',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'Summary Payroll',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
      ]
    },
    {
      title: "Budget",
      icon: <Folder width={30} />,
      subMenu: [
        {
          title: 'Planned Budget',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'Regular Budget',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
      ]
    },
    {
      title: "Masters",
      icon: <Folder width={30} />,
      subMenu: [
        {
          title: 'Customers',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
        {
          title: 'Vendors',
          href: `${rootUrl}/customers`,
          icon: <Dot />
        },
      ]
    },
    {
      title: "Finance",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-money" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M12 17v1m0 -8v1" /></svg>,
      subMenu: [
        {
          title: 'Overview',
          href: `${rootUrl}/finance/dashboard`,
          icon: <Dot />
        },
        {
          title: 'Income',
          href: `${rootUrl}/finance/income-customers`,
          icon: <Dot />,
        },
        {
          title: 'Expense',
          href: `${rootUrl}/finance/expense-vendor`,
          icon: <Dot />,
        },
        {
          title: 'Banking',
          href: `${rootUrl}/finance/banking-account`,
          icon: <Dot />,
        },
        {
          title: 'Settings',
          href: `${rootUrl}/finance/settings-categories`,
          icon: <Dot />,
        },
        {
          title: 'People',
          href: `${rootUrl}/finance/customers`,
          icon: <Dot />,
        },
      ]
    },


  ]

}