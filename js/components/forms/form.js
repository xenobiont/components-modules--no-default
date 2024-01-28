import { Component } from '../component.js';

export class Form extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const { submitType, action, funcSubmit } = this.props;
		const body =
			submitType === 'urlencoded' ? this.serialize : this.serializeJSON;
		funcSubmit(action, body);
	};

	/* eslint-disable react/require-render-return */
	render() {
		const { funcSubmit, submitType, ...attr } = this.props;
		const form = this.createElement('form', attr);
		form.addEventListener('submit', this.handleSubmit);
		this.form = form;
	}

	serialize() {
		const fields = Array.from(
			this.form.querySelectorAll('input[name], select[name], textarea[name]'),
		);
		const body = fields.map((item) => `${item.name}=${item.value}`).join('&');
		return body;
	}

	serializeJSON() {
		const fields = Array.from(
			this.form.querySelectorAll('input[name], select[name], textarea[name]'),
		);
		const body = fields.map(({ name, value }) => ({ [name]: value }));
		return JSON.stringify(body);
	}
}
