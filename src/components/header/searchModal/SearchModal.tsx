import styles from './SearchModal.module.css'
import React, { useState } from 'react'
import { ReactComponent as Search } from '../../../assets/search.svg'
import { ReactComponent as Close } from '../../../assets/close.svg'

interface SearchModalProps {
	setShowSearchModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchModal = ({ setShowSearchModal }: SearchModalProps) => {
	const [searchKeyword, setSearchKeyword] = useState<string>('')

	const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (searchKeyword.trim() === '') {
			setShowSearchModal(false)
		}
	}

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchKeyword(e.target.value)
	}

	return (
		<article className={styles.container}>
			<div className={styles.searchBarContainer}>
				<form className={styles.searchBarForm} onSubmit={handleSearchSubmit}>
					<input
						className={styles.searchBarInput}
						value={searchKeyword}
						placeholder="Search"
						onChange={handleSearchInput}
					/>
					<button
						type="submit"
						className={`${styles.searchBtn} ${styles.btn}`}
						data-testid="searchSubmitBtn"
					>
						<Search />
					</button>
				</form>
				<button
					className={`${styles.closeBtn} ${styles.btn}`}
					onClick={() => setShowSearchModal(false)}
				>
					<Close />
				</button>
			</div>
		</article>
	)
}
export default SearchModal
