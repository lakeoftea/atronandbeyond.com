import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from 'lodash'
import '../css/Articles.css'
import { Card, CardContent, Grid } from '@material-ui/core'

export default class Articles extends Component {
    constructor(props){
        super(props)
        this.state = {
            tag: this.props.tag,
            tags: this.props.tags,
            articles: this.props.articles
        }
    }

    render() {
        return (
            // article is enabled
            <div className="articleGrid" >
                <Grid container spacing={2} >
                    {this.state.articles.filter(article => article.enabled)
                        // has at least one tag that is enabled
                        .filter(article => {
                            return _.intersection(article.tags, this.state.tags.filter(tag => tag.enabled).map(value => value.id)).length > 0
                        })
                        .map((article, i) =>
                            <Grid item lg={6} key={i}>
                                <Card className="article">
                                    <CardContent className="cardContent">
                                        <h1 className="icon">{article.title}</h1>
                                        <div className="icon">{article.tags.map(articleTag => _.find(this.state.tags, (tag) => articleTag == tag.id).icon)}</div>
                                        <p dangerouslySetInnerHTML={{ __html: _.truncate(article.content, { 'length': 250 }) }} />
                                        <div>{article.date}</div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}
                </Grid>
            </div>
        )
    }
}

Articles.propTypes = {
    articles: PropTypes.array,
    tags: PropTypes.array,
    tag: PropTypes.string
};