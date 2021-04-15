const isAuth = ({ auth }) => !!auth.token
const userName = ({ auth }) => auth.user.name
export default { isAuth, userName }
