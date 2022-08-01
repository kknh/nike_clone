import styles from './SideNavMenu.module.css'
import { ReactComponent as RightArrow } from '../../../assets/rightArrow.svg'
import { ReactComponent as Jordan } from '../../../assets/jordan.svg'
import { ReactComponent as Converse } from '../../../assets/converse.svg'
import { ReactComponent as Close } from '../../../assets/close.svg'
import { Link } from 'react-router-dom'

interface SideNavMenuProps {
	setShowSideMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const SideNavMenu = ({ setShowSideMenu }: SideNavMenuProps) => {
	const handleClose = (e: React.MouseEvent<HTMLElement>) => {
		const target = e.target as HTMLElement
		if (target.closest('#menu')) {
			return null
		} else {
			setShowSideMenu(false)
		}
	}

	return (
		<>
			<div className={styles.container} onClick={handleClose}>
				<nav className={styles.menu} id="menu">
					<button
						className={styles.closeBtn}
						onClick={() => setShowSideMenu(false)}
					>
						<Close />
					</button>
					<ul>
						<li>
							<Link to="#" className={styles.listItem}>
								New &#38; Featured
								<RightArrow />
							</Link>
						</li>
						<li>
							<Link to="#" className={styles.listItem}>
								Men
								<RightArrow />
							</Link>
						</li>
						<li>
							<Link to="#" className={styles.listItem}>
								Women
								<RightArrow />
							</Link>
						</li>
						<li>
							<Link to="#" className={styles.listItem}>
								Kids
								<RightArrow />
							</Link>
						</li>
						<li>
							<Link to="#" className={styles.listItem}>
								Sale
								<RightArrow />
							</Link>
						</li>
						<li>
							<Link to="#" className={styles.listItem}>
								Back to School
								<RightArrow />
							</Link>
						</li>
						<li>
							<Link to="#" className={styles.listItem}>
								SNKRS Calendar
							</Link>
						</li>
						<li>
							<Link to="#" className={styles.iconLink}>
								<Jordan />
								<span>Jordan</span>
							</Link>
						</li>
						<li>
							<Link to="#" className={styles.iconLink}>
								<Converse />
								<span>Converse</span>
							</Link>
						</li>
					</ul>
					<p className={styles.footer}>
						Become a Nike Member for the best products, inspiration and stories
						in sport. Learn more
					</p>
				</nav>
			</div>
		</>
	)
}
export default SideNavMenu
