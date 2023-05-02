export default function About() {
  return (
    <div className="projects-container">
      <h1 className="my-projects" data-aos="fade-up">
        Providing You With The Best Crypto Research
      </h1>
      <hr />
      <p data-aos="fade-right" data-aos-delay="500">
        The{" "}
        <a
          className="link"
          href="https://www.reddit.com/r/CryptoCurrency/"
          target="_blank"
        >
          {" "}
          r/CryptoCurrency
        </a>{" "}
        Crypto Recommender is a project tailored to serve the specific needs of
        individuals who are keen on engaging in crypto trading and investment,
        but are constrained by their busy schedules. It endeavors to provide
        comprehensive and reliable guidance to its users, enabling them to make
        informed decisions in the fast-paced and ever-changing world of crypto.
      </p>
      <p data-aos="fade-right" data-aos-delay="500">
        It works by utilizing advanced machine learning techniques, including
        supervised classification based on stock growths and text data, to sort
        and extract the most relevant and valuable posts from the vast
        <a
          className="link"
          href="https://www.reddit.com/r/CryptoCurrency/"
          target="_blank"
        >
          {" "}
          r/CryptoCurrency
        </a>{" "}
        subreddit. As a result, users are equipped with the latest and most
        relevant insights to guide their trading and investment decisions.
      </p>
      <p data-aos="fade-right" data-aos-delay="500">
        The overarching objective of this project is to democratize crypto
        trading by providing greater access to valuable and informative
        research. Mainstream news outlets have a stranglehold on peoples'
        attention, which is why this project focuses on this subreddit, home to
        a wealth of unique and unpopularized research insights overlooked by the
        general public.
      </p>
    </div>
  );
}
