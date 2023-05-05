import Cart from "../Cart/Cart";
import Search from "./Search";
import AccountButton from "./AccountButton";
import FlexBoxSpaceBtwn from "../../components/FlexBoxSpaceBtwn";
import NavButton from "../../components/NavButton";
import Logo from "../../components/Logo";

interface Props {
  setSelectedTab: React.Dispatch<React.SetStateAction<string | null>>,
}

function NavBar(props: Props) {
  const { setSelectedTab } = props;

  const handleButtonClick = (label: string) => {
    setSelectedTab(label)
  }

  return (
    <FlexBoxSpaceBtwn
      width="100%"
      bg="brand.cream.50"
      alignItems='center'
    >
      <FlexBoxSpaceBtwn width="33%">
        <NavButton label="Men" clickHandler={() => handleButtonClick("men")} />
        <NavButton
          label="Women"
          clickHandler={() => handleButtonClick("women")}
        />
        <NavButton
          label="Accessories"
          clickHandler={() => handleButtonClick("accessories")}
        />
      </FlexBoxSpaceBtwn>
      <Logo />
      <FlexBoxSpaceBtwn width="33%">
        <NavButton
          label="About"
          clickHandler={() => handleButtonClick("about")}
        />
        <NavButton label="Contact" clickHandler={() => handleButtonClick("contact")} />
        <FlexBoxSpaceBtwn>
          <Search />
          <AccountButton />
          <Cart />
        </FlexBoxSpaceBtwn>
      </FlexBoxSpaceBtwn>
    </FlexBoxSpaceBtwn>
  );
}

export default NavBar;
