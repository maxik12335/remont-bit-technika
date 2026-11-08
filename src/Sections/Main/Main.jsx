import classes from "./Main.module.css"

const Main = () => {
  return (
    <div className="section line-dark-section"> 
      <div className="container">
        <div className={classes.content}>
          <h1 className="h1">РЕМОНТ</h1>
          <h2 className="h2" style={{fontWeight: 300}}>бытовой техники</h2>
          <a className={`${classes.button} hover`} href="tel:89292947270">8 929 294 72 70</a>
        </div>
      </div>
    </div>
  )
}

export default Main;