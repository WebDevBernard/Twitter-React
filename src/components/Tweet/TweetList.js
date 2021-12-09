import TweetItem from "./TweetItem";
import classes from "./TweetList.module.css";
import { useSelector } from "react-redux";
export default function TweetList(props) {
  const tweets = useSelector((state) => state.tweet);
  console.log(tweets);
  return (
    <div className={classes.card}>
      {[...tweets].reverse().map((tweet) => {
        return (
          <TweetItem
            key={tweet.id}
            id={tweet.id}
            tweet={tweet.tweet}
            like={tweet.like}
            createdAt={tweet.createdAt}
            onRemoveTweet={props.onRemoveTweet}
            avatar={tweet.avatar}
            userName={tweet.userName}
          />
        );
      })}
    </div>
  );
}
