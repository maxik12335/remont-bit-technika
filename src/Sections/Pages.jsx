import Navbar from "../Components/navbar/Navbar";
import Job from "./Job/Job";
import React, { useState, useEffect } from 'react';
import Main from "./Main/Main";
import Uslugy from "./Uslugy/Uslugy";
import Price from "./Price/Price";
import Contacts from "./Contacts/Contacts";

const Pages = () => {

  return (
    <div>

      <Navbar />

      {/* main */}
        <Main />

      {/* uslugy */}
        {/* <Uslugy /> */}

      {/* job */}
        {/* <Job /> */}

      {/* price */}
      {/* <Price /> */}

      {/* contacts */}
      {/* <Contacts /> */}
    </div>
  )
}

export default Pages;