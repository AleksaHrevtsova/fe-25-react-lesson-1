import React, { Component, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import operations from '../../redux/auth/operations'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        return
      case 'email':
        setEmail(value)
        return
      case 'password':
        setPassword(value)
        return
      default:
        console.log(`Not a valid input`)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // this.props.myProp({ ...this.state })
    dispatch(operations.signup({ name, email, password }))
    // this.setState({ name: '', email: '', password: '' })
    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

// class RegisterPage extends Component {
//   state = { name: '', email: '', password: '' }
//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({ [name]: value })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.myProp({ ...this.state })
//     this.setState({ name: '', email: '', password: '' })
//   }

//   render() {
//     const { name, email, password } = this.state
//     const { handleChange, handleSubmit } = this
//     return (
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>User name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             value={name}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     )
//   }
// }
// const mapDispatchToProps = {
//   myProp: operations.signup,
// }
// export default connect(null, mapDispatchToProps)(RegisterPage)
