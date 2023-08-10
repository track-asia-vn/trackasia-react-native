import React from 'react';
import TrackasiaGL from '@trackasia/trackasia-react-native';

import sheet from '../../styles/sheet';
import {SF_OFFICE_COORDINATE} from '../../utils';
import Page from '../common/Page';

class YoYo extends React.Component {
  timeout = null;

  constructor(props) {
    super(props);

    this.state = {
      zoomLevel: 2,
    };
  }

  componentDidMount() {
    this.cameraLoop();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  cameraLoop() {
    requestAnimationFrame(async () => {
      const nextZoomLevel = this.state.zoomLevel === 6 ? 2 : 6;
      this.setState({zoomLevel: nextZoomLevel});
      this.timeout = setTimeout(() => this.cameraLoop(), 2000);
    });
  }

  render() {
    return (
      <Page>
        <TrackasiaGL.MapView
          ref={ref => (this.map = ref)}
          style={sheet.matchParent}
          styleURL={TrackasiaGL.StyleURL.Dark}>
          <TrackasiaGL.Camera
            zoomLevel={this.state.zoomLevel}
            centerCoordinate={SF_OFFICE_COORDINATE}
          />
        </TrackasiaGL.MapView>
      </Page>
    );
  }
}

export default YoYo;
