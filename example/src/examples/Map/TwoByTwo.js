import React from 'react';
import TrackasiaGL from '@trackasia/trackasia-react-native';

import sheet from '../../styles/sheet';
import smileyFaceGeoJSON from '../../assets/smiley_face.json';
import Page from '../common/Page';

const layerStyles = {
  smileyFaceLight: {
    fillAntialias: true,
    fillColor: 'white',
    fillOutlineColor: 'rgba(255, 255, 255, 0.84)',
  },
  smileyFaceDark: {
    fillAntialias: true,
    fillColor: 'black',
    fillOutlineColor: 'rgba(0, 0, 0, 0.84)',
  },
};

class TwoByTwo extends React.Component {
  renderMap(styleURL, layerStyle) {
    return (
      <TrackasiaGL.MapView
        zoomLevel={2}
        centerCoordinate={[-35.15165038, 40.6235728]}
        onSetCameraComplete={this.onUpdateZoomLevel}
        ref={ref => (this.map = ref)}
        style={sheet.matchParent}
        styleURL={styleURL}>
        <TrackasiaGL.ShapeSource id="smileyFaceSource" shape={smileyFaceGeoJSON}>
          <TrackasiaGL.FillLayer id="smileyFaceFill" style={layerStyle} />
        </TrackasiaGL.ShapeSource>
      </TrackasiaGL.MapView>
    );
  }

  render() {
    return (
      <Page>
        {this.renderMap(TrackasiaGL.StyleURL.Light, layerStyles.smileyFaceDark)}
        {this.renderMap(TrackasiaGL.StyleURL.Dark, layerStyles.smileyFaceLight)}
      </Page>
    );
  }
}

export default TwoByTwo;
