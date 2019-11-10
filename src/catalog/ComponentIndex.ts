import ResthopperComponent from '../models/ResthopperComponent';
import Surface from './components/Surface/SurfaceComponentIndex';
import Maths from './components/Maths/MathsComponentIndex';
import Vector from './components/Vector/VectorComponentIndex';
import Display from './components/Display/DisplayComponentIndex';
import Mesh from './components/Mesh/MeshComponentIndex';
import Curve from './components/Curve/CurveComponentIndex';
import Transform from './components/Transform/TransformComponentIndex';
import Intersect from './components/Intersect/IntersectComponentIndex';
import Sets from './components/Sets/SetsComponentIndex';

export default class ComponentIndex {

	private static names: string[] = [
		"FourPointSurface",
		"Absolute",
		"Addition",
		"Addition",
		"AdjustPlane",
		"AlignedDimension",
		"AlignPlane",
		"AlignPlanes",
		"AlignVertices",
		"Amplitude",
		"Angle",
		"AngularDimension",
		"AngularDimensionsMesh",
		"Arc",
		"ArcThreePt",
		"ArcCosine",
		"ArcDimension",
		"ArcSED",
		"ArcSine",
		"ArcTangent",
		"Area",
		"AreaMoments",
		"Average",
		"BarGraph",
		"Barycentric",
		"BendDeform",
		"BezierSpan",
		"BiArc",
		"BlendBox",
		"BlendColours",
		"BlendCurve",
		"BlendCurvePt",
		"BlurMesh",
		"BlurNumbers",
		"BoundarySurfaces",
		"BoundaryVolume",
		"BoundingBox",
		"Bounds",
		"BoundsTwoD",
		"BoxTwoPt",
		"BoxArray",
		"BoxCorners",
		"BoxMapping",
		"BoxMorph",
		"BoxProperties",
		"BoxRectangle",
		"BoxSlits",
		"BreakField",
		"BrepBrep",
		"BrepClosestPoint",
		"BrepCurve",
		"BrepEdges",
		"BrepJoin",
		"BrepLine",
		"BrepPlane",
		"BrepTopology",
		"BrepWireframe",
		"CameraObscura",
		"CapHoles",
		"CapHolesEx",
		"CarthesianProduct",
		"Catenary",
		"CatenaryEx",
		"CenterBox",
		"Centroid",
		"Characters",
		"CharSequence",
		"Circle",
		"CircleThreePt",
		"CircleCNR",
		"CircleFit",
		"CircleTanTan",
		"CircleTanTanTan",
		"CircularDimension",
		"Circumcentre",
		"Clash",
		"CleanTree",
		"CleanTree",
		"Closed",
		"ClosedEdges",
		"ClosestPoint",
		"ClosestPoints",
		"CloudDisplay",
		"CollisionManyMany",
		"CollisionOneMany",
		"ColourCMYK",
		"ColourHSL",
		"ColourHSV",
		"ColourLab",
		"ColourLCH",
		"ColourRGB",
		"ColourRGBf",
		"ColourXYZ",
		"CombineData",
		"CombineDateTime",
		"ComplexArgument",
		"ComplexComponents",
		"ComplexConjugate",
		"ComplexModulus",
		"Compound",
		"Concatenate",
		"Cone",
		"ConnectCurves",
		"ConsecutiveDomains",
		"ConstructDate",
		"ConstructDomain",
		"ConstructDomain",
		"ConstructDomain",
		"ConstructExoticDate",
		"ConstructMatrix",
		"ConstructMesh",
		"ConstructPath",
		"ConstructPlane",
		"ConstructPoint",
		"ConstructSmoothTime",
		"ConstructTime",
		"Contour",
		"Contour",
		"Contourex",
		"Contourex",
		"ControlPointLoft",
		"ControlPoints",
		"ControlPolygon",
		"ConvexEdges",
		"ConvexHull",
		"CoordinateMask",
		"CopyTrim",
		"CoSecant",
		"Cosine",
		"CoTangent",
		"CreateComplex",
		"CreateMaterial",
		"CreateSet",
		"CrossProduct",
		"CrossReference",
		"CScript",
		"Cube",
		"CubeRoot",
		"CullDuplicates",
		"CullFaces",
		"CullIndex",
		"CullNth",
		"CullPattern",
		"CullVertices",
		"Curvature",
		"CurvatureGraph",
		"CurveArray",
		"CurveClosestPoint",
		"CurveCurve",
		"CurveDepth",
		"CurveDomain",
		"CurveFrame",
		"CurveFrames",
		"CurveLine",
		"CurveMiddle",
		"CurveNearestObject",
		"CurveOnSurface",
		"CurvePlane",
		"CurveProximity",
		"CurveSelf",
		"CurveSide",
		"CurveToPolyline",
		"CustomPreview",
		"Cylinder",
		"DashPattern",
		"DateRange",
		"Deconstruct",
		"DeconstructArc",
		"DeconstructBox",
		"DeconstructBrep",
		"DeconstructDate",
		"DeconstructDomain",
		"DeconstructDomain",
		"DeconstructDomain",
		"DeconstructFace",
		"DeconstructMatrix",
		"DeconstructMesh",
		"DeconstructPath",
		"DeconstructPlane",
		"DeconstructVector",
		"DeconstuctRectangle",
		"Degrees",
		"DelaunayEdges",
		"DelaunayMesh",
		"DeleteConsecutive",
		"DeleteFaces",
		"DeleteVertices",
		"Derivatives",
		"Dimensions",
		"DirectionDisplay",
		"Discontinuity",
		"Disjoint",
		"DisjointMesh",
		"Dispatch",
		"DisplayMatrix",
		"Distance",
		"Divide",
		"DivideByDeviation",
		"DivideCurve",
		"DivideDistance",
		"DivideDomain",
		"DivideDomain",
		"DivideLength",
		"DivideSurface",
		"Division",
		"DomainBox",
		"DotDisplay",
		"DotNETCScriptLEGACY",
		"DotNETVBScriptLEGACY",
		"DotProduct",
		"DuplicateData",
		"EdgesfromDirections",
		"EdgesfromFaces",
		"EdgesfromLength",
		"EdgesfromLinearity",
		"EdgesfromPoints",
		"EdgeSurface",
		"Ellipse",
		"EndPoints",
		"Entwine",
		"Epsilon",
		"Equality",
		"Evaluate",
		"EvaluateBox",
		"EvaluateCurve",
		"EvaluateField",
		"EvaluateLength",
		"EvaluateSurface",
		"Explode",
		"ExplodeTree",
		"Exposure",
		"Expression",
		"ExtendCurve",
		"Extremes",
		"Extremes",
		"Extrude",
		"ExtrudeAlong",
		"ExtrudeAngled",
		"ExtrudeLinear",
		"ExtrudePoint",
		"FaceBoundaries",
		"FaceCircles",
		"FaceNormals",
		"FacetDome",
		"Factorial",
		"Fibonacci",
		"FieldLine",
		"Fillet",
		"Fillet",
		"FilletDistance",
		"FilletEdge",
		"FindDomain",
		"Findsimilarmember",
		"FitCurve",
		"FitLine",
		"FitLoft",
		"FlattenTree",
		"Flip",
		"FlipCurve",
		"FlipMatrix",
		"FlipMesh",
		"FlipPlane",
		"Flow",
		"Format",
		"FragmentPatch",
		"GateAnd",
		"GateMajority",
		"GateNand",
		"GateNor",
		"GateNot",
		"GateOr",
		"GateXnor",
		"GateXor",
		"Geodesic",
		"GhPythonScript",
		"GoldenRatio",
		"GraftTree",
		"Group",
		"Hexagonal",
		"HorizontalFrame",
		"HorizontalFrames",
		"ImageGallery",
		"Incentre",
		"InCircle",
		"Includes",
		"InEllipse",
		"InsertItems",
		"IntegerDivision",
		"Interpolate",
		"Interpolatedata",
		"InterpolateDate",
		"Interpolatet",
		"InverseTransform",
		"InvertMatrix",
		"IsoCurve",
		"Isotrim",
		"IsoVist",
		"IsoVistRay",
		"IsPlanar",
		"ItemIndex",
		"Jitter",
		"JoinCurves",
		"Kaleidoscope",
		"KeyValueSearch",
		"KinkyCurve",
		"KnotVector",
		"LargerThan",
		"Legend",
		"Length",
		"LengthDomain",
		"LengthParameter",
		"Line",
		"LineTwoPlane",
		"LineFourPt",
		"LinearArray",
		"LinearDimension",
		"LineCharge",
		"LineDimension",
		"LineLine",
		"LineLine",
		"LinePlane",
		"LinePt",
		"LineSDL",
		"ListItem",
		"ListLength",
		"Loft",
		"LoftOptions",
		"LoftOptions",
		"Logarithm",
		"LogN",
		"LongestList",
		"Maelstrom",
		"MakeTwoD",
		"MakeTwoDParallelView",
		"MakeTwoDPerspectiveView",
		"MakeTwoDRhinoView",
		"MaptoSurface",
		"MarkerDimension",
		"MassAddition",
		"MassMultiplication",
		"MatchCurve",
		"MatchText",
		"MatchTree",
		"Maximum",
		"MemberIndex",
		"Merge",
		"Merge",
		"MergeZeroThree",
		"MergeZeroFour",
		"MergeZeroFive",
		"MergeZeroSix",
		"MergeZeroEight",
		"MergeOneZero",
		"MergeFaces",
		"MergeFields",
		"MergeGroup",
		"MergeMultiple",
		"MeshBox",
		"MeshBrep",
		"MeshClosestPoint",
		"MeshColours",
		"MeshCurve",
		"MeshDepth",
		"MeshDifference",
		"MeshEdges",
		"MeshEval",
		"MeshfromSubD",
		"MeshInclusion",
		"MeshIntersection",
		"MeshJoin",
		"MeshMesh",
		"MeshPlane",
		"MeshPlane",
		"MeshQuad",
		"MeshRay",
		"MeshShadow",
		"MeshSphere",
		"MeshSphereEx",
		"MeshSplit",
		"MeshSplitPlane",
		"MeshSpray",
		"MeshSurface",
		"MeshTriangle",
		"MeshUnion",
		"MetaBall",
		"MetaBallt",
		"MetaBalltCustom",
		"Minimum",
		"Mirror",
		"MirrorCurve",
		"MirrorSurface",
		"ModifiedArc",
		"Modulus",
		"Move",
		"MoveAwayFrom",
		"MoveToPlane",
		"MultipleCurves",
		"Multiplication",
		"Multiply",
		"Naturallogarithm",
		"Naturallogarithm",
		"Negative",
		"NetworkSurface",
		"NullItem",
		"NumberstoPoints",
		"NurbsCurve",
		"NurbsCurvePWK",
		"Occlusion",
		"OcTree",
		"OffsetCurve",
		"OffsetCurveLoose",
		"OffsetLooseThreeD",
		"OffsetonSrf",
		"OffsetPolyline",
		"OffsetSurface",
		"OffsetSurfaceLoose",
		"OneOverX",
		"Orient",
		"OrientDirection",
		"Orthocentre",
		"OsculatingCircles",
		"PartitionList",
		"Patch",
		"PathCompare",
		"PathMapper",
		"PerpendicularDisplay",
		"PerpFrame",
		"PerpFrames",
		"Pi",
		"PicknChoose",
		"PieChart",
		"Pipe",
		"PipeVariable",
		"Planar",
		"PlaneThreePt",
		"PlaneClosestPoint",
		"PlaneCoordinates",
		"PlaneFit",
		"PlaneNormal",
		"PlaneOffset",
		"PlaneOrigin",
		"PlanePlane",
		"PlanePlanePlane",
		"PlaneRegion",
		"PlaneSurface",
		"PlaneThroughShape",
		"PointCharge",
		"PointCylindrical",
		"PointDeform",
		"PointGroups",
		"PointInBrep",
		"PointInBreps",
		"PointInCurve",
		"PointinCurves",
		"PointInTrim",
		"PointList",
		"PointList",
		"PointOnCurve",
		"PointOrder",
		"PointOriented",
		"PointPolar",
		"PointstoNumbers",
		"PolarArray",
		"PolyArc",
		"Polygon",
		"PolygonCenter",
		"PolygonEdge",
		"PolyLine",
		"PolylineCollapse",
		"PopulateTwoD",
		"PopulateThreeD",
		"PopulateGeometry",
		"Power",
		"PowerofOneZero",
		"PowerofTwo",
		"PowerofE",
		"PrincipalCurvature",
		"Project",
		"Project",
		"ProjectAlong",
		"ProjectPoint",
		"ProximityTwoD",
		"ProximityThreeD",
		"PruneTree",
		"PullCurve",
		"PullPoint",
		"Quadrangulate",
		"QuadSphere",
		"QuadTree",
		"QuickGraph",
		"Radial",
		"Radians",
		"RailRevolution",
		"Random",
		"RandomEx",
		"RandomReduce",
		"Range",
		"RebuildCurve",
		"Rectangle",
		"RectangleTwoPt",
		"RectangleThreePt",
		"RectangleMapping",
		"Rectangular",
		"RectangularArray",
		"Reduce",
		"RegionDifference",
		"RegionIntersection",
		"RegionSlits",
		"RegionUnion",
		"RelativeDifferences",
		"RelativeItem",
		"RelativeItems",
		"RemapNumbers",
		"RepeatData",
		"ReplaceItems",
		"ReplaceMembers",
		"ReplaceNulls",
		"ReplacePaths",
		"ReplaceText",
		"Retrim",
		"Reverse",
		"ReverseList",
		"Revolution",
		"RightTrigonometry",
		"Rotate",
		"Rotate",
		"RotateThreeD",
		"RotateAxis",
		"RotateDirection",
		"RotatePlane",
		"Round",
		"RuledSurface",
		"SanityXForm",
		"ScalarDisplay",
		"Scale",
		"ScaleNU",
		"Seam",
		"Secant",
		"SegmentLengths",
		"Sequence",
		"SerialDimension",
		"Series",
		"SeriesAddition",
		"SetDifference",
		"SetDifferenceS",
		"SetIntersection",
		"SetMajority",
		"SettingsCustom",
		"SettingsQuality",
		"SettingsSpeed",
		"SetUnion",
		"ShapeInBrep",
		"Shatter",
		"Shear",
		"ShearAngle",
		"ShiftList",
		"ShiftPaths",
		"ShortestList",
		"SiftPattern",
		"Similarity",
		"SimpleMesh",
		"SimplifyCurve",
		"SimplifyTree",
		"Sinc",
		"Sine",
		"SmallerThan",
		"SmoothMesh",
		"SmoothNumbers",
		"SmoothPolyline",
		"SolarIncidence",
		"SolidDifference",
		"SolidIntersection",
		"SolidUnion",
		"SortAlongCurve",
		"SortList",
		"SortPoints",
		"SortText",
		"SpatialDeform",
		"SpatialDeformcustom",
		"Sphere",
		"SphereFourPt",
		"SphereFit",
		"SpinForce",
		"Split",
		"SplitAHSL",
		"SplitAHSV",
		"SplitARGB",
		"SplitBrep",
		"SplitBrepMultiple",
		"SplitGroup",
		"SplitList",
		"SplitTree",
		"SplitwithBrep",
		"SplitwithBreps",
		"Splop",
		"Sporph",
		"Square",
		"Square",
		"SquareRoot",
		"StackData",
		"StreamFilter",
		"StreamGate",
		"Stretch",
		"SubCurve",
		"SubDBox",
		"SubDControlPolygon",
		"SubDEdges",
		"SubDFaces",
		"SubDfromMesh",
		"SubDVertices",
		"SubList",
		"SubSet",
		"Substrate",
		"Subtraction",
		"SumSurface",
		"SurfaceBox",
		"SurfaceClosestPoint",
		"SurfaceCurvature",
		"SurfaceCurve",
		"SurfaceFrames",
		"SurfaceFromPoints",
		"SurfaceInflection",
		"SurfaceLine",
		"SurfaceMorph",
		"SurfacePoints",
		"SurfaceSplit",
		"SwapColumns",
		"SwapRows",
		"SweepOne",
		"SweepTwo",
		"SwingArc",
		"SymbolAdvanced",
		"SymbolDisplay",
		"SymbolSimple",
		"Tangent",
		"TangentArcs",
		"TangentCurve",
		"TangentLines",
		"TangentLinesEx",
		"TangentLinesIn",
		"Taper",
		"TensorDisplay",
		"TestCrash",
		"TextCase",
		"TextDistance",
		"TextFragment",
		"TextJoin",
		"TextLength",
		"TextSplit",
		"TextTag",
		"TextTagThreeD",
		"TextTrim",
		"ToPolar",
		"Torsion",
		"Transform",
		"TransformMatrix",
		"TransposeMatrix",
		"TreeBranch",
		"TreeItem",
		"TreeStatistics",
		"TriangleMapping",
		"TriangleTrigonometry",
		"Triangular",
		"Triangulate",
		"TrimSolid",
		"TrimTree",
		"TrimwithBrep",
		"TrimwithBreps",
		"TrimwithRegion",
		"TrimwithRegions",
		"Truncate",
		"TweenCurve",
		"Twist",
		"TwistedBox",
		"TwoByFourJam",
		"UnflattenTree",
		"Ungroup",
		"UnifyMesh",
		"UnitVector",
		"UnitX",
		"UnitY",
		"UnitZ",
		"Untrim",
		"UnweldMesh",
		"ValueTracker",
		"Variable",
		"VBScript",
		"VectorTwoPt",
		"VectorDisplay",
		"VectorDisplayEx",
		"VectorForce",
		"VectorLength",
		"VectorXYZ",
		"ViewportDisplay",
		"Volume",
		"VolumeMoments",
		"Voronoi",
		"VoronoiThreeD",
		"VoronoiCell",
		"VoronoiGroups",
		"Weave",
		"WeightedAverage",
		"WeldMesh",
		"XYPlane",
		"XZPlane",
		"YZPlane"
	];

	public static createComponent(name: GrasshopperComponent): ResthopperComponent {
		switch(name) {
			case "FourPointSurface":
				return new Surface.Freeform.FourPointSurface();
			case "Absolute":
				return new Maths.Operators.Absolute();
			case "Addition":
				return new Maths.Operators.Addition();
			case "Addition":
				return new Vector.Vector.Addition();
			case "AdjustPlane":
				return new Vector.Plane.AdjustPlane();
			case "AlignedDimension":
				return new Display.Dimensions.AlignedDimension();
			case "AlignPlane":
				return new Vector.Plane.AlignPlane();
			case "AlignPlanes":
				return new Vector.Plane.AlignPlanes();
			case "AlignVertices":
				return new Mesh.Util.AlignVertices();
			case "Amplitude":
				return new Vector.Vector.Amplitude();
			case "Angle":
				return new Vector.Vector.Angle();
			case "AngularDimension":
				return new Display.Dimensions.AngularDimension();
			case "AngularDimensionsMesh":
				return new Display.Dimensions.AngularDimensionsMesh();
			case "Arc":
				return new Curve.Primitive.Arc();
			case "ArcThreePt":
				return new Curve.Primitive.ArcThreePt();
			case "ArcCosine":
				return new Maths.Trig.ArcCosine();
			case "ArcDimension":
				return new Display.Dimensions.ArcDimension();
			case "ArcSED":
				return new Curve.Primitive.ArcSED();
			case "ArcSine":
				return new Maths.Trig.ArcSine();
			case "ArcTangent":
				return new Maths.Trig.ArcTangent();
			case "Area":
				return new Surface.Analysis.Area();
			case "AreaMoments":
				return new Surface.Analysis.AreaMoments();
			case "Average":
				return new Maths.Util.Average();
			case "BarGraph":
				return new Display.Graphs.BarGraph();
			case "Barycentric":
				return new Vector.Point.Barycentric();
			case "BendDeform":
				return new Transform.Morph.BendDeform();
			case "BezierSpan":
				return new Curve.Spline.BezierSpan();
			case "BiArc":
				return new Curve.Primitive.BiArc();
			case "BlendBox":
				return new Transform.Morph.BlendBox();
			case "BlendColours":
				return new Vector.Colour.BlendColours();
			case "BlendCurve":
				return new Curve.Spline.BlendCurve();
			case "BlendCurvePt":
				return new Curve.Spline.BlendCurvePt();
			case "BlurMesh":
				return new Mesh.Util.BlurMesh();
			case "BlurNumbers":
				return new Maths.Util.BlurNumbers();
			case "BoundarySurfaces":
				return new Surface.Freeform.BoundarySurfaces();
			case "BoundaryVolume":
				return new Intersect.Shape.BoundaryVolume();
			case "BoundingBox":
				return new Surface.Primitive.BoundingBox();
			case "Bounds":
				return new Maths.Domain.Bounds();
			case "BoundsTwoD":
				return new Maths.Domain.BoundsTwoD();
			case "BoxTwoPt":
				return new Surface.Primitive.BoxTwoPt();
			case "BoxArray":
				return new Transform.Array.BoxArray();
			case "BoxCorners":
				return new Surface.Analysis.BoxCorners();
			case "BoxMapping":
				return new Transform.Affine.BoxMapping();
			case "BoxMorph":
				return new Transform.Morph.BoxMorph();
			case "BoxProperties":
				return new Surface.Analysis.BoxProperties();
			case "BoxRectangle":
				return new Surface.Primitive.BoxRectangle();
			case "BoxSlits":
				return new Intersect.Shape.BoxSlits();
			case "BreakField":
				return new Vector.Field.BreakField();
			case "BrepBrep":
				return new Intersect.Physical.BrepBrep();
			case "BrepClosestPoint":
				return new Surface.Analysis.BrepClosestPoint();
			case "BrepCurve":
				return new Intersect.Physical.BrepCurve();
			case "BrepEdges":
				return new Surface.Analysis.BrepEdges();
			case "BrepJoin":
				return new Surface.Util.BrepJoin();
			case "BrepLine":
				return new Intersect.Mathematical.BrepLine();
			case "BrepPlane":
				return new Intersect.Mathematical.BrepPlane();
			case "BrepTopology":
				return new Surface.Analysis.BrepTopology();
			case "BrepWireframe":
				return new Surface.Analysis.BrepWireframe();
			case "CameraObscura":
				return new Transform.Affine.CameraObscura();
			case "CapHoles":
				return new Surface.Util.CapHoles();
			case "CapHolesEx":
				return new Surface.Util.CapHolesEx();
			case "CarthesianProduct":
				return new Sets.Sets.CarthesianProduct();
			case "Catenary":
				return new Curve.Spline.Catenary();
			case "CatenaryEx":
				return new Curve.Spline.CatenaryEx();
			case "CenterBox":
				return new Surface.Primitive.CenterBox();
			case "Centroid":
				return new Maths.Trig.Centroid();
			case "Characters":
				return new Sets.Text.Characters();
			case "CharSequence":
				return new Sets.Sequence.CharSequence();
			case "Circle":
				return new Curve.Primitive.Circle();
			case "CircleThreePt":
				return new Curve.Primitive.CircleThreePt();
			case "CircleCNR":
				return new Curve.Primitive.CircleCNR();
			case "CircleFit":
				return new Curve.Primitive.CircleFit();
			case "CircleTanTan":
				return new Curve.Primitive.CircleTanTan();
			case "CircleTanTanTan":
				return new Curve.Primitive.CircleTanTanTan();
			case "CircularDimension":
				return new Display.Dimensions.CircularDimension();
			case "Circumcentre":
				return new Maths.Trig.Circumcentre();
			case "Clash":
				return new Intersect.Physical.Clash();
			case "CleanTree":
				return new Sets.Tree.CleanTree();
			case "CleanTree":
				return new Sets.Tree.CleanTree();
			case "Closed":
				return new Curve.Analysis.Closed();
			case "ClosedEdges":
				return new Surface.Util.ClosedEdges();
			case "ClosestPoint":
				return new Vector.Point.ClosestPoint();
			case "ClosestPoints":
				return new Vector.Point.ClosestPoints();
			case "CloudDisplay":
				return new Display.Preview.CloudDisplay();
			case "CollisionManyMany":
				return new Intersect.Physical.CollisionManyMany();
			case "CollisionOneMany":
				return new Intersect.Physical.CollisionOneMany();
			case "ColourCMYK":
				return new Display.Colour.ColourCMYK();
			case "ColourHSL":
				return new Display.Colour.ColourHSL();
			case "ColourHSV":
				return new Display.Colour.ColourHSV();
			case "ColourLab":
				return new Display.Colour.ColourLab();
			case "ColourLCH":
				return new Display.Colour.ColourLCH();
			case "ColourRGB":
				return new Display.Colour.ColourRGB();
			case "ColourRGBf":
				return new Display.Colour.ColourRGBf();
			case "ColourXYZ":
				return new Display.Colour.ColourXYZ();
			case "CombineData":
				return new Sets.List.CombineData();
			case "CombineDateTime":
				return new Maths.Time.CombineDateTime();
			case "ComplexArgument":
				return new Maths.Util.ComplexArgument();
			case "ComplexComponents":
				return new Maths.Util.ComplexComponents();
			case "ComplexConjugate":
				return new Maths.Util.ComplexConjugate();
			case "ComplexModulus":
				return new Maths.Util.ComplexModulus();
			case "Compound":
				return new Transform.Util.Compound();
			case "Concatenate":
				return new Sets.Text.Concatenate();
			case "Cone":
				return new Surface.Primitive.Cone();
			case "ConnectCurves":
				return new Curve.Spline.ConnectCurves();
			case "ConsecutiveDomains":
				return new Maths.Domain.ConsecutiveDomains();
			case "ConstructDate":
				return new Maths.Time.ConstructDate();
			case "ConstructDomain":
				return new Maths.Domain.ConstructDomain();
			case "ConstructDomain":
				return new Maths.Domain.ConstructDomain();
			case "ConstructDomain":
				return new Maths.Domain.ConstructDomain();
			case "ConstructExoticDate":
				return new Maths.Time.ConstructExoticDate();
			case "ConstructMatrix":
				return new Maths.Matrix.ConstructMatrix();
			case "ConstructMesh":
				return new Mesh.Primitive.ConstructMesh();
			case "ConstructPath":
				return new Sets.Tree.ConstructPath();
			case "ConstructPlane":
				return new Vector.Plane.ConstructPlane();
			case "ConstructPoint":
				return new Vector.Point.ConstructPoint();
			case "ConstructSmoothTime":
				return new Maths.Time.ConstructSmoothTime();
			case "ConstructTime":
				return new Maths.Time.ConstructTime();
			case "Contour":
				return new Intersect.Mathematical.Contour();
			case "Contour":
				return new Curve.Division.Contour();
			case "Contourex":
				return new Intersect.Mathematical.Contourex();
			case "Contourex":
				return new Curve.Division.Contourex();
			case "ControlPointLoft":
				return new Surface.Freeform.ControlPointLoft();
			case "ControlPoints":
				return new Curve.Analysis.ControlPoints();
			case "ControlPolygon":
				return new Curve.Analysis.ControlPolygon();
			case "ConvexEdges":
				return new Surface.Util.ConvexEdges();
			case "ConvexHull":
				return new Mesh.Triangulation.ConvexHull();
			case "CoordinateMask":
				return new Vector.Point.CoordinateMask();
			case "CopyTrim":
				return new Surface.Util.CopyTrim();
			case "CoSecant":
				return new Maths.Trig.CoSecant();
			case "Cosine":
				return new Maths.Trig.Cosine();
			case "CoTangent":
				return new Maths.Trig.CoTangent();
			case "CreateComplex":
				return new Maths.Util.CreateComplex();
			case "CreateMaterial":
				return new Display.Preview.CreateMaterial();
			case "CreateSet":
				return new Sets.Sets.CreateSet();
			case "CrossProduct":
				return new Vector.Vector.CrossProduct();
			case "CrossReference":
				return new Sets.List.CrossReference();
			case "CScript":
				return new Maths.Script.CScript();
			case "Cube":
				return new Maths.Polynomials.Cube();
			case "CubeRoot":
				return new Maths.Polynomials.CubeRoot();
			case "CullDuplicates":
				return new Vector.Point.CullDuplicates();
			case "CullFaces":
				return new Mesh.Util.CullFaces();
			case "CullIndex":
				return new Sets.Sequence.CullIndex();
			case "CullNth":
				return new Sets.Sequence.CullNth();
			case "CullPattern":
				return new Sets.Sequence.CullPattern();
			case "CullVertices":
				return new Mesh.Util.CullVertices();
			case "Curvature":
				return new Curve.Analysis.Curvature();
			case "CurvatureGraph":
				return new Curve.Analysis.CurvatureGraph();
			case "CurveArray":
				return new Transform.Array.CurveArray();
			case "CurveClosestPoint":
				return new Curve.Analysis.CurveClosestPoint();
			case "CurveCurve":
				return new Intersect.Physical.CurveCurve();
			case "CurveDepth":
				return new Curve.Analysis.CurveDepth();
			case "CurveDomain":
				return new Curve.Analysis.CurveDomain();
			case "CurveFrame":
				return new Curve.Analysis.CurveFrame();
			case "CurveFrames":
				return new Curve.Division.CurveFrames();
			case "CurveLine":
				return new Intersect.Mathematical.CurveLine();
			case "CurveMiddle":
				return new Curve.Analysis.CurveMiddle();
			case "CurveNearestObject":
				return new Curve.Analysis.CurveNearestObject();
			case "CurveOnSurface":
				return new Curve.Spline.CurveOnSurface();
			case "CurvePlane":
				return new Intersect.Mathematical.CurvePlane();
			case "CurveProximity":
				return new Curve.Analysis.CurveProximity();
			case "CurveSelf":
				return new Intersect.Physical.CurveSelf();
			case "CurveSide":
				return new Curve.Analysis.CurveSide();
			case "CurveToPolyline":
				return new Curve.Util.CurveToPolyline();
			case "CustomPreview":
				return new Display.Preview.CustomPreview();
			case "Cylinder":
				return new Surface.Primitive.Cylinder();
			case "DashPattern":
				return new Curve.Division.DashPattern();
			case "DateRange":
				return new Maths.Time.DateRange();
			case "Deconstruct":
				return new Vector.Point.Deconstruct();
			case "DeconstructArc":
				return new Curve.Analysis.DeconstructArc();
			case "DeconstructBox":
				return new Surface.Analysis.DeconstructBox();
			case "DeconstructBrep":
				return new Surface.Analysis.DeconstructBrep();
			case "DeconstructDate":
				return new Maths.Time.DeconstructDate();
			case "DeconstructDomain":
				return new Maths.Domain.DeconstructDomain();
			case "DeconstructDomain":
				return new Maths.Domain.DeconstructDomain();
			case "DeconstructDomain":
				return new Maths.Domain.DeconstructDomain();
			case "DeconstructFace":
				return new Mesh.Analysis.DeconstructFace();
			case "DeconstructMatrix":
				return new Maths.Matrix.DeconstructMatrix();
			case "DeconstructMesh":
				return new Mesh.Analysis.DeconstructMesh();
			case "DeconstructPath":
				return new Sets.Tree.DeconstructPath();
			case "DeconstructPlane":
				return new Vector.Plane.DeconstructPlane();
			case "DeconstructVector":
				return new Vector.Vector.DeconstructVector();
			case "DeconstuctRectangle":
				return new Curve.Analysis.DeconstuctRectangle();
			case "Degrees":
				return new Maths.Trig.Degrees();
			case "DelaunayEdges":
				return new Mesh.Triangulation.DelaunayEdges();
			case "DelaunayMesh":
				return new Mesh.Triangulation.DelaunayMesh();
			case "DeleteConsecutive":
				return new Sets.Sets.DeleteConsecutive();
			case "DeleteFaces":
				return new Mesh.Util.DeleteFaces();
			case "DeleteVertices":
				return new Mesh.Util.DeleteVertices();
			case "Derivatives":
				return new Curve.Analysis.Derivatives();
			case "Dimensions":
				return new Surface.Analysis.Dimensions();
			case "DirectionDisplay":
				return new Vector.Field.DirectionDisplay();
			case "Discontinuity":
				return new Curve.Analysis.Discontinuity();
			case "Disjoint":
				return new Sets.Sets.Disjoint();
			case "DisjointMesh":
				return new Mesh.Util.DisjointMesh();
			case "Dispatch":
				return new Sets.List.Dispatch();
			case "DisplayMatrix":
				return new Maths.Matrix.DisplayMatrix();
			case "Distance":
				return new Vector.Point.Distance();
			case "Divide":
				return new Vector.Vector.Divide();
			case "DivideByDeviation":
				return new Curve.Division.DivideByDeviation();
			case "DivideCurve":
				return new Curve.Division.DivideCurve();
			case "DivideDistance":
				return new Curve.Division.DivideDistance();
			case "DivideDomain":
				return new Maths.Domain.DivideDomain();
			case "DivideDomain":
				return new Maths.Domain.DivideDomain();
			case "DivideLength":
				return new Curve.Division.DivideLength();
			case "DivideSurface":
				return new Surface.Util.DivideSurface();
			case "Division":
				return new Maths.Operators.Division();
			case "DomainBox":
				return new Surface.Primitive.DomainBox();
			case "DotDisplay":
				return new Display.Preview.DotDisplay();
			case "DotNETCScriptLEGACY":
				return new Maths.Script.DotNETCScriptLEGACY();
			case "DotNETVBScriptLEGACY":
				return new Maths.Script.DotNETVBScriptLEGACY();
			case "DotProduct":
				return new Vector.Vector.DotProduct();
			case "DuplicateData":
				return new Sets.Sequence.DuplicateData();
			case "EdgesfromDirections":
				return new Surface.Util.EdgesfromDirections();
			case "EdgesfromFaces":
				return new Surface.Util.EdgesfromFaces();
			case "EdgesfromLength":
				return new Surface.Util.EdgesfromLength();
			case "EdgesfromLinearity":
				return new Surface.Util.EdgesfromLinearity();
			case "EdgesfromPoints":
				return new Surface.Util.EdgesfromPoints();
			case "EdgeSurface":
				return new Surface.Freeform.EdgeSurface();
			case "Ellipse":
				return new Curve.Primitive.Ellipse();
			case "EndPoints":
				return new Curve.Analysis.EndPoints();
			case "Entwine":
				return new Sets.Tree.Entwine();
			case "Epsilon":
				return new Maths.Util.Epsilon();
			case "Equality":
				return new Maths.Operators.Equality();
			case "Evaluate":
				return new Maths.Script.Evaluate();
			case "EvaluateBox":
				return new Surface.Analysis.EvaluateBox();
			case "EvaluateCurve":
				return new Curve.Analysis.EvaluateCurve();
			case "EvaluateField":
				return new Vector.Field.EvaluateField();
			case "EvaluateLength":
				return new Curve.Analysis.EvaluateLength();
			case "EvaluateSurface":
				return new Surface.Analysis.EvaluateSurface();
			case "Explode":
				return new Curve.Util.Explode();
			case "ExplodeTree":
				return new Sets.Tree.ExplodeTree();
			case "Exposure":
				return new Mesh.Util.Exposure();
			case "Expression":
				return new Maths.Script.Expression();
			case "ExtendCurve":
				return new Curve.Util.ExtendCurve();
			case "Extremes":
				return new Maths.Util.Extremes();
			case "Extremes":
				return new Curve.Analysis.Extremes();
			case "Extrude":
				return new Surface.Freeform.Extrude();
			case "ExtrudeAlong":
				return new Surface.Freeform.ExtrudeAlong();
			case "ExtrudeAngled":
				return new Surface.Freeform.ExtrudeAngled();
			case "ExtrudeLinear":
				return new Surface.Freeform.ExtrudeLinear();
			case "ExtrudePoint":
				return new Surface.Freeform.ExtrudePoint();
			case "FaceBoundaries":
				return new Mesh.Analysis.FaceBoundaries();
			case "FaceCircles":
				return new Mesh.Analysis.FaceCircles();
			case "FaceNormals":
				return new Mesh.Analysis.FaceNormals();
			case "FacetDome":
				return new Mesh.Triangulation.FacetDome();
			case "Factorial":
				return new Maths.Operators.Factorial();
			case "Fibonacci":
				return new Sets.Sequence.Fibonacci();
			case "FieldLine":
				return new Vector.Field.FieldLine();
			case "Fillet":
				return new Curve.Util.Fillet();
			case "Fillet":
				return new Curve.Util.Fillet();
			case "FilletDistance":
				return new Curve.Util.FilletDistance();
			case "FilletEdge":
				return new Surface.Util.FilletEdge();
			case "FindDomain":
				return new Maths.Domain.FindDomain();
			case "Findsimilarmember":
				return new Sets.Sets.Findsimilarmember();
			case "FitCurve":
				return new Curve.Util.FitCurve();
			case "FitLine":
				return new Curve.Primitive.FitLine();
			case "FitLoft":
				return new Surface.Freeform.FitLoft();
			case "FlattenTree":
				return new Sets.Tree.FlattenTree();
			case "Flip":
				return new Surface.Util.Flip();
			case "FlipCurve":
				return new Curve.Util.FlipCurve();
			case "FlipMatrix":
				return new Sets.Tree.FlipMatrix();
			case "FlipMesh":
				return new Mesh.Util.FlipMesh();
			case "FlipPlane":
				return new Vector.Plane.FlipPlane();
			case "Flow":
				return new Transform.Morph.Flow();
			case "Format":
				return new Sets.Text.Format();
			case "FragmentPatch":
				return new Surface.Freeform.FragmentPatch();
			case "GateAnd":
				return new Maths.Operators.GateAnd();
			case "GateMajority":
				return new Maths.Operators.GateMajority();
			case "GateNand":
				return new Maths.Operators.GateNand();
			case "GateNor":
				return new Maths.Operators.GateNor();
			case "GateNot":
				return new Maths.Operators.GateNot();
			case "GateOr":
				return new Maths.Operators.GateOr();
			case "GateXnor":
				return new Maths.Operators.GateXnor();
			case "GateXor":
				return new Maths.Operators.GateXor();
			case "Geodesic":
				return new Curve.Spline.Geodesic();
			case "GhPythonScript":
				return new Maths.Script.GhPythonScript();
			case "GoldenRatio":
				return new Maths.Util.GoldenRatio();
			case "GraftTree":
				return new Sets.Tree.GraftTree();
			case "Group":
				return new Transform.Util.Group();
			case "Hexagonal":
				return new Vector.Grid.Hexagonal();
			case "HorizontalFrame":
				return new Curve.Analysis.HorizontalFrame();
			case "HorizontalFrames":
				return new Curve.Division.HorizontalFrames();
			case "ImageGallery":
				return new Display.Graphs.ImageGallery();
			case "Incentre":
				return new Maths.Trig.Incentre();
			case "InCircle":
				return new Curve.Primitive.InCircle();
			case "Includes":
				return new Maths.Domain.Includes();
			case "InEllipse":
				return new Curve.Primitive.InEllipse();
			case "InsertItems":
				return new Sets.List.InsertItems();
			case "IntegerDivision":
				return new Maths.Operators.IntegerDivision();
			case "Interpolate":
				return new Curve.Spline.Interpolate();
			case "Interpolatedata":
				return new Maths.Util.Interpolatedata();
			case "InterpolateDate":
				return new Maths.Time.InterpolateDate();
			case "Interpolatet":
				return new Curve.Spline.Interpolatet();
			case "InverseTransform":
				return new Transform.Util.InverseTransform();
			case "InvertMatrix":
				return new Maths.Matrix.InvertMatrix();
			case "IsoCurve":
				return new Curve.Spline.IsoCurve();
			case "Isotrim":
				return new Surface.Util.Isotrim();
			case "IsoVist":
				return new Intersect.Mathematical.IsoVist();
			case "IsoVistRay":
				return new Intersect.Mathematical.IsoVistRay();
			case "IsPlanar":
				return new Surface.Analysis.IsPlanar();
			case "ItemIndex":
				return new Sets.List.ItemIndex();
			case "Jitter":
				return new Sets.Sequence.Jitter();
			case "JoinCurves":
				return new Curve.Util.JoinCurves();
			case "Kaleidoscope":
				return new Transform.Array.Kaleidoscope();
			case "KeyValueSearch":
				return new Sets.Sets.KeyValueSearch();
			case "KinkyCurve":
				return new Curve.Spline.KinkyCurve();
			case "KnotVector":
				return new Curve.Spline.KnotVector();
			case "LargerThan":
				return new Maths.Operators.LargerThan();
			case "Legend":
				return new Display.Graphs.Legend();
			case "Length":
				return new Curve.Analysis.Length();
			case "LengthDomain":
				return new Curve.Analysis.LengthDomain();
			case "LengthParameter":
				return new Curve.Analysis.LengthParameter();
			case "Line":
				return new Curve.Primitive.Line();
			case "LineTwoPlane":
				return new Curve.Primitive.LineTwoPlane();
			case "LineFourPt":
				return new Curve.Primitive.LineFourPt();
			case "LinearArray":
				return new Transform.Array.LinearArray();
			case "LinearDimension":
				return new Display.Dimensions.LinearDimension();
			case "LineCharge":
				return new Vector.Field.LineCharge();
			case "LineDimension":
				return new Display.Dimensions.LineDimension();
			case "LineLine":
				return new Intersect.Mathematical.LineLine();
			case "LineLine":
				return new Vector.Plane.LineLine();
			case "LinePlane":
				return new Intersect.Mathematical.LinePlane();
			case "LinePt":
				return new Vector.Plane.LinePt();
			case "LineSDL":
				return new Curve.Primitive.LineSDL();
			case "ListItem":
				return new Sets.List.ListItem();
			case "ListLength":
				return new Sets.List.ListLength();
			case "Loft":
				return new Surface.Freeform.Loft();
			case "LoftOptions":
				return new Surface.Freeform.LoftOptions();
			case "LoftOptions":
				return new Surface.Util.LoftOptions();
			case "Logarithm":
				return new Maths.Polynomials.Logarithm();
			case "LogN":
				return new Maths.Polynomials.LogN();
			case "LongestList":
				return new Sets.List.LongestList();
			case "Maelstrom":
				return new Transform.Morph.Maelstrom();
			case "MakeTwoD":
				return new Display.Dimensions.MakeTwoD();
			case "MakeTwoDParallelView":
				return new Display.Dimensions.MakeTwoDParallelView();
			case "MakeTwoDPerspectiveView":
				return new Display.Dimensions.MakeTwoDPerspectiveView();
			case "MakeTwoDRhinoView":
				return new Display.Dimensions.MakeTwoDRhinoView();
			case "MaptoSurface":
				return new Transform.Morph.MaptoSurface();
			case "MarkerDimension":
				return new Display.Dimensions.MarkerDimension();
			case "MassAddition":
				return new Maths.Operators.MassAddition();
			case "MassMultiplication":
				return new Maths.Operators.MassMultiplication();
			case "MatchCurve":
				return new Curve.Spline.MatchCurve();
			case "MatchText":
				return new Sets.Text.MatchText();
			case "MatchTree":
				return new Sets.Tree.MatchTree();
			case "Maximum":
				return new Maths.Util.Maximum();
			case "MemberIndex":
				return new Sets.Sets.MemberIndex();
			case "Merge":
				return new Sets.Tree.Merge();
			case "Merge":
				return new Sets.Tree.Merge();
			case "MergeZeroThree":
				return new Sets.Tree.MergeZeroThree();
			case "MergeZeroFour":
				return new Sets.Tree.MergeZeroFour();
			case "MergeZeroFive":
				return new Sets.Tree.MergeZeroFive();
			case "MergeZeroSix":
				return new Sets.Tree.MergeZeroSix();
			case "MergeZeroEight":
				return new Sets.Tree.MergeZeroEight();
			case "MergeOneZero":
				return new Sets.Tree.MergeOneZero();
			case "MergeFaces":
				return new Surface.Util.MergeFaces();
			case "MergeFields":
				return new Vector.Field.MergeFields();
			case "MergeGroup":
				return new Transform.Util.MergeGroup();
			case "MergeMultiple":
				return new Sets.Tree.MergeMultiple();
			case "MeshBox":
				return new Mesh.Primitive.MeshBox();
			case "MeshBrep":
				return new Mesh.Util.MeshBrep();
			case "MeshClosestPoint":
				return new Mesh.Analysis.MeshClosestPoint();
			case "MeshColours":
				return new Mesh.Primitive.MeshColours();
			case "MeshCurve":
				return new Intersect.Physical.MeshCurve();
			case "MeshDepth":
				return new Mesh.Analysis.MeshDepth();
			case "MeshDifference":
				return new Intersect.Shape.MeshDifference();
			case "MeshEdges":
				return new Mesh.Analysis.MeshEdges();
			case "MeshEval":
				return new Mesh.Analysis.MeshEval();
			case "MeshfromSubD":
				return new Surface.SubD.MeshfromSubD();
			case "MeshInclusion":
				return new Mesh.Analysis.MeshInclusion();
			case "MeshIntersection":
				return new Intersect.Shape.MeshIntersection();
			case "MeshJoin":
				return new Mesh.Util.MeshJoin();
			case "MeshMesh":
				return new Intersect.Physical.MeshMesh();
			case "MeshPlane":
				return new Intersect.Mathematical.MeshPlane();
			case "MeshPlane":
				return new Mesh.Primitive.MeshPlane();
			case "MeshQuad":
				return new Mesh.Primitive.MeshQuad();
			case "MeshRay":
				return new Intersect.Mathematical.MeshRay();
			case "MeshShadow":
				return new Mesh.Util.MeshShadow();
			case "MeshSphere":
				return new Mesh.Primitive.MeshSphere();
			case "MeshSphereEx":
				return new Mesh.Primitive.MeshSphereEx();
			case "MeshSplit":
				return new Intersect.Shape.MeshSplit();
			case "MeshSplitPlane":
				return new Mesh.Util.MeshSplitPlane();
			case "MeshSpray":
				return new Mesh.Primitive.MeshSpray();
			case "MeshSurface":
				return new Mesh.Util.MeshSurface();
			case "MeshTriangle":
				return new Mesh.Primitive.MeshTriangle();
			case "MeshUnion":
				return new Intersect.Shape.MeshUnion();
			case "MetaBall":
				return new Mesh.Triangulation.MetaBall();
			case "MetaBallt":
				return new Mesh.Triangulation.MetaBallt();
			case "MetaBalltCustom":
				return new Mesh.Triangulation.MetaBalltCustom();
			case "Minimum":
				return new Maths.Util.Minimum();
			case "Mirror":
				return new Transform.Euclidean.Mirror();
			case "MirrorCurve":
				return new Transform.Morph.MirrorCurve();
			case "MirrorSurface":
				return new Transform.Morph.MirrorSurface();
			case "ModifiedArc":
				return new Curve.Primitive.ModifiedArc();
			case "Modulus":
				return new Maths.Operators.Modulus();
			case "Move":
				return new Transform.Euclidean.Move();
			case "MoveAwayFrom":
				return new Transform.Euclidean.MoveAwayFrom();
			case "MoveToPlane":
				return new Transform.Euclidean.MoveToPlane();
			case "MultipleCurves":
				return new Intersect.Physical.MultipleCurves();
			case "Multiplication":
				return new Maths.Operators.Multiplication();
			case "Multiply":
				return new Vector.Vector.Multiply();
			case "Naturallogarithm":
				return new Maths.Polynomials.Naturallogarithm();
			case "Naturallogarithm":
				return new Maths.Util.Naturallogarithm();
			case "Negative":
				return new Maths.Operators.Negative();
			case "NetworkSurface":
				return new Surface.Freeform.NetworkSurface();
			case "NullItem":
				return new Sets.List.NullItem();
			case "NumberstoPoints":
				return new Vector.Point.NumberstoPoints();
			case "NurbsCurve":
				return new Curve.Spline.NurbsCurve();
			case "NurbsCurvePWK":
				return new Curve.Spline.NurbsCurvePWK();
			case "Occlusion":
				return new Mesh.Util.Occlusion();
			case "OcTree":
				return new Mesh.Triangulation.OcTree();
			case "OffsetCurve":
				return new Curve.Util.OffsetCurve();
			case "OffsetCurveLoose":
				return new Curve.Util.OffsetCurveLoose();
			case "OffsetLooseThreeD":
				return new Curve.Util.OffsetLooseThreeD();
			case "OffsetonSrf":
				return new Curve.Util.OffsetonSrf();
			case "OffsetPolyline":
				return new Curve.Util.OffsetPolyline();
			case "OffsetSurface":
				return new Surface.Util.OffsetSurface();
			case "OffsetSurfaceLoose":
				return new Surface.Util.OffsetSurfaceLoose();
			case "OneOverX":
				return new Maths.Polynomials.OneOverX();
			case "Orient":
				return new Transform.Euclidean.Orient();
			case "OrientDirection":
				return new Transform.Affine.OrientDirection();
			case "Orthocentre":
				return new Maths.Trig.Orthocentre();
			case "OsculatingCircles":
				return new Surface.Analysis.OsculatingCircles();
			case "PartitionList":
				return new Sets.List.PartitionList();
			case "Patch":
				return new Surface.Freeform.Patch();
			case "PathCompare":
				return new Sets.Tree.PathCompare();
			case "PathMapper":
				return new Sets.Tree.PathMapper();
			case "PerpendicularDisplay":
				return new Vector.Field.PerpendicularDisplay();
			case "PerpFrame":
				return new Curve.Analysis.PerpFrame();
			case "PerpFrames":
				return new Curve.Division.PerpFrames();
			case "Pi":
				return new Maths.Util.Pi();
			case "PicknChoose":
				return new Sets.List.PicknChoose();
			case "PieChart":
				return new Display.Graphs.PieChart();
			case "Pipe":
				return new Surface.Freeform.Pipe();
			case "PipeVariable":
				return new Surface.Freeform.PipeVariable();
			case "Planar":
				return new Curve.Analysis.Planar();
			case "PlaneThreePt":
				return new Vector.Plane.PlaneThreePt();
			case "PlaneClosestPoint":
				return new Vector.Plane.PlaneClosestPoint();
			case "PlaneCoordinates":
				return new Vector.Plane.PlaneCoordinates();
			case "PlaneFit":
				return new Vector.Plane.PlaneFit();
			case "PlaneNormal":
				return new Vector.Plane.PlaneNormal();
			case "PlaneOffset":
				return new Vector.Plane.PlaneOffset();
			case "PlaneOrigin":
				return new Vector.Plane.PlaneOrigin();
			case "PlanePlane":
				return new Intersect.Mathematical.PlanePlane();
			case "PlanePlanePlane":
				return new Intersect.Mathematical.PlanePlanePlane();
			case "PlaneRegion":
				return new Intersect.Mathematical.PlaneRegion();
			case "PlaneSurface":
				return new Surface.Primitive.PlaneSurface();
			case "PlaneThroughShape":
				return new Surface.Primitive.PlaneThroughShape();
			case "PointCharge":
				return new Vector.Field.PointCharge();
			case "PointCylindrical":
				return new Vector.Point.PointCylindrical();
			case "PointDeform":
				return new Transform.Morph.PointDeform();
			case "PointGroups":
				return new Vector.Point.PointGroups();
			case "PointInBrep":
				return new Surface.Analysis.PointInBrep();
			case "PointInBreps":
				return new Surface.Analysis.PointInBreps();
			case "PointInCurve":
				return new Curve.Analysis.PointInCurve();
			case "PointinCurves":
				return new Curve.Analysis.PointinCurves();
			case "PointInTrim":
				return new Surface.Analysis.PointInTrim();
			case "PointList":
				return new Display.Vector.PointList();
			case "PointList":
				return new Display.Vector.PointList();
			case "PointOnCurve":
				return new Curve.Analysis.PointOnCurve();
			case "PointOrder":
				return new Display.Vector.PointOrder();
			case "PointOriented":
				return new Vector.Point.PointOriented();
			case "PointPolar":
				return new Vector.Point.PointPolar();
			case "PointstoNumbers":
				return new Vector.Point.PointstoNumbers();
			case "PolarArray":
				return new Transform.Array.PolarArray();
			case "PolyArc":
				return new Curve.Spline.PolyArc();
			case "Polygon":
				return new Curve.Primitive.Polygon();
			case "PolygonCenter":
				return new Curve.Analysis.PolygonCenter();
			case "PolygonEdge":
				return new Curve.Primitive.PolygonEdge();
			case "PolyLine":
				return new Curve.Spline.PolyLine();
			case "PolylineCollapse":
				return new Curve.Util.PolylineCollapse();
			case "PopulateTwoD":
				return new Vector.Grid.PopulateTwoD();
			case "PopulateThreeD":
				return new Vector.Grid.PopulateThreeD();
			case "PopulateGeometry":
				return new Vector.Grid.PopulateGeometry();
			case "Power":
				return new Maths.Operators.Power();
			case "PowerofOneZero":
				return new Maths.Polynomials.PowerofOneZero();
			case "PowerofTwo":
				return new Maths.Polynomials.PowerofTwo();
			case "PowerofE":
				return new Maths.Polynomials.PowerofE();
			case "PrincipalCurvature":
				return new Surface.Analysis.PrincipalCurvature();
			case "Project":
				return new Transform.Affine.Project();
			case "Project":
				return new Curve.Util.Project();
			case "ProjectAlong":
				return new Transform.Affine.ProjectAlong();
			case "ProjectPoint":
				return new Vector.Point.ProjectPoint();
			case "ProximityTwoD":
				return new Mesh.Triangulation.ProximityTwoD();
			case "ProximityThreeD":
				return new Mesh.Triangulation.ProximityThreeD();
			case "PruneTree":
				return new Sets.Tree.PruneTree();
			case "PullCurve":
				return new Curve.Util.PullCurve();
			case "PullPoint":
				return new Vector.Point.PullPoint();
			case "Quadrangulate":
				return new Mesh.Util.Quadrangulate();
			case "QuadSphere":
				return new Surface.Primitive.QuadSphere();
			case "QuadTree":
				return new Mesh.Triangulation.QuadTree();
			case "QuickGraph":
				return new Display.Graphs.QuickGraph();
			case "Radial":
				return new Vector.Grid.Radial();
			case "Radians":
				return new Maths.Trig.Radians();
			case "RailRevolution":
				return new Surface.Freeform.RailRevolution();
			case "Random":
				return new Sets.Sequence.Random();
			case "RandomEx":
				return new Sets.Sequence.RandomEx();
			case "RandomReduce":
				return new Sets.Sequence.RandomReduce();
			case "Range":
				return new Sets.Sequence.Range();
			case "RebuildCurve":
				return new Curve.Util.RebuildCurve();
			case "Rectangle":
				return new Curve.Primitive.Rectangle();
			case "RectangleTwoPt":
				return new Curve.Primitive.RectangleTwoPt();
			case "RectangleThreePt":
				return new Curve.Primitive.RectangleThreePt();
			case "RectangleMapping":
				return new Transform.Affine.RectangleMapping();
			case "Rectangular":
				return new Vector.Grid.Rectangular();
			case "RectangularArray":
				return new Transform.Array.RectangularArray();
			case "Reduce":
				return new Curve.Util.Reduce();
			case "RegionDifference":
				return new Intersect.Shape.RegionDifference();
			case "RegionIntersection":
				return new Intersect.Shape.RegionIntersection();
			case "RegionSlits":
				return new Intersect.Shape.RegionSlits();
			case "RegionUnion":
				return new Intersect.Shape.RegionUnion();
			case "RelativeDifferences":
				return new Maths.Operators.RelativeDifferences();
			case "RelativeItem":
				return new Sets.Tree.RelativeItem();
			case "RelativeItems":
				return new Sets.Tree.RelativeItems();
			case "RemapNumbers":
				return new Maths.Domain.RemapNumbers();
			case "RepeatData":
				return new Sets.Sequence.RepeatData();
			case "ReplaceItems":
				return new Sets.List.ReplaceItems();
			case "ReplaceMembers":
				return new Sets.Sets.ReplaceMembers();
			case "ReplaceNulls":
				return new Sets.List.ReplaceNulls();
			case "ReplacePaths":
				return new Sets.Tree.ReplacePaths();
			case "ReplaceText":
				return new Sets.Text.ReplaceText();
			case "Retrim":
				return new Surface.Util.Retrim();
			case "Reverse":
				return new Vector.Vector.Reverse();
			case "ReverseList":
				return new Sets.List.ReverseList();
			case "Revolution":
				return new Surface.Freeform.Revolution();
			case "RightTrigonometry":
				return new Maths.Trig.RightTrigonometry();
			case "Rotate":
				return new Vector.Vector.Rotate();
			case "Rotate":
				return new Transform.Euclidean.Rotate();
			case "RotateThreeD":
				return new Transform.Euclidean.RotateThreeD();
			case "RotateAxis":
				return new Transform.Euclidean.RotateAxis();
			case "RotateDirection":
				return new Transform.Euclidean.RotateDirection();
			case "RotatePlane":
				return new Vector.Plane.RotatePlane();
			case "Round":
				return new Maths.Util.Round();
			case "RuledSurface":
				return new Surface.Freeform.RuledSurface();
			case "SanityXForm":
				return new Transform.Euclidean.SanityXForm();
			case "ScalarDisplay":
				return new Vector.Field.ScalarDisplay();
			case "Scale":
				return new Transform.Affine.Scale();
			case "ScaleNU":
				return new Transform.Affine.ScaleNU();
			case "Seam":
				return new Curve.Util.Seam();
			case "Secant":
				return new Maths.Trig.Secant();
			case "SegmentLengths":
				return new Curve.Analysis.SegmentLengths();
			case "Sequence":
				return new Sets.Sequence.Sequence();
			case "SerialDimension":
				return new Display.Dimensions.SerialDimension();
			case "Series":
				return new Sets.Sequence.Series();
			case "SeriesAddition":
				return new Maths.Operators.SeriesAddition();
			case "SetDifference":
				return new Sets.Sets.SetDifference();
			case "SetDifferenceS":
				return new Sets.Sets.SetDifferenceS();
			case "SetIntersection":
				return new Sets.Sets.SetIntersection();
			case "SetMajority":
				return new Sets.Sets.SetMajority();
			case "SettingsCustom":
				return new Mesh.Util.SettingsCustom();
			case "SettingsQuality":
				return new Mesh.Util.SettingsQuality();
			case "SettingsSpeed":
				return new Mesh.Util.SettingsSpeed();
			case "SetUnion":
				return new Sets.Sets.SetUnion();
			case "ShapeInBrep":
				return new Surface.Analysis.ShapeInBrep();
			case "Shatter":
				return new Curve.Division.Shatter();
			case "Shear":
				return new Transform.Affine.Shear();
			case "ShearAngle":
				return new Transform.Affine.ShearAngle();
			case "ShiftList":
				return new Sets.List.ShiftList();
			case "ShiftPaths":
				return new Sets.Tree.ShiftPaths();
			case "ShortestList":
				return new Sets.List.ShortestList();
			case "SiftPattern":
				return new Sets.List.SiftPattern();
			case "Similarity":
				return new Maths.Operators.Similarity();
			case "SimpleMesh":
				return new Mesh.Util.SimpleMesh();
			case "SimplifyCurve":
				return new Curve.Util.SimplifyCurve();
			case "SimplifyTree":
				return new Sets.Tree.SimplifyTree();
			case "Sinc":
				return new Maths.Trig.Sinc();
			case "Sine":
				return new Maths.Trig.Sine();
			case "SmallerThan":
				return new Maths.Operators.SmallerThan();
			case "SmoothMesh":
				return new Mesh.Util.SmoothMesh();
			case "SmoothNumbers":
				return new Maths.Util.SmoothNumbers();
			case "SmoothPolyline":
				return new Curve.Util.SmoothPolyline();
			case "SolarIncidence":
				return new Vector.Vector.SolarIncidence();
			case "SolidDifference":
				return new Intersect.Shape.SolidDifference();
			case "SolidIntersection":
				return new Intersect.Shape.SolidIntersection();
			case "SolidUnion":
				return new Intersect.Shape.SolidUnion();
			case "SortAlongCurve":
				return new Vector.Point.SortAlongCurve();
			case "SortList":
				return new Sets.List.SortList();
			case "SortPoints":
				return new Vector.Point.SortPoints();
			case "SortText":
				return new Sets.Text.SortText();
			case "SpatialDeform":
				return new Transform.Morph.SpatialDeform();
			case "SpatialDeformcustom":
				return new Transform.Morph.SpatialDeformcustom();
			case "Sphere":
				return new Surface.Primitive.Sphere();
			case "SphereFourPt":
				return new Surface.Primitive.SphereFourPt();
			case "SphereFit":
				return new Surface.Primitive.SphereFit();
			case "SpinForce":
				return new Vector.Field.SpinForce();
			case "Split":
				return new Transform.Util.Split();
			case "SplitAHSL":
				return new Display.Colour.SplitAHSL();
			case "SplitAHSV":
				return new Display.Colour.SplitAHSV();
			case "SplitARGB":
				return new Display.Colour.SplitARGB();
			case "SplitBrep":
				return new Intersect.Shape.SplitBrep();
			case "SplitBrepMultiple":
				return new Intersect.Shape.SplitBrepMultiple();
			case "SplitGroup":
				return new Transform.Util.SplitGroup();
			case "SplitList":
				return new Sets.List.SplitList();
			case "SplitTree":
				return new Sets.Tree.SplitTree();
			case "SplitwithBrep":
				return new Intersect.Region.SplitwithBrep();
			case "SplitwithBreps":
				return new Intersect.Region.SplitwithBreps();
			case "Splop":
				return new Transform.Morph.Splop();
			case "Sporph":
				return new Transform.Morph.Sporph();
			case "Square":
				return new Maths.Polynomials.Square();
			case "Square":
				return new Vector.Grid.Square();
			case "SquareRoot":
				return new Maths.Polynomials.SquareRoot();
			case "StackData":
				return new Sets.Sequence.StackData();
			case "StreamFilter":
				return new Sets.Tree.StreamFilter();
			case "StreamGate":
				return new Sets.Tree.StreamGate();
			case "Stretch":
				return new Transform.Morph.Stretch();
			case "SubCurve":
				return new Curve.Spline.SubCurve();
			case "SubDBox":
				return new Surface.SubD.SubDBox();
			case "SubDControlPolygon":
				return new Surface.SubD.SubDControlPolygon();
			case "SubDEdges":
				return new Surface.SubD.SubDEdges();
			case "SubDFaces":
				return new Surface.SubD.SubDFaces();
			case "SubDfromMesh":
				return new Surface.SubD.SubDfromMesh();
			case "SubDVertices":
				return new Surface.SubD.SubDVertices();
			case "SubList":
				return new Sets.List.SubList();
			case "SubSet":
				return new Sets.Sets.SubSet();
			case "Substrate":
				return new Mesh.Triangulation.Substrate();
			case "Subtraction":
				return new Maths.Operators.Subtraction();
			case "SumSurface":
				return new Surface.Freeform.SumSurface();
			case "SurfaceBox":
				return new Transform.Morph.SurfaceBox();
			case "SurfaceClosestPoint":
				return new Surface.Analysis.SurfaceClosestPoint();
			case "SurfaceCurvature":
				return new Surface.Analysis.SurfaceCurvature();
			case "SurfaceCurve":
				return new Intersect.Physical.SurfaceCurve();
			case "SurfaceFrames":
				return new Surface.Util.SurfaceFrames();
			case "SurfaceFromPoints":
				return new Surface.Freeform.SurfaceFromPoints();
			case "SurfaceInflection":
				return new Surface.Analysis.SurfaceInflection();
			case "SurfaceLine":
				return new Intersect.Mathematical.SurfaceLine();
			case "SurfaceMorph":
				return new Transform.Morph.SurfaceMorph();
			case "SurfacePoints":
				return new Surface.Analysis.SurfacePoints();
			case "SurfaceSplit":
				return new Intersect.Physical.SurfaceSplit();
			case "SwapColumns":
				return new Maths.Matrix.SwapColumns();
			case "SwapRows":
				return new Maths.Matrix.SwapRows();
			case "SweepOne":
				return new Surface.Freeform.SweepOne();
			case "SweepTwo":
				return new Surface.Freeform.SweepTwo();
			case "SwingArc":
				return new Curve.Spline.SwingArc();
			case "SymbolAdvanced":
				return new Display.Preview.SymbolAdvanced();
			case "SymbolDisplay":
				return new Display.Preview.SymbolDisplay();
			case "SymbolSimple":
				return new Display.Preview.SymbolSimple();
			case "Tangent":
				return new Maths.Trig.Tangent();
			case "TangentArcs":
				return new Curve.Primitive.TangentArcs();
			case "TangentCurve":
				return new Curve.Spline.TangentCurve();
			case "TangentLines":
				return new Curve.Primitive.TangentLines();
			case "TangentLinesEx":
				return new Curve.Primitive.TangentLinesEx();
			case "TangentLinesIn":
				return new Curve.Primitive.TangentLinesIn();
			case "Taper":
				return new Transform.Morph.Taper();
			case "TensorDisplay":
				return new Vector.Field.TensorDisplay();
			case "TestCrash":
				return new Display.Test.TestCrash();
			case "TextCase":
				return new Sets.Text.TextCase();
			case "TextDistance":
				return new Sets.Text.TextDistance();
			case "TextFragment":
				return new Sets.Text.TextFragment();
			case "TextJoin":
				return new Sets.Text.TextJoin();
			case "TextLength":
				return new Sets.Text.TextLength();
			case "TextSplit":
				return new Sets.Text.TextSplit();
			case "TextTag":
				return new Display.Dimensions.TextTag();
			case "TextTagThreeD":
				return new Display.Dimensions.TextTagThreeD();
			case "TextTrim":
				return new Sets.Text.TextTrim();
			case "ToPolar":
				return new Vector.Point.ToPolar();
			case "Torsion":
				return new Curve.Analysis.Torsion();
			case "Transform":
				return new Transform.Util.Transform();
			case "TransformMatrix":
				return new Transform.Util.TransformMatrix();
			case "TransposeMatrix":
				return new Maths.Matrix.TransposeMatrix();
			case "TreeBranch":
				return new Sets.Tree.TreeBranch();
			case "TreeItem":
				return new Sets.Tree.TreeItem();
			case "TreeStatistics":
				return new Sets.Tree.TreeStatistics();
			case "TriangleMapping":
				return new Transform.Affine.TriangleMapping();
			case "TriangleTrigonometry":
				return new Maths.Trig.TriangleTrigonometry();
			case "Triangular":
				return new Vector.Grid.Triangular();
			case "Triangulate":
				return new Mesh.Util.Triangulate();
			case "TrimSolid":
				return new Intersect.Shape.TrimSolid();
			case "TrimTree":
				return new Sets.Tree.TrimTree();
			case "TrimwithBrep":
				return new Intersect.Region.TrimwithBrep();
			case "TrimwithBreps":
				return new Intersect.Region.TrimwithBreps();
			case "TrimwithRegion":
				return new Intersect.Region.TrimwithRegion();
			case "TrimwithRegions":
				return new Intersect.Region.TrimwithRegions();
			case "Truncate":
				return new Maths.Util.Truncate();
			case "TweenCurve":
				return new Curve.Spline.TweenCurve();
			case "Twist":
				return new Transform.Morph.Twist();
			case "TwistedBox":
				return new Transform.Morph.TwistedBox();
			case "TwoByFourJam":
				return new Curve.Primitive.TwoByFourJam();
			case "UnflattenTree":
				return new Sets.Tree.UnflattenTree();
			case "Ungroup":
				return new Transform.Util.Ungroup();
			case "UnifyMesh":
				return new Mesh.Util.UnifyMesh();
			case "UnitVector":
				return new Vector.Vector.UnitVector();
			case "UnitX":
				return new Vector.Vector.UnitX();
			case "UnitY":
				return new Vector.Vector.UnitY();
			case "UnitZ":
				return new Vector.Vector.UnitZ();
			case "Untrim":
				return new Surface.Util.Untrim();
			case "UnweldMesh":
				return new Mesh.Util.UnweldMesh();
			case "ValueTracker":
				return new Display.Graphs.ValueTracker();
			case "Variable":
				return new Maths.Script.Variable();
			case "VBScript":
				return new Maths.Script.VBScript();
			case "VectorTwoPt":
				return new Vector.Vector.VectorTwoPt();
			case "VectorDisplay":
				return new Display.Vector.VectorDisplay();
			case "VectorDisplayEx":
				return new Display.Vector.VectorDisplayEx();
			case "VectorForce":
				return new Vector.Field.VectorForce();
			case "VectorLength":
				return new Vector.Vector.VectorLength();
			case "VectorXYZ":
				return new Vector.Vector.VectorXYZ();
			case "ViewportDisplay":
				return new Display.Viewport.ViewportDisplay();
			case "Volume":
				return new Surface.Analysis.Volume();
			case "VolumeMoments":
				return new Surface.Analysis.VolumeMoments();
			case "Voronoi":
				return new Mesh.Triangulation.Voronoi();
			case "VoronoiThreeD":
				return new Mesh.Triangulation.VoronoiThreeD();
			case "VoronoiCell":
				return new Mesh.Triangulation.VoronoiCell();
			case "VoronoiGroups":
				return new Mesh.Triangulation.VoronoiGroups();
			case "Weave":
				return new Sets.List.Weave();
			case "WeightedAverage":
				return new Maths.Util.WeightedAverage();
			case "WeldMesh":
				return new Mesh.Util.WeldMesh();
			case "XYPlane":
				return new Vector.Plane.XYPlane();
			case "XZPlane":
				return new Vector.Plane.XZPlane();
			case "YZPlane":
				return new Vector.Plane.YZPlane();
			default:
				throw new Error('Selected component is not supported by resthopper.');
		}
	}

	public static getAllComponents(): ResthopperComponent[] {
		return this.names.map(x => this.createComponent(x as GrasshopperComponent));
	}

}

export type GrasshopperComponent =
"FourPointSurface" |
"Absolute" |
"Addition" |
"Addition" |
"AdjustPlane" |
"AlignedDimension" |
"AlignPlane" |
"AlignPlanes" |
"AlignVertices" |
"Amplitude" |
"Angle" |
"AngularDimension" |
"AngularDimensionsMesh" |
"Arc" |
"ArcThreePt" |
"ArcCosine" |
"ArcDimension" |
"ArcSED" |
"ArcSine" |
"ArcTangent" |
"Area" |
"AreaMoments" |
"Average" |
"BarGraph" |
"Barycentric" |
"BendDeform" |
"BezierSpan" |
"BiArc" |
"BlendBox" |
"BlendColours" |
"BlendCurve" |
"BlendCurvePt" |
"BlurMesh" |
"BlurNumbers" |
"BoundarySurfaces" |
"BoundaryVolume" |
"BoundingBox" |
"Bounds" |
"BoundsTwoD" |
"BoxTwoPt" |
"BoxArray" |
"BoxCorners" |
"BoxMapping" |
"BoxMorph" |
"BoxProperties" |
"BoxRectangle" |
"BoxSlits" |
"BreakField" |
"BrepBrep" |
"BrepClosestPoint" |
"BrepCurve" |
"BrepEdges" |
"BrepJoin" |
"BrepLine" |
"BrepPlane" |
"BrepTopology" |
"BrepWireframe" |
"CameraObscura" |
"CapHoles" |
"CapHolesEx" |
"CarthesianProduct" |
"Catenary" |
"CatenaryEx" |
"CenterBox" |
"Centroid" |
"Characters" |
"CharSequence" |
"Circle" |
"CircleThreePt" |
"CircleCNR" |
"CircleFit" |
"CircleTanTan" |
"CircleTanTanTan" |
"CircularDimension" |
"Circumcentre" |
"Clash" |
"CleanTree" |
"CleanTree" |
"Closed" |
"ClosedEdges" |
"ClosestPoint" |
"ClosestPoints" |
"CloudDisplay" |
"CollisionManyMany" |
"CollisionOneMany" |
"ColourCMYK" |
"ColourHSL" |
"ColourHSV" |
"ColourLab" |
"ColourLCH" |
"ColourRGB" |
"ColourRGBf" |
"ColourXYZ" |
"CombineData" |
"CombineDateTime" |
"ComplexArgument" |
"ComplexComponents" |
"ComplexConjugate" |
"ComplexModulus" |
"Compound" |
"Concatenate" |
"Cone" |
"ConnectCurves" |
"ConsecutiveDomains" |
"ConstructDate" |
"ConstructDomain" |
"ConstructDomain" |
"ConstructDomain" |
"ConstructExoticDate" |
"ConstructMatrix" |
"ConstructMesh" |
"ConstructPath" |
"ConstructPlane" |
"ConstructPoint" |
"ConstructSmoothTime" |
"ConstructTime" |
"Contour" |
"Contour" |
"Contourex" |
"Contourex" |
"ControlPointLoft" |
"ControlPoints" |
"ControlPolygon" |
"ConvexEdges" |
"ConvexHull" |
"CoordinateMask" |
"CopyTrim" |
"CoSecant" |
"Cosine" |
"CoTangent" |
"CreateComplex" |
"CreateMaterial" |
"CreateSet" |
"CrossProduct" |
"CrossReference" |
"CScript" |
"Cube" |
"CubeRoot" |
"CullDuplicates" |
"CullFaces" |
"CullIndex" |
"CullNth" |
"CullPattern" |
"CullVertices" |
"Curvature" |
"CurvatureGraph" |
"CurveArray" |
"CurveClosestPoint" |
"CurveCurve" |
"CurveDepth" |
"CurveDomain" |
"CurveFrame" |
"CurveFrames" |
"CurveLine" |
"CurveMiddle" |
"CurveNearestObject" |
"CurveOnSurface" |
"CurvePlane" |
"CurveProximity" |
"CurveSelf" |
"CurveSide" |
"CurveToPolyline" |
"CustomPreview" |
"Cylinder" |
"DashPattern" |
"DateRange" |
"Deconstruct" |
"DeconstructArc" |
"DeconstructBox" |
"DeconstructBrep" |
"DeconstructDate" |
"DeconstructDomain" |
"DeconstructDomain" |
"DeconstructDomain" |
"DeconstructFace" |
"DeconstructMatrix" |
"DeconstructMesh" |
"DeconstructPath" |
"DeconstructPlane" |
"DeconstructVector" |
"DeconstuctRectangle" |
"Degrees" |
"DelaunayEdges" |
"DelaunayMesh" |
"DeleteConsecutive" |
"DeleteFaces" |
"DeleteVertices" |
"Derivatives" |
"Dimensions" |
"DirectionDisplay" |
"Discontinuity" |
"Disjoint" |
"DisjointMesh" |
"Dispatch" |
"DisplayMatrix" |
"Distance" |
"Divide" |
"DivideByDeviation" |
"DivideCurve" |
"DivideDistance" |
"DivideDomain" |
"DivideDomain" |
"DivideLength" |
"DivideSurface" |
"Division" |
"DomainBox" |
"DotDisplay" |
"DotNETCScriptLEGACY" |
"DotNETVBScriptLEGACY" |
"DotProduct" |
"DuplicateData" |
"EdgesfromDirections" |
"EdgesfromFaces" |
"EdgesfromLength" |
"EdgesfromLinearity" |
"EdgesfromPoints" |
"EdgeSurface" |
"Ellipse" |
"EndPoints" |
"Entwine" |
"Epsilon" |
"Equality" |
"Evaluate" |
"EvaluateBox" |
"EvaluateCurve" |
"EvaluateField" |
"EvaluateLength" |
"EvaluateSurface" |
"Explode" |
"ExplodeTree" |
"Exposure" |
"Expression" |
"ExtendCurve" |
"Extremes" |
"Extremes" |
"Extrude" |
"ExtrudeAlong" |
"ExtrudeAngled" |
"ExtrudeLinear" |
"ExtrudePoint" |
"FaceBoundaries" |
"FaceCircles" |
"FaceNormals" |
"FacetDome" |
"Factorial" |
"Fibonacci" |
"FieldLine" |
"Fillet" |
"Fillet" |
"FilletDistance" |
"FilletEdge" |
"FindDomain" |
"Findsimilarmember" |
"FitCurve" |
"FitLine" |
"FitLoft" |
"FlattenTree" |
"Flip" |
"FlipCurve" |
"FlipMatrix" |
"FlipMesh" |
"FlipPlane" |
"Flow" |
"Format" |
"FragmentPatch" |
"GateAnd" |
"GateMajority" |
"GateNand" |
"GateNor" |
"GateNot" |
"GateOr" |
"GateXnor" |
"GateXor" |
"Geodesic" |
"GhPythonScript" |
"GoldenRatio" |
"GraftTree" |
"Group" |
"Hexagonal" |
"HorizontalFrame" |
"HorizontalFrames" |
"ImageGallery" |
"Incentre" |
"InCircle" |
"Includes" |
"InEllipse" |
"InsertItems" |
"IntegerDivision" |
"Interpolate" |
"Interpolatedata" |
"InterpolateDate" |
"Interpolatet" |
"InverseTransform" |
"InvertMatrix" |
"IsoCurve" |
"Isotrim" |
"IsoVist" |
"IsoVistRay" |
"IsPlanar" |
"ItemIndex" |
"Jitter" |
"JoinCurves" |
"Kaleidoscope" |
"KeyValueSearch" |
"KinkyCurve" |
"KnotVector" |
"LargerThan" |
"Legend" |
"Length" |
"LengthDomain" |
"LengthParameter" |
"Line" |
"LineTwoPlane" |
"LineFourPt" |
"LinearArray" |
"LinearDimension" |
"LineCharge" |
"LineDimension" |
"LineLine" |
"LineLine" |
"LinePlane" |
"LinePt" |
"LineSDL" |
"ListItem" |
"ListLength" |
"Loft" |
"LoftOptions" |
"LoftOptions" |
"Logarithm" |
"LogN" |
"LongestList" |
"Maelstrom" |
"MakeTwoD" |
"MakeTwoDParallelView" |
"MakeTwoDPerspectiveView" |
"MakeTwoDRhinoView" |
"MaptoSurface" |
"MarkerDimension" |
"MassAddition" |
"MassMultiplication" |
"MatchCurve" |
"MatchText" |
"MatchTree" |
"Maximum" |
"MemberIndex" |
"Merge" |
"Merge" |
"MergeZeroThree" |
"MergeZeroFour" |
"MergeZeroFive" |
"MergeZeroSix" |
"MergeZeroEight" |
"MergeOneZero" |
"MergeFaces" |
"MergeFields" |
"MergeGroup" |
"MergeMultiple" |
"MeshBox" |
"MeshBrep" |
"MeshClosestPoint" |
"MeshColours" |
"MeshCurve" |
"MeshDepth" |
"MeshDifference" |
"MeshEdges" |
"MeshEval" |
"MeshfromSubD" |
"MeshInclusion" |
"MeshIntersection" |
"MeshJoin" |
"MeshMesh" |
"MeshPlane" |
"MeshPlane" |
"MeshQuad" |
"MeshRay" |
"MeshShadow" |
"MeshSphere" |
"MeshSphereEx" |
"MeshSplit" |
"MeshSplitPlane" |
"MeshSpray" |
"MeshSurface" |
"MeshTriangle" |
"MeshUnion" |
"MetaBall" |
"MetaBallt" |
"MetaBalltCustom" |
"Minimum" |
"Mirror" |
"MirrorCurve" |
"MirrorSurface" |
"ModifiedArc" |
"Modulus" |
"Move" |
"MoveAwayFrom" |
"MoveToPlane" |
"MultipleCurves" |
"Multiplication" |
"Multiply" |
"Naturallogarithm" |
"Naturallogarithm" |
"Negative" |
"NetworkSurface" |
"NullItem" |
"NumberstoPoints" |
"NurbsCurve" |
"NurbsCurvePWK" |
"Occlusion" |
"OcTree" |
"OffsetCurve" |
"OffsetCurveLoose" |
"OffsetLooseThreeD" |
"OffsetonSrf" |
"OffsetPolyline" |
"OffsetSurface" |
"OffsetSurfaceLoose" |
"OneOverX" |
"Orient" |
"OrientDirection" |
"Orthocentre" |
"OsculatingCircles" |
"PartitionList" |
"Patch" |
"PathCompare" |
"PathMapper" |
"PerpendicularDisplay" |
"PerpFrame" |
"PerpFrames" |
"Pi" |
"PicknChoose" |
"PieChart" |
"Pipe" |
"PipeVariable" |
"Planar" |
"PlaneThreePt" |
"PlaneClosestPoint" |
"PlaneCoordinates" |
"PlaneFit" |
"PlaneNormal" |
"PlaneOffset" |
"PlaneOrigin" |
"PlanePlane" |
"PlanePlanePlane" |
"PlaneRegion" |
"PlaneSurface" |
"PlaneThroughShape" |
"PointCharge" |
"PointCylindrical" |
"PointDeform" |
"PointGroups" |
"PointInBrep" |
"PointInBreps" |
"PointInCurve" |
"PointinCurves" |
"PointInTrim" |
"PointList" |
"PointList" |
"PointOnCurve" |
"PointOrder" |
"PointOriented" |
"PointPolar" |
"PointstoNumbers" |
"PolarArray" |
"PolyArc" |
"Polygon" |
"PolygonCenter" |
"PolygonEdge" |
"PolyLine" |
"PolylineCollapse" |
"PopulateTwoD" |
"PopulateThreeD" |
"PopulateGeometry" |
"Power" |
"PowerofOneZero" |
"PowerofTwo" |
"PowerofE" |
"PrincipalCurvature" |
"Project" |
"Project" |
"ProjectAlong" |
"ProjectPoint" |
"ProximityTwoD" |
"ProximityThreeD" |
"PruneTree" |
"PullCurve" |
"PullPoint" |
"Quadrangulate" |
"QuadSphere" |
"QuadTree" |
"QuickGraph" |
"Radial" |
"Radians" |
"RailRevolution" |
"Random" |
"RandomEx" |
"RandomReduce" |
"Range" |
"RebuildCurve" |
"Rectangle" |
"RectangleTwoPt" |
"RectangleThreePt" |
"RectangleMapping" |
"Rectangular" |
"RectangularArray" |
"Reduce" |
"RegionDifference" |
"RegionIntersection" |
"RegionSlits" |
"RegionUnion" |
"RelativeDifferences" |
"RelativeItem" |
"RelativeItems" |
"RemapNumbers" |
"RepeatData" |
"ReplaceItems" |
"ReplaceMembers" |
"ReplaceNulls" |
"ReplacePaths" |
"ReplaceText" |
"Retrim" |
"Reverse" |
"ReverseList" |
"Revolution" |
"RightTrigonometry" |
"Rotate" |
"Rotate" |
"RotateThreeD" |
"RotateAxis" |
"RotateDirection" |
"RotatePlane" |
"Round" |
"RuledSurface" |
"SanityXForm" |
"ScalarDisplay" |
"Scale" |
"ScaleNU" |
"Seam" |
"Secant" |
"SegmentLengths" |
"Sequence" |
"SerialDimension" |
"Series" |
"SeriesAddition" |
"SetDifference" |
"SetDifferenceS" |
"SetIntersection" |
"SetMajority" |
"SettingsCustom" |
"SettingsQuality" |
"SettingsSpeed" |
"SetUnion" |
"ShapeInBrep" |
"Shatter" |
"Shear" |
"ShearAngle" |
"ShiftList" |
"ShiftPaths" |
"ShortestList" |
"SiftPattern" |
"Similarity" |
"SimpleMesh" |
"SimplifyCurve" |
"SimplifyTree" |
"Sinc" |
"Sine" |
"SmallerThan" |
"SmoothMesh" |
"SmoothNumbers" |
"SmoothPolyline" |
"SolarIncidence" |
"SolidDifference" |
"SolidIntersection" |
"SolidUnion" |
"SortAlongCurve" |
"SortList" |
"SortPoints" |
"SortText" |
"SpatialDeform" |
"SpatialDeformcustom" |
"Sphere" |
"SphereFourPt" |
"SphereFit" |
"SpinForce" |
"Split" |
"SplitAHSL" |
"SplitAHSV" |
"SplitARGB" |
"SplitBrep" |
"SplitBrepMultiple" |
"SplitGroup" |
"SplitList" |
"SplitTree" |
"SplitwithBrep" |
"SplitwithBreps" |
"Splop" |
"Sporph" |
"Square" |
"Square" |
"SquareRoot" |
"StackData" |
"StreamFilter" |
"StreamGate" |
"Stretch" |
"SubCurve" |
"SubDBox" |
"SubDControlPolygon" |
"SubDEdges" |
"SubDFaces" |
"SubDfromMesh" |
"SubDVertices" |
"SubList" |
"SubSet" |
"Substrate" |
"Subtraction" |
"SumSurface" |
"SurfaceBox" |
"SurfaceClosestPoint" |
"SurfaceCurvature" |
"SurfaceCurve" |
"SurfaceFrames" |
"SurfaceFromPoints" |
"SurfaceInflection" |
"SurfaceLine" |
"SurfaceMorph" |
"SurfacePoints" |
"SurfaceSplit" |
"SwapColumns" |
"SwapRows" |
"SweepOne" |
"SweepTwo" |
"SwingArc" |
"SymbolAdvanced" |
"SymbolDisplay" |
"SymbolSimple" |
"Tangent" |
"TangentArcs" |
"TangentCurve" |
"TangentLines" |
"TangentLinesEx" |
"TangentLinesIn" |
"Taper" |
"TensorDisplay" |
"TestCrash" |
"TextCase" |
"TextDistance" |
"TextFragment" |
"TextJoin" |
"TextLength" |
"TextSplit" |
"TextTag" |
"TextTagThreeD" |
"TextTrim" |
"ToPolar" |
"Torsion" |
"Transform" |
"TransformMatrix" |
"TransposeMatrix" |
"TreeBranch" |
"TreeItem" |
"TreeStatistics" |
"TriangleMapping" |
"TriangleTrigonometry" |
"Triangular" |
"Triangulate" |
"TrimSolid" |
"TrimTree" |
"TrimwithBrep" |
"TrimwithBreps" |
"TrimwithRegion" |
"TrimwithRegions" |
"Truncate" |
"TweenCurve" |
"Twist" |
"TwistedBox" |
"TwoByFourJam" |
"UnflattenTree" |
"Ungroup" |
"UnifyMesh" |
"UnitVector" |
"UnitX" |
"UnitY" |
"UnitZ" |
"Untrim" |
"UnweldMesh" |
"ValueTracker" |
"Variable" |
"VBScript" |
"VectorTwoPt" |
"VectorDisplay" |
"VectorDisplayEx" |
"VectorForce" |
"VectorLength" |
"VectorXYZ" |
"ViewportDisplay" |
"Volume" |
"VolumeMoments" |
"Voronoi" |
"VoronoiThreeD" |
"VoronoiCell" |
"VoronoiGroups" |
"Weave" |
"WeightedAverage" |
"WeldMesh" |
"XYPlane" |
"XZPlane" |
"YZPlane"