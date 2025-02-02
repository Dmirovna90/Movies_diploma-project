import style from "./Footer.module.scss";
const Footer = () => {
  const { footer, footerWrap, footerText } = style;
  return (
    <footer className={footer}>
      <div className={footerWrap}>
        <p className={footerText}>©{new Date().getFullYear()} MOVIES</p>
        <p className={footerText}>All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
