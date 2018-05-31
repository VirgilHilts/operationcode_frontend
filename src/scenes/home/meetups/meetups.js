// import omit from 'lodash/omit';
import React, { Component } from 'react';
import axios from 'axios';
// import LinkButton from 'shared/components/linkButton/linkButton';
import Section from 'shared/components/section/section';
// import styles from './meetups.css';

const meetupKey = '7b74e5a6d21126a65d5974618254e';
const mapsKey = 'AIzaSyD0qaVoF9c9bA8CTrhOfDPG8cRa_7i3g1U';

class Meetups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorResponse: false
    };
    this.meetupUrl = null;
  }

  componentDidMount() {}

  getGroup() {
    /* eslint-disable no-console */
    axios
      .get(this.meetupUrl)
      .then(response => console.log(response))
      .catch(() => this.setState({ errorResponse: true }));
    /* eslint-enable no-console */
  }

  render() {
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=Space+Needle,Seattle+WA`;
    this.meetupUrl = `https://api.meetup.com/get/Operation-Code-Denver?key=${meetupKey}`;
    this.getGroup();
    return (
      <div>
        <Section title="Operation Code Meetups" theme="white">
          <iframe
            title="map"
            width="600"
            height="450"
            frameBorder="0"
            src={mapUrl}
            allowFullScreen
          />
        </Section>
      </div>
    );
  }
}

export default Meetups;
