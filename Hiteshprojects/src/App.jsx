import { useEffect, useState } from "react";
import "./App.css";
import BgChanger from "./components/BgChanger";
import PasswordGen from "./components/PasswordGen";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { InputBox } from "./components/index";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./context/userContextProvider.jsx";

import ThemeButton from "./components/ThemeButton.jsx";
import Card from "./components/Card.jsx";
import { ThemeProvider } from "./context/ThemeContext.js";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    // themechager project code
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
    // ContextApi hook code
    // <UserContextProvider>
    //   <h1>React vedio for Context API</h1>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>
  );

  // hooks code
  // const [amount, setAmount] = useState(0);
  // const [from, setFrom] = useState("usd");
  // const [to, setTo] = useState("pkr");
  // const [convertedAmount, setConvertedAmount] = useState(0);
  // const currnectInfo = useCurrencyInfo(from);
  // const options = Object.keys(currnectInfo);
  // const swap = () => {
  //   setFrom(to);
  //   setTo(from);
  //   setConvertedAmount(amount);
  //   setAmount(convertedAmount);
  // };
  // const convert = () => {
  //   setConvertedAmount(amount * currnectInfo[to]);
  // };
  // return (
  //   <div
  //     className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
  //     style={{
  //       backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
  //     }}
  //   >
  //     <div className="w-full">
  //       <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
  //         <form
  //           onSubmit={(e) => {
  //             e.preventDefault();
  //             convert();
  //           }}
  //         >
  //           <div className="w-full mb-1">
  //             <InputBox
  //               label="from"
  //               amount={amount}
  //               currencyoption={options}
  //               onCurrencyChange={(currency) => setFrom(currency)}
  //               onAmountChange={(amount) => setAmount(amount)}
  //             />
  //           </div>
  //           <div className="relative w-full h-0.5">
  //             <button
  //               onClick={swap}
  //               className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
  //             >
  //               Swap
  //             </button>
  //           </div>
  //           <div className="w-full mb-1">
  //             <InputBox
  //               label="to"
  //               currencyoption={options}
  //               amount={convertedAmount}
  //               onCurrencyChange={(currency) => setTo(currency)}
  //               selectedcurrency={to}
  //               amountDisabled
  //             />
  //           </div>
  //           <button
  //             type="submit"
  //             className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
  //           >
  //             Convert {from.toUpperCase()} to {to.toUpperCase()}
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );

  // PasswordGen code
  // <PasswordGen />;

  // BgChanger code
  // <BgChanger />;
}

export default App;
