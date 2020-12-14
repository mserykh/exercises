const ALLOWEDLENGTH = 140;
var tweet = prompt("Write your tweet here:");
if (tweet === null) {
  alert("You have not enter your tweet");
}
var tweetLength = tweet.length;

if (tweetLength === 0) {
  alert("You have not enter your tweet");
} else if (tweetLength <= ALLOWEDLENGTH && tweetLength > 0) {
  alert(
    `You have written ${tweet.length} characters, you have -${
      ALLOWEDLENGTH - tweetLength
    } characters left.`
  );
  alert(`Your tweet is: ${tweet}`);
} else if (tweetLength > ALLOWEDLENGTH) {
  alert(
    `You have written ${tweet.length} characters, the maximum tweet length is ${ALLOWEDLENGTH}.`
  );
  alert(`${tweet.slice(0, ALLOWEDLENGTH)} ...`);
}
