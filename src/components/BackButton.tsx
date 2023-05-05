import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return <ArrowBackIcon boxSize={6} onClick={goBack} />;
}

export default BackButton;
