import classes from "./Uslugy.module.css"

import img_1 from "../../assets/1.png"
import img_2 from "../../assets/2.png"
import img_3 from "../../assets/3.png"
import img_4 from "../../assets/4.png"
import img_5 from "../../assets/5.png"
import img_6 from "../../assets/6.png"
import img_7 from "../../assets/7.png"
import img_8 from "../../assets/8.png"
import img_9 from "../../assets/9.png"
import img_10 from "../../assets/10.png"
import img_11 from "../../assets/11.png"
import img_12 from "../../assets/12.png"

const Uslugy = () => {
  return (
    <div className={classes.section} id="uslugy"> 
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.tobBox}>
            <h2 className={classes.title}>Услуги</h2>  
            <p className={classes.subtitle}>
              опыт работы больше 10 лет
            </p>
          </div>

          <ul className={classes.list}>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_1} alt="img" />
              <p className={classes.listTitle}>холодильники</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_2} alt="img" />
              <p className={classes.listTitle}>стиралки</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_3} alt="img" />
              <p className={classes.listTitle}>духовые шкафы</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_4} alt="img" />
              <p className={classes.listTitle}>морозилка</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_5} alt="img" />
              <p className={classes.listTitle}>посудомойки</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_6} alt="img" />
              <p className={classes.listTitle}>сушилки</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_7} alt="img" />
              <p className={classes.listTitle}>электроплиты</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_8} alt="img" />
              <p className={classes.listTitle}>варочные панели</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_9} alt="img" />
              <p className={classes.listTitle}>пылесосы</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_10} alt="img" />
              <p className={classes.listTitle}>утюги</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_11} alt="img" />
              <p className={classes.listTitle}>тепловентиляторы</p>
            </li>
            <li className={classes.listItem}>
              <img className={classes.listImg} src={img_12} alt="img" />
              <p className={classes.listTitle}>кондиционеры</p>
            </li>
          </ul>

          <p className={classes.downText}>
            <span>пайка труб:</span> медь, сталь, пластик
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Uslugy;