import React, { Component } from 'react'

export default class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className="hero">
          <div className="slides">
            <li data-bg-image="images/slide-1.jpg">
              <div className="container">
                <div className="slide-content">
                  <small className="slide-subtitle">Welcome to</small>
                  <h2 className="slide-title">The Endtime Intercessors Fellowship</h2>

                  <a href="#" className="button">See our ministries</a>
                </div>
              </div>
            </li>
          </div>
        </div>

        <main class="main-content">
          {/* Recent news */}
          {/*
  				<div class="fullwidth-block">
  					<div class="container">
  						<h2 class="section-title">Recent news</h2>

  						<div class="row">
  							<div class="col-md-3 col-sm-6">
  								<div class="news">
  									<image class="news-image" src="images/news-thumb-1.jpg"></image>
  									<h3 class="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
  									<small class="date"><i class="fa fa-calendar"></i>24 mar 2014</small>
  								</div>
  							</div>
  							<div class="col-md-3 col-sm-6">
  								<div class="news">
  									<image class="news-image" src="images/news-thumb-2.jpg"></image>
  									<h3 class="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
  									<small class="date"><i class="fa fa-calendar"></i>24 mar 2014</small>
  								</div>
  							</div>
  							<div class="col-md-3 col-sm-6">
  								<div class="news">
  									<image class="news-image" src="images/news-thumb-3.jpg"></image>
  									<h3 class="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
  									<small class="date"><i class="fa fa-calendar"></i>24 mar 2014</small>
  								</div>
  							</div>
  							<div class="col-md-3 col-sm-6">
  								<div class="news">
  									<image class="news-image" src="images/news-thumb-4.jpg"></image>
  									<h3 class="news-title"><a href="#">laboris nisi ut aliquip</a></h3>
  									<small class="date"><i class="fa fa-calendar"></i>24 mar 2014</small>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
          */}

				<div className="fullwidth-block">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h2 className="section-title">Meditations</h2>
  								<ul className="event-list">
  									<li>
  										<a href="#">
  											<h3 className="event-title">who is the holy spirit</h3>
  											<span className="event-meta">
  												<span><i className="fa fa-calendar"></i>4 mar 2022</span>
                            {/*<span><i className="fa fa-map-marker"></i> Africa</span>*/}
  												<span><i className="fa"></i> Bro. Michael </span>

  											</span>
  										</a>
  									</li>
  									<li>
  										<a href="#">
  											<h3 className="event-title">Having the spirit of excellence</h3>
  											<span className="event-meta">
  												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
  												<span><i className="fa fa-map-marker"></i> Saint paul church</span>

  											</span>
  										</a>
  									</li>
  									<li>
  										<a href="#">
  											<h3 className="event-title">Intercession</h3>
  											<span className="event-meta">
  												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
  												<span><i className="fa fa-map-marker"></i> true church</span>

  											</span>
  										</a>
  									</li>
  									<li>
  										<a href="#">
  											<h3 className="event-title">Living a righteous life</h3>
  											<span className="event-meta">
  												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
  												<span><i className="fa fa-map-marker"></i> St cathedral</span>

  											</span>
  										</a>
  									</li>
                    <li>
  										<a href="#">
  											<h3 className="event-title">I bear the marks of Christ</h3>
  											<span className="event-meta">
  												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
  												<span><i className="fa fa-map-marker"></i> St cathedral</span>

  											</span>
  										</a>
  									</li>
  									<li>
  										<a href="#">
  											<h3 className="event-title">Abraham and Sarah's shortcut to God's will</h3>
  											<span className="event-meta">
  												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
  												<span><i className="fa fa-map-marker"></i> greenie lake</span>

  											</span>
  										</a>
  									</li>
  									<li>
  										<a href="#">
  											<h3 className="event-title">Faith</h3>
  											<span className="event-meta">
  												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
  												<span><i className="fa fa-map-marker"></i> Detroit city</span>

  											</span>
  										</a>
  									</li>
                    <li>
  										<a href="#">
  											<h3 className="event-title">Hope</h3>
  											<span className="event-meta">
  												<span><i className="fa fa-calendar"></i>30 mar 2014</span>
  												<span><i className="fa fa-map-marker"></i> Detroit city</span>

  											</span>
  										</a>
  									</li>
  								</ul>

  								<div className="text-center">
  									<a href="#" className="button">See all from meditations</a>
  								</div>
  							</div>

  							<div className="col-md-6">
  								<h2 className="section-title">Studies</h2>
    								<ul className="seremon-list">
    									<li>
    										<img src="images/small-thumb-1.jpg" alt=""/>
    										<div className="seremon-detail">
    											<h3 className="seremon-title"><a href="#">The book of Revellation</a></h3>
    											<div className="seremon-meta">
    												<div className="pastor"><i className="fa fa-user"></i> owusu michael</div>
    												<div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
    											</div>
    										</div>
    									</li>
    									<li>
    										<img src="images/small-thumb-2.jpg" alt=""/>
    										<div className="seremon-detail">
    											<h3 className="seremon-title"><a href="#">The gospel of John</a></h3>
    											<div className="seremon-meta">
    												<div className="pastor"><i className="fa fa-user"></i> John sammy </div>
    												<div className="date"><i class="fa fa-calendar"></i> 18 mar 2014</div>
    											</div>
    										</div>
    									</li>
    									<li>
    										<img src="images/small-thumb-3.jpg" alt=""/>
    										<div className="seremon-detail">
    											<h3 className="seremon-title"><a href="#">I am a new creature</a></h3>
    											<div className="seremon-meta">
    												<div className="pastor"><i className="fa fa-user"></i> ernest amoah</div>
    												<div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
    											</div>
    										</div>
    									</li>
                      <li>
    										<img src="images/small-thumb-1.jpg" alt=""/>
    										<div className="seremon-detail">
    											<h3 className="seremon-title"><a href="#">earthly pleasures</a></h3>
    											<div className="seremon-meta">
    												<div className="pastor"><i className="fa fa-user"></i> kwadwo amoah</div>
    												<div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
    											</div>
    										</div>
    									</li>
    								</ul>

  								<div className="text-center">
  									<a href="#" className="button">See all studies</a>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</main>

      </div>
    )
  }
}
