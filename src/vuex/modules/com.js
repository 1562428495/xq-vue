import * as types from '../mutations-type.js'

const state = {
	slideBarStatus: false,
	advStatus: false
}

const getters = {

}

const mutations = {
	[types.COM_NAV_STATUS](state, status) {
		state.slideBarStatus = status
	},
	[types.HIDE_ADV](state) {
		state.advStatus = true
	}
}

const actions = {
	setNavStatus ({ commit }, status) {
		commit(types.COM_NAV_STATUS, status)
	},
	hideAdv({ commit }) {
		commit(types.HIDE_ADV)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}