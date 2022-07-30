import styles from './NavBtnList.module.css'
import { ReactComponent as Bag } from '../../../assets/bag.svg'
import { ReactComponent as Menu } from '../../../assets/menu.svg'
import { ReactComponent as Search } from '../../../assets/search.svg'
import { ReactComponent as Favorite } from '../../../assets/favorite.svg'
import SearchModal from '../searchModal/SearchModal'
import { useState } from 'react'

const NavBtnList = () => {
	const [showSearchModal, setShowSearchModal] = useState(false)
	return (
		<nav className={styles.container}>
			<button className={styles.navItem}>
				<Bag />
			</button>
			<button
				className={styles.navItem}
				onClick={() => setShowSearchModal(true)}
			>
				<Search />
			</button>
			<button className={styles.navItem}>
				<Menu />
			</button>
			{showSearchModal && <SearchModal />}
		</nav>
	)
}
export default NavBtnList
