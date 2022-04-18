import { Section } from "../../components";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Regions from "./components/Regions";
import Place from "./components/Place";
import Purposes from "./components/Purposes";
import SuggestPlace from "./components/SuggestPlace";

import * as Styled from "./components/styles";

type Props = {};

const Home = (props: Props) => {
  return (
    <Section>
      <Styled.HomeWrapper>
        <Search />
        <Purposes />
        <Categories />
        <Regions />
        <Place />
        <SuggestPlace />
      </Styled.HomeWrapper>
    </Section>
  );
};

export default Home;
