import { render, screen } from "@testing-library/react"
import Button from "../button.component"



describe('button tests', () => {
	test('should render base button when nothing is passed', () => {
		render(<Button />)

		const buttonElement = screen.getByRole('button')
		expect(buttonElement).toHaveStyle('background-color: black')
	})
})