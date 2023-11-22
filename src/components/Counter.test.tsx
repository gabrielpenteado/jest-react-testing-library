import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter component", () => {
  it("counter display correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} color="black" />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 if increment button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <Counter initialCount={0} color="black" />
    );
    const incrementButton = getByRole("button", { name: "Increment" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("count should decrement by 1 if decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <Counter initialCount={0} color="black" />
    );
    const decrementButton = getByRole("button", { name: "Decrement" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(decrementButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(-1);
  });

  it("count should be 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(
      <Counter initialCount={10} color="black" />
    );
    const restartButton = getByRole("button", { name: "Restart" });
    expect(Number(getByTestId("count").textContent)).toEqual(10);
    fireEvent.click(restartButton);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  // it("count should invert signs if the switch signs button is clicked", () => {
  //   const { getByTestId, getByRole } = render(<Counter initialCount={10} />);
  //   const switchButton = getByRole("button", { name: "Switch Signs" });
  //   expect(Number(getByTestId("count").textContent)).toEqual(10);
  //   fireEvent.click(switchButton);
  //   expect(Number(getByTestId("count").textContent)).toEqual(-10);
  // });

  it("count should invert signs if the switch signs button is clicked", () => {
    const { getByTestId } = render(<Counter initialCount={10} color="black" />);
    // const switchButton = screen.getByText("Switch Signs");
    const switchButton = screen.getByText(/switch signs/i);
    expect(Number(getByTestId("count").textContent)).toEqual(10);
    fireEvent.click(switchButton);
    expect(Number(getByTestId("count").textContent)).toEqual(-10);
  });

  it("should change the count color", () => {
    render(<Counter initialCount={0} color="black" />);
    const numberColor = screen.getByTestId("count");
    expect(numberColor).toHaveStyle({ color: "black" });
    const SwitchColorButton = screen.getByRole("button", {
      name: "Switch Color",
    });
    fireEvent.click(SwitchColorButton);
    expect(numberColor).toHaveStyle({ color: "#646cff" });
  });
});
