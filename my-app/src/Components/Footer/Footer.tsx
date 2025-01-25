import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerWrap}>
        <p className={style.footerText}>©{new Date().getFullYear()} MOVIES</p>
        <p className={style.footerText}>All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
