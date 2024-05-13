import { describe, expect, test } from "bun:test";
import { removeElement } from "./work";

describe("remove element", () => {
    test("case 1", () => {
        const nums = [3, 2, 2, 3];
        const val = 3;

        const result = removeElement(nums, val);

        expect(result).toBe(2);
        expect(nums.slice(0, result)).toEqual([2, 2]);
    });

    test("case 2", () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;

        const result = removeElement(nums, val);

        expect(result).toBe(5);
        expect(nums.slice(0, result)).toEqual([0, 1, 4, 0, 3]);
    });
});
