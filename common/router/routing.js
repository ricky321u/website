import React from 'react'
import { Route } from 'react-router'
import Index from '../pages/landing'

/*這邊集中管理 router 導向到的 Components*/

// 傳入的 store 可以方便在這邊做middleware的功能
export const routesMiddleware = ( store ) => ({
  index: {
  path: '/',
  components: Index
  },
});


export default ( store ) => {
  const route = routesMiddleware( store ); let routesGroup = [];
  for( let key in route ) { routesGroup.push(route[key]) }
  return { childRoutes: routesGroup };
}
