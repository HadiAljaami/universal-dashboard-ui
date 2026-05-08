/**
 * Sample data — replace with real API calls when wiring a backend.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  status: "active" | "inactive" | "pending";
  joined: string;
  avatar?: string;
}

export const sampleUsers: User[] = [
  { id: "1", name: "Sarah Mitchell", email: "sarah@example.com", role: "admin", status: "active", joined: "2024-08-12" },
  { id: "2", name: "Ahmed Hassan", email: "ahmed.h@example.com", role: "editor", status: "active", joined: "2024-09-03" },
  { id: "3", name: "Lina Park", email: "lina.park@example.com", role: "viewer", status: "pending", joined: "2025-01-18" },
  { id: "4", name: "Marco Rossi", email: "marco@example.com", role: "editor", status: "active", joined: "2024-11-22" },
  { id: "5", name: "Fatima Al-Zahra", email: "fatima@example.com", role: "admin", status: "active", joined: "2024-07-30" },
  { id: "6", name: "James O'Connor", email: "james.o@example.com", role: "viewer", status: "inactive", joined: "2024-06-14" },
  { id: "7", name: "Yuki Tanaka", email: "yuki@example.com", role: "editor", status: "active", joined: "2025-02-09" },
  { id: "8", name: "Omar Khaled", email: "omar.k@example.com", role: "viewer", status: "pending", joined: "2025-03-04" },
  { id: "9", name: "Elena Garcia", email: "elena.g@example.com", role: "admin", status: "active", joined: "2024-10-11" },
  { id: "10", name: "Noah Williams", email: "noah.w@example.com", role: "viewer", status: "inactive", joined: "2024-05-28" },
  { id: "11", name: "Maya Iyer", email: "maya@example.com", role: "editor", status: "active", joined: "2025-04-02" },
  { id: "12", name: "Karim Saleh", email: "karim.s@example.com", role: "viewer", status: "active", joined: "2025-04-19" },
];

export const revenueByMonth = [
  { m: "jan", revenue: 12400, orders: 240 },
  { m: "feb", revenue: 14800, orders: 280 },
  { m: "mar", revenue: 13200, orders: 260 },
  { m: "apr", revenue: 17600, orders: 320 },
  { m: "may", revenue: 19800, orders: 360 },
  { m: "jun", revenue: 22400, orders: 410 },
  { m: "jul", revenue: 21600, orders: 395 },
  { m: "aug", revenue: 24800, orders: 445 },
  { m: "sep", revenue: 26400, orders: 480 },
  { m: "oct", revenue: 28200, orders: 510 },
  { m: "nov", revenue: 31000, orders: 560 },
  { m: "dec", revenue: 34800, orders: 620 },
] as const;

export const trafficSources = [
  { name: "Direct", value: 4200, color: "hsl(var(--primary))" },
  { name: "Search", value: 3100, color: "hsl(var(--info))" },
  { name: "Social", value: 2400, color: "hsl(var(--success))" },
  { name: "Referral", value: 1300, color: "hsl(var(--warning))" },
];

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: "completed" | "pending" | "cancelled";
  date: string;
}

export const recentOrders: Order[] = [
  { id: "#10245", customer: "Sarah Mitchell", amount: 1240, status: "completed", date: "2025-04-28" },
  { id: "#10244", customer: "Ahmed Hassan", amount: 580, status: "pending", date: "2025-04-28" },
  { id: "#10243", customer: "Marco Rossi", amount: 2100, status: "completed", date: "2025-04-27" },
  { id: "#10242", customer: "Lina Park", amount: 340, status: "cancelled", date: "2025-04-27" },
  { id: "#10241", customer: "Fatima Al-Zahra", amount: 1820, status: "completed", date: "2025-04-26" },
];

export const recentActivity = [
  { id: 1, type: "user", text: "New user registered", time: "5m" },
  { id: 2, type: "order", text: "Order #10245 completed", time: "22m" },
  { id: 3, type: "report", text: "Monthly report generated", time: "1h" },
  { id: 4, type: "user", text: "Profile updated", time: "3h" },
  { id: 5, type: "order", text: "Refund processed for #10198", time: "5h" },
];
