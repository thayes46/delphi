import React from 'react';
import './App.css';

/**
Initial setup and UI made with reference to: 
https://github.com/simonjsuh/Wikipedia-Search-API-using-React.js
*/
const API_KEY = "" + process.env.REACT_APP_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Articles
      ReturnedArticles: [],
      //Search terms in search bar
      SearchTerms: '',
    }
    //search terms var for backend
    var terms;
    //category for api hit
    var category;
  }

  //perform search
  searchNews = (e) => {
    e.preventDefault();
    
    this.setState({
      ReturnedArticles: []
    });
    
    //pointer for updating on submission
    const pointerToThis = this;

    //Building URL for API hit
    var url = ("https://newsapi.org/v2/top-headlines?")
    //Parsing search terms and appending them to URL
    if (this.terms !== "" && this.terms !== undefined){
      var searchTermsArray = this.terms.split(" "); 
      for (var word in searchTermsArray){
        url = url + "q="
        url = url + searchTermsArray[word]
        url = url + "&"
      }
    }

    //add on category
    if (this.category === undefined || this.category === "All Categories") {
      url = url + "category=entertainment&category=sports&category=technology&"
    } else {
      url = url + "category=" + this.category + "&";
    }
    //tag on key
    url = url + "pageSize=100&apiKey="
    url = url + API_KEY;
    console.log(url)
    //get json from API hit and update articles to be displayed accordingly
    fetch(url)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (response) {
          //fetch data from API hit
          for (var key in response.articles) {
            pointerToThis.state.ReturnedArticles.push({
              queryResultPageFullURL: response.articles[key].url,
              queryResultPageTitle: response.articles[key].title,
              queryResultPageSnippet: "" + response.articles[key].description,
              queryResultPageDate: "Published on " + response.articles[key].publishedAt.split("T")[0],
              queryResultPicture: "" + response.articles[key].urlToImage
            });
          }
          pointerToThis.forceUpdate();
        }
      )      
  }

  changeSearchTerms = (e) => {
    this.setState({
      SearchTerms: e.target.value
    });
    this.terms = e.target.value;
  }

  changeCategory = (e) => {
    this.category = e.target.value;
  }

  render() {
    let SearchResults = [];
    /*
    - Title hyperlinked to article in new window
    - Full url, linked to article in new window
    - Date of publication
    - Snippet of article along with image
    */
    for (var key3 in this.state.ReturnedArticles) {
      SearchResults.push(
        <div className="searchResultDiv" key={key3}>
          <h3>
            <a href={this.state.ReturnedArticles[key3].queryResultPageFullURL} target="_blank" rel="noreferrer">
            {this.state.ReturnedArticles[key3].queryResultPageTitle}
            </a>
          </h3>
          <p className="date" dangerouslySetInnerHTML={{__html: this.state.ReturnedArticles[key3].queryResultPageDate}}></p>
          <span className='link'>
            <a href={this.state.ReturnedArticles[key3].queryResultPageFullURL} target="_blank" rel="noreferrer">
            {this.state.ReturnedArticles[key3].queryResultPageFullURL}
            </a>
          </span>
          <div className="imageContainer">
            <img src={this.state.ReturnedArticles[key3].queryResultPicture} alt="Article" />
          </div>
          <p className="description" dangerouslySetInnerHTML={{__html: this.state.ReturnedArticles[key3].queryResultPageSnippet}}></p>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Search anything!</h1>
        <form action="">
          <input type="text" value={this.state.SearchTerms || ''} onChange={this.changeSearchTerms} placeholder='Search Articles' />
          {
          // 1 text box, 4 buttons vs Change to dropdown and have value update the category?
          }
          <button className="button" type='submit' onClick={this.searchNews}>Search:</button>
          <select className="select" name="Category" onChange={this.changeCategory} id="category">
            <option value="All Categories">All Categories</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </form>
        {SearchResults}
      </div>
    );
  }
}

export default App;
