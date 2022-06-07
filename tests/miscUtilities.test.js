/**
 * @jest-environment jsdom
 */

import * as miscUtilities from '../src/utils/miscUtilities.js'


function getSVData(data) {
  let sampleValueData = miscUtilities.getSampleValueData();
  Object.keys(sampleValueData).forEach(name => (sampleValueData[name].value = data[name] || 's'));
  return sampleValueData;
}

function SVPrimitives() {
  return ['Decimals', 'EndTime', 'Precision', 'StartTime', 'Unit', 'Value'];
}

describe.each([
  [getSVData({ Value: 'true' }), 'boolean', false, true],
  [getSVData({ Value: 'false' }), 'boolean', false, false],
  [getSVData({ Value: '1' }), 'integer', false, 1],
  [getSVData({ Value: ' 1  ' }), 'integer', false, 1],
  [getSVData({ Value: '1.' }), 'integer', false, 1],
  [getSVData({ Value: '1.1' }), 'number', false, 1.1],
  [getSVData({ Value: ' 1.1  ' }), 'number', false, 1.1],
  [getSVData({ Value: 's' }), 'string', false, 's'],
  [getSVData({ Value: '  s    ' }), 'string', false, 's'],
  [getSVData({ Value: 'false' }), 'boolean', true, [false]],
  [getSVData({ Value: 'true' }), 'boolean', true, [true]],
  [getSVData({ Value: '1' }), 'integer', true, [1]],
  [getSVData({ Value: '1.1' }), 'number', true, [1.1]],
  [getSVData({ Value: 's' }), 'string', true, ['s']]
])
('correct sample value JSON from CreateDefinitionForm and EditSampleValue form', (SVData, OpenAPIType, isArray, expectedValue) => {
  const sampleValueJSON = miscUtilities.buildSampleValueObject({
    sampleValuePrimitives: SVData,
    selectedOpenAPIType: OpenAPIType,
    isOBTaxonomyElementArray: isArray });

  test(`all primitives present. Value: ${SVData.Value.value}`, () => {
    expect.assertions(SVPrimitives().length)
    SVPrimitives()
      .forEach(primitive => expect(Object.keys(sampleValueJSON)).toContain(primitive));
  });

  test(`Value is correct JSON. Value: ${SVData.Value.value}`, () => {
    expect.assertions(1);
    expect(sampleValueJSON.Value).toStrictEqual(expectedValue);
  });
});
