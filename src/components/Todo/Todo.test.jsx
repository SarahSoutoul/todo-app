import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Todo from '.';

let fakeComplete;

describe("Todo component", () => {

    beforeEach(() => {
        fakeComplete = vi.fn();
        render(<Todo todo={{ completed: false, text: "TEST" }} completeTodo={fakeComplete}/>);
    });

    afterEach(() => {
        cleanup();
    });

    it("Is in the document", () => {

        const elem = screen.getByRole("listitem");

        expect(elem).toBeInTheDocument();

    });

    it("Displays the provided text", () => {

        const todoTextElement = screen.getByRole("listitem").firstChild;

        expect(todoTextElement.textContent).toBe("TEST");
    })

    it("Displays two buttons", () => {

        const buttons = screen.getAllByRole("button");

        expect(buttons.length).toEqual(2);

    });

    it("Calls the completeTodo function on click", async () => {

        const compButton = screen.getByRole("button", { name: "Complete" });

        await userEvent.click(compButton);

        expect(fakeComplete).toHaveBeenCalledOnce();

    })
})