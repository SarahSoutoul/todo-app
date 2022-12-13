import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Todo from '.';

describe("Todo component", () => {

    beforeEach(() => {
        render(<Todo todo={{ completed: false }}/>);
    });

    afterEach(() => {
        cleanup();
    });

    it("Is in the document", () => {

        const elem = screen.getByRole("listitem");

        expect(elem).toBeInTheDocument();

    });

    it("Displays two buttons", () => {

        const buttons = screen.getAllByRole("button");

        expect(buttons.length).toEqual(2);

    });

    it("Adds the completed class on click", async () => {

        const compButton = screen.getByRole("button", { name: "Complete" });
        const toDoItem = screen.getByRole("listitem").firstChild;

        expect(toDoItem).not.toHaveClass("complete");

        await userEvent.click(compButton);

        expect(toDoItem).toHaveClass("complete");

    })
})