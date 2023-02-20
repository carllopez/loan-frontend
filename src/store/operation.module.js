import { operationService } from '../services';
import router from '../router';

const user = JSON.parse(localStorage.getItem('user'));
const state = user
  ? { status: { loggedIn: true }, user, operation: null, response: null }
  : { status: {}, user: null, operation: null, response: null };

const actions = {
  addition({ dispatch, commit }, { operand_a, operand_b }) {
    const operation = 'addition';
    commit('additionRequest', { operation });

    operationService.addition(operand_a, operand_b)
      .then(
        response => {
          commit('additionSuccess', response);
          dispatch('alert/success', `Excellent, your result is: ${response}`, { root: true });
        },
        error => {
          commit('additionFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  subtract({ dispatch, commit }, { operand_a, operand_b }) {
    const operation = 'subtract';
    commit('subtractRequest', { operation });

    operationService.subtract(operand_a, operand_b)
      .then(
        response => {
          commit('subtractSuccess', response);
          dispatch('alert/success', `Excellent, your result is: ${response}`, { root: true });
        },
        error => {
          commit('subtractFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  multiplication({ dispatch, commit }, { operand_a, operand_b }) {
    const operation = 'multiplication';
    commit('multiplicationRequest', { operation });

    operationService.multiplication(operand_a, operand_b)
      .then(
        response => {
          commit('multiplicationSuccess', response);
          dispatch('alert/success', `Excellent, your result is: ${response}`, { root: true });
        },
        error => {
          commit('multiplicationFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  division({ dispatch, commit }, { operand_a, operand_b }) {
    const operation = 'division';
    commit('divisionRequest', { operation });

    operationService.division(operand_a, operand_b)
      .then(
        response => {
          commit('divisionSuccess', response);
          dispatch('alert/success', `Excellent, your result is: ${response}`, { root: true });
        },
        error => {
          commit('divisionFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  square_root({ dispatch, commit }, { operand_a }) {
    const operation = 'square_root';
    commit('squareRootRequest', { operation });

    operationService.square_root(operand_a)
      .then(
        response => {
          commit('squareRootSuccess', response);
          dispatch('alert/success', `Excellent, your result is: ${response}`, { root: true });
        },
        error => {
          commit('squareRootFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  },
  random_string({ dispatch, commit }, { }) {
    const operation = 'random_string';
    commit('randomStringRequest', { operation });

    operationService.random_string()
      .then(
        response => {
          commit('randomStringSuccess', response);
          dispatch('alert/success', `Excellent, your result is: ${response}`, { root: true });
        },
        error => {
          commit('randomStringFailure', error);
          dispatch('alert/error', error, { root: true });
        }
      );
  }
};

const mutations = {
  additionRequest(state, operation) {
    state.operation = operation;
  },
  additionSuccess(state, response) {
    state.response = response;
  },
  additionFailure(state) {
    state.operation = null;
    state.response = null;
  },
  subtractRequest(state, operation) {
    state.operation = operation;
  },
  subtractSuccess(state, response) {
    state.response = response;
  },
  subtractFailure(state) {
    state.operation = null;
    state.response = null;
  },
  multiplicationRequest(state, operation) {
    state.operation = operation;
  },
  multiplicationSuccess(state, response) {
    state.response = response;
  },
  multiplicationFailure(state) {
    state.operation = null;
    state.response = null;
  },
  divisionRequest(state, operation) {
    state.operation = operation;
  },
  divisionSuccess(state, response) {
    state.response = response;
  },
  divisionFailure(state) {
    state.operation = null;
    state.response = null;
  },
  squareRootRequest(state, operation) {
    state.operation = operation;
  },
  squareRootSuccess(state, response) {
    state.response = response;
  },
  squareRootFailure(state) {
    state.operation = null;
    state.response = null;
  },
  randomStringRequest(state, operation) {
    state.operation = operation;
  },
  randomStringSuccess(state, response) {
    state.response = response;
  },
  randomStringFailure(state) {
    state.operation = null;
    state.response = null;
  }
};

export const operation = {
  namespaced: true,
  state,
  actions,
  mutations
};