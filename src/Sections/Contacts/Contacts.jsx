import classes from "./Contacts.module.css"

import img from '../../assets/qr.png'

const Contacts = () => {
  return (
    <div className={`${classes.section} section--dark`} id="contacts"> 
      <div className={classes.container}>
        <h2 className={classes.title}>watsApp</h2>
        <a className={classes.tel} href="tel:+79292947270">8-929-294-72-70</a>
        <a className={classes.tel_2} href="tel:+79048709395">8-904-870-93-95</a>
        <a className={classes.imgBox} href="https://vk.ru/zahvat_75" target="_blank">
          <img className={classes.img} src={img} alt="qr-code" />
        </a>
      </div>
    </div>
  )
}

export default Contacts;