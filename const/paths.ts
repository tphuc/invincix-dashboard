export const LOGIN = "/login";

// SUPERVISOR PATHS
export const SUPERVISOR_HOME = "/supervisor/home";
export const SUPERVISOR_JOB_CARD = "/supervisor/job-card";
export const SUPERVISOR_VEHICLE_REGISTRATION = "/supervisor/vehicle-registration";
export const SUPERVISOR_PAYMENT = "/supervisor/payment";
export const SUPERVISOR_SPARE_PART_REQUEST = "/supervisor/spare-part-request";

export const SUPERVISOR_CONFIGURATION = "/supervisor/configuration";
export const SUPERVISOR_CONFIGURATION_PRODUCT = `${SUPERVISOR_CONFIGURATION}/product`;
export const SUPERVISOR_CONFIGURATION_PRODUCT_DETAILS = `${SUPERVISOR_CONFIGURATION}/product/:productId`;
export const SUPERVISOR_CONFIGURATION_PRODUCT_CATEGORY = `${SUPERVISOR_CONFIGURATION}/product-category`;
export const SUPERVISOR_CONFIGURATION_SERVICE = `${SUPERVISOR_CONFIGURATION}/service`;
export const SUPERVISOR_CONFIGURATION_SERVICE_CATEGORY = `${SUPERVISOR_CONFIGURATION}/service-category`;
export const SUPERVISOR_CONFIGURATION_SUPPLIERS = `${SUPERVISOR_CONFIGURATION}/suppliers`;
export const SUPERVISOR_CONFIGURATION_MASTER_BAY = `${SUPERVISOR_CONFIGURATION}/master-bay`;

export const SUPERVISOR_SPARE_TEAMS = "/supervisor/teams";
export const SUPERVISOR_SPARE_TEAMS_TASK_LIST =
  "/supervisor/teams/task-list/:mechanicId";
export const SUPERVISOR_SPARE_ARCHIVE_JOB_CARD = "/supervisor/archive-job-card";

// MECHANIC PATHS
export const MECHANIC_PENDING_TASK = "/mechanic/pending-tasks";
export const MECHANIC_COMPLETED_TASK = "/mechanic/completed-tasks";
export const MECHANIC_REQUEST_SPARES = "/mechanic/request-spares";

// PARTNER PATHS
export const PARTNER_HOME = "/partner/home";

export const PARTNER_SETTINGS = "/partner/settings";
export const PARTNER_SETTINGS_ROLES = `${PARTNER_SETTINGS}/roles`;
export const PARTNER_SETTINGS_USERS = `${PARTNER_SETTINGS}/users`;

export const PARTNER_REPORTS = "/partner/reports";
export const PARTNER_REPORTS_GARAGE = `${PARTNER_REPORTS}/garage`;
export const PARTNER_REPORTS_JOB_DURATION = `${PARTNER_REPORTS}/job-duration`;
export const PARTNER_REPORTS_MECHANIC_PERFORMANCE = `${PARTNER_REPORTS}/mechanic-performance`;
export const PARTNER_REPORTS_REVENUE = `${PARTNER_REPORTS}/revenue`;
export const PARTNER_REPORTS_SPARE_PART = `${PARTNER_REPORTS}/spare-part`;
export const PARTNER_REPORTS_TASK = `${PARTNER_REPORTS}/task`;

export const PARTNER_TEAMS = "/partner/teams";
export const PARTNER_EXPENSES_REVENUE_LOG = "/partner/expenses-revenue-log";

// OWNER PATHS
export const OWNER_HOME = "/owner/home";

export const OWNER_SETTINGS = "/owner/settings";
export const OWNER_SETTINGS_PARTNERS = `${OWNER_SETTINGS}/partners`;
export const OWNER_SETTINGS_ROLES = `${OWNER_SETTINGS}/roles`;
export const OWNER_SETTINGS_ROLE_CREATE = `${OWNER_SETTINGS}/role-create`;
export const OWNER_SETTINGS_CURRENCY = `${OWNER_SETTINGS}/currency`;
