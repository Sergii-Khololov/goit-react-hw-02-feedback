(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),s=n.n(r),i=(n(16),n(5)),o=n(6),j=n(7),b=n(11),d=n(9),l=n(8),u=n.n(l),h=n(0),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object.keys(t).map((function(e){return Object(h.jsx)("button",{type:"button",name:e,onClick:n,className:"btn",children:e},e)}))},v=function(e){var t=e.children,n=e.title;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:n}),t]})},p=n(10),x=function(e){var t=e.message;return Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:t})})};var f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return a>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Statistics"}),Object(h.jsxs)("div",{children:[Object.entries({good:t,neutral:n,bad:c}).map((function(e){var t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)("p",{children:[n,":",Object(h.jsx)("span",{children:c})]},n)})),Object(h.jsxs)("p",{children:["Total:",Object(h.jsx)("span",{children:a})]},"total"),Object(h.jsxs)("p",{children:["Positive Feedback:",Object(h.jsx)("span",{children:r})]},"percent")]})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Statistics"}),Object(h.jsx)(x,{message:"No feedback given"})]})},g=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){e.setState((function(){return Object(i.a)({},t.target.name,e.state[t.target.name]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.floor(100*t/e.countTotalFeedback())},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(v,{title:"Please leave feedback"}),Object(h.jsx)(O,{options:this.state,onLeaveFeedback:this.handleIncrement}),Object(h.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]},u.a.generate())}}]),n}(c.Component),k=g;n(26);var m=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(k,{})})};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.bd31ebab.chunk.js.map