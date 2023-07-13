export default function About() {
  return (
    <div className="projects-container">
      <h1 className="my-projects" data-aos="fade-up">
        What is this about?
      </h1>
      <hr />
      <p data-aos="fade-right" data-aos-delay="500">
        This is a project tailored to serve the specific needs of individuals
        who are keen on engaging in stock trading and investment, but are
        constrained by their busy schedules. It strives to provide comprehensive
        and reliable guidance to users, enabling them to make informed decisions
        in the fast-paced and ever-changing world of stocks.
      </p>
      <p data-aos="fade-right" data-aos-delay="500">
        It works by using advanced machine learning techniques to sort and
        extract the most relevant and valuable Reddit posts from the vast
        <a
          className="link"
          href="https://www.reddit.com/r/wallstreetbets/"
          target="_blank"
        >
          {" "}
          r/wallstreetbets
        </a>{" "}
        subreddit. As a result, users are equipped with the latest and most
        relevant insights to guide their trading and investment decisions.
      </p>
      <p data-aos="fade-right" data-aos-delay="500">
        The overarching objective of this project is to give users more access
        to valuable stock research. While many people rely on the mainstream
        news to provide them with their daily stock insights, this service will
        provide you with insights based on information from the infamous
        <a
          className="link"
          href="https://www.reddit.com/r/wallstreetbets/"
          target="_blank"
        >
          {" "}
          r/wallstreetbets
        </a>{" "}
        subreddit, home to a wealth of unique research insights often overlooked
        by others.
      </p>
    </div>
  );
}
