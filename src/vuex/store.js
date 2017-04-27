import Vue from 'vue'
import Vuex from 'vuex'

import com from './modules/com'
import routesList from './modules/routesList'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		com,
		routesList
	}
})