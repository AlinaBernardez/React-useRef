function BoxColor ({color, value}) {
  return (
    <>
      <div style={{border: `solid 2px ${color}`, color: `${color}`, padding: '1rem'}}>
        {value.trim().toLowerCase() == color ? (
          <p>Yes, I'm {value}!!</p>
        ) : value == '' ? (
          <p>I'm not a color</p>
        ) : (
          <p>I'm not {value}</p>
        )}
      </div>
    </> 
  )
}
export default BoxColor;  
