import { Outlet, Link } from "react-router-dom";
import "../Styles/index.css"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Layout() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (<>
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				
				<Link to ="/" className="active">Home</Link>
				<Link to="/blog" className="active">Blog</Link>
				<Link to="/contact" className="active">About me</Link>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    <Outlet />
    </>
	);
}
export default Layout;