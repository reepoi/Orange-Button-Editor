/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils';
import OBEditor from '../src/views/OBEditor.vue';
import { createLocalVue } from '@vue/test-utils';
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import store from '../src/store/index';
import * as fetchMocker from 'jest-fetch-mock'; // create a global 'fetch' function
fetchMocker.dontMock();


const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);
let componentOBEditor;

function mountOBEditor(query) {
  return mount(OBEditor, { localVue, store, mocks: { $route: { query } } });
}

beforeAll(() => (componentOBEditor = mountOBEditor({})));

describe('Mount tests', () => {
  test('if no "view" query parameter, enter viewer Edit Mode', () => {
    expect.assertions(1);
    expect(store.state.viewerMode).toBe('Edit Mode');
  });

  test('if "view" === "all", enter viewer Edit Mode', () => {
    expect.assertions(1);
    componentOBEditor = mountOBEditor({ view: 'all' });
    expect(store.state.viewerMode).toBe('Edit Mode');
  });
});
