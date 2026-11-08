import classes from "./Job.module.css"

import img_1 from '../../assets/jobs/1.png'
import img_2 from '../../assets/jobs/2.png'
import img_3 from '../../assets/jobs/3.png'
import img_4 from '../../assets/jobs/4.png'

const Job = () => {
  return (
    <div className="section--dark"> 
      <div className="container">

        <div className="content">
          <h2 className="h2 line-light-text">как мы работаем</h2>

          <ul className={classes.list}>
            <li className={classes.item}>
              <img className={classes.img} src={img_1} alt="img" />
              <p className="text-sm">звоните</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_2} alt="img" />
              <p className="text-sm">считаем цену</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_3} alt="img" />
              <p className="text-sm">назначаем время</p>
            </li>
            <li className={classes.item}>
              <img className={classes.img} src={img_4} alt="img" />
              <p className="text-sm">выезжаем</p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Job;