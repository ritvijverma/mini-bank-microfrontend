import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json([
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
      },
      {
        id: "3",
        name: "Rahul Kumar",
        email: "rahul@example.com",
      },
    ]);
  }),
];