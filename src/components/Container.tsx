import { ReactNode } from "react";
import NavBar from "./NavBar";

const Container = (props:any) => (
  <div>
    <NavBar/>
    <div className="body">
      {props.children}
    </div>
  </div>
)

export default Container;
