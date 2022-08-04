import * as React from "react"

import './section.css';

function Section (props) {
  const homeTitle = props.data[0].home.title;
  const aboutTitle = props.data[0].about.title;

  // console.log(home)

  return(
    <div className="section">
        <h1 className="title">{homeTitle}</h1>
        {
          props.data.map((j,i) => {
            return (
              <>
                {
                  props.language === 'pt-br' ?
                  <>
                    {j.home.text.pt}
                  </> : null
                }
                {
                  props.language === 'en' ?
                  <>
                    {j.home.text.en}
                  </> : null
                }
                {
                  props.language === 'es' ?
                  <>
                    {j.home.text.es}
                  </> : null
                }
              </>
            )
          })
        }
        <p style={{padding: '20px 0'}}>____________________</p>
        {
          props.data.map((j,i) => {
            return (
              <>
                {
                  props.language === 'pt-br' ? 
                  <>
                    <h1 className="titleSection">{j.about.title.pt}</h1>
                    {j.about.text.pt}
                  </> : null
                }
                {
                  props.language === 'en' ? 
                  <>
                    <h1 className="titleSection">{j.about.title.en}</h1>
                    {j.about.text.en}
                  </> : null
                }
                {
                  props.language === 'es' ? 
                  <>
                    <h1 className="titleSection">{j.about.title.es}</h1>
                    {j.about.text.es}
                  </> : null
                }
              </>
            )
          })
        }
        <p style={{padding: '20px 0'}}>____________________</p>
        {
          props.data.map((j,i) => {
            return (
              <>
                {
                  props.language === 'pt-br' ?
                  <>
                    <h1 className="titleSection">{j.work.title.pt}</h1>
                    {j.work.text.pt}
                  </> : null
                }
              </>
            )
          })
        }
    </div>
  )
}

export default Section
