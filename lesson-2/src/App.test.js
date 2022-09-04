import { render, screen, fireEvent, within } from "@testing-library/react";
import { App } from "./App";

test("renders component", () => {
  const { container } = render(<App />);

  expect(container.getElementsByClassName("messages").length).toBe(1);
  expect(container.getElementsByClassName("message").length).toBe(1);
  expect(container.getElementsByClassName("btn-send").length).toBe(1);
});

test("user sends meessage", () => {
  const { container } = render(<App />);

  const input = container.getElementsByClassName("message")[0];
  fireEvent.change(input, { target: { value: "test message" } });
  const button = container.getElementsByClassName("btn-send")[0];
  fireEvent.click(button);
  const messages = container.getElementsByClassName("messages")[0];
  expect(
    within(messages).queryByText("Julia: test message")
  ).toBeInTheDocument();
});

test("bot sends meessage", () => {
  const { container } = render(<App />);

  const input = container.getElementsByClassName("message")[0];
  fireEvent.change(input, { target: { value: "test message" } });
  const button = container.getElementsByClassName("btn-send")[0];
  fireEvent.click(button);
  const messages = container.getElementsByClassName("messages")[0];

  setTimeout(
    () =>
      expect(
        within(messages).queryByText("chatBot: (-_-)")
      ).toBeInTheDocument(),
    1600
  );
});
