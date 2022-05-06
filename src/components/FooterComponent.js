import React, { Component } from 'react'

export default class FooterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">Our address</h3>
                {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis magnam, ab ipsa laboriosam tempore tenetur, aliquid repellat, ex cum dicta reiciendis accusamus. Omnis repudiandae quasi mollitia, iusto odio dignissimos.</p>*/}
                <p>
                  <div class="mapouter">
                    <div class="gmap_canvas">
                      <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=%20KNUST,%20Kumasi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      <a href="https://putlocker-is.org">putlocker</a>
                      <br/>
                        <a href="https://www.embedgooglemap.net">google map for web</a>
                      </div>
                    </div>
                </p>
                <ul className="address">
                  <li><i className="fa fa-map-marker"></i> 329 KNUST St, Kumasi, KNUST UP 75042</li>
                  <li><i className="fa fa-phone"></i> (233) 853 442 552</li>
                  <li><i className="fa fa-envelope"></i> info@endtimeintercessors.com</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">Topics from the eschatology</h3>
                <ul className="bullet">
                  <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                  <li><a href="#">Consectetur adipisicing elit quis nostrud</a></li>
                  <li><a href="#">Eiusmod tempor incididunt ut labore et dolore magna</a></li>
                  <li><a href="#">Ut enim ad minim veniam cillum</a></li>
                  <li><a href="#">Exercitation ullamco laboris nisi ut aliquip</a></li>
                  <li><a href="#">Duis aute irure dolor in reprehenderit in voluptate</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget">
                <h3 className="widget-title">Contact form</h3>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-md-6"><input type="text" placeholder="Your name..."/></div>
                    <div className="col-md-6"><input type="text" placeholder="Email..."/></div>
                  </div>

                  <textarea name="" placeholder="Your message..."></textarea>
                  <div className="text-right"><input type="submit" value="Send message"/></div>

                </form>
              </div>
            </div>
          </div>

        <p className="colophon">Copyright 2022 Endtime Intercessors Fellowship</p>
      </div>
    </footer>
    )
  }
}
