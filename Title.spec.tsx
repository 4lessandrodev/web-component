import Component from './index';
import { screen, render } from '@testing-library/react';

describe('Title', () => {

	it('should render small with success', async () => {
		render(<Component size="SMALL" value="Small Title"/>);
		const element = screen.getByText(/Small Title/i);
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent("Small Title");
		expect(element.style.fontSize).toBe("1rem");
	});

	it('should render medium with success', async () => {
		render(<Component size="MEDIUM" value="Medium Title"/>);
		const element = screen.getByText(/Medium Title/i);
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent("Medium Title");
		expect(element.style.fontSize).toBe("1.2rem");
	});

	it('should render large with success', async () => {
		render(<Component size="LARGE" value="Large Title"/>);
		const element = screen.getByText(/Large Title/i);
		expect(element).toBeInTheDocument();
		expect(element).toHaveTextContent("Large Title");
		expect(element.style.fontSize).toBe("2rem");
	});
});
