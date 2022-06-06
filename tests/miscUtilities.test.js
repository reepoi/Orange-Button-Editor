/**
 * @jest-environment jsdom
 */

import * as miscUtilities from '../src/utils/miscUtilities.js'

describe('formatSampleValueValue', () => {
  it.each([
    ['true', 'boolean', false, true],
    ['false', 'boolean', false, false],
    ['1', 'integer', false, 1],
    ['1.', 'integer', false, 1],
    ['1.1', 'number', false, 1.1],
    ['s', 'string', false, 's'],
    ['false', 'boolean', true, [false]],
    ['true', 'boolean', true, [true]],
    ['1', 'integer', true, [1]],
    ['1.1', 'number', true, [1.1]],
    ['s', 'string', true, ['s']]
  ])('converts string to correct OpenAPI type', (str, type, isArray, expected) => {
    expect.assertions(1);
    let result = miscUtilities.formatSampleValueValue({
      value: str,
      selectedOpenAPIType: type,
      isOBTaxonomyElementArray: isArray
    });
    expect(result).toStrictEqual(expected);
  });

});
