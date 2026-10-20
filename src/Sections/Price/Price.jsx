import classes from "./Price.module.css"

const Price = () => {
  return (
    <div className={classes.section} id="price"> 
      <div className={classes.container}>
        <h2 className={classes.title}>Цены</h2>
        <p className={classes.subTitle}>с заботой к старшим <span className={classes.bold}>-20%</span> пенсионерам</p>

        <div className={classes.content}>
          <p className={classes.contentText}>
            Мы <span className={classes.bold}>честно</span> называем цену только после того, как видим проблему своими глазами. Каждая поломка уникальна. Либо примерно называем цену после описания вами проблемы по телефону
          </p>
          <p className={classes.contentText}>
            Так вы защищены от сюрпризов
          </p>
          <p className={classes.contentText}>
            Узнайте точную стоимость за минуту <a className={classes.tel} href="tel:+79292947270">8-929-294-72-70</a>
          </p>
        </div>

        <p className={classes.text}><span className={classes.bold}>точная цена</span> — после звонка</p>
        <p className={classes.text}>если не починим — за выезд <span className={classes.bold}>не платите</span></p>
      </div>
    </div>
  )
}

export default Price;