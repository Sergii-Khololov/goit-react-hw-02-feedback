const Notification = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  if (total > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <div>
          {Object.entries({ good, neutral, bad }).map(([key, value]) => (
            <p key={key}>
              {key}:<span>{value}</span>
            </p>
          ))}
          <p key={'total'}>
            Total:<span>{total}</span>
          </p>
          <p key={'percent'}>
            Positive Feedback:<span>{positivePercentage}</span>
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <Notification message={"No feedback given"} />
      </>
    );
  }
}

export default Statistics;
