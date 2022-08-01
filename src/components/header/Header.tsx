import styles from './Header.module.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import NavBtnList from './navBtnList/NavBtnList'
import NavMenuList from './navMenuList/NavMenuList'
import PreHeader from './preHeader/PreHeader'
import SideNavMenu from './sideNavMenu/SideNavMenu'
const HeaderComponent = () => {
	const [showSideMenu, setShowSideMenu] = useState<boolean>(false)
	return (
		<>
			<PreHeader />
			<header className={styles.container}>
				<Logo />
				<NavMenuList />
				<NavBtnList setShowSideMenu={setShowSideMenu} />
				{showSideMenu && <SideNavMenu setShowSideMenu={setShowSideMenu} />}
			</header>
			<Outlet />
		</>
	)
}
export default HeaderComponent
