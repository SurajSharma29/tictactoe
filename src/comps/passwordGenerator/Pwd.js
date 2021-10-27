import React, { useState } from "react";

function Pwd() {
  const [text, setText] = useState("");
  const [textLen, setTextLen] = useState(8);
  const [arr, setArr] = useState([]);
  console.log("text", text);
  console.log("arr", arr);
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!£$%^&*()><?@|/.,;'-_";
  const handlePwd = () => {
    let charList = "";
    if (!charList) {
      charList += charList + possible;
    }
    setText(generatePassword(charList));
    setArr((prevText) => [...prevText, text]);
  };
  const generatePassword = (charList) => {
    let text = "";
    setText(charList);
    let charLen = charList.length;
    for (let i = 0; i < textLen; i++) {
      const characterIndex = Math.round(Math.random() * charLen);
      text = text + charList.charAt(characterIndex);
    }
    return text;
  };

  return (
    <div>
      <label>Password Generator:</label>
      <input
        id="password"
        type="password"
        value={text}
        onChange={(e) => setTextLen(e.target.value)}
        placeholder="Select this box..."
        onClick={handlePwd}
      />
    </div>
  );
}

export default Pwd;
