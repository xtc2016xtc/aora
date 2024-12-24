import Wheel from "./Flash_sale/Wheel.jsx";


const App = () => {
  return (
    <div className="text-red-400 bg-slate-700 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-4">首页</h1>
      <Wheel />
    </div>
  );
}

export default App;