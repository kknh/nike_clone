import styles from './NavMenuList.module.css'
import { Link } from 'react-router-dom'
const NavMenuList = () => {
	return (
		<nav className={styles.container}>
			<ul>
				<li>
					<Link to="#" className={styles.listItem}>
						New &#38; Featured
					</Link>
				</li>
				<li>
					<Link to="#" className={styles.listItem}>
						Men
					</Link>
				</li>
				<li>
					<Link to="#" className={styles.listItem}>
						Women
					</Link>
				</li>
				<li>
					<Link to="#" className={styles.listItem}>
						Kids
					</Link>
				</li>
				<li>
					<Link to="#" className={styles.listItem}>
						Sale
					</Link>
				</li>
				<li>
					<Link to="#" className={styles.listItem}>
						Back to School
					</Link>
				</li>
			</ul>
		</nav>
	)
}
export default NavMenuList
