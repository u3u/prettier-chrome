import Vue from 'vue';
import Vuex from 'vuex';
import { LOCAL_STORAGE_KEY, defaultOptions } from './config';

Vue.use(Vuex);

export const options: Prettier.Options = Object.assign(
  {},
  defaultOptions,
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}'),
);

export default new Vuex.Store({
  state: {
    options,
    cacheOptions: { ...options },
  },
  mutations: {
    updateCache(state, payload) {
      Object.assign(state.cacheOptions, payload);
    },
    save(state) {
      Object.assign(state.options, state.cacheOptions);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.options));
    },
    reset(state) {
      Object.assign(state.options, defaultOptions);
      Object.assign(state.cacheOptions, defaultOptions);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultOptions));
    },
  },
  actions: {},
});
