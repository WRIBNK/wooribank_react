import React from 'react'
import CARD_MAIN from './card/Card_main'
import CARD_CARD from './card/Card_card'
import CARD_SERVICE from './card/Card_service'
import CARD_FAVOR from './card/Card_favor'
import CARD_MIDDLE from "./card/Card_middle";
function Card() {
  return (
    <>
      <CARD_MAIN />
      <CARD_CARD />
      <CARD_SERVICE />
      <CARD_FAVOR />
      <CARD_MIDDLE />
    </>
  )
}

export default Card