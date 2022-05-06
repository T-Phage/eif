import React, { Component } from 'react'

export default class Seremons extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div class="page-head" data-bg-image="images/page-head-1.jpg">
          <div class="container">
            <h2 class="page-title">Sermons</h2>
          </div>
        </div>
        <div className="fullwidth-block">
          <div className="container">
            <div className="row">
              <div className="content col-md-8">
                <h2 className="section-title">Upcoming seremons</h2>
                <ul className="seremon-list large">
                  <li>
                    <img src="images/thumb-1-120.png" alt=""/>
                    <div className="seremon-detail">
                      <h3 className="seremon-title"><a href="#">I believe in god with all my heart</a></h3>
                      <div className="seremon-meta">
                        <div className="pastor"><i className="fa fa-user"></i> Alan Ray</div>
                        <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam molestiae doloribus deserunt minus a dicta labore beatae maiores assumenda. Laudantium nihil, maxime molestiae soluta doloribus magnam eum. Nesciunt, ea, sint.</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/thumb-2-120.jpg" alt=""/>
                    <div className="seremon-detail">
                      <h3 className="seremon-title"><a href="#">Trusting in jesus and god</a></h3>
                      <div className="seremon-meta">
                        <div className="pastor"><i className="fa fa-user"></i> David Clark</div>
                        <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dignissimos corporis quidem at nobis impedit perspiciatis, accusantium qui natus amet sapiente voluptate doloribus laboriosam officia deserunt possimus cumque inventore. Ipsum.</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/thumb-3-120.jpg" alt=""/>
                    <div className="seremon-detail">
                      <h3 className="seremon-title"><a href="#">Love your kids</a></h3>
                      <div className="seremon-meta">
                        <div className="pastor"><i className="fa fa-user"></i> anthony roberts</div>
                        <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nisi rem est amet, ducimus, aut, atque error accusantium facilis ab adipisci! Cumque, corrupti sapiente dolores saepe adipisci dignissimos quod unde.</p>
                    </div>
                  </li>
                  <li>
                    <img src="images/thumb-2-120.jpg" alt=""/>
                    <div className="seremon-detail">
                      <h3 className="seremon-title"><a href="#">Trusting in jesus and god</a></h3>
                      <div className="seremon-meta">
                        <div className="pastor"><i className="fa fa-user"></i> David Clark</div>
                        <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dignissimos corporis quidem at nobis impedit perspiciatis, accusantium qui natus amet sapiente voluptate doloribus laboriosam officia deserunt possimus cumque inventore. Ipsum.</p>
                    </div>
                  </li>
                </ul>

                <h2 className="section-title">Latest seremons</h2>
                <ul className="seremon-list">
                  <li>
                    <img src="images/small-thumb-1.jpg" alt=""/>
                    <div className="seremon-detail">
                      <h3 className="seremon-title"><a href="#">I believe in god with all my heart</a></h3>
                      <div className="seremon-meta">
                        <div className="pastor"><i className="fa fa-user"></i> Alan Ray</div>
                        <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src="images/small-thumb-2.jpg" alt=""/>
                    <div className="seremon-detail">
                      <h3 className="seremon-title"><a href="#">Trusting in jesus and god</a></h3>
                      <div className="seremon-meta">
                        <div className="pastor"><i className="fa fa-user"></i> David Clark</div>
                        <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src="images/small-thumb-3.jpg" alt=""/>
                    <div className="seremon-detail">
                      <h3 className="seremon-title"><a href="#">Love your kids</a></h3>
                      <div className="seremon-meta">
                        <div className="pastor"><i className="fa fa-user"></i> anthony roberts</div>
                        <div className="date"><i className="fa fa-calendar"></i> 18 mar 2014</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidebar col-md-3 col-md-offset-1">
                <div className="widget">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="arrow">
                    <li><a href="#">Perspiciatis unde</a></li>
                    <li><a href="#">Omnis iste natus</a></li>
                    <li><a href="#">Voluptatem accusantium</a></li>
                    <li><a href="#">Doloremque eaque</a></li>
                    <li><a href="#">Totam rem aperiam</a></li>
                  </ul>
                </div>

                <div className="widget">
                  <h3 className="widget-title">Donations</h3>
                  <p>Distinctio unde consequuntur delectus, repudiandae, impedit atque earum adipisci, explicabo perferendis.</p>
                  <a href="#" className="button">Make a donation</a>
                </div>

                <div className="widget">
                  <h3 className="widget-title">Gallery updates</h3>

                  <div className="galery-thumb">
                    <a href="#"><img src="images/gallery-thumb-1.jpg" alt=""/></a>
                    <a href="#"><img src="images/gallery-thumb-2.jpg" alt=""/></a>
                    <a href="#"><img src="images/gallery-thumb-3.jpg" alt=""/></a>
                    <a href="#"><img src="images/gallery-thumb-4.jpg" alt=""/></a>
                    <a href="#"><img src="images/gallery-thumb-5.jpg" alt=""/></a>
                    <a href="#"><img src="images/gallery-thumb-6.jpg" alt=""/></a>
                  </div>
                </div>

                <div className="widget">
                  <h3 className="widget-title">Text widget </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam obcaecati velit, atque necessitatibus molestias ullam tempore itaque quidem sequi ea sed consectetur, eligendi cupiditate saepe! Hic veniam maiores explicabo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
