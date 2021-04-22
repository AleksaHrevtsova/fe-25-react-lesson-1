import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component, Suspense, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './routes/Private/PrivateRoute'
import PublicRoute from './routes/Public/PublicRoute'

import Header from './components//Header/Header'
import Navigation from './components//Navigation/Navigation'

import Main from './components//Main/Main'
import Footer from './components/Footer/Footer'

import database from './db/db.json'
import links from './db/nav.json'

import routes from './routes'
// console.log(routes);

import { connect, useSelector, useDispatch } from 'react-redux'
import addUserAction from './redux/actions/userAction'
import operations from './redux/auth/operations'
import allUsersSelector from './redux/actions/selectors'

export default function MyApp({ allUsers, getMyUser }) {
  const [myUsers, setMyUsers] = useState([])
  const dispatch = useDispatch()

  const allMyUsers = useSelector(allUsersSelector.getAllUsers)
  useEffect(() => {
    dispatch(operations.getUser())
    setMyUsers(allMyUsers)
  }, [myUsers])
  return (
    <div className="App">
      <Header className="Header">
        <Navigation links={links} />
      </Header>
      <div>
        {myUsers.map((user) => {
          return (
            <li key={user.email}>
              {user.pass}{' '}
              <button
                type="button"
                // onClick={() => delete(user.email)}
              >
                del
              </button>
            </li>
          )
        })}
      </div>
      <Main db={database} className="Main">
        <Suspense fallback="Waiting...">
          <Switch>
            {routes.map((route) => {
              return <Route {...route} />
            })}
          </Switch>
        </Suspense>
      </Main>
      <Footer className="Footer" />
    </div>
  )
}

// class App extends Component {
//   state = {
//     users: [],
//   }
//   componentDidMount() {
//     const { allUsers, getMyUser } = this.props
//     getMyUser()
//     this.setState({ users: [...allUsers] })
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const { user, allUsers } = this.props

//     if (user !== prevProps.user || allUsers !== prevProps.allUsers) {
//       this.setState({ users: [...allUsers] })
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <Header className="Header">
//           <Navigation links={links} />
//         </Header>
//         {/* <div>
//           {this.state.users.map((user) => {
//             return (
//               <li key={user.email}>
//                 {user.pass}{" "}
//                 <button
//                   type="button"
//                   onClick={() => this.props.delete(user.email)}
//                 >
//                   del
//                 </button>
//               </li>
//             );
//           })}
//         </div> */}
//         <Main db={database} className="Main">
//           {/* <Suspense fallback={<Loader image={image} />}> */}
//           <Suspense fallback="Waiting...">
//             <Switch>
//               {/* {routes.map((route) =>
//                 route.private ? (
//                   <PrivateRoute {...route} />
//                 ) : (
//                   <PublicRoute restricted={route.restricted} {...route} />
//                 ),
//               )} */}
//               {routes.map((route) => {
//                 // console.log(route);
//                 return <Route {...route} />
//               })}
//               {/* <Route exact path="/" component={Home} />
//               <Route exact path="/about" component={About} />
//               <Route exact path="/contacts" component={Contacts} />
//               <Route component={NotFound} />
//               <Redirect to="/" /> */}
//             </Switch>
//           </Suspense>
//         </Main>
//         <Footer className="Footer" />
//       </div>
//     )
//   }
// }
// const mapStateToProps = (store) => {
//   // console.log("store.user", store.user);
//   // console.log("store.allUsers", store.allUsers);
//   return {
//     user: store.user,
//     allUsers: store.allUsers,
//   }
// }
// const mapDispatchToProps = {
//   x: addUserAction.addUser,
//   getMyUser: operations.getUser,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
