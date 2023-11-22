import Tasks from "./Tasks";
import { fireEvent, render, screen } from "@testing-library/react";

import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

describe("Tasks component", () => {
  const server = setupServer(
    http.get("/tasks", () => {
      return HttpResponse.json({
        id: "1",
        title: "delectus aut autem",
      });
    })
  );

  beforeAll(() => {
    // Start the interception.
    server.listen();
  });

  it("should fetch and shows tasks on the button click", async () => {
    render(<Tasks />);

    const button = screen.getByText(/get tasks from api/i);

    fireEvent.click(button);

    await screen.findByText("delectus aut autem");
  });
});
