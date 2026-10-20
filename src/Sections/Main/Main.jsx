import classes from "./Main.module.css"

const Main = () => {
  return (
    <div className={classes.section}> 
      <div className={classes.container}>
        <div className={classes.mainConent}>
          <h1 className={classes.mainTitle}>РЕМОНТ</h1>
          <h2 className={classes.mainSubTitle}>бытовой техники</h2>
          <a className={classes.mainButton} href="tel:89292947270">8-929-294-72-70</a>
        </div>

        <p className={classes.mainDownText}>приедем сегодня</p>
      </div>
    </div>
  )
}

export default Main;