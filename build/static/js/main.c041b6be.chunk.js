(this.webpackJsonpdelphi=this.webpackJsonpdelphi||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var s=r(0),a=r(1),n=r.n(a),c=r(4),i=r.n(c),l=(r(14),r(5)),u=r(6),o=r(2),h=r(8),g=r(7),d=(r(15),function(e){Object(h.a)(r,e);var t=Object(g.a)(r);function r(e){var s;return Object(l.a)(this,r),(s=t.call(this,e)).searchNews=function(e){e.preventDefault(),s.setState({ReturnedArticles:[]});var t=Object(o.a)(s),r="https://newsapi.org/v2/top-headlines?";if(""!==s.terms&&void 0!==s.terms){var a=s.terms.split(" ");for(var n in a)r+="q=",r+=a[n],r+="&"}void 0===s.category||"All Categories"===s.category?r+="category=entertainment&category=sports&category=technology&":r=r+"category="+s.category+"&",r+="pageSize=100&apiKey=",r+="78b9d599c4f94f8fa3afb1a5458928d6",console.log(r),fetch(r).then((function(e){return e.json()})).then((function(e){for(var r in e.articles)t.state.ReturnedArticles.push({queryResultPageFullURL:e.articles[r].url,queryResultPageTitle:e.articles[r].title,queryResultPageSnippet:""+e.articles[r].description,queryResultPageDate:"Published on "+e.articles[r].publishedAt.split("T")[0],queryResultPicture:""+e.articles[r].urlToImage});t.forceUpdate()}))},s.changeSearchTerms=function(e){s.setState({SearchTerms:e.target.value}),s.terms=e.target.value},s.changeCategory=function(e){s.category=e.target.value},s.state={ReturnedArticles:[],SearchTerms:""},s}return Object(u.a)(r,[{key:"render",value:function(){var e=[];for(var t in this.state.ReturnedArticles)e.push(Object(s.jsxs)("div",{className:"searchResultDiv",children:[Object(s.jsx)("h3",{children:Object(s.jsx)("a",{href:this.state.ReturnedArticles[t].queryResultPageFullURL,target:"_blank",rel:"noreferrer",children:this.state.ReturnedArticles[t].queryResultPageTitle})}),Object(s.jsx)("p",{className:"date",dangerouslySetInnerHTML:{__html:this.state.ReturnedArticles[t].queryResultPageDate}}),Object(s.jsx)("span",{className:"link",children:Object(s.jsx)("a",{href:this.state.ReturnedArticles[t].queryResultPageFullURL,target:"_blank",rel:"noreferrer",children:this.state.ReturnedArticles[t].queryResultPageFullURL})}),Object(s.jsx)("div",{className:"imageContainer",children:Object(s.jsx)("img",{src:this.state.ReturnedArticles[t].queryResultPicture,alt:"Article"})}),Object(s.jsx)("p",{className:"description",dangerouslySetInnerHTML:{__html:this.state.ReturnedArticles[t].queryResultPageSnippet}})]},t));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Search anything!"}),Object(s.jsxs)("form",{action:"",children:[Object(s.jsx)("input",{type:"text",value:this.state.SearchTerms||"",onChange:this.changeSearchTerms,placeholder:"Search Articles"}),Object(s.jsx)("button",{className:"button",type:"submit",onClick:this.searchNews,children:"Search:"}),Object(s.jsxs)("select",{className:"select",name:"Category",onChange:this.changeCategory,id:"category",children:[Object(s.jsx)("option",{value:"All Categories",children:"All Categories"}),Object(s.jsx)("option",{value:"entertainment",children:"Entertainment"}),Object(s.jsx)("option",{value:"sports",children:"Sports"}),Object(s.jsx)("option",{value:"technology",children:"Technology"})]})]}),e]})}}]),r}(n.a.Component)),j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),s(e),a(e),n(e),c(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.c041b6be.chunk.js.map