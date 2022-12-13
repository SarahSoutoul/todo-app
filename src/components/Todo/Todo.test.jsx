import { describe, it, expect, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Todo from '.';

describe("Todo component", () => {

    beforeEach(() => {
        render(<Todo todo={{ completed: false }}/>);
    })

    it("To be in the document", () => {

        const elem = screen.getByRole("bugs");

        expect(elem).toBeInTheDocument();

    })
})