
function BoxColor ({color, value}) {
  return (
    <>
      <div className="box" style={{border: `solid 2px ${color}`, color: value.trim().toLowerCase() != color ? color : 'black', padding: '1rem', backgroundColor: value.trim().toLowerCase() == color ? color : null}}>
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
