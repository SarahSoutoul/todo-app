import { describe, it, expect, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';

import Todo from '.';

describe("Todo component", () => {

    beforeEach(() => {
        render(<Todo todo={{ completed: false }}/>);
    })

    it("Runs tests", () => {

        expect(2 + 2).toEqual(4);

    })
})