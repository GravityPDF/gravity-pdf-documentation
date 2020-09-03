const router_1 = require('@docusaurus/router')

const getVersionFromPath = (path) => path.match(/^\/(v[0-9]+)\//)

export const getVersion = () => {
  const { pathname } = router_1.useLocation()
  return getVersionFromPath(pathname)
}
