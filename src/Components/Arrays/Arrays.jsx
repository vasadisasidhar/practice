import React from 'react'

const Arrays = () => {

const frnds=["sasidhar","satish","bhaskar"]

const numbers={
  sasidhar:9492724945,
  bhaskar:7569361656,
  satish:9642776551
}

const names=[{
  sasidhar:'Thotapalem',
  satish:'Balaji Nagar',
  bhaskar:'Sai Nagar'
}]

  return (
    <div>
        <div>
          {frnds.map((index)=>(
            <div>
                <h3>{index} number is {numbers[index]}</h3>
            </div>
           ))}       
        </div>
        <div>
          <h3>{names[0].sasidhar}</h3>
          <h3>{names[0].satish}</h3>
          <h3>{names[0].bhaskar}</h3>
        </div>
    </div>
    
  )
}

export default Arrays