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
    <div className="section" id="uslugy"> 
      <div className="container">
        
        <div className="content">
          <h2 className="h2 line-dark-text">Услуги</h2>  

          <ul className={classes.list}>
            <li className={classes.item}>
              <img className={classes.img} src={img_1} alt="img" />
              <p className="text-sm">холодильники</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_2} alt="img" />
              <p className="text-sm">стиралки</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_3} alt="img" />
              <p className="text-sm">духовые шкафы</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_4} alt="img" />
              <p className="text-sm">морозилка</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_5} alt="img" />
              <p className="text-sm">посудомойки</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_6} alt="img" />
              <p className="text-sm">сушилки</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_7} alt="img" />
              <p className="text-sm">электроплиты</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_8} alt="img" />
              <p className="text-sm">варочные панели</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_9} alt="img" />
              <p className="text-sm">пылесосы</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_10} alt="img" />
              <p className="text-sm">утюги</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_11} alt="img" />
              <p className="text-sm">тепловентиляторы</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_12} alt="img" />
              <p className="text-sm">кондиционеры</p>
            </li>
          </ul>

          <p className="text-base">
            <span className="text-sm bold">пайка труб:</span> медь, сталь, пластик
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Uslugy;