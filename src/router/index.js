import Vue from 'vue'
import Router from 'vue-router'
import EnterPark from '@/components/EnterPark'
import Payment from '@/components/Payment'
import LeavePark from '@/components/LeavePark'
import ConfirmProcess from '@/components/ConfirmProcess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EnterPark',
      component: EnterPark
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/LeavePark',
      name: 'LeavePark',
      component: LeavePark
    },
    {
      path: '/ConfirmProcess',
      name: 'ConfirmProcess',
      component: ConfirmProcess
    }
  ]
})
