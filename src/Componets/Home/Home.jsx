import AllColleges from "../AllColleges/AllColleges";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ResearchCollection from "../ResearchCollection/REsearchCollection";
import ShowReview from "../ShowReview/ShowReview";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
            <AllColleges></AllColleges>

            <Gallery></Gallery>
          <ResearchCollection></ResearchCollection>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;