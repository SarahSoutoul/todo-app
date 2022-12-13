import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

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

        const elem = screen.getByRole("listitem")

        expect(elem).toBeInTheDocument();

    });

    it("Displays two buttons", () => {

        const buttons = screen.getAllByRole("button");

        expect(buttons.length).toEqual(2);

    });
})