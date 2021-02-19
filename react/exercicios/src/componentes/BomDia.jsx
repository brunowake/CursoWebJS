import React, {Fragment} from 'react'

export default props => [
    <h1 key='h1'>bom dia {props.nome}!</h1>,
    <h2 key='h2'>idade {props.idade}</h2>
]



// export default props => 
// <Fragment>
//     <h1>bom dia {props.nome}!</h1>
//     <h2>idade {props.idade}</h2>
// </Fragment>


// export default props => 
// <React.Fragment>
//     <h1>bom dia {props.nome}!</h1>
//     <h2>idade {props.idade}</h2>
// </React.Fragment>


// export default props => 
// <div>
//     <h1>bom dia {props.nome}!</h1>
//     <h2>idade {props.idade}</h2>
// </div>