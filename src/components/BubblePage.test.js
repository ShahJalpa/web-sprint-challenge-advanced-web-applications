import React from "react";
import { render, screen } from "@testing-library/react";

import { fetchColors as mockFetchColors } from '../api/fetchColors'
import BubblePage from "./BubblePage";

jest.mock("../api/fetchColors.js");

const colorsData = [
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 1,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 2,
  },
]

test("Renders BubblePage without errors", async () => {
  // Finish this test
  await mockFetchColors.mockResolvedValueOnce(colorsData);
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(colorsData);
  render (<BubblePage />);

  const apiData = await screen.findByTestId('apiData');
  expect(apiData).toHaveLength(2);
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading