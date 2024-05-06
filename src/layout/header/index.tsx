import { IonHeader, IonImg } from '@ionic/react'
import React from 'react'
import header from '../../assets/image/wsh_serv.svg'

const HeaderTop = () => {
  return (
    <div style={{padding: '6%'}}>
        <IonImg src={header} alt='Washing/drying services'/>
    </div>
  )
}

export default HeaderTop 