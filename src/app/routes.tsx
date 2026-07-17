import { createBrowserRouter } from "react-router";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./components/Dashboard";
import ManagerDashboard from "./components/ManagerDashboard";
import ReceptionistDashboard from "./components/ReceptionistDashboard";
import UserRoleManagement from "./components/UserRoleManagement";
import StaffProfiles from "./components/StaffProfiles";
import CommissionReport from "./components/CommissionReport";
import SalesReports from "./components/SalesReports";
import SystemSettings from "./components/SystemSettings";
import PaymentConfiguration from "./components/PaymentConfiguration";
import AuditLogs from "./components/AuditLogs";
import BackupManagement from "./components/BackupManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "manager", Component: ManagerDashboard },
      { path: "receptionist", Component: ReceptionistDashboard },
      { path: "users", Component: UserRoleManagement },
      { path: "staff", Component: StaffProfiles },
      { path: "commission", Component: CommissionReport },
      { path: "sales", Component: SalesReports },
      { path: "settings", Component: SystemSettings },
      { path: "payments", Component: PaymentConfiguration },
      { path: "audit", Component: AuditLogs },
      { path: "backup", Component: BackupManagement },
    ],
  },
]);
