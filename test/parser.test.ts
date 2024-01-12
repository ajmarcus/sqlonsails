import { describe, expect, test } from "@jest/globals";
import { parse } from "../src/parser";

describe("select statement work in the parser", () => {
    test('select returns ["SELECT"]', () => {
        expect(parse("select")).toStrictEqual(["TKN<SELECT>"]);
    });
    test("select name from employees where tenure=5;", () => {
        expect(
            parse("select name from employees where tenure=5;"),
        ).toStrictEqual([
            "TKN<SELECT>",
            "VAL<NAME>",
            "TKN<FROM>",
            "VAL<EMPLOYEES>",
            "TKN<WHERE>",
            "VAL<TENURE>",
            "TKN<EQ>",
            "VAL<5>",
            "TKN<SEMI>",
        ]);
    });
});
