import React from "react";
import { render } from "@testing-library/react";
import AppView from "../../components/app/App.component";

test("renders learn react link", () => {
  const { getByText } = render(<AppView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
