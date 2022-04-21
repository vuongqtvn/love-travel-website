import { Section } from "../../components";
import Search from "./components/Search";
import Categories from "./components/Categories";
import Regions from "./components/Regions";
import Places from "./components/Places";
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
        <Places />
        <SuggestPlace />
      </Styled.HomeWrapper>
    </Section>
  );
};

export default Home;
