# Reddit Crypto Research Posts Classifier

Project website: https://cryptorecommender.web.app/

***
# **I. Abstract**

Reddit is a well-known platform for discussing crypto and finance. The goal is to make crypto trading more accessible and democratic by providing easier access to informative crypto research. Reddit was chosen because it contains valuable research information that is often overlooked by the general public. By using posts from various different crypto-related subreddits as the dataset, the aim is to classify them as either valuable or not valuable. This project will primarily benefit individuals who are interested in investing and trading in the field, but don't have the time to conduct extensive research. It will help users quickly filter out the posts they want to read.

# **II. Introduction**

With the influx of retail investors during the pandemic, it is more important now than ever for people to educate themselves on investment decisions. One of the largest platforms on the entire internet, Reddit, can help with this.

Unlike professional investors, retail investors have very limited time to conduct their own research as they usually have a separate career. In this project, we aim to further democratize crypto trading by filtering and classifying crypto research such that every regular investor has the opportunity to quickly access them.

We will be able to provide a quick filter on the top research posts, as well as a classification on whether any given post may or may not be worth your time to read.

A related work (that deals with stocks rather than crypto) is a website called SwaggyStocks.com, in which sentiment analysis of the r/WallStreetBets subreddit is done and visualized. However, this project is different, as the goal is not to explicitly analyze sentiment of the various subreddits. Instead, recommendations will be based off filtering upon historical performance of the currencies each post is discussing.

# **III. Materials and Methods**

The dataset consists of posts from various crypto-related subreddits extracted using the Pushshift API, which is able to provide a lot of information about a given post, such as the title, score, upvote ratio, author, text, URL, created time, and more.

An external crpyto-related API will also be used to obtain financial data. The API will provide relevant information pertaining to the currency mentioned in the post.

To be continued...

***
