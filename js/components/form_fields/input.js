import { Component } from '../component.js';

export class InputField extends Component {
	handleFocus = () => {
		if (this.error) {
			this.error.remove();
		}
	};

	handleBlur = () => {
		if (!this.elem.value) {
			const error = this.createElement(
				'p',
				{ style: 'color: red' },
				this.props.errorText,
			);
			this.elem.after(error);
			this.error = error;
		}
	};

	render() {
		const element = document.createElement('input');
		this.elem = element;
		return element;
	}
}
