import React, { Component } from "react"
import * as data from "./data"
import Header from "./Components/Header"
import Articles from "./Components/Articles"
import { CssBaseline, Container } from "@material-ui/core"
import "./css/App.css"
import "@fontsource/baloo-bhai-2/400.css"
import "@fontsource/baloo-bhai-2/500.css"
import "@fontsource/baloo-bhai-2/700.css"
import { BrowserRouter, Link, Switch, Route } from "react-router-dom"
import { Helmet } from "react-helmet"
import Article from './Components/Article'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { ...data }
	}

	render() {
		return (
			<>
				<Helmet>
					<body className="body" />
				</Helmet>
				<CssBaseline />
				<Container>
					<Header header={this.state.header} tags={this.state.tags} />
					<BrowserRouter>
						<div className="navbar">
							<ul>
								<li>
									🏡 <Link to={"/"}>Home</Link>
								</li>
								{this.state.tags
									.filter((tag) => tag.enabled)
									.map((tag, i) => (
										<li key={i}>
											{tag.icon} <Link to={tag.link}>{tag.name}</Link>
										</li>
									))}
							</ul>
						</div>
						<Switch>
							<Route path="/article/:name">
								<Article
									articles={this.state.articles}
									tags={this.state.tags}
								/>
							</Route>
							<Route path="/tags/:name">
								<Articles
									articles={this.state.articles}
									tags={this.state.tags}
								/>
							</Route>
							<Route exact path="/">
								<Articles
									articles={this.state.articles}
									tags={this.state.tags}
								/>
							</Route>
						</Switch>
					</BrowserRouter>
				</Container>
			</>
		)
	}
}

export default App
