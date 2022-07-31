import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import user from '@testing-library/user-event'
import Header from './Header'

test('clicking search button on empty input closes modal', () => {
	global.innerWidth = 1000
	global.dispatchEvent(new Event('resize'))

	render(
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	)
	const searchBtn = screen.getByTestId('searchBtn')
	user.click(searchBtn)
	const searchInput = screen.getByPlaceholderText('Search')
	user.type(searchInput, '  ')
	const searchSubmitBtn = screen.getByTestId('searchSubmitBtn')
	user.click(searchSubmitBtn)
	expect(searchInput).not.toBeInTheDocument()
})

export {}
