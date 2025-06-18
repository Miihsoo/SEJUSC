import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css';
import sicadLogo from '../assets/sicadsemfundo.png';
import '../styles/homepage.css';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Referência para o dropdown

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica se o clique foi fora do dropdown e do botão que o abre
      if (dropdownRef.current && 
          !dropdownRef.current.contains(event.target) &&
          !event.target.closest(`.${styles.userName}`)) {
        setIsDropdownOpen(false);
      }
    };

    // Adiciona o listener quando o dropdown está aberto
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Limpeza ao desmontar ou quando o dropdown fecha
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]); // Executa apenas quando isDropdownOpen muda

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO e NAV CENTER permanecem iguais */}

        {/* USUÁRIO */}
        <div className={styles.userMenu} ref={dropdownRef}>
          <div className={styles.userName} onClick={toggleDropdown}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/847/847969.png" 
              alt="Ícone do usuário" 
              className={styles.userIcon} 
            />
            <span>Olá, UserName</span>
          </div>
          
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <a href="/perfil">Perfil</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;