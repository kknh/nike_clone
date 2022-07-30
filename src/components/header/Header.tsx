import styles from './Header.module.css'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import NavBtnList from './navBtnList/NavBtnList'

const HeaderComponent = () => {
	return (
		<>
			<header className={styles.container}>
				<Logo />
				<NavBtnList />
			</header>
			<Outlet />
		</>
	)
}
export default HeaderComponent
