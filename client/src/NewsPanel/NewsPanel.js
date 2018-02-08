import './NewsPanel.css';

import React from 'react';
import _ from 'lodash';

import NewsCard from '../NewsCard/NewsCard'

class NewsPanel extends React.Component{
    constructor() {
        super();
        this.state = {news:null};
    }

    componentDidMount() {
        this.loadMoreNews();
        this.handleScroll = this.handleScroll.bind(this);
        this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
        window.addEventListener('scroll', this.handleScroll);
    }

    //handle browser scroll
    handleScroll() {
        //get the first value that is not null (for compatibility)
        let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        //height of window + length already scrolled >= whole length of the page, use 50 as buffer
        if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
            console.log('Loading more news');
            this.loadMoreNews();
        }
    }

    // load news function
    loadMoreNews() {
      let request = new Request('http://localhost:3000/news', {
        method: 'GET',
        cache: false
      });

      fetch(request)
        .then((res) => res.json())
        .then((news) => {
          this.setState({
            news: this.state.news? this.state.news.concat(news) : news
          });
        });
    }

    renderNews() {
        let news_list = this.state.news.map(function(news) {
            return(
                //this key should be existing and unique to tell react whether this item is already existing in the list
                <a className='list-group-item' href="#">
                    <NewsCard news={news} />
                </a>
            );
        });

        return(
            <div className="container-fluid">
                <div className='list-group'>
                    {news_list}
                </div>
            </div>
        );
    }

    render() {
        if (this.state.news) {
            return(
                <div>
                    {this.renderNews()}
                </div>
            );
        } else {
            return(
                <div>
                    <div id='msg-app-loading'>
                        Loading
                    </div>
                </div>
            );
        }
    }
}

export default NewsPanel;
