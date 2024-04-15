import { useRef, useState } from "react";
import BoxColor from "./BoxColor";

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

function MyForm() {
  const [text, setText] = useState('');
  const inputRef = useRef();

  return (
    <>
      <input id="color" type="text" placeholder="Choose a color" className="input" ref={inputRef} onChange={() => setText(inputRef.current.value)}/>
      <div className="container">
        {colors.map((color, i) => (
          <BoxColor key={i} color={color} value={text} />
        ))}
      </div>
    </>
  );
}

export default MyForm;