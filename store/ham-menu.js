export const state = function() {
  return {
    isOpen: false
  };
};

export const mutations = {
  setOpen(state) {
    state.isOpen = true;
  },
  setClose(state) {
    state.isOpen = false;
  },
  toggle(state) {
    state.isOpen = !state.isOpen;
  }
};

export const actions = {
  open(context) {
    context.commit('setOpen');
  },
  close(context) {
    context.commit('setClose');
  },
  toggle(context) {
    context.commit('toggle');
  }
};
