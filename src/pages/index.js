import * as React from "react"
import { useState, useEffect } from "react"

import data from '../data/data'

import Header from '../components/header'
import Section from '../components/section'

import '../global.css'

// markup
function IndexPage() {
  const [lang, setLang] = useState('pt-br');
  const [toggleState, setToggle] = useState(false);
  const [page, setPage] = useState('home');

  const toggle = () => {
    return setToggle(toggleState === false ? true : false);
  };

  return (
    <div className="">
      <Header handleClickLanguage={(lang) => setLang(lang)} handleClickToggle={toggle} handleClickPage={(page) => setPage(page)} close={toggleState} />
      <Section language={lang} page={page} data={data} />
    </div>
  );
}

export default IndexPage
