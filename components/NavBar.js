// components/NavBar.js
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        {/* Botón de inicio de sesión / cierre de sesión */}
        <div className={styles.loginLogout}>
          {session ? (
            <button className={styles.navButton} onClick={() => signOut()}>
              Logout
            </button>
          ) : (
            <button
              className={styles.navButton}
              onClick={() => signIn("discord")}
            >
              Login
            </button>
          )}
        </div>
        
        {/* Avatar y nombre del usuario */}
        {session && (
          <div className={styles.userInfo}>
            <span className={styles.username}>{session.user.name}</span>
            <img
              className={styles["user-avatar"]}
              src={session.user.image}
              alt="User Avatar"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
