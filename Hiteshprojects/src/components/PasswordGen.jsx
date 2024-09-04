import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGen() {
  const [lenght, setlenght] = useState(8);
  const [noallowed, setnoallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpasswrod] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz";

    if (charallowed) str += "0123456789";
    if (noallowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < lenght; i++) {
      const char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setpasswrod(pass);
  }, [lenght, noallowed, charallowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [lenght, noallowed, charallowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-600">
      <h1 className="text-white text-center my-3">Password Genenator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min="6"
            max="25"
            value={lenght}
            className="cursor-pointer"
            onChange={(e) => setlenght(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length: {lenght}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={noallowed}
            onChange={() => {
              setnoallowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charallowed}
            onChange={() => {
              setcharallowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default PasswordGen;
