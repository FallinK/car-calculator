import { createStore } from 'vuex'
import { calculatorModule } from '@/store/calculatorModule'

export default createStore({
  modules: {
    calculator: calculatorModule
  }
})
