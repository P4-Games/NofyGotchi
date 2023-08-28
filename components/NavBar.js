// components/NavBar.js
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/NavBar.module.css";
import { useRef, useState } from "react";

export default function NavBar() {
  const { data: session } = useSession();
  const audioRef = useRef(null);
  const [isSoundOn, setIsSoundOn] = useState(false);

  const toggleSound = () => {
    if (isSoundOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSoundOn(!isSoundOn);
  };

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
        <div className={styles.userInfo}>
          {session && (
            <>
              <span className={styles.username}>{session.user.name}</span>
              <img
                className={styles["user-avatar"]}
                src={session.user.image}
                alt="User Avatar"
              />
            </>
          )}
          <div className={styles.soundButton}>
            <button className={styles.soundToggleButton} onClick={toggleSound}>
              <img
                src={isSoundOn ? "/sound.png" : "/soundoff.png"}
                alt={isSoundOn ? "Sound" : "Sound Off"}
                className={styles.soundImage}
              />
            </button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src="/music/HimnodelaURSS.mp3" preload="auto" loop></audio>
    </nav>
  );
}
