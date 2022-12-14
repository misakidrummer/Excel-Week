import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} blur-blobs--top-right`}>
      <img
        className={styles.image}
        src="/assets/footer/excel-na-pratica.svg"
        alt="Semana na Pratica"
      />
      <img
        className={styles.logo}
        src="/assets/footer/excel-solutions.svg"
        alt="Semana na Pratica"
      />
      <h1 className={styles.title}>Obrigado!</h1>
      <p className={styles.info}>
        <strong>Sua vaga está garantida.&nbsp; </strong>Agora é só ficar de olho no seu e-mail, acabamos de enviar a confirmação da sua inscrição por lá!

      </p>
      <div className={styles.arrow} aria-hidden={true}>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
