import { Form } from './form.js';
import { InputField } from '../form_fields/index.js';

export class RegisterForm extends Form {
	loginProps = {
		type: 'text',
		name: 'user-login',
		required: true,
		className: 'form-control',
		placeholder: 'login',
		errorText: 'Enter login!',
	};

	emailProps = {
		type: 'email',
		name: 'user-email',
		required: true,
		className: 'form-control',
		placeholder: 'email',
		errorText: 'Enter email!',
	};

	passwordProps = {
		type: 'password',
		name: 'user-password',
		required: true,
		className: 'form-control',
		placeholder: 'password',
		errorText: 'Enter password!',
	};

	passwordRepeatProps = {
		type: 'password',
		name: 'user-password-repeat',
		required: true,
		className: 'form-control',
		placeholder: 'Please repeat your password',
		errorText: 'Enter same password',
	};

	render() {
		const { loginProps, emailProps, passwordProps, passwordRepeatProps } = this;
		const loginInput = new InputField(loginProps);
		const emailInput = new InputField(emailProps);
		const passwordInput = new InputField(passwordProps);
		const passwordrepeatInput = new InputField(passwordRepeatProps);
		const form = super.render(this.props);
		form.append(
			loginInput.render(),
			emailInput.render(),
			passwordInput.render(),
			passwordrepeatInput.render(),
		);
		return form;
	}
}
