import classes from "./Contacts.module.css"

import img from '../../assets/qr.png'

const Contacts = () => {
  return (
    <div className="section--dark" id="contacts"> 
      <div className="container">
        
        <div className={classes.content}>
          <p className="text-base">с заботой к старшим <span className="bold">-20%</span> пенсионерам</p>
          <p className="text-base">
            опыт работы больше 10 лет
          </p>
          <div className={classes.tel}>
            <a className="text-base hover" href="tel:+79292947270">8 929 294 72 70</a>
            <a className="text-base hover" href="tel:+79048709395">8 904 870 93 95</a>
          </div>
          <a className={classes.imgBox} href="https://vk.ru/zahvat_75" target="_blank">
            <img className={classes.img} src={img} alt="qr-code" />
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Contacts;