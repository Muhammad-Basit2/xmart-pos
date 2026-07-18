export const weeklySalesData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

  datasets: [
    {
      label: "Weekly Sales",

      data: [45000, 58000, 62000, 81000, 95000, 120000, 110000],

      borderColor: "#2563EB",

      backgroundColor: "rgba(37,99,235,0.2)",

      tension: 0.4,

      fill: true,

      pointRadius: 5,

      pointBackgroundColor: "#2563EB",
    },
  ],
};

export const recentSales = [
  {
    id: 1,
    invoice: "INV-1001",
    customer: "Ali Raza",
    payment: "Bank Transfer",
    total: "₨ 4,500",
    status: "Paid",
    date: "18-Jul-2026",
  },
  {
    id: 2,
    invoice: "INV-1002",
    customer: "Ahmed Khan",
    payment: "JazzCash",
    total: "₨ 8,200",
    status: "Pending",
    date: "18-Jul-2026",
  },
  {
    id: 3,
    invoice: "INV-1003",
    customer: "Bilal Ahmed",
    payment: "EasyPaisa",
    total: "₨ 2,300",
    status: "Cancelled",
    date: "17-Jul-2026",
  },
  {
    id: 4,
    invoice: "INV-1004",
    customer: "Hassan Ali",
    payment: "Card",
    total: "₨ 12,500",
    status: "Paid",
    date: "17-Jul-2026",
  },
  {
    id: 5,
    invoice: "INV-1005",
    customer: "Dawood Ail",
    payment: "Bank Transfer",
    total: "13,550",
    status: "Pending",
    date: "17-Jul-2026",
  },
];