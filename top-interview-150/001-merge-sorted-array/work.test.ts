import { describe, expect, test } from "bun:test";
import { merge } from "./work";

describe("merge sorted array", () => {
    test("case 1", () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];

        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test("case 2", () => {
        const nums1 = [1];
        merge(nums1, 1, [], 0);
        expect(nums1).toEqual([1]);
    });

    test("case 3", () => {
        const nums1 = [0];

        merge(nums1, 0, [1], 1);
        expect(nums1).toEqual([1]);
    });
});
