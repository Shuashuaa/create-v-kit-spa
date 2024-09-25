import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		homeMessage: `a message for HOME from Vuex!`,
		aboutMessage: `a message for ABOUT from Vuex!`
	},
	mutations:   
	{
		updateMessage(state, newMessage) {
			Object.assign(state, { homeMessage: newMessage, aboutMessage: newMessage });
		}
	},
	actions: {},
	plugins: [createPersistedState()]
});
  
export default store;
