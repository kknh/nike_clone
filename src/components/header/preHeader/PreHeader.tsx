import styles from './PreHeader.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Jordan } from '../../../assets/jordan.svg'
import { ReactComponent as Converse } from '../../../assets/converse.svg'

const PreHeader = () => {
	return (
		<header className={styles.container}>
			<Link to="/" className={styles.iconLink}>
				<Jordan />
			</Link>
			<Link to="/" className={styles.iconLink}>
				<Converse />
			</Link>
			<Link to="/" className={styles.textLink}>
				Help
			</Link>
			<div className={styles.stick} />
			<Link to="/" className={styles.textLink}>
				Join Us
			</Link>
			<div className={styles.stick} />
			<Link to="/" className={styles.textLink}>
				Sign In
			</Link>
		</header>
	)
}
export default PreHeader
