import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <div className="main-container">
        <div className="row pages">
          <div className="col-3 side-left-con shadow">
            <SideBar></SideBar>
          </div>
          <div className="col-9 side-right-con">
            <MainPage></MainPage>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
