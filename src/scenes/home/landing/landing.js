import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import LinkButton from 'shared/components/linkButton/linkButton';
import Donate from 'shared/components/donate/donate';
import Join from 'shared/components/join/join';

import WhatWeDo from './whatWeDo/whatWeDo';
import Membership from './membership/membership';
import MoreInformation from './moreInformation/moreInformation';
import Partners from './partners/partners';
import styles from './landing.css';

class Landing extends Component {
  /* constructor(props) {
    super(props);
    // this.props.setBgImage(bgImage);
  }*/
  render() {
    return (
      <div className={styles.landing}>
        <div className={styles.pageHeading}>
          <h1>The largest community dedicated to helping military veterans and
            families launch their software development careers.</h1>
          <LinkButton text="Join" theme="red" link="#" />
        </div>
        <WhatWeDo />
        <Membership />
        <MoreInformation />
        <Partners />
        <Donate />
        <Join />
      </div>
    );
  }
}

/* Landing.propTypes = {
  setBgImage: PropTypes.func
}; */


export default Landing;