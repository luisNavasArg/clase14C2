import Loader from "react-js-loader";

const Loaders = () => {
   return (<div className="App" style={{ backgroundColor: "black" }}>
      <div className={"row"}>
         <div className={"item"}>
            <Loader type="box-up" bgColor={"white"} title={""} color={'#FFFFFF'} size={100} />
         </div>
      </div>
   </div>)
}
export default Loaders