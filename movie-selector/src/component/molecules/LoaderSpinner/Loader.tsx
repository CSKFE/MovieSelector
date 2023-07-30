import { LoaderWrap } from "./styles";
import { Puff } from "react-loader-spinner";

export default function Loader() {
  return (
    <LoaderWrap>
      <Puff
        width={"200"}
        height={"200"}
        color={"#ddd"}
        ariaLabel="puff-loading"
        />
    </LoaderWrap>
  )
}