import classes from "./Job.module.css"

import img_1 from '../../assets/jobs/1.png'
import img_2 from '../../assets/jobs/2.png'
import img_3 from '../../assets/jobs/3.png'
import img_4 from '../../assets/jobs/4.png'

const Job = () => {
  return (
    <div className={`${classes.section} section--dark`}> 
      <div className={classes.container}>
        <h2 className={classes.title}>как мы работаем</h2>

        <ul className={classes.list}>
          <li className={classes.item}>
            <img className={classes.img} src={img_1} alt="img" />
            <p className={classes.itemTitle}>звоните</p>
          </li>
           <li className={classes.item}>
            <img className={classes.img} src={img_2} alt="img" />
            <p className={classes.itemTitle}>считаем цену</p>
          </li>
           <li className={classes.item}>
            <img className={classes.img} src={img_3} alt="img" />
            <p className={classes.itemTitle}>назначаем время</p>
          </li>
           <li className={classes.item}>
            <img className={classes.img} src={img_4} alt="img" />
            <p className={classes.itemTitle}>выезжаем</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Job;