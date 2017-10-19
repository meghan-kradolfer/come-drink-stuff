import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactGA from 'react-ga';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'


const Home = props => (
  <div className="home">
    <div className="mug">
        <div className="handle"></div>
        <div className="glass">
            <div className="body"></div>
            <div className="contents">
                <div className="fizz">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="foam">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>
      <div className="line">
                <div></div>
                    <div></div>
              </div>
    </div>
<h1>
   Come Drink Stuff
</h1>
    <h2>Page Coming Soon</h2>

    <div className="social">
      <ReactGA.OutboundLink
        eventLabel="Clicked Facebook link"
        to="https://www.facebook.com/events/2013944188890159/?acontext=%7B%22ref%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D&notif_id=1506919579574345&notif_t=plan_user_invited"
        target="_blank">
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
      </ReactGA.OutboundLink>
       <ReactGA.OutboundLink
        eventLabel="Clicked Instagram link"
        to="https://www.instagram.com/comedrinkstuff/"
        target="_blank">
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Clicked Eventbrite link"
        to="https://www.eventbrite.com/e/come-drink-stuff-01-vulcan-brewers-tickets-38309428532"
        target="_blank">
        <i className="fa fa-ticket" aria-hidden="true"></i>
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Clicked Email link"
        to="mailto:info@comedrinkstuff.com">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </ReactGA.OutboundLink>


    </div>

  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
