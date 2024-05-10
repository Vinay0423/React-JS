import React, { useState } from 'react'
import '../../../Slider.css'

const Slider = () => {

    const [state,setState]=useState(0)

    let images=["https://cdn.britannica.com/37/171337-004-0B980E9D/Subhas-Chandra-Bose-Indian-National-Army.jpg",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNcOFYMDDFqz6Lm1H-Ebke5M4a_YqEba0YZQNaiHzIA&s",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1OTYCk-HMWXdkKFECZ2uSxY0zmQMDrX7X3LVYdtdoQ&s",
               "https://qph.cf2.quoracdn.net/main-qimg-776b5bcd3739f2a93825039a5ff57ba1-lq",
               "https://www.drishtiias.com/images/uploads/1596286902_image4.png",
               "https://cdn1.byjus.com/wp-content/uploads/2021/01/Lala-Lajpat-Rai-amp-700x391.jpg"
    ]

   let image=images[state]

   
   let nextButton=()=> {
     setState(state +1)
     if(state+1 > images.length-1){
       setState(0)
      }
      console.log(state);
      image=images[state]
   }

   let previousButton=()=> {
     setState(state-1)
     if(state< 1){
       setState(0)
      }
      image=images[state]
    }

   window.addEventListener('DOMContentLoaded', ()=> {
    image=images[0]
   })

  return (
    <div>
      <h1>Freedom Fighters</h1>
      <main>
        <button id='next' onClick={nextButton}>  Next    </button>
        <div className="imagecontainer">
          <img src={image} alt="" />
          <h1>the count is {state}</h1>
        </div>
        <button id='previous' onClick={previousButton}>Previous</button>
      </main>
    </div>
  )
}

export default Slider
