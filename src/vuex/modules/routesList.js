import api from '../../axios/api.js'
import * as types from '../mutations-type.js'

const state = {
	routesList: []
}

const getters = {
	routesList: state => state.routesList
}

const mutations = {
	[types.GET_ROUTES_LIST](state, res) {
		console.log(res.routeList )
        state.routesList = res.routeList 
    },
}

const actions = {
	getRoutesList ({commit}) {
		api.getRoutesList ()
			.then(res => {
				console.log('success')
				commit(types.GET_ROUTES_LIST, res)
			})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
