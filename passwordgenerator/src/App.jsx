import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [Numbers, setNumbers] = useState(false);
  const [Characters, setCharacters] = useState(false);
  const passwordInputRef = useRef(null);

  const copyToClipboard = () => {
    const input = passwordInputRef.current;
    if (input) {
      input.select();
      navigator.clipboard.writeText(input.value)
        .then(() => {
          alert("Password copied to clipboard!");
        })
        .catch(() => {
          alert("Failed to copy the password.");
        });
    }
  };

  let checkedfn = useCallback(() => {
    const num = "123456789";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const char = "!@#%$^&*()~`";
    if (Numbers) {
      str += num;
    }
    if (Characters) {
      str += char;
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, Numbers, Characters]);

  useEffect(() => {
    checkedfn();
  }, [length, Numbers, Characters, checkedfn]);

  return (
    <>
      <div className="w-auto bg-gray-700 rounded-xl p-4">
        <h2 className="font-bold m-4">Password Generator</h2>
        <div className="flex">
          <input
            ref={passwordInputRef}
            type="text"
            value={password}
            className="outline-none w-full py-1 px-1 bg-white text-slate-600 rounded-md font-thin"
            readOnly
          />
          <button className="outline-none" onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="flex items-center p-4 mt-1">
          <input
            type="range"
            min={6}
            max={20}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value); }}
          />
          <label className="p-2 font-serif">Length: {length}</label>
          <input
            type="checkbox"
            checked={Characters}
            id="charInput"
            onChange={() => { setCharacters((prev) => !prev); }}
          />
          <label className="font-serif">Characters</label>
          <input
            type="checkbox"
            checked={Numbers}
            id="numInput"
            onChange={() => { setNumbers((prev) => !prev); }}
          />
          <label className="font-serif">Numbers</label>
        </div>
      </div>
    </>
  );
}

export default App;
