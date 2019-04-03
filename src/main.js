import Vue from 'vue'
import App from './App.vue'
import WCheckbox from './components/Checkbox'
import WInput from './components/Input'
import WLoading from './components/Loading'
import WCard from './components/Card'
import WButton from './components/Button'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export {
  WCheckbox,
  WInput,
  WLoading,
  WCard,
  WButton
}