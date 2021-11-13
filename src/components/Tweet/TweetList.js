import Card from "../Card/Card";
import TweetItem from "./TweetItem";
import classes from "./TweetList.module.css";
export default function TweetList(props) {
  return (
    <Card className={classes.card}>
      <ul>
        {props.tweets.reverse().map((tweet) => {
          return <TweetItem key={tweet.id} tweet={tweet.text} />;
        })}
      </ul>
    </Card>
  );
}
