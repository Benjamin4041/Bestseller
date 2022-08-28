import React from 'react'

export default function shopitems({productName,brand,price,image}) {
  return (
    <div style={{display:"flex",alignItems:"center",backgroundColor:"transparent",height:"20%",borderRadius:"24px",padding:"0em 2em",columnGap:"2em"}}>
        <img src={image} alt="" />
        <div>
            <p style={{color:"#FE805C",fontWeight:"600",fontSize:"14px",lineHeight:"20px",}}>{productName}</p>
            <p style={{fontWeight: "400",fontSize:"12px",lineHeight: "16px",letterSpacing:"0.25px",color:"#AFAFBD"}}>{brand}</p>
            <p style={{fontWeight:"600",fontSize: "14px",lineHeight: "24px",letterSpacing: "0.25px",color: "#12121F",marginTop:"0.5em"}}>{price}</p>
        </div>
    </div>
  )
}
