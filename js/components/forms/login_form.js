import { Form } from './form.js';
import { InputField } from '../form_fields/index.js';

export class LoginForm extends Form {
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

	handleSubmit = (e) => {
		e.preventDefault();
		const email = this.elem.querySelector(`input[name="user-email]"`).value;
		const password = this.elem.querySelector(`input[name="user-password]"`)
			.value;
		if (!email) {
			email.insertAdjacentHTML(
				'afterend',
				`<style="color: red">Email field must be filled!</p>`,
			);
		}
		if (!password) {
			password.insertAdjacentHTML(
				'afterend',
				`< style="color: red">Password field must be filled!</p>`,
			);
		}
	};

	render() {
		const { emailProps, passwordProps } = this;
		const emailInput = new InputField(emailProps);
		const passwordInput = new InputField(passwordProps);
		const form = super.render(this.props);
		form.append(emailInput.render(), passwordInput.render());
		return form;
	}
}
