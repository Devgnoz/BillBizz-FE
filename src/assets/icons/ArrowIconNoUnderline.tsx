import React from 'react'

type Props = {
    size:number,
    color:string
    
}

function ArrowIconNoUnderline({size=24,color="black"}: Props) {
  return (
    <div>
        <svg  width={size} height={size}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L12 5M12 5L19 12M12 5V19" fontWeight={600} stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  )
}

export default ArrowIconNoUnderline