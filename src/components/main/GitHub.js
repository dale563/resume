import Section from "../UI/Section";

const GitHub = () => {
  return (
    <>
    <Section className= "traduisible fr afficher github" heading="Mon GitHub">
      <div id="github-graph" className="github-graph"></div>
      <div id="ghfeed" className="ghfeed"></div>
    </Section>
    <Section className= "traduisible en cacher github" heading="My GitHub">
      <div id="github-graph-en" className="github-graph"></div>
      <div id="ghfeed-en" className="ghfeed"></div>
    </Section>
    </>
  );
};

export default GitHub;