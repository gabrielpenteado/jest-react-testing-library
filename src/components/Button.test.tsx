import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should appears on the screen", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Button</Button>);

    // expect(
    //   screen.queryByRole("button", { name: "Cutton" })
    // ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: "Button" })
    ).toBeInTheDocument();
  });

  it("should call onClick prop on click", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Button</Button>);

    const button = screen.getByRole("button", { name: "Button" });

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
