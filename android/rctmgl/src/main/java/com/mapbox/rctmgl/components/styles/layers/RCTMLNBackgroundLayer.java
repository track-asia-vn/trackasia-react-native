package com.mapbox.rctmgl.components.styles.layers;

import android.content.Context;

import com.trackasia.android.style.layers.BackgroundLayer;
import com.mapbox.rctmgl.components.styles.RCTMLNStyle;
import com.mapbox.rctmgl.components.styles.RCTMLNStyleFactory;

/**
 * Created by nickitaliano on 9/25/17.
 */

public class RCTMLNBackgroundLayer extends RCTLayer<BackgroundLayer> {
    public RCTMLNBackgroundLayer(Context context) {
        super(context);
    }

    @Override
    public BackgroundLayer makeLayer() {
        return new BackgroundLayer(mID);
    }

    @Override
    public void addStyles() {
        RCTMLNStyleFactory.setBackgroundLayerStyle(mLayer, new RCTMLNStyle(getContext(), mReactStyle, mMap));
    }
}
