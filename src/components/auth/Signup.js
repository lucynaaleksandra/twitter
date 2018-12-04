import React from 'react'
import { Wrapper, ButtonClassic, BackButton, Button, Input } from '../../styles'
import AppNavbar from '../layout/AppNavbar'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: '',
      errors: '',
    }
  }

  handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsValid = true

    //Name
    if (!fields["name"]) {
      formIsValid = false
      errors["name"] = "Please enter your name"
    }

    if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false
        errors["name"] = "Only letters"
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false
      errors["email"] = "Email is required"
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@')
      let lastDotPos = fields["email"].lastIndexOf('.')

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false
        errors["email"] = "Email is not valid"
      }
    }

    this.setState({ errors: errors })
    return formIsValid
  }

  contactSubmit(e) {
    e.preventDefault()

    if (this.handleValidation()) {
      console.log("Form submitted")
    } else {
      console.log("Form has errors")
    }

  }

  handleChange(field, e) {
    let fields = this.state.fields
    fields[field] = e.target.value
    this.setState({ fields })
  }


  render() {
    return (
      <Wrapper onSubmit={this.contactSubmit.bind(this)} >
        <AppNavbar />
        {/* <div style={{ marginBottom: "4rem", float: "left" }}>
          <BackButton as="a" href="/login" >
            <i className="fas fa-arrow-circle-left" />{' '} Go Back
          </BackButton>
        </div> */}

        <h2>Join Twitter today</h2>

        <Input refs="name"
          size="30"
          placeholder="Full name"
          type="text"
          onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}
          className="tw-name" /><br />

        <Input refs="email"
          size="30"
          placeholder="Your email"
          type="text"
          className="tw-ph_email"
          onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} /><br />

        <Input refs="password"
          size="30"
          type="password"
          placeholder="Password"
          onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}
          className="pass" /><br />

        <ButtonClassic as="a" href="/login" className="success">
          Signup
        </ButtonClassic>
      </Wrapper>
    )
  }
}

export default Signup



// class Signup extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       fields: '',
//       errors: '',
//     }
//   }

//   handleValidation() {
//     let fields = this.state.fields
//     let errors = {}
//     let formIsValid = true

//     //Name
//     if (!fields["name"]) {
//        formIsValid = false
//        errors["name"] = "Please enter your name"
//     }

//     if (typeof fields["name"] !== "undefined") {
//        if (!fields["name"].match(/^[a-zA-Z]+$/)) {
//           formIsValid = false
//           errors["name"] = "Only letters"
//        }        
//     }

//     //Email
//     if (!fields["email"]) {
//        formIsValid = false
//        errors["email"] = "Email is required"
//     }

//     if (typeof fields["email"] !== "undefined") {
//        let lastAtPos = fields["email"].lastIndexOf('@')
//        let lastDotPos = fields["email"].lastIndexOf('.')

//        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
//           formIsValid = false
//           errors["email"] = "Email is not valid"
//         }
//    }  

//    this.setState({ errors: errors })
//    return formIsValid
// }

// contactSubmit(e) {
//     e.preventDefault()

//     if (this.handleValidation()) {
//        console.log("Form submitted")
//     } else {
//       console.log("Form has errors")
//     }

// }

// handleChange(field, e) {
//     let fields = this.state.fields
//     fields[field] = e.target.value 
//     this.setState({fields})
// }
//   render() {
//     return (
//       <Wrapper onSubmit= {this.contactSubmit.bind(this)} >
//         <h2>Join Twitter today</h2>

//         <Input refs="name"
//           size="30"
//           placeholder="Full name"
//           type="text"
//           onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}
//           className="tw-name" /><br />

//         <Input refs="email"
//           size="30"
//           placeholder="Your email"
//           type="text"
//           className="tw-ph_email"
//           onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} /><br />

//         <Input refs="password"
//           size="30"
//           type="password"
//           placeholder="Password"
//           onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}
//           className="pass" /><br />

//         <ButtonClassic className="success">Login</ButtonClassic>
//       </Wrapper>
//     )
//   }
// }