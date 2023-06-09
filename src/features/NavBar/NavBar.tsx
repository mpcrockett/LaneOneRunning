import Cart from "../Cart/Cart";
import AccountButton from "../Account/AccountButton";
import FlexBoxSpaceBtwn from "../../components/FlexBoxSpaceBtwn";
import NavButton from "../../components/NavButton";
import Logo from "../../components/Logo";
import { useAppSelector } from "../../store/hooks";
import UserProfile from "../Profile/UserProfile";

interface Props {
  setSelectedTab: React.Dispatch<
    React.SetStateAction<"women" | "men" | "unisex" | ''>
  >;
}

function NavBar(props: Props) {
  const { loggedIn } = useAppSelector((state) => state.user);
  const { setSelectedTab } = props;

  const handleButtonClick = (label: "women" | "men" | "unisex") => {
    setSelectedTab(label)
  }

  return (
    <FlexBoxSpaceBtwn width="100%" bg="brand.cream.50" alignItems="center">
      <FlexBoxSpaceBtwn width="33%">
        <NavButton label="Men" clickHandler={() => handleButtonClick("men")} />
        <NavButton
          label="Women"
          clickHandler={() => handleButtonClick("women")}
        />
        <NavButton
          label="Accessories"
          clickHandler={() => handleButtonClick("unisex")}
        />
      </FlexBoxSpaceBtwn>
      <Logo />
      <FlexBoxSpaceBtwn width="33%">
        <NavButton label="About" clickHandler={() => console.log("about")} />
        <NavButton label="Contact" clickHandler={() => console.log("contact")} />
        <FlexBoxSpaceBtwn>
          {loggedIn ? <UserProfile /> : <AccountButton />}
          <Cart />
        </FlexBoxSpaceBtwn>
      </FlexBoxSpaceBtwn>
    </FlexBoxSpaceBtwn>
  );
}

export default NavBar;
