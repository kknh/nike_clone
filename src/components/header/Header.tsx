import styles from './Header.module.css'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import NavBtnList from './navBtnList/NavBtnList'
import NavMenuList from './navMenuList/NavMenuList'
import PreHeader from './preHeader/PreHeader'
const HeaderComponent = () => {
	return (
		<>
			<PreHeader />
			<header className={styles.container}>
				<Logo />
				<NavMenuList />
				<NavBtnList />
			</header>
			<Outlet />
		</>
	)
}
export default HeaderComponent
