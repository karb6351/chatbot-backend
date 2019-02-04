import React from 'react';
import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';
import { Form, Field, ErrorMessage } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import { FormButton } from './style';

export default ({ errors, touched, isSubmitting }) => (
	<Form>
		<FormControl margin="normal" error={errors.username && touched.username} required fullWidth>
			<InputLabel htmlFor="username">Username</InputLabel>
			<Field name="username" render={({ field, form: { isSubmitting }, props }) => <Input type="text" disabled={isSubmitting} {...field} {...props} />} />
			<ErrorMessage name="username">
				{(msg) => <FormHelperText id="component-error-text">{msg}</FormHelperText>}
      </ErrorMessage>
		</FormControl>
		<FormControl margin="normal" error={errors.password && touched.password} required fullWidth>
			<InputLabel htmlFor="password">Password</InputLabel>
			<Field name="password" render={({ field, form: { isSubmitting },props }) => <Input type="password" disabled={isSubmitting} {...field} {...props} />} />
			<ErrorMessage name="password">
				{(msg) => <FormHelperText id="component-error-text">{msg}</FormHelperText>}
			</ErrorMessage>
		</FormControl>
		<FormButton type="submit" fullWidth variant="contained" color="primary" disabled={isSubmitting}>
			<FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '10px' }} />
			Sign in
		</FormButton>
	</Form>
);
