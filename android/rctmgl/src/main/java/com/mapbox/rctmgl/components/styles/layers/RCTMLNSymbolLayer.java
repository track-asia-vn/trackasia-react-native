package com.mapbox.rctmgl.components.styles.layers;

import android.content.Context;

import com.trackasia.android.style.expressions.Expression;
import com.trackasia.android.style.layers.SymbolLayer;
import com.mapbox.rctmgl.components.mapview.RCTMLNMapView;
import com.mapbox.rctmgl.components.styles.RCTMLNStyle;
import com.mapbox.rctmgl.components.styles.RCTMLNStyleFactory;

/**
 * Created by nickitaliano on 9/19/17.
 */

public class RCTMLNSymbolLayer extends RCTLayer<SymbolLayer> {
    private String mSourceLayerID;

    public RCTMLNSymbolLayer(Context context) {
        super(context);
    }

    @Override
    protected void updateFilter(Expression expression) {
        mLayer.setFilter(expression);
    }

    @Override
    public void addToMap(RCTMLNMapView mapView) {
        super.addToMap(mapView);
    }

    @Override
    public SymbolLayer makeLayer() {
        SymbolLayer layer = new SymbolLayer(mID, mSourceID);

        if (mSourceLayerID != null) {
            layer.setSourceLayer(mSourceLayerID);
        }

        return layer;
    }

    @Override
    public void addStyles() {
        RCTMLNStyleFactory.setSymbolLayerStyle(mLayer, new RCTMLNStyle(getContext(), mReactStyle, mMap));
    }

    public void setSourceLayerID(String sourceLayerID) {
        mSourceLayerID = sourceLayerID;

        if (mLayer != null) {
            mLayer.setSourceLayer(sourceLayerID);
        }
    }
}
