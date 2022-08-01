import styles from './NavBtnList.module.css'
import { ReactComponent as Bag } from '../../../assets/bag.svg'
import { ReactComponent as Menu } from '../../../assets/menu.svg'
import { ReactComponent as Search } from '../../../assets/search.svg'
import { ReactComponent as Favorite } from '../../../assets/favorite.svg'
import SearchModal from '../searchModal/SearchModal'
import { useState } from 'react'

interface NavBtnListProps {
	setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const NavBtnList = ({ setShowSideMenu }: NavBtnListProps) => {
	const [showSearchModal, setShowSearchModal] = useState<boolean>(false)
	return (
		<nav className={styles.container}>
			<button className={`${styles.navItem} ${styles.favoriteIcon}`}>
				<Favorite />
			</button>
			<button className={styles.navItem}>
				<Bag />
			</button>
			<button
				className={`${styles.navItem} ${styles.searchIcon}`}
				onClick={() => setShowSearchModal(true)}
				data-testid="searchBtn"
			>
				<Search />
			</button>

			<button
				className={`${styles.navItem} ${styles.menuIcon}`}
				onClick={() => setShowSideMenu(true)}
			>
				<Menu />
			</button>
			{showSearchModal && (
				<SearchModal setShowSearchModal={setShowSearchModal} />
			)}
		</nav>
	)
}
export default NavBtnList
