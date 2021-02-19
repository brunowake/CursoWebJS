import React from 'react'
import reactDOM from 'react-dom'
import Filho from './componentes/Filhos'
// BoaTarde , {BoaNoite} ou {BoaTarde, BoaNoite}
// import Multi  from './componentes/Multiplos'
import Pai  from './componentes/Pai'


const elemento = <h1> react</h1>

reactDOM.render( <div>
   <Pai nome="paulo" sobrenome="silva"> 
        {/* como passo os componentes Filhos aqui? */}
        <Filho nome="Pedro"  />
        <Filho nome="Paulo" />
        <Filho  nome="Carla" />
   </Pai>
</div> , document.getElementById('root'))