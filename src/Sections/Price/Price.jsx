import classes from "./Price.module.css"

const Price = () => {
  return (
    <div className="section" id="price"> 
      <div className="container">

        <div className="content">
          <h2 className="h2 line-dark-text">Цены</h2>

          <div className={classes.text}>
            <p className="text-base">
              Мы <span className="text-base bold">честно</span> называем цену только после того, как видим проблему своими глазами или вы опишете проблему по телефону. Каждая поломка уникальна. Так вы защищены от сюрпризов
            </p>
          </div>

          <div>
            <p className="text-base"><span className="bold">точная цена</span> — после звонка</p>
            <p className="text-base"><span className="bold">не платите</span> за выезд — если не починим</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Price;