import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
});

test("className= text-red-500", () => {
    render(<App />);
    const h1 = screen.getByText(/hello world/i);
    expect(h1).toHaveClass("text-red-500");
})