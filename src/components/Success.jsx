import React from 'react'

const Success = () => {
  return (
    <div style={{textAlign:"center"}}>Payment successfull you can refresh dashboard
      <div style={{marginTop:'15px', cursor:"pointer"}}><Link to="/" style={{textDecoration:"none", fontWeight:"500"}}>Dashboard</Link>
      </div>
    
    </div>
  )
}

export default Success