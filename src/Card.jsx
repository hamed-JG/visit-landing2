import styles from "./Card.module.css";
import logo from "/images/logo.png";
import eitaa from "/images/eitaa-icon-black.svg";
import { IoCallSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} />
        <div className={styles.name}>
          <div>مهرداد  روحی</div>
          <small>وکیل پایه یک دادگستری</small>
          <span>ش.پ: 56692</span>
        </div>
      </div>

      <div className={styles.main}>
        <h4>ارتباط با من</h4>
        <div>
          <a href="tel:+989129566982">
            <IoCallSharp className={styles.icon} />
          </a>
          <a href="mailto:iamzeynabjahan@gmail.com">
            <MdAlternateEmail className={styles.icon} />
          </a>
          <a href="https://wa.me/+989374711520">
            <FaWhatsapp className={styles.icon} />
          </a>
          <a href="https://eitaa.com/mehrdadrouhi">
            <img src={eitaa} className={styles.eitaa} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

{
  /* <div className={styles.actionBar}>
      </div> */
}
