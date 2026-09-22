import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/accounts", () => {
    return HttpResponse.json([
      {
        accountNumber: "ACC1001",
        accountType: "Savings",
        balance: 85450,
        status: "Active",
      },
      {
        accountNumber: "ACC1002",
        accountType: "Current",
        balance: 125000,
        status: "Inactive",
      },
    ]);
  }),
];