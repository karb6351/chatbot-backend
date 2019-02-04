import React, { Component } from 'react';
import { Formik } from 'formik';

import { FullScreenContainer, FormWrapper, FormLogo } from './style';
import renderLoginForm from './LoginForm';
import { login } from '../../api/auth';
import logo from '../../asset/images/logo.png';
import LoginSchema from '../../validations/LoginSchema';

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       password: ''
    }
  }
  
	handleLogin = async (values, action) => {
		try {
      const { username, password } = values;
      action.setSubmitting(true);
      const { data } = await login(username, password);
      if (!data.success) {
        throw Error(data.message)
      }
      const { token } = data;
      localStorage.setItem('token', token);
      action.setSubmitting(false);
      this.props.history.push('/');
		} catch (error) {
      console.error(error.message);
      action.setErrors(error);
      action.setSubmitting(false);
      
		}
  }

	render() {
    const { username, password } = this.state;
		return (
			<FullScreenContainer>
				<FormWrapper>
          <FormLogo src={logo}></FormLogo>
					<Formik initialValues={{ username, password }} onSubmit={this.handleLogin} validationSchema={LoginSchema}>
						{renderLoginForm}
					</Formik>
				</FormWrapper>
			</FullScreenContainer>
		);
	}
}

export default Login;
