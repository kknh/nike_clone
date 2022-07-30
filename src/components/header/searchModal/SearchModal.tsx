import styles from './SearchModal.module.css'
import { ReactComponent as Search } from '../../../assets/search.svg'
import { ReactComponent as Close } from '../../../assets/close.svg'

const SearchModal = () => {
	return (
		<article className={styles.container}>
			<div className={styles.searchBarContainer}>
				<form className={styles.searchBarForm}>
					<input className={styles.searchBarInput} placeholder="Search" />
					<button type="submit" className={styles.submitBtn} />
					<button className={`${styles.searchBtn} ${styles.btn}`}>
						<Search />
					</button>
				</form>
				<button className={`${styles.closeBtn} ${styles.btn}`}>
					<Close />
				</button>
			</div>
		</article>
	)
}
export default SearchModal
