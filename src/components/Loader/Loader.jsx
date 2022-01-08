import { Circles } from "react-loader-spinner";
import { FallBackContainer } from "./Loader.styled";

function Loader() {
  return (
    <FallBackContainer>
      <Circles color="#3f51b5" />
    </FallBackContainer>
  );
}

export default Loader;
