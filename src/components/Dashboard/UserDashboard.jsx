import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const UserDashboard = () => {

	console.log("token");

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
				<Link to="/updateProfile">Account</Link>
			</nav>
		</div>
	);
};

export default UserDashboard;