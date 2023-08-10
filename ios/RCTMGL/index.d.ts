/* eslint-disable */
// DO NOT MODIFY
// THIS FILE IS AUTOGENERATED

export interface ConstantProps {
  styletype: string;
  payload: {
    value: any;
  };
}

export interface StyleFunctionProps {
  styletype: string;
  payload: {
    fn: string;
    attributeName: string;
    stops: any[];
    mode: any;
  };
}

export interface TransitionProps {
  duration: number;
  delay: number;
}

export type TranslationProps = { x: number; y: number } | number[];

export interface fillLayerStyleProps {
  /**
   * Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.
   */
  fillSortKey: Value<number, ["zoom", "feature"]>;

  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * Whether or not the fill should be antialiased.
   */
  fillAntialias: Value<boolean, ["zoom"]>;

  /**
   * The opacity of the entire fill layer. In contrast to the `fillColor`, this value will also affect the 1px stroke around the fill, if the stroke is used.
   */
  fillOpacity: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillOpacity property.
   */
  fillOpacityTransition: TransitionProps;

  /**
   * The color of the filled part of this layer. This color can be specified as `rgba` with an alpha component and the color's opacity will not affect the opacity of the 1px stroke, if it is used.
   *
   * @disabledBy fillPattern
   */
  fillColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillColor property.
   */
  fillColorTransition: TransitionProps;

  /**
   * The outline color of the fill. Matches the value of `fillColor` if unspecified.
   *
   * @disabledBy fillPattern
   */
  fillOutlineColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillOutlineColor property.
   */
  fillOutlineColorTransition: TransitionProps;

  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  fillTranslate: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s fillTranslate property.
   */
  fillTranslateTransition: TransitionProps;

  /**
   * Controls the frame of reference for `fillTranslate`.
   *
   * @requires fillTranslate
   */
  fillTranslateAnchor: Value<Translation, ["zoom"]>;

  /**
   * Name of image in sprite to use for drawing image fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.
   */
  fillPattern: Value<ResolvedImageType, ["zoom", "feature"]>;

  /**
   * The transition affecting any changes to this layer’s fillPattern property.
   */
  fillPatternTransition: TransitionProps;
}

export interface lineLayerStyleProps {
  /**
   * The display of line endings.
   */
  lineCap: Value<Enum<LineCapEnum, LineCapEnumValues>, ["zoom"]>;

  /**
   * The display of lines when joining.
   */
  lineJoin: Value<Enum<LineJoinEnum, LineJoinEnumValues>, ["zoom", "feature"]>;

  /**
   * Used to automatically convert miter joins to bevel joins for sharp angles.
   */
  lineMiterLimit: Value<number, ["zoom"]>;

  /**
   * Used to automatically convert round joins to miter joins for shallow angles.
   */
  lineRoundLimit: Value<number, ["zoom"]>;

  /**
   * Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.
   */
  lineSortKey: Value<number, ["zoom", "feature"]>;

  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * The opacity at which the line will be drawn.
   */
  lineOpacity: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineOpacity property.
   */
  lineOpacityTransition: TransitionProps;

  /**
   * The color with which the line will be drawn.
   *
   * @disabledBy linePattern
   */
  lineColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineColor property.
   */
  lineColorTransition: TransitionProps;

  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  lineTranslate: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s lineTranslate property.
   */
  lineTranslateTransition: TransitionProps;

  /**
   * Controls the frame of reference for `lineTranslate`.
   *
   * @requires lineTranslate
   */
  lineTranslateAnchor: Value<Translation, ["zoom"]>;

  /**
   * Stroke thickness.
   */
  lineWidth: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineWidth property.
   */
  lineWidthTransition: TransitionProps;

  /**
   * Draws a line casing outside of a line's actual path. Value indicates the width of the inner gap.
   */
  lineGapWidth: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineGapWidth property.
   */
  lineGapWidthTransition: TransitionProps;

  /**
   * The line's offset. For linear features, a positive value offsets the line to the right, relative to the direction of the line, and a negative value to the left. For polygon features, a positive value results in an inset, and a negative value results in an outset.
   */
  lineOffset: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineOffset property.
   */
  lineOffsetTransition: TransitionProps;

  /**
   * Blur applied to the line, in pixels.
   */
  lineBlur: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s lineBlur property.
   */
  lineBlurTransition: TransitionProps;

  /**
   * Specifies the lengths of the alternating dashes and gaps that form the dash pattern. The lengths are later scaled by the line width. To convert a dash length to pixels, multiply the length by the current line width. Note that GeoJSON sources with `lineMetrics: true` specified won't render dashed lines to the expected scale. Also note that zoomDependent expressions will be evaluated only at integer zoom levels.
   *
   * @disabledBy linePattern
   */
  lineDasharray: Value<number[], ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s lineDasharray property.
   */
  lineDasharrayTransition: TransitionProps;

  /**
   * Name of image in sprite to use for drawing image lines. For seamless patterns, image width must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.
   */
  linePattern: Value<ResolvedImageType, ["zoom", "feature"]>;

  /**
   * The transition affecting any changes to this layer’s linePattern property.
   */
  linePatternTransition: TransitionProps;

  /**
   * Defines a gradient with which to color a line feature. Can only be used with GeoJSON sources that specify `"lineMetrics": true`.
   *
   * @disabledBy lineDasharray, linePattern
   */
  lineGradient: Value<string, ["line-progress"]>;
}

export interface symbolLayerStyleProps {
  /**
   * Label placement relative to its geometry.
   */
  symbolPlacement: Value<
    Enum<SymbolPlacementEnum, SymbolPlacementEnumValues>,
    ["zoom"]
  >;

  /**
   * Distance between two symbol anchors.
   */
  symbolSpacing: Value<number, ["zoom"]>;

  /**
   * If true, the symbols will not cross tile edges to avoid mutual collisions. Recommended in layers that don't have enough padding in the vector tile to prevent collisions, or if it is a point symbol layer placed after a line symbol layer. When using a client that supports global collision detection, like Trackasia GL JS version 0.42.0 or greater, enabling this property is not needed to prevent clipped labels at tile boundaries.
   */
  symbolAvoidEdges: Value<boolean, ["zoom"]>;

  /**
   * Sorts features in ascending order based on this value. Features with lower sort keys are drawn and placed first.  When `iconAllowOverlap` or `textAllowOverlap` is `false`, features with a lower sort key will have priority during placement. When `iconAllowOverlap` or `textAllowOverlap` is set to `true`, features with a higher sort key will overlap over features with a lower sort key.
   */
  symbolSortKey: Value<number, ["zoom", "feature"]>;

  /**
   * Determines whether overlapping symbols in the same layer are rendered in the order that they appear in the data source or by their yPosition relative to the viewport. To control the order and prioritization of symbols otherwise, use `symbolSortKey`.
   */
  symbolZOrder: Value<Enum<SymbolZOrderEnum, SymbolZOrderEnumValues>, ["zoom"]>;

  /**
   * If true, the icon will be visible even if it collides with other previously drawn symbols.
   *
   * @requires iconImage
   *
   * @disabledBy iconOverlap
   */
  iconAllowOverlap: Value<boolean, ["zoom"]>;

  /**
   * If true, other symbols can be visible even if they collide with the icon.
   *
   * @requires iconImage
   */
  iconIgnorePlacement: Value<boolean, ["zoom"]>;

  /**
   * If true, text will display without their corresponding icons when the icon collides with other symbols and the text does not.
   *
   * @requires iconImage, textField
   */
  iconOptional: Value<boolean, ["zoom"]>;

  /**
   * In combination with `symbolPlacement`, determines the rotation behavior of icons.
   *
   * @requires iconImage
   */
  iconRotationAlignment: Value<
    Enum<IconRotationAlignmentEnum, IconRotationAlignmentEnumValues>,
    ["zoom"]
  >;

  /**
   * Scales the original size of the icon by the provided factor. The new pixel size of the image will be the original pixel size multiplied by `iconSize`. 1 is the original size; 3 triples the size of the image.
   *
   * @requires iconImage
   */
  iconSize: Value<number, ["zoom", "feature"]>;

  /**
   * Scales the icon to fit around the associated text.
   *
   * @requires iconImage, textField
   */
  iconTextFit: Value<Enum<IconTextFitEnum, IconTextFitEnumValues>, ["zoom"]>;

  /**
   * Size of the additional area added to dimensions determined by `iconTextFit`, in clockwise order: top, right, bottom, left.
   *
   * @requires iconImage, textField
   */
  iconTextFitPadding: Value<number[], ["zoom"]>;

  /**
   * Name of image in sprite to use for drawing an image background.
   */
  iconImage: Value<ResolvedImageType, ["zoom", "feature"]>;

  /**
   * Rotates the icon clockwise.
   *
   * @requires iconImage
   */
  iconRotate: Value<number, ["zoom", "feature"]>;

  /**
   * Size of additional area round the icon bounding box used for detecting symbol collisions. Values are declared using CSS margin shorthand syntax: a single value applies to all four sides; two values apply to [top/bottom, left/right]; three values apply to [top, left/right, bottom]; four values apply to [top, right, bottom, left]. For backwards compatibility, a single bare number is accepted, and treated the same as a oneElement array  padding applied to all sides.
   *
   * @requires iconImage
   */
  iconPadding: Value<number, ["zoom", "feature"]>;

  /**
   * If true, the icon may be flipped to prevent it from being rendered upsideDown.
   *
   * @requires iconImage
   */
  iconKeepUpright: Value<boolean, ["zoom"]>;

  /**
   * Offset distance of icon from its anchor. Positive values indicate right and down, while negative values indicate left and up. Each component is multiplied by the value of `iconSize` to obtain the final offset in pixels. When combined with `iconRotate` the offset will be as if the rotated direction was up.
   *
   * @requires iconImage
   */
  iconOffset: Value<number[], ["zoom", "feature"]>;

  /**
   * Part of the icon placed closest to the anchor.
   *
   * @requires iconImage
   */
  iconAnchor: Value<
    Enum<IconAnchorEnum, IconAnchorEnumValues>,
    ["zoom", "feature"]
  >;

  /**
   * Orientation of icon when map is pitched.
   *
   * @requires iconImage
   */
  iconPitchAlignment: Value<
    Enum<IconPitchAlignmentEnum, IconPitchAlignmentEnumValues>,
    ["zoom"]
  >;

  /**
   * Orientation of text when map is pitched.
   *
   * @requires textField
   */
  textPitchAlignment: Value<
    Enum<TextPitchAlignmentEnum, TextPitchAlignmentEnumValues>,
    ["zoom"]
  >;

  /**
   * In combination with `symbolPlacement`, determines the rotation behavior of the individual glyphs forming the text.
   *
   * @requires textField
   */
  textRotationAlignment: Value<
    Enum<TextRotationAlignmentEnum, TextRotationAlignmentEnumValues>,
    ["zoom"]
  >;

  /**
   * Value to use for a text label. If a plain `string` is provided, it will be treated as a `formatted` with default/inherited formatting options.
   */
  textField: Value<FormattedString, ["zoom", "feature"]>;

  /**
   * Font stack to use for displaying text.
   *
   * @requires textField
   */
  textFont: Value<string[], ["zoom", "feature"]>;

  /**
   * Font size.
   *
   * @requires textField
   */
  textSize: Value<number, ["zoom", "feature"]>;

  /**
   * The maximum line width for text wrapping.
   *
   * @requires textField
   */
  textMaxWidth: Value<number, ["zoom", "feature"]>;

  /**
   * Text leading value for multiLine text.
   *
   * @requires textField
   */
  textLineHeight: Value<number, ["zoom"]>;

  /**
   * Text tracking amount.
   *
   * @requires textField
   */
  textLetterSpacing: Value<number, ["zoom", "feature"]>;

  /**
   * Text justification options.
   *
   * @requires textField
   */
  textJustify: Value<
    Enum<TextJustifyEnum, TextJustifyEnumValues>,
    ["zoom", "feature"]
  >;

  /**
   * Radial offset of text, in the direction of the symbol's anchor. Useful in combination with `textVariableAnchor`, which defaults to using the twoDimensional `textOffset` if present.
   *
   * @requires textField
   */
  textRadialOffset: Value<number, ["zoom", "feature"]>;

  /**
   * To increase the chance of placing highPriority labels on the map, you can provide an array of `textAnchor` locations: the renderer will attempt to place the label at each location, in order, before moving onto the next label. Use `textJustify: auto` to choose justification based on anchor position. To apply an offset, use the `textRadialOffset` or the twoDimensional `textOffset`.
   *
   * @requires textField
   */
  textVariableAnchor: Value<
    Enum<TextVariableAnchorEnum, TextVariableAnchorEnumValues>[],
    ["zoom"]
  >;

  /**
   * Part of the text placed closest to the anchor.
   *
   * @requires textField
   *
   * @disabledBy textVariableAnchor
   */
  textAnchor: Value<
    Enum<TextAnchorEnum, TextAnchorEnumValues>,
    ["zoom", "feature"]
  >;

  /**
   * Maximum angle change between adjacent characters.
   *
   * @requires textField
   */
  textMaxAngle: Value<number, ["zoom"]>;

  /**
   * The property allows control over a symbol's orientation. Note that the property values act as a hint, so that a symbol whose language doesn’t support the provided orientation will be laid out in its natural orientation. Example: English point symbol will be rendered horizontally even if array value contains single 'vertical' enum value. The order of elements in an array define priority order for the placement of an orientation variant.
   *
   * @requires textField
   */
  textWritingMode: Value<
    Enum<TextWritingModeEnum, TextWritingModeEnumValues>[],
    ["zoom"]
  >;

  /**
   * Rotates the text clockwise.
   *
   * @requires textField
   */
  textRotate: Value<number, ["zoom", "feature"]>;

  /**
   * Size of the additional area around the text bounding box used for detecting symbol collisions.
   *
   * @requires textField
   */
  textPadding: Value<number, ["zoom"]>;

  /**
   * If true, the text may be flipped vertically to prevent it from being rendered upsideDown.
   *
   * @requires textField
   */
  textKeepUpright: Value<boolean, ["zoom"]>;

  /**
   * Specifies how to capitalize text, similar to the CSS `textTransform` property.
   *
   * @requires textField
   */
  textTransform: Value<
    Enum<TextTransformEnum, TextTransformEnumValues>,
    ["zoom", "feature"]
  >;

  /**
   * Offset distance of text from its anchor. Positive values indicate right and down, while negative values indicate left and up. If used with textVariableAnchor, input values will be taken as absolute values. Offsets along the x and yAxis will be applied automatically based on the anchor position.
   *
   * @requires textField
   *
   * @disabledBy textRadialOffset
   */
  textOffset: Value<number[], ["zoom", "feature"]>;

  /**
   * If true, the text will be visible even if it collides with other previously drawn symbols.
   *
   * @requires textField
   *
   * @disabledBy textOverlap
   */
  textAllowOverlap: Value<boolean, ["zoom"]>;

  /**
   * If true, other symbols can be visible even if they collide with the text.
   *
   * @requires textField
   */
  textIgnorePlacement: Value<boolean, ["zoom"]>;

  /**
   * If true, icons will display without their corresponding text when the text collides with other symbols and the icon does not.
   *
   * @requires textField, iconImage
   */
  textOptional: Value<boolean, ["zoom"]>;

  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * The opacity at which the icon will be drawn.
   *
   * @requires iconImage
   */
  iconOpacity: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconOpacity property.
   */
  iconOpacityTransition: TransitionProps;

  /**
   * The color of the icon. This can only be used with sdf icons.
   *
   * @requires iconImage
   */
  iconColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconColor property.
   */
  iconColorTransition: TransitionProps;

  /**
   * The color of the icon's halo. Icon halos can only be used with SDF icons.
   *
   * @requires iconImage
   */
  iconHaloColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconHaloColor property.
   */
  iconHaloColorTransition: TransitionProps;

  /**
   * Distance of halo to the icon outline.
   *
   * @requires iconImage
   */
  iconHaloWidth: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconHaloWidth property.
   */
  iconHaloWidthTransition: TransitionProps;

  /**
   * Fade out the halo towards the outside.
   *
   * @requires iconImage
   */
  iconHaloBlur: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s iconHaloBlur property.
   */
  iconHaloBlurTransition: TransitionProps;

  /**
   * Distance that the icon's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
   *
   * @requires iconImage
   */
  iconTranslate: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s iconTranslate property.
   */
  iconTranslateTransition: TransitionProps;

  /**
   * Controls the frame of reference for `iconTranslate`.
   *
   * @requires iconImage, iconTranslate
   */
  iconTranslateAnchor: Value<Translation, ["zoom"]>;

  /**
   * The opacity at which the text will be drawn.
   *
   * @requires textField
   */
  textOpacity: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textOpacity property.
   */
  textOpacityTransition: TransitionProps;

  /**
   * The color with which the text will be drawn.
   *
   * @requires textField
   */
  textColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textColor property.
   */
  textColorTransition: TransitionProps;

  /**
   * The color of the text's halo, which helps it stand out from backgrounds.
   *
   * @requires textField
   */
  textHaloColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textHaloColor property.
   */
  textHaloColorTransition: TransitionProps;

  /**
   * Distance of halo to the font outline. Max text halo width is 1/4 of the fontSize.
   *
   * @requires textField
   */
  textHaloWidth: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textHaloWidth property.
   */
  textHaloWidthTransition: TransitionProps;

  /**
   * The halo's fadeout distance towards the outside.
   *
   * @requires textField
   */
  textHaloBlur: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s textHaloBlur property.
   */
  textHaloBlurTransition: TransitionProps;

  /**
   * Distance that the text's anchor is moved from its original placement. Positive values indicate right and down, while negative values indicate left and up.
   *
   * @requires textField
   */
  textTranslate: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s textTranslate property.
   */
  textTranslateTransition: TransitionProps;

  /**
   * Controls the frame of reference for `textTranslate`.
   *
   * @requires textField, textTranslate
   */
  textTranslateAnchor: Value<Translation, ["zoom"]>;
}

export interface circleLayerStyleProps {
  /**
   * Sorts features in ascending order based on this value. Features with a higher sort key will appear above features with a lower sort key.
   */
  circleSortKey: Value<number, ["zoom", "feature"]>;

  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * Circle radius.
   */
  circleRadius: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleRadius property.
   */
  circleRadiusTransition: TransitionProps;

  /**
   * The fill color of the circle.
   */
  circleColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleColor property.
   */
  circleColorTransition: TransitionProps;

  /**
   * Amount to blur the circle. 1 blurs the circle such that only the centerpoint is full opacity.
   */
  circleBlur: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleBlur property.
   */
  circleBlurTransition: TransitionProps;

  /**
   * The opacity at which the circle will be drawn.
   */
  circleOpacity: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleOpacity property.
   */
  circleOpacityTransition: TransitionProps;

  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up, respectively.
   */
  circleTranslate: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s circleTranslate property.
   */
  circleTranslateTransition: TransitionProps;

  /**
   * Controls the frame of reference for `circleTranslate`.
   *
   * @requires circleTranslate
   */
  circleTranslateAnchor: Value<Translation, ["zoom"]>;

  /**
   * Controls the scaling behavior of the circle when the map is pitched.
   */
  circlePitchScale: Value<
    Enum<CirclePitchScaleEnum, CirclePitchScaleEnumValues>,
    ["zoom"]
  >;

  /**
   * Orientation of circle when map is pitched.
   */
  circlePitchAlignment: Value<
    Enum<CirclePitchAlignmentEnum, CirclePitchAlignmentEnumValues>,
    ["zoom"]
  >;

  /**
   * The width of the circle's stroke. Strokes are placed outside of the `circleRadius`.
   */
  circleStrokeWidth: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleStrokeWidth property.
   */
  circleStrokeWidthTransition: TransitionProps;

  /**
   * The stroke color of the circle.
   */
  circleStrokeColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleStrokeColor property.
   */
  circleStrokeColorTransition: TransitionProps;

  /**
   * The opacity of the circle's stroke.
   */
  circleStrokeOpacity: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s circleStrokeOpacity property.
   */
  circleStrokeOpacityTransition: TransitionProps;
}

export interface heatmapLayerStyleProps {
  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * Radius of influence of one heatmap point in pixels. Increasing the value makes the heatmap smoother, but less detailed.
   */
  heatmapRadius: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s heatmapRadius property.
   */
  heatmapRadiusTransition: TransitionProps;

  /**
   * A measure of how much an individual point contributes to the heatmap. A value of 10 would be equivalent to having 10 points of weight 1 in the same spot. Especially useful when combined with clustering.
   */
  heatmapWeight: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * Similar to `heatmapWeight` but controls the intensity of the heatmap globally. Primarily used for adjusting the heatmap based on zoom level.
   */
  heatmapIntensity: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s heatmapIntensity property.
   */
  heatmapIntensityTransition: TransitionProps;

  /**
   * Defines the color of each pixel based on its density value in a heatmap.  Should be an expression that uses `["heatmapDensity"]` as input.
   */
  heatmapColor: Value<string, ["heatmap-density"]>;

  /**
   * The global opacity at which the heatmap layer will be drawn.
   */
  heatmapOpacity: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s heatmapOpacity property.
   */
  heatmapOpacityTransition: TransitionProps;
}

export interface fillExtrusionLayerStyleProps {
  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * The opacity of the entire fill extrusion layer. This is rendered on a perLayer, not perFeature, basis, and dataDriven styling is not available.
   */
  fillExtrusionOpacity: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s fillExtrusionOpacity property.
   */
  fillExtrusionOpacityTransition: TransitionProps;

  /**
   * The base color of the extruded fill. The extrusion's surfaces will be shaded differently based on this color in combination with the root `light` settings. If this color is specified as `rgba` with an alpha component, the alpha component will be ignored; use `fillExtrusionOpacity` to set layer opacity.
   *
   * @disabledBy fillExtrusionPattern
   */
  fillExtrusionColor: Value<string, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillExtrusionColor property.
   */
  fillExtrusionColorTransition: TransitionProps;

  /**
   * The geometry's offset. Values are [x, y] where negatives indicate left and up (on the flat plane), respectively.
   */
  fillExtrusionTranslate: Value<Translation, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s fillExtrusionTranslate property.
   */
  fillExtrusionTranslateTransition: TransitionProps;

  /**
   * Controls the frame of reference for `fillExtrusionTranslate`.
   *
   * @requires fillExtrusionTranslate
   */
  fillExtrusionTranslateAnchor: Value<Translation, ["zoom"]>;

  /**
   * Name of image in sprite to use for drawing images on extruded fills. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.
   */
  fillExtrusionPattern: Value<ResolvedImageType, ["zoom", "feature"]>;

  /**
   * The transition affecting any changes to this layer’s fillExtrusionPattern property.
   */
  fillExtrusionPatternTransition: TransitionProps;

  /**
   * The height with which to extrude this layer.
   */
  fillExtrusionHeight: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillExtrusionHeight property.
   */
  fillExtrusionHeightTransition: TransitionProps;

  /**
   * The height with which to extrude the base of this layer. Must be less than or equal to `fillExtrusionHeight`.
   *
   * @requires fillExtrusionHeight
   */
  fillExtrusionBase: Value<number, ["zoom", "feature", "feature-state"]>;

  /**
   * The transition affecting any changes to this layer’s fillExtrusionBase property.
   */
  fillExtrusionBaseTransition: TransitionProps;
}

export interface rasterLayerStyleProps {
  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * The opacity at which the image will be drawn.
   */
  rasterOpacity: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterOpacity property.
   */
  rasterOpacityTransition: TransitionProps;

  /**
   * Rotates hues around the color wheel.
   */
  rasterHueRotate: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterHueRotate property.
   */
  rasterHueRotateTransition: TransitionProps;

  /**
   * Increase or reduce the brightness of the image. The value is the minimum brightness.
   */
  rasterBrightnessMin: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterBrightnessMin property.
   */
  rasterBrightnessMinTransition: TransitionProps;

  /**
   * Increase or reduce the brightness of the image. The value is the maximum brightness.
   */
  rasterBrightnessMax: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterBrightnessMax property.
   */
  rasterBrightnessMaxTransition: TransitionProps;

  /**
   * Increase or reduce the saturation of the image.
   */
  rasterSaturation: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterSaturation property.
   */
  rasterSaturationTransition: TransitionProps;

  /**
   * Increase or reduce the contrast of the image.
   */
  rasterContrast: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s rasterContrast property.
   */
  rasterContrastTransition: TransitionProps;

  /**
   * The resampling/interpolation method to use for overscaling, also known as texture magnification filter
   */
  rasterResampling: Value<
    Enum<RasterResamplingEnum, RasterResamplingEnumValues>,
    ["zoom"]
  >;

  /**
   * Fade duration when a new tile is added.
   */
  rasterFadeDuration: Value<number, ["zoom"]>;
}

export interface hillshadeLayerStyleProps {
  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * The direction of the light source used to generate the hillshading with 0 as the top of the viewport if `hillshadeIlluminationAnchor` is set to `viewport` and due north if `hillshadeIlluminationAnchor` is set to `map`.
   */
  hillshadeIlluminationDirection: Value<number, ["zoom"]>;

  /**
   * Direction of light source when map is rotated.
   */
  hillshadeIlluminationAnchor: Value<
    Enum<
      HillshadeIlluminationAnchorEnum,
      HillshadeIlluminationAnchorEnumValues
    >,
    ["zoom"]
  >;

  /**
   * Intensity of the hillshade
   */
  hillshadeExaggeration: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s hillshadeExaggeration property.
   */
  hillshadeExaggerationTransition: TransitionProps;

  /**
   * The shading color of areas that face away from the light source.
   */
  hillshadeShadowColor: Value<string, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s hillshadeShadowColor property.
   */
  hillshadeShadowColorTransition: TransitionProps;

  /**
   * The shading color of areas that faces towards the light source.
   */
  hillshadeHighlightColor: Value<string, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s hillshadeHighlightColor property.
   */
  hillshadeHighlightColorTransition: TransitionProps;

  /**
   * The shading color used to accentuate rugged terrain like sharp cliffs and gorges.
   */
  hillshadeAccentColor: Value<string, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s hillshadeAccentColor property.
   */
  hillshadeAccentColorTransition: TransitionProps;
}

export interface backgroundLayerStyleProps {
  /**
   * Whether this layer is displayed.
   */
  visibility: Enum<VisibilityEnum, VisibilityEnumValues>;

  /**
   * The color with which the background will be drawn.
   *
   * @disabledBy backgroundPattern
   */
  backgroundColor: Value<string, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s backgroundColor property.
   */
  backgroundColorTransition: TransitionProps;

  /**
   * Name of image in sprite to use for drawing an image background. For seamless patterns, image width and height must be a factor of two (2, 4, 8, ..., 512). Note that zoomDependent expressions will be evaluated only at integer zoom levels.
   */
  backgroundPattern: Value<ResolvedImageType, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s backgroundPattern property.
   */
  backgroundPatternTransition: TransitionProps;

  /**
   * The opacity at which the background will be drawn.
   */
  backgroundOpacity: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s backgroundOpacity property.
   */
  backgroundOpacityTransition: TransitionProps;
}

export interface lightLayerStyleProps {
  /**
   * Whether extruded geometries are lit relative to the map or viewport.
   */
  anchor: Value<Enum<AnchorEnum, AnchorEnumValues>, ["zoom"]>;

  /**
   * Position of the light source relative to lit (extruded) geometries, in [r radial coordinate, a azimuthal angle, p polar angle] where r indicates the distance from the center of the base of an object to its light, a indicates the position of the light relative to 0° (0° when `light.anchor` is set to `viewport` corresponds to the top of the viewport, or 0° when `light.anchor` is set to `map` corresponds to due north, and degrees proceed clockwise), and p indicates the height of the light (from 0°, directly above, to 180°, directly below).
   */
  position: Value<number[], ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s position property.
   */
  positionTransition: TransitionProps;

  /**
   * Color tint for lighting extruded geometries.
   */
  color: Value<string, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s color property.
   */
  colorTransition: TransitionProps;

  /**
   * Intensity of lighting (on a scale from 0 to 1). Higher numbers will present as more extreme contrast.
   */
  intensity: Value<number, ["zoom"]>;

  /**
   * The transition affecting any changes to this layer’s intensity property.
   */
  intensityTransition: TransitionProps;
}
