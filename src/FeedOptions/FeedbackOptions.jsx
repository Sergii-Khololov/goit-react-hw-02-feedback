import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (Object.keys(options).map((key) => (
        <button key={key} type="button" name={key} onClick={onLeaveFeedback} className="btn">{key}</button>
    ))
    )
};

export default FeedbackOptions;
   
// <button type="button" className="btn" onClick={this.btnGood}>
    //       Good
    //     </button>
    //     <button type="button" className="btn" onClick={this.btnNeutral}>
    //       Neutral
    //     </button>
    //     <button type="button" className="btn" onClick={this.btnBad}>
    //       Bad
    //     </button>