// import { useEffect, useState } from "react";
import classes from "./Navbar.module.css"
import { useNavColor } from "../../utils/navbar";
import { useState } from "react";


// const Navbar = ({navColor, textColor}) => {
const Navbar = () => {

  const { navColor, textColor } = useNavColor()
  const borderColor = `color-mix(in srgb, ${textColor} 8%, transparent)`

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classes.navbar} style={{ backgroundColor: navColor, borderBottom: `1px solid ${borderColor}` }}>
      <div className={classes.container}>
        {/* меню desctop */}
        <div className={classes.desctopMenu}>
          <p className={classes.city} style={{ color: textColor }}>Алексин</p>
          <div className={classes.menu}>
            <a className={classes.menuItem} style={{ color: textColor }} href="#uslugy">услуги</a>
            <a className={classes.menuItem} style={{ color: textColor }} href="#price">цены</a>
            <a className={classes.menuItem} style={{ color: textColor }} href="#contacts">контакты</a>
          </div>
          <a className={classes.tel} style={{ color: textColor }} href="tel:+79292947270">8-929-294-72-70</a>
        </div>

        <div className={classes.open} onClick={() => setIsOpen(true)}>
          <span style={{ backgroundColor: textColor }}></span>
          <span style={{ backgroundColor: textColor }}></span>
          <span style={{ backgroundColor: textColor }}></span>
        </div>

        {/* меню mobyle */}
        <div className={`${classes.mobyleMenu} ${isOpen ? classes.isOpenMobyleMenu : ''}`} style={{ backgroundColor: navColor }}>
          {/* <div className={classes.mobyleMenuContent}> */}
            <div className={classes.top}>
              <p className={classes.city} style={{color: textColor}} >Алексин</p>
              <div className={classes.close} onClick={() => setIsOpen(false)}>
                <span style={{ borderBottom: `1px solid ${textColor}` }}></span>
                <span style={{ borderBottom: `1px solid ${textColor}` }}></span>
              </div>
            </div>
            <div className={classes.menu}>
              <a 
                className={classes.menuItem}
                style={{ color: textColor,  borderBottom: `1px solid ${borderColor}` }}
                href="#uslugy"
                onClick={() => setIsOpen(false)}>услуги</a>
              <a 
                className={classes.menuItem}
                style={{ color: textColor,  borderBottom: `1px solid ${borderColor}` }}
                href="#price"
                onClick={() => setIsOpen(false)}>цены</a>
              <a 
                className={classes.menuItem}
                style={{ color: textColor,  borderBottom: `1px solid ${borderColor}` }}
                href="#contacts"
                onClick={() => setIsOpen(false)}>контакты</a>
            </div>
            <a className={classes.tel} style={{ color: textColor }} href="tel:+79292947270">8-929-294-72-70</a>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar;