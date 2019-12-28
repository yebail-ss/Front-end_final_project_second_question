import Vue from 'vue'
import '@/assets/css/mui.min.css'
import '@/assets/css/app.css'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import nav from '@/components/nav'
import card from '@/components/card'
import tables from '@/components/tables'
import tables2 from '@/components/tables2'
import index from '@/components/index'
import icons from '@/components/icons'
import slider from '@/components/slider'
import note from '@/components/note'
import button1 from '@/components/button1'
import button2 from '@/components/button2'
import router from '@/components/router'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
	  path: '/',
	  name: 'nav',
	  component: nav
	},
	{
	  path: '/card',
	  name: 'card',
	  component: card
	},
	{
	  path: '/tables',
	  name: 'tables',
	  component: tables
	},
	{
	  path: '/index',
	  name: 'index',
	  component: index
	},
	{
	  path: '/tables2',
	  name: 'tables2',
	  component: tables2,
    },
	{
	  path: '/icons',
	  name: 'icons',
	  component: icons,
    },
	{
	  path: '/slider',
	  name: 'slider',
	  component: slider,
    },
    {
      path: '/note',
      name: 'note',
      component: note,
      },
    {
      path: '/button1',
      name: 'button1',
      component: button1,
      },
    {
      path: '/button2',
      name: 'button2',
      component: button2,
      },
    {
      path: 'router',
      name: 'router',
      component: router,
      }
  ]
})
