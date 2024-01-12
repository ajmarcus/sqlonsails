import {describe, expect, test} from '@jest/globals';
import {parse} from './parser';

describe('parse select', () => {
  test('select returns ["SELECT"]', () => {
    expect(parse("select")).toStrictEqual(["SELECT"]);
  });
});
