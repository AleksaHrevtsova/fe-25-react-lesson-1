import { lazy } from 'react'
import links from './db/nav.json'
// console.log(links);

const routes = links.map((link) => {
  // console.log(link);
  const { id, component, props } = link
  return {
    private: props.private,
    restricted: props.restricted,
    exact: props.exact,
    path: props.to,
    component: lazy(() => import(`${component}`)),
    key: id,
  }
})
// console.log(routes);
export default routes
