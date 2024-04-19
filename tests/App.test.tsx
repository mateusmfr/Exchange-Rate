import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App tests", () => {
    test("Renders title", () => {
        render(<App />);
        const title = screen.getByText(/Exchange Rate/i);
        expect(title).toBeInTheDocument();
    });
});