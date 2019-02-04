import * as Yup from 'yup';

import { required, lengthMax, lengthMin } from '../asset/strings/valiation';

const LoginSchema = Yup.object().shape({
	username: Yup.string()
		.min(4, lengthMin('Username', 4))
		.max(10, lengthMax('Username', 10))
		.required(required('Username')),
	password: Yup.string()
		.min(4, lengthMin('Password', 4))
		.max(10, lengthMax('Password', 10))
		.required(required('Password'))
});

export default LoginSchema;
