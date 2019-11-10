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
		"ConstructExoticDate",
		"ConstructMatrix",
		"ConstructMesh",
		"ConstructPath",
		"ConstructPlane",
		"ConstructPoint",
		"ConstructSmoothTime",
		"ConstructTime",
		"Contour",
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
		"LinePlane",
		"LinePt",
		"LineSDL",
		"ListItem",
		"ListLength",
		"Loft",
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
			case "Contourex":
				return new Intersect.Mathematical.Contourex();
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

import FourPointSurface from './components/Surface/Freeform/FourPointSurface';
import Absolute from './components/Maths/Operators/Absolute';
import Addition from './components/Maths/Operators/Addition';
import AdjustPlane from './components/Vector/Plane/AdjustPlane';
import AlignedDimension from './components/Display/Dimensions/AlignedDimension';
import AlignPlane from './components/Vector/Plane/AlignPlane';
import AlignPlanes from './components/Vector/Plane/AlignPlanes';
import AlignVertices from './components/Mesh/Util/AlignVertices';
import Amplitude from './components/Vector/Vector/Amplitude';
import Angle from './components/Vector/Vector/Angle';
import AngularDimension from './components/Display/Dimensions/AngularDimension';
import AngularDimensionsMesh from './components/Display/Dimensions/AngularDimensionsMesh';
import Arc from './components/Curve/Primitive/Arc';
import ArcThreePt from './components/Curve/Primitive/ArcThreePt';
import ArcCosine from './components/Maths/Trig/ArcCosine';
import ArcDimension from './components/Display/Dimensions/ArcDimension';
import ArcSED from './components/Curve/Primitive/ArcSED';
import ArcSine from './components/Maths/Trig/ArcSine';
import ArcTangent from './components/Maths/Trig/ArcTangent';
import Area from './components/Surface/Analysis/Area';
import AreaMoments from './components/Surface/Analysis/AreaMoments';
import Average from './components/Maths/Util/Average';
import BarGraph from './components/Display/Graphs/BarGraph';
import Barycentric from './components/Vector/Point/Barycentric';
import BendDeform from './components/Transform/Morph/BendDeform';
import BezierSpan from './components/Curve/Spline/BezierSpan';
import BiArc from './components/Curve/Primitive/BiArc';
import BlendBox from './components/Transform/Morph/BlendBox';
import BlendColours from './components/Vector/Colour/BlendColours';
import BlendCurve from './components/Curve/Spline/BlendCurve';
import BlendCurvePt from './components/Curve/Spline/BlendCurvePt';
import BlurMesh from './components/Mesh/Util/BlurMesh';
import BlurNumbers from './components/Maths/Util/BlurNumbers';
import BoundarySurfaces from './components/Surface/Freeform/BoundarySurfaces';
import BoundaryVolume from './components/Intersect/Shape/BoundaryVolume';
import BoundingBox from './components/Surface/Primitive/BoundingBox';
import Bounds from './components/Maths/Domain/Bounds';
import BoundsTwoD from './components/Maths/Domain/BoundsTwoD';
import BoxTwoPt from './components/Surface/Primitive/BoxTwoPt';
import BoxArray from './components/Transform/Array/BoxArray';
import BoxCorners from './components/Surface/Analysis/BoxCorners';
import BoxMapping from './components/Transform/Affine/BoxMapping';
import BoxMorph from './components/Transform/Morph/BoxMorph';
import BoxProperties from './components/Surface/Analysis/BoxProperties';
import BoxRectangle from './components/Surface/Primitive/BoxRectangle';
import BoxSlits from './components/Intersect/Shape/BoxSlits';
import BreakField from './components/Vector/Field/BreakField';
import BrepBrep from './components/Intersect/Physical/BrepBrep';
import BrepClosestPoint from './components/Surface/Analysis/BrepClosestPoint';
import BrepCurve from './components/Intersect/Physical/BrepCurve';
import BrepEdges from './components/Surface/Analysis/BrepEdges';
import BrepJoin from './components/Surface/Util/BrepJoin';
import BrepLine from './components/Intersect/Mathematical/BrepLine';
import BrepPlane from './components/Intersect/Mathematical/BrepPlane';
import BrepTopology from './components/Surface/Analysis/BrepTopology';
import BrepWireframe from './components/Surface/Analysis/BrepWireframe';
import CameraObscura from './components/Transform/Affine/CameraObscura';
import CapHoles from './components/Surface/Util/CapHoles';
import CapHolesEx from './components/Surface/Util/CapHolesEx';
import CarthesianProduct from './components/Sets/Sets/CarthesianProduct';
import Catenary from './components/Curve/Spline/Catenary';
import CatenaryEx from './components/Curve/Spline/CatenaryEx';
import CenterBox from './components/Surface/Primitive/CenterBox';
import Centroid from './components/Maths/Trig/Centroid';
import Characters from './components/Sets/Text/Characters';
import CharSequence from './components/Sets/Sequence/CharSequence';
import Circle from './components/Curve/Primitive/Circle';
import CircleThreePt from './components/Curve/Primitive/CircleThreePt';
import CircleCNR from './components/Curve/Primitive/CircleCNR';
import CircleFit from './components/Curve/Primitive/CircleFit';
import CircleTanTan from './components/Curve/Primitive/CircleTanTan';
import CircleTanTanTan from './components/Curve/Primitive/CircleTanTanTan';
import CircularDimension from './components/Display/Dimensions/CircularDimension';
import Circumcentre from './components/Maths/Trig/Circumcentre';
import Clash from './components/Intersect/Physical/Clash';
import CleanTree from './components/Sets/Tree/CleanTree';
import Closed from './components/Curve/Analysis/Closed';
import ClosedEdges from './components/Surface/Util/ClosedEdges';
import ClosestPoint from './components/Vector/Point/ClosestPoint';
import ClosestPoints from './components/Vector/Point/ClosestPoints';
import CloudDisplay from './components/Display/Preview/CloudDisplay';
import CollisionManyMany from './components/Intersect/Physical/CollisionManyMany';
import CollisionOneMany from './components/Intersect/Physical/CollisionOneMany';
import ColourCMYK from './components/Display/Colour/ColourCMYK';
import ColourHSL from './components/Display/Colour/ColourHSL';
import ColourHSV from './components/Display/Colour/ColourHSV';
import ColourLab from './components/Display/Colour/ColourLab';
import ColourLCH from './components/Display/Colour/ColourLCH';
import ColourRGB from './components/Display/Colour/ColourRGB';
import ColourRGBf from './components/Display/Colour/ColourRGBf';
import ColourXYZ from './components/Display/Colour/ColourXYZ';
import CombineData from './components/Sets/List/CombineData';
import CombineDateTime from './components/Maths/Time/CombineDateTime';
import ComplexArgument from './components/Maths/Util/ComplexArgument';
import ComplexComponents from './components/Maths/Util/ComplexComponents';
import ComplexConjugate from './components/Maths/Util/ComplexConjugate';
import ComplexModulus from './components/Maths/Util/ComplexModulus';
import Compound from './components/Transform/Util/Compound';
import Concatenate from './components/Sets/Text/Concatenate';
import Cone from './components/Surface/Primitive/Cone';
import ConnectCurves from './components/Curve/Spline/ConnectCurves';
import ConsecutiveDomains from './components/Maths/Domain/ConsecutiveDomains';
import ConstructDate from './components/Maths/Time/ConstructDate';
import ConstructDomain from './components/Maths/Domain/ConstructDomain';
import ConstructExoticDate from './components/Maths/Time/ConstructExoticDate';
import ConstructMatrix from './components/Maths/Matrix/ConstructMatrix';
import ConstructMesh from './components/Mesh/Primitive/ConstructMesh';
import ConstructPath from './components/Sets/Tree/ConstructPath';
import ConstructPlane from './components/Vector/Plane/ConstructPlane';
import ConstructPoint from './components/Vector/Point/ConstructPoint';
import ConstructSmoothTime from './components/Maths/Time/ConstructSmoothTime';
import ConstructTime from './components/Maths/Time/ConstructTime';
import Contour from './components/Intersect/Mathematical/Contour';
import Contourex from './components/Intersect/Mathematical/Contourex';
import ControlPointLoft from './components/Surface/Freeform/ControlPointLoft';
import ControlPoints from './components/Curve/Analysis/ControlPoints';
import ControlPolygon from './components/Curve/Analysis/ControlPolygon';
import ConvexEdges from './components/Surface/Util/ConvexEdges';
import ConvexHull from './components/Mesh/Triangulation/ConvexHull';
import CoordinateMask from './components/Vector/Point/CoordinateMask';
import CopyTrim from './components/Surface/Util/CopyTrim';
import CoSecant from './components/Maths/Trig/CoSecant';
import Cosine from './components/Maths/Trig/Cosine';
import CoTangent from './components/Maths/Trig/CoTangent';
import CreateComplex from './components/Maths/Util/CreateComplex';
import CreateMaterial from './components/Display/Preview/CreateMaterial';
import CreateSet from './components/Sets/Sets/CreateSet';
import CrossProduct from './components/Vector/Vector/CrossProduct';
import CrossReference from './components/Sets/List/CrossReference';
import CScript from './components/Maths/Script/CScript';
import Cube from './components/Maths/Polynomials/Cube';
import CubeRoot from './components/Maths/Polynomials/CubeRoot';
import CullDuplicates from './components/Vector/Point/CullDuplicates';
import CullFaces from './components/Mesh/Util/CullFaces';
import CullIndex from './components/Sets/Sequence/CullIndex';
import CullNth from './components/Sets/Sequence/CullNth';
import CullPattern from './components/Sets/Sequence/CullPattern';
import CullVertices from './components/Mesh/Util/CullVertices';
import Curvature from './components/Curve/Analysis/Curvature';
import CurvatureGraph from './components/Curve/Analysis/CurvatureGraph';
import CurveArray from './components/Transform/Array/CurveArray';
import CurveClosestPoint from './components/Curve/Analysis/CurveClosestPoint';
import CurveCurve from './components/Intersect/Physical/CurveCurve';
import CurveDepth from './components/Curve/Analysis/CurveDepth';
import CurveDomain from './components/Curve/Analysis/CurveDomain';
import CurveFrame from './components/Curve/Analysis/CurveFrame';
import CurveFrames from './components/Curve/Division/CurveFrames';
import CurveLine from './components/Intersect/Mathematical/CurveLine';
import CurveMiddle from './components/Curve/Analysis/CurveMiddle';
import CurveNearestObject from './components/Curve/Analysis/CurveNearestObject';
import CurveOnSurface from './components/Curve/Spline/CurveOnSurface';
import CurvePlane from './components/Intersect/Mathematical/CurvePlane';
import CurveProximity from './components/Curve/Analysis/CurveProximity';
import CurveSelf from './components/Intersect/Physical/CurveSelf';
import CurveSide from './components/Curve/Analysis/CurveSide';
import CurveToPolyline from './components/Curve/Util/CurveToPolyline';
import CustomPreview from './components/Display/Preview/CustomPreview';
import Cylinder from './components/Surface/Primitive/Cylinder';
import DashPattern from './components/Curve/Division/DashPattern';
import DateRange from './components/Maths/Time/DateRange';
import Deconstruct from './components/Vector/Point/Deconstruct';
import DeconstructArc from './components/Curve/Analysis/DeconstructArc';
import DeconstructBox from './components/Surface/Analysis/DeconstructBox';
import DeconstructBrep from './components/Surface/Analysis/DeconstructBrep';
import DeconstructDate from './components/Maths/Time/DeconstructDate';
import DeconstructDomain from './components/Maths/Domain/DeconstructDomain';
import DeconstructFace from './components/Mesh/Analysis/DeconstructFace';
import DeconstructMatrix from './components/Maths/Matrix/DeconstructMatrix';
import DeconstructMesh from './components/Mesh/Analysis/DeconstructMesh';
import DeconstructPath from './components/Sets/Tree/DeconstructPath';
import DeconstructPlane from './components/Vector/Plane/DeconstructPlane';
import DeconstructVector from './components/Vector/Vector/DeconstructVector';
import DeconstuctRectangle from './components/Curve/Analysis/DeconstuctRectangle';
import Degrees from './components/Maths/Trig/Degrees';
import DelaunayEdges from './components/Mesh/Triangulation/DelaunayEdges';
import DelaunayMesh from './components/Mesh/Triangulation/DelaunayMesh';
import DeleteConsecutive from './components/Sets/Sets/DeleteConsecutive';
import DeleteFaces from './components/Mesh/Util/DeleteFaces';
import DeleteVertices from './components/Mesh/Util/DeleteVertices';
import Derivatives from './components/Curve/Analysis/Derivatives';
import Dimensions from './components/Surface/Analysis/Dimensions';
import DirectionDisplay from './components/Vector/Field/DirectionDisplay';
import Discontinuity from './components/Curve/Analysis/Discontinuity';
import Disjoint from './components/Sets/Sets/Disjoint';
import DisjointMesh from './components/Mesh/Util/DisjointMesh';
import Dispatch from './components/Sets/List/Dispatch';
import DisplayMatrix from './components/Maths/Matrix/DisplayMatrix';
import Distance from './components/Vector/Point/Distance';
import Divide from './components/Vector/Vector/Divide';
import DivideByDeviation from './components/Curve/Division/DivideByDeviation';
import DivideCurve from './components/Curve/Division/DivideCurve';
import DivideDistance from './components/Curve/Division/DivideDistance';
import DivideDomain from './components/Maths/Domain/DivideDomain';
import DivideLength from './components/Curve/Division/DivideLength';
import DivideSurface from './components/Surface/Util/DivideSurface';
import Division from './components/Maths/Operators/Division';
import DomainBox from './components/Surface/Primitive/DomainBox';
import DotDisplay from './components/Display/Preview/DotDisplay';
import DotNETCScriptLEGACY from './components/Maths/Script/DotNETCScriptLEGACY';
import DotNETVBScriptLEGACY from './components/Maths/Script/DotNETVBScriptLEGACY';
import DotProduct from './components/Vector/Vector/DotProduct';
import DuplicateData from './components/Sets/Sequence/DuplicateData';
import EdgesfromDirections from './components/Surface/Util/EdgesfromDirections';
import EdgesfromFaces from './components/Surface/Util/EdgesfromFaces';
import EdgesfromLength from './components/Surface/Util/EdgesfromLength';
import EdgesfromLinearity from './components/Surface/Util/EdgesfromLinearity';
import EdgesfromPoints from './components/Surface/Util/EdgesfromPoints';
import EdgeSurface from './components/Surface/Freeform/EdgeSurface';
import Ellipse from './components/Curve/Primitive/Ellipse';
import EndPoints from './components/Curve/Analysis/EndPoints';
import Entwine from './components/Sets/Tree/Entwine';
import Epsilon from './components/Maths/Util/Epsilon';
import Equality from './components/Maths/Operators/Equality';
import Evaluate from './components/Maths/Script/Evaluate';
import EvaluateBox from './components/Surface/Analysis/EvaluateBox';
import EvaluateCurve from './components/Curve/Analysis/EvaluateCurve';
import EvaluateField from './components/Vector/Field/EvaluateField';
import EvaluateLength from './components/Curve/Analysis/EvaluateLength';
import EvaluateSurface from './components/Surface/Analysis/EvaluateSurface';
import Explode from './components/Curve/Util/Explode';
import ExplodeTree from './components/Sets/Tree/ExplodeTree';
import Exposure from './components/Mesh/Util/Exposure';
import Expression from './components/Maths/Script/Expression';
import ExtendCurve from './components/Curve/Util/ExtendCurve';
import Extremes from './components/Maths/Util/Extremes';
import Extrude from './components/Surface/Freeform/Extrude';
import ExtrudeAlong from './components/Surface/Freeform/ExtrudeAlong';
import ExtrudeAngled from './components/Surface/Freeform/ExtrudeAngled';
import ExtrudeLinear from './components/Surface/Freeform/ExtrudeLinear';
import ExtrudePoint from './components/Surface/Freeform/ExtrudePoint';
import FaceBoundaries from './components/Mesh/Analysis/FaceBoundaries';
import FaceCircles from './components/Mesh/Analysis/FaceCircles';
import FaceNormals from './components/Mesh/Analysis/FaceNormals';
import FacetDome from './components/Mesh/Triangulation/FacetDome';
import Factorial from './components/Maths/Operators/Factorial';
import Fibonacci from './components/Sets/Sequence/Fibonacci';
import FieldLine from './components/Vector/Field/FieldLine';
import Fillet from './components/Curve/Util/Fillet';
import FilletDistance from './components/Curve/Util/FilletDistance';
import FilletEdge from './components/Surface/Util/FilletEdge';
import FindDomain from './components/Maths/Domain/FindDomain';
import Findsimilarmember from './components/Sets/Sets/Findsimilarmember';
import FitCurve from './components/Curve/Util/FitCurve';
import FitLine from './components/Curve/Primitive/FitLine';
import FitLoft from './components/Surface/Freeform/FitLoft';
import FlattenTree from './components/Sets/Tree/FlattenTree';
import Flip from './components/Surface/Util/Flip';
import FlipCurve from './components/Curve/Util/FlipCurve';
import FlipMatrix from './components/Sets/Tree/FlipMatrix';
import FlipMesh from './components/Mesh/Util/FlipMesh';
import FlipPlane from './components/Vector/Plane/FlipPlane';
import Flow from './components/Transform/Morph/Flow';
import Format from './components/Sets/Text/Format';
import FragmentPatch from './components/Surface/Freeform/FragmentPatch';
import GateAnd from './components/Maths/Operators/GateAnd';
import GateMajority from './components/Maths/Operators/GateMajority';
import GateNand from './components/Maths/Operators/GateNand';
import GateNor from './components/Maths/Operators/GateNor';
import GateNot from './components/Maths/Operators/GateNot';
import GateOr from './components/Maths/Operators/GateOr';
import GateXnor from './components/Maths/Operators/GateXnor';
import GateXor from './components/Maths/Operators/GateXor';
import Geodesic from './components/Curve/Spline/Geodesic';
import GhPythonScript from './components/Maths/Script/GhPythonScript';
import GoldenRatio from './components/Maths/Util/GoldenRatio';
import GraftTree from './components/Sets/Tree/GraftTree';
import Group from './components/Transform/Util/Group';
import Hexagonal from './components/Vector/Grid/Hexagonal';
import HorizontalFrame from './components/Curve/Analysis/HorizontalFrame';
import HorizontalFrames from './components/Curve/Division/HorizontalFrames';
import ImageGallery from './components/Display/Graphs/ImageGallery';
import Incentre from './components/Maths/Trig/Incentre';
import InCircle from './components/Curve/Primitive/InCircle';
import Includes from './components/Maths/Domain/Includes';
import InEllipse from './components/Curve/Primitive/InEllipse';
import InsertItems from './components/Sets/List/InsertItems';
import IntegerDivision from './components/Maths/Operators/IntegerDivision';
import Interpolate from './components/Curve/Spline/Interpolate';
import Interpolatedata from './components/Maths/Util/Interpolatedata';
import InterpolateDate from './components/Maths/Time/InterpolateDate';
import Interpolatet from './components/Curve/Spline/Interpolatet';
import InverseTransform from './components/Transform/Util/InverseTransform';
import InvertMatrix from './components/Maths/Matrix/InvertMatrix';
import IsoCurve from './components/Curve/Spline/IsoCurve';
import Isotrim from './components/Surface/Util/Isotrim';
import IsoVist from './components/Intersect/Mathematical/IsoVist';
import IsoVistRay from './components/Intersect/Mathematical/IsoVistRay';
import IsPlanar from './components/Surface/Analysis/IsPlanar';
import ItemIndex from './components/Sets/List/ItemIndex';
import Jitter from './components/Sets/Sequence/Jitter';
import JoinCurves from './components/Curve/Util/JoinCurves';
import Kaleidoscope from './components/Transform/Array/Kaleidoscope';
import KeyValueSearch from './components/Sets/Sets/KeyValueSearch';
import KinkyCurve from './components/Curve/Spline/KinkyCurve';
import KnotVector from './components/Curve/Spline/KnotVector';
import LargerThan from './components/Maths/Operators/LargerThan';
import Legend from './components/Display/Graphs/Legend';
import Length from './components/Curve/Analysis/Length';
import LengthDomain from './components/Curve/Analysis/LengthDomain';
import LengthParameter from './components/Curve/Analysis/LengthParameter';
import Line from './components/Curve/Primitive/Line';
import LineTwoPlane from './components/Curve/Primitive/LineTwoPlane';
import LineFourPt from './components/Curve/Primitive/LineFourPt';
import LinearArray from './components/Transform/Array/LinearArray';
import LinearDimension from './components/Display/Dimensions/LinearDimension';
import LineCharge from './components/Vector/Field/LineCharge';
import LineDimension from './components/Display/Dimensions/LineDimension';
import LineLine from './components/Intersect/Mathematical/LineLine';
import LinePlane from './components/Intersect/Mathematical/LinePlane';
import LinePt from './components/Vector/Plane/LinePt';
import LineSDL from './components/Curve/Primitive/LineSDL';
import ListItem from './components/Sets/List/ListItem';
import ListLength from './components/Sets/List/ListLength';
import Loft from './components/Surface/Freeform/Loft';
import LoftOptions from './components/Surface/Freeform/LoftOptions';
import Logarithm from './components/Maths/Polynomials/Logarithm';
import LogN from './components/Maths/Polynomials/LogN';
import LongestList from './components/Sets/List/LongestList';
import Maelstrom from './components/Transform/Morph/Maelstrom';
import MakeTwoD from './components/Display/Dimensions/MakeTwoD';
import MakeTwoDParallelView from './components/Display/Dimensions/MakeTwoDParallelView';
import MakeTwoDPerspectiveView from './components/Display/Dimensions/MakeTwoDPerspectiveView';
import MakeTwoDRhinoView from './components/Display/Dimensions/MakeTwoDRhinoView';
import MaptoSurface from './components/Transform/Morph/MaptoSurface';
import MarkerDimension from './components/Display/Dimensions/MarkerDimension';
import MassAddition from './components/Maths/Operators/MassAddition';
import MassMultiplication from './components/Maths/Operators/MassMultiplication';
import MatchCurve from './components/Curve/Spline/MatchCurve';
import MatchText from './components/Sets/Text/MatchText';
import MatchTree from './components/Sets/Tree/MatchTree';
import Maximum from './components/Maths/Util/Maximum';
import MemberIndex from './components/Sets/Sets/MemberIndex';
import Merge from './components/Sets/Tree/Merge';
import MergeZeroThree from './components/Sets/Tree/MergeZeroThree';
import MergeZeroFour from './components/Sets/Tree/MergeZeroFour';
import MergeZeroFive from './components/Sets/Tree/MergeZeroFive';
import MergeZeroSix from './components/Sets/Tree/MergeZeroSix';
import MergeZeroEight from './components/Sets/Tree/MergeZeroEight';
import MergeOneZero from './components/Sets/Tree/MergeOneZero';
import MergeFaces from './components/Surface/Util/MergeFaces';
import MergeFields from './components/Vector/Field/MergeFields';
import MergeGroup from './components/Transform/Util/MergeGroup';
import MergeMultiple from './components/Sets/Tree/MergeMultiple';
import MeshBox from './components/Mesh/Primitive/MeshBox';
import MeshBrep from './components/Mesh/Util/MeshBrep';
import MeshClosestPoint from './components/Mesh/Analysis/MeshClosestPoint';
import MeshColours from './components/Mesh/Primitive/MeshColours';
import MeshCurve from './components/Intersect/Physical/MeshCurve';
import MeshDepth from './components/Mesh/Analysis/MeshDepth';
import MeshDifference from './components/Intersect/Shape/MeshDifference';
import MeshEdges from './components/Mesh/Analysis/MeshEdges';
import MeshEval from './components/Mesh/Analysis/MeshEval';
import MeshfromSubD from './components/Surface/SubD/MeshfromSubD';
import MeshInclusion from './components/Mesh/Analysis/MeshInclusion';
import MeshIntersection from './components/Intersect/Shape/MeshIntersection';
import MeshJoin from './components/Mesh/Util/MeshJoin';
import MeshMesh from './components/Intersect/Physical/MeshMesh';
import MeshPlane from './components/Intersect/Mathematical/MeshPlane';
import MeshQuad from './components/Mesh/Primitive/MeshQuad';
import MeshRay from './components/Intersect/Mathematical/MeshRay';
import MeshShadow from './components/Mesh/Util/MeshShadow';
import MeshSphere from './components/Mesh/Primitive/MeshSphere';
import MeshSphereEx from './components/Mesh/Primitive/MeshSphereEx';
import MeshSplit from './components/Intersect/Shape/MeshSplit';
import MeshSplitPlane from './components/Mesh/Util/MeshSplitPlane';
import MeshSpray from './components/Mesh/Primitive/MeshSpray';
import MeshSurface from './components/Mesh/Util/MeshSurface';
import MeshTriangle from './components/Mesh/Primitive/MeshTriangle';
import MeshUnion from './components/Intersect/Shape/MeshUnion';
import MetaBall from './components/Mesh/Triangulation/MetaBall';
import MetaBallt from './components/Mesh/Triangulation/MetaBallt';
import MetaBalltCustom from './components/Mesh/Triangulation/MetaBalltCustom';
import Minimum from './components/Maths/Util/Minimum';
import Mirror from './components/Transform/Euclidean/Mirror';
import MirrorCurve from './components/Transform/Morph/MirrorCurve';
import MirrorSurface from './components/Transform/Morph/MirrorSurface';
import ModifiedArc from './components/Curve/Primitive/ModifiedArc';
import Modulus from './components/Maths/Operators/Modulus';
import Move from './components/Transform/Euclidean/Move';
import MoveAwayFrom from './components/Transform/Euclidean/MoveAwayFrom';
import MoveToPlane from './components/Transform/Euclidean/MoveToPlane';
import MultipleCurves from './components/Intersect/Physical/MultipleCurves';
import Multiplication from './components/Maths/Operators/Multiplication';
import Multiply from './components/Vector/Vector/Multiply';
import Naturallogarithm from './components/Maths/Polynomials/Naturallogarithm';
import Negative from './components/Maths/Operators/Negative';
import NetworkSurface from './components/Surface/Freeform/NetworkSurface';
import NullItem from './components/Sets/List/NullItem';
import NumberstoPoints from './components/Vector/Point/NumberstoPoints';
import NurbsCurve from './components/Curve/Spline/NurbsCurve';
import NurbsCurvePWK from './components/Curve/Spline/NurbsCurvePWK';
import Occlusion from './components/Mesh/Util/Occlusion';
import OcTree from './components/Mesh/Triangulation/OcTree';
import OffsetCurve from './components/Curve/Util/OffsetCurve';
import OffsetCurveLoose from './components/Curve/Util/OffsetCurveLoose';
import OffsetLooseThreeD from './components/Curve/Util/OffsetLooseThreeD';
import OffsetonSrf from './components/Curve/Util/OffsetonSrf';
import OffsetPolyline from './components/Curve/Util/OffsetPolyline';
import OffsetSurface from './components/Surface/Util/OffsetSurface';
import OffsetSurfaceLoose from './components/Surface/Util/OffsetSurfaceLoose';
import OneOverX from './components/Maths/Polynomials/OneOverX';
import Orient from './components/Transform/Euclidean/Orient';
import OrientDirection from './components/Transform/Affine/OrientDirection';
import Orthocentre from './components/Maths/Trig/Orthocentre';
import OsculatingCircles from './components/Surface/Analysis/OsculatingCircles';
import PartitionList from './components/Sets/List/PartitionList';
import Patch from './components/Surface/Freeform/Patch';
import PathCompare from './components/Sets/Tree/PathCompare';
import PathMapper from './components/Sets/Tree/PathMapper';
import PerpendicularDisplay from './components/Vector/Field/PerpendicularDisplay';
import PerpFrame from './components/Curve/Analysis/PerpFrame';
import PerpFrames from './components/Curve/Division/PerpFrames';
import Pi from './components/Maths/Util/Pi';
import PicknChoose from './components/Sets/List/PicknChoose';
import PieChart from './components/Display/Graphs/PieChart';
import Pipe from './components/Surface/Freeform/Pipe';
import PipeVariable from './components/Surface/Freeform/PipeVariable';
import Planar from './components/Curve/Analysis/Planar';
import PlaneThreePt from './components/Vector/Plane/PlaneThreePt';
import PlaneClosestPoint from './components/Vector/Plane/PlaneClosestPoint';
import PlaneCoordinates from './components/Vector/Plane/PlaneCoordinates';
import PlaneFit from './components/Vector/Plane/PlaneFit';
import PlaneNormal from './components/Vector/Plane/PlaneNormal';
import PlaneOffset from './components/Vector/Plane/PlaneOffset';
import PlaneOrigin from './components/Vector/Plane/PlaneOrigin';
import PlanePlane from './components/Intersect/Mathematical/PlanePlane';
import PlanePlanePlane from './components/Intersect/Mathematical/PlanePlanePlane';
import PlaneRegion from './components/Intersect/Mathematical/PlaneRegion';
import PlaneSurface from './components/Surface/Primitive/PlaneSurface';
import PlaneThroughShape from './components/Surface/Primitive/PlaneThroughShape';
import PointCharge from './components/Vector/Field/PointCharge';
import PointCylindrical from './components/Vector/Point/PointCylindrical';
import PointDeform from './components/Transform/Morph/PointDeform';
import PointGroups from './components/Vector/Point/PointGroups';
import PointInBrep from './components/Surface/Analysis/PointInBrep';
import PointInBreps from './components/Surface/Analysis/PointInBreps';
import PointInCurve from './components/Curve/Analysis/PointInCurve';
import PointinCurves from './components/Curve/Analysis/PointinCurves';
import PointInTrim from './components/Surface/Analysis/PointInTrim';
import PointList from './components/Display/Vector/PointList';
import PointOnCurve from './components/Curve/Analysis/PointOnCurve';
import PointOrder from './components/Display/Vector/PointOrder';
import PointOriented from './components/Vector/Point/PointOriented';
import PointPolar from './components/Vector/Point/PointPolar';
import PointstoNumbers from './components/Vector/Point/PointstoNumbers';
import PolarArray from './components/Transform/Array/PolarArray';
import PolyArc from './components/Curve/Spline/PolyArc';
import Polygon from './components/Curve/Primitive/Polygon';
import PolygonCenter from './components/Curve/Analysis/PolygonCenter';
import PolygonEdge from './components/Curve/Primitive/PolygonEdge';
import PolyLine from './components/Curve/Spline/PolyLine';
import PolylineCollapse from './components/Curve/Util/PolylineCollapse';
import PopulateTwoD from './components/Vector/Grid/PopulateTwoD';
import PopulateThreeD from './components/Vector/Grid/PopulateThreeD';
import PopulateGeometry from './components/Vector/Grid/PopulateGeometry';
import Power from './components/Maths/Operators/Power';
import PowerofOneZero from './components/Maths/Polynomials/PowerofOneZero';
import PowerofTwo from './components/Maths/Polynomials/PowerofTwo';
import PowerofE from './components/Maths/Polynomials/PowerofE';
import PrincipalCurvature from './components/Surface/Analysis/PrincipalCurvature';
import Project from './components/Transform/Affine/Project';
import ProjectAlong from './components/Transform/Affine/ProjectAlong';
import ProjectPoint from './components/Vector/Point/ProjectPoint';
import ProximityTwoD from './components/Mesh/Triangulation/ProximityTwoD';
import ProximityThreeD from './components/Mesh/Triangulation/ProximityThreeD';
import PruneTree from './components/Sets/Tree/PruneTree';
import PullCurve from './components/Curve/Util/PullCurve';
import PullPoint from './components/Vector/Point/PullPoint';
import Quadrangulate from './components/Mesh/Util/Quadrangulate';
import QuadSphere from './components/Surface/Primitive/QuadSphere';
import QuadTree from './components/Mesh/Triangulation/QuadTree';
import QuickGraph from './components/Display/Graphs/QuickGraph';
import Radial from './components/Vector/Grid/Radial';
import Radians from './components/Maths/Trig/Radians';
import RailRevolution from './components/Surface/Freeform/RailRevolution';
import Random from './components/Sets/Sequence/Random';
import RandomEx from './components/Sets/Sequence/RandomEx';
import RandomReduce from './components/Sets/Sequence/RandomReduce';
import Range from './components/Sets/Sequence/Range';
import RebuildCurve from './components/Curve/Util/RebuildCurve';
import Rectangle from './components/Curve/Primitive/Rectangle';
import RectangleTwoPt from './components/Curve/Primitive/RectangleTwoPt';
import RectangleThreePt from './components/Curve/Primitive/RectangleThreePt';
import RectangleMapping from './components/Transform/Affine/RectangleMapping';
import Rectangular from './components/Vector/Grid/Rectangular';
import RectangularArray from './components/Transform/Array/RectangularArray';
import Reduce from './components/Curve/Util/Reduce';
import RegionDifference from './components/Intersect/Shape/RegionDifference';
import RegionIntersection from './components/Intersect/Shape/RegionIntersection';
import RegionSlits from './components/Intersect/Shape/RegionSlits';
import RegionUnion from './components/Intersect/Shape/RegionUnion';
import RelativeDifferences from './components/Maths/Operators/RelativeDifferences';
import RelativeItem from './components/Sets/Tree/RelativeItem';
import RelativeItems from './components/Sets/Tree/RelativeItems';
import RemapNumbers from './components/Maths/Domain/RemapNumbers';
import RepeatData from './components/Sets/Sequence/RepeatData';
import ReplaceItems from './components/Sets/List/ReplaceItems';
import ReplaceMembers from './components/Sets/Sets/ReplaceMembers';
import ReplaceNulls from './components/Sets/List/ReplaceNulls';
import ReplacePaths from './components/Sets/Tree/ReplacePaths';
import ReplaceText from './components/Sets/Text/ReplaceText';
import Retrim from './components/Surface/Util/Retrim';
import Reverse from './components/Vector/Vector/Reverse';
import ReverseList from './components/Sets/List/ReverseList';
import Revolution from './components/Surface/Freeform/Revolution';
import RightTrigonometry from './components/Maths/Trig/RightTrigonometry';
import Rotate from './components/Vector/Vector/Rotate';
import RotateThreeD from './components/Transform/Euclidean/RotateThreeD';
import RotateAxis from './components/Transform/Euclidean/RotateAxis';
import RotateDirection from './components/Transform/Euclidean/RotateDirection';
import RotatePlane from './components/Vector/Plane/RotatePlane';
import Round from './components/Maths/Util/Round';
import RuledSurface from './components/Surface/Freeform/RuledSurface';
import SanityXForm from './components/Transform/Euclidean/SanityXForm';
import ScalarDisplay from './components/Vector/Field/ScalarDisplay';
import Scale from './components/Transform/Affine/Scale';
import ScaleNU from './components/Transform/Affine/ScaleNU';
import Seam from './components/Curve/Util/Seam';
import Secant from './components/Maths/Trig/Secant';
import SegmentLengths from './components/Curve/Analysis/SegmentLengths';
import Sequence from './components/Sets/Sequence/Sequence';
import SerialDimension from './components/Display/Dimensions/SerialDimension';
import Series from './components/Sets/Sequence/Series';
import SeriesAddition from './components/Maths/Operators/SeriesAddition';
import SetDifference from './components/Sets/Sets/SetDifference';
import SetDifferenceS from './components/Sets/Sets/SetDifferenceS';
import SetIntersection from './components/Sets/Sets/SetIntersection';
import SetMajority from './components/Sets/Sets/SetMajority';
import SettingsCustom from './components/Mesh/Util/SettingsCustom';
import SettingsQuality from './components/Mesh/Util/SettingsQuality';
import SettingsSpeed from './components/Mesh/Util/SettingsSpeed';
import SetUnion from './components/Sets/Sets/SetUnion';
import ShapeInBrep from './components/Surface/Analysis/ShapeInBrep';
import Shatter from './components/Curve/Division/Shatter';
import Shear from './components/Transform/Affine/Shear';
import ShearAngle from './components/Transform/Affine/ShearAngle';
import ShiftList from './components/Sets/List/ShiftList';
import ShiftPaths from './components/Sets/Tree/ShiftPaths';
import ShortestList from './components/Sets/List/ShortestList';
import SiftPattern from './components/Sets/List/SiftPattern';
import Similarity from './components/Maths/Operators/Similarity';
import SimpleMesh from './components/Mesh/Util/SimpleMesh';
import SimplifyCurve from './components/Curve/Util/SimplifyCurve';
import SimplifyTree from './components/Sets/Tree/SimplifyTree';
import Sinc from './components/Maths/Trig/Sinc';
import Sine from './components/Maths/Trig/Sine';
import SmallerThan from './components/Maths/Operators/SmallerThan';
import SmoothMesh from './components/Mesh/Util/SmoothMesh';
import SmoothNumbers from './components/Maths/Util/SmoothNumbers';
import SmoothPolyline from './components/Curve/Util/SmoothPolyline';
import SolarIncidence from './components/Vector/Vector/SolarIncidence';
import SolidDifference from './components/Intersect/Shape/SolidDifference';
import SolidIntersection from './components/Intersect/Shape/SolidIntersection';
import SolidUnion from './components/Intersect/Shape/SolidUnion';
import SortAlongCurve from './components/Vector/Point/SortAlongCurve';
import SortList from './components/Sets/List/SortList';
import SortPoints from './components/Vector/Point/SortPoints';
import SortText from './components/Sets/Text/SortText';
import SpatialDeform from './components/Transform/Morph/SpatialDeform';
import SpatialDeformcustom from './components/Transform/Morph/SpatialDeformcustom';
import Sphere from './components/Surface/Primitive/Sphere';
import SphereFourPt from './components/Surface/Primitive/SphereFourPt';
import SphereFit from './components/Surface/Primitive/SphereFit';
import SpinForce from './components/Vector/Field/SpinForce';
import Split from './components/Transform/Util/Split';
import SplitAHSL from './components/Display/Colour/SplitAHSL';
import SplitAHSV from './components/Display/Colour/SplitAHSV';
import SplitARGB from './components/Display/Colour/SplitARGB';
import SplitBrep from './components/Intersect/Shape/SplitBrep';
import SplitBrepMultiple from './components/Intersect/Shape/SplitBrepMultiple';
import SplitGroup from './components/Transform/Util/SplitGroup';
import SplitList from './components/Sets/List/SplitList';
import SplitTree from './components/Sets/Tree/SplitTree';
import SplitwithBrep from './components/Intersect/Region/SplitwithBrep';
import SplitwithBreps from './components/Intersect/Region/SplitwithBreps';
import Splop from './components/Transform/Morph/Splop';
import Sporph from './components/Transform/Morph/Sporph';
import Square from './components/Maths/Polynomials/Square';
import SquareRoot from './components/Maths/Polynomials/SquareRoot';
import StackData from './components/Sets/Sequence/StackData';
import StreamFilter from './components/Sets/Tree/StreamFilter';
import StreamGate from './components/Sets/Tree/StreamGate';
import Stretch from './components/Transform/Morph/Stretch';
import SubCurve from './components/Curve/Spline/SubCurve';
import SubDBox from './components/Surface/SubD/SubDBox';
import SubDControlPolygon from './components/Surface/SubD/SubDControlPolygon';
import SubDEdges from './components/Surface/SubD/SubDEdges';
import SubDFaces from './components/Surface/SubD/SubDFaces';
import SubDfromMesh from './components/Surface/SubD/SubDfromMesh';
import SubDVertices from './components/Surface/SubD/SubDVertices';
import SubList from './components/Sets/List/SubList';
import SubSet from './components/Sets/Sets/SubSet';
import Substrate from './components/Mesh/Triangulation/Substrate';
import Subtraction from './components/Maths/Operators/Subtraction';
import SumSurface from './components/Surface/Freeform/SumSurface';
import SurfaceBox from './components/Transform/Morph/SurfaceBox';
import SurfaceClosestPoint from './components/Surface/Analysis/SurfaceClosestPoint';
import SurfaceCurvature from './components/Surface/Analysis/SurfaceCurvature';
import SurfaceCurve from './components/Intersect/Physical/SurfaceCurve';
import SurfaceFrames from './components/Surface/Util/SurfaceFrames';
import SurfaceFromPoints from './components/Surface/Freeform/SurfaceFromPoints';
import SurfaceInflection from './components/Surface/Analysis/SurfaceInflection';
import SurfaceLine from './components/Intersect/Mathematical/SurfaceLine';
import SurfaceMorph from './components/Transform/Morph/SurfaceMorph';
import SurfacePoints from './components/Surface/Analysis/SurfacePoints';
import SurfaceSplit from './components/Intersect/Physical/SurfaceSplit';
import SwapColumns from './components/Maths/Matrix/SwapColumns';
import SwapRows from './components/Maths/Matrix/SwapRows';
import SweepOne from './components/Surface/Freeform/SweepOne';
import SweepTwo from './components/Surface/Freeform/SweepTwo';
import SwingArc from './components/Curve/Spline/SwingArc';
import SymbolAdvanced from './components/Display/Preview/SymbolAdvanced';
import SymbolDisplay from './components/Display/Preview/SymbolDisplay';
import SymbolSimple from './components/Display/Preview/SymbolSimple';
import Tangent from './components/Maths/Trig/Tangent';
import TangentArcs from './components/Curve/Primitive/TangentArcs';
import TangentCurve from './components/Curve/Spline/TangentCurve';
import TangentLines from './components/Curve/Primitive/TangentLines';
import TangentLinesEx from './components/Curve/Primitive/TangentLinesEx';
import TangentLinesIn from './components/Curve/Primitive/TangentLinesIn';
import Taper from './components/Transform/Morph/Taper';
import TensorDisplay from './components/Vector/Field/TensorDisplay';
import TestCrash from './components/Display/Test/TestCrash';
import TextCase from './components/Sets/Text/TextCase';
import TextDistance from './components/Sets/Text/TextDistance';
import TextFragment from './components/Sets/Text/TextFragment';
import TextJoin from './components/Sets/Text/TextJoin';
import TextLength from './components/Sets/Text/TextLength';
import TextSplit from './components/Sets/Text/TextSplit';
import TextTag from './components/Display/Dimensions/TextTag';
import TextTagThreeD from './components/Display/Dimensions/TextTagThreeD';
import TextTrim from './components/Sets/Text/TextTrim';
import ToPolar from './components/Vector/Point/ToPolar';
import Torsion from './components/Curve/Analysis/Torsion';
import TransformMatrix from './components/Transform/Util/TransformMatrix';
import TransposeMatrix from './components/Maths/Matrix/TransposeMatrix';
import TreeBranch from './components/Sets/Tree/TreeBranch';
import TreeItem from './components/Sets/Tree/TreeItem';
import TreeStatistics from './components/Sets/Tree/TreeStatistics';
import TriangleMapping from './components/Transform/Affine/TriangleMapping';
import TriangleTrigonometry from './components/Maths/Trig/TriangleTrigonometry';
import Triangular from './components/Vector/Grid/Triangular';
import Triangulate from './components/Mesh/Util/Triangulate';
import TrimSolid from './components/Intersect/Shape/TrimSolid';
import TrimTree from './components/Sets/Tree/TrimTree';
import TrimwithBrep from './components/Intersect/Region/TrimwithBrep';
import TrimwithBreps from './components/Intersect/Region/TrimwithBreps';
import TrimwithRegion from './components/Intersect/Region/TrimwithRegion';
import TrimwithRegions from './components/Intersect/Region/TrimwithRegions';
import Truncate from './components/Maths/Util/Truncate';
import TweenCurve from './components/Curve/Spline/TweenCurve';
import Twist from './components/Transform/Morph/Twist';
import TwistedBox from './components/Transform/Morph/TwistedBox';
import TwoByFourJam from './components/Curve/Primitive/TwoByFourJam';
import UnflattenTree from './components/Sets/Tree/UnflattenTree';
import Ungroup from './components/Transform/Util/Ungroup';
import UnifyMesh from './components/Mesh/Util/UnifyMesh';
import UnitVector from './components/Vector/Vector/UnitVector';
import UnitX from './components/Vector/Vector/UnitX';
import UnitY from './components/Vector/Vector/UnitY';
import UnitZ from './components/Vector/Vector/UnitZ';
import Untrim from './components/Surface/Util/Untrim';
import UnweldMesh from './components/Mesh/Util/UnweldMesh';
import ValueTracker from './components/Display/Graphs/ValueTracker';
import Variable from './components/Maths/Script/Variable';
import VBScript from './components/Maths/Script/VBScript';
import VectorTwoPt from './components/Vector/Vector/VectorTwoPt';
import VectorDisplay from './components/Display/Vector/VectorDisplay';
import VectorDisplayEx from './components/Display/Vector/VectorDisplayEx';
import VectorForce from './components/Vector/Field/VectorForce';
import VectorLength from './components/Vector/Vector/VectorLength';
import VectorXYZ from './components/Vector/Vector/VectorXYZ';
import ViewportDisplay from './components/Display/Viewport/ViewportDisplay';
import Volume from './components/Surface/Analysis/Volume';
import VolumeMoments from './components/Surface/Analysis/VolumeMoments';
import Voronoi from './components/Mesh/Triangulation/Voronoi';
import VoronoiThreeD from './components/Mesh/Triangulation/VoronoiThreeD';
import VoronoiCell from './components/Mesh/Triangulation/VoronoiCell';
import VoronoiGroups from './components/Mesh/Triangulation/VoronoiGroups';
import Weave from './components/Sets/List/Weave';
import WeightedAverage from './components/Maths/Util/WeightedAverage';
import WeldMesh from './components/Mesh/Util/WeldMesh';
import XYPlane from './components/Vector/Plane/XYPlane';
import XZPlane from './components/Vector/Plane/XZPlane';
import YZPlane from './components/Vector/Plane/YZPlane';

export {
	FourPointSurface,
	Absolute,
	Addition,
	AdjustPlane,
	AlignedDimension,
	AlignPlane,
	AlignPlanes,
	AlignVertices,
	Amplitude,
	Angle,
	AngularDimension,
	AngularDimensionsMesh,
	Arc,
	ArcThreePt,
	ArcCosine,
	ArcDimension,
	ArcSED,
	ArcSine,
	ArcTangent,
	Area,
	AreaMoments,
	Average,
	BarGraph,
	Barycentric,
	BendDeform,
	BezierSpan,
	BiArc,
	BlendBox,
	BlendColours,
	BlendCurve,
	BlendCurvePt,
	BlurMesh,
	BlurNumbers,
	BoundarySurfaces,
	BoundaryVolume,
	BoundingBox,
	Bounds,
	BoundsTwoD,
	BoxTwoPt,
	BoxArray,
	BoxCorners,
	BoxMapping,
	BoxMorph,
	BoxProperties,
	BoxRectangle,
	BoxSlits,
	BreakField,
	BrepBrep,
	BrepClosestPoint,
	BrepCurve,
	BrepEdges,
	BrepJoin,
	BrepLine,
	BrepPlane,
	BrepTopology,
	BrepWireframe,
	CameraObscura,
	CapHoles,
	CapHolesEx,
	CarthesianProduct,
	Catenary,
	CatenaryEx,
	CenterBox,
	Centroid,
	Characters,
	CharSequence,
	Circle,
	CircleThreePt,
	CircleCNR,
	CircleFit,
	CircleTanTan,
	CircleTanTanTan,
	CircularDimension,
	Circumcentre,
	Clash,
	CleanTree,
	Closed,
	ClosedEdges,
	ClosestPoint,
	ClosestPoints,
	CloudDisplay,
	CollisionManyMany,
	CollisionOneMany,
	ColourCMYK,
	ColourHSL,
	ColourHSV,
	ColourLab,
	ColourLCH,
	ColourRGB,
	ColourRGBf,
	ColourXYZ,
	CombineData,
	CombineDateTime,
	ComplexArgument,
	ComplexComponents,
	ComplexConjugate,
	ComplexModulus,
	Compound,
	Concatenate,
	Cone,
	ConnectCurves,
	ConsecutiveDomains,
	ConstructDate,
	ConstructDomain,
	ConstructExoticDate,
	ConstructMatrix,
	ConstructMesh,
	ConstructPath,
	ConstructPlane,
	ConstructPoint,
	ConstructSmoothTime,
	ConstructTime,
	Contour,
	Contourex,
	ControlPointLoft,
	ControlPoints,
	ControlPolygon,
	ConvexEdges,
	ConvexHull,
	CoordinateMask,
	CopyTrim,
	CoSecant,
	Cosine,
	CoTangent,
	CreateComplex,
	CreateMaterial,
	CreateSet,
	CrossProduct,
	CrossReference,
	CScript,
	Cube,
	CubeRoot,
	CullDuplicates,
	CullFaces,
	CullIndex,
	CullNth,
	CullPattern,
	CullVertices,
	Curvature,
	CurvatureGraph,
	CurveArray,
	CurveClosestPoint,
	CurveCurve,
	CurveDepth,
	CurveDomain,
	CurveFrame,
	CurveFrames,
	CurveLine,
	CurveMiddle,
	CurveNearestObject,
	CurveOnSurface,
	CurvePlane,
	CurveProximity,
	CurveSelf,
	CurveSide,
	CurveToPolyline,
	CustomPreview,
	Cylinder,
	DashPattern,
	DateRange,
	Deconstruct,
	DeconstructArc,
	DeconstructBox,
	DeconstructBrep,
	DeconstructDate,
	DeconstructDomain,
	DeconstructFace,
	DeconstructMatrix,
	DeconstructMesh,
	DeconstructPath,
	DeconstructPlane,
	DeconstructVector,
	DeconstuctRectangle,
	Degrees,
	DelaunayEdges,
	DelaunayMesh,
	DeleteConsecutive,
	DeleteFaces,
	DeleteVertices,
	Derivatives,
	Dimensions,
	DirectionDisplay,
	Discontinuity,
	Disjoint,
	DisjointMesh,
	Dispatch,
	DisplayMatrix,
	Distance,
	Divide,
	DivideByDeviation,
	DivideCurve,
	DivideDistance,
	DivideDomain,
	DivideLength,
	DivideSurface,
	Division,
	DomainBox,
	DotDisplay,
	DotNETCScriptLEGACY,
	DotNETVBScriptLEGACY,
	DotProduct,
	DuplicateData,
	EdgesfromDirections,
	EdgesfromFaces,
	EdgesfromLength,
	EdgesfromLinearity,
	EdgesfromPoints,
	EdgeSurface,
	Ellipse,
	EndPoints,
	Entwine,
	Epsilon,
	Equality,
	Evaluate,
	EvaluateBox,
	EvaluateCurve,
	EvaluateField,
	EvaluateLength,
	EvaluateSurface,
	Explode,
	ExplodeTree,
	Exposure,
	Expression,
	ExtendCurve,
	Extremes,
	Extrude,
	ExtrudeAlong,
	ExtrudeAngled,
	ExtrudeLinear,
	ExtrudePoint,
	FaceBoundaries,
	FaceCircles,
	FaceNormals,
	FacetDome,
	Factorial,
	Fibonacci,
	FieldLine,
	Fillet,
	FilletDistance,
	FilletEdge,
	FindDomain,
	Findsimilarmember,
	FitCurve,
	FitLine,
	FitLoft,
	FlattenTree,
	Flip,
	FlipCurve,
	FlipMatrix,
	FlipMesh,
	FlipPlane,
	Flow,
	Format,
	FragmentPatch,
	GateAnd,
	GateMajority,
	GateNand,
	GateNor,
	GateNot,
	GateOr,
	GateXnor,
	GateXor,
	Geodesic,
	GhPythonScript,
	GoldenRatio,
	GraftTree,
	Group,
	Hexagonal,
	HorizontalFrame,
	HorizontalFrames,
	ImageGallery,
	Incentre,
	InCircle,
	Includes,
	InEllipse,
	InsertItems,
	IntegerDivision,
	Interpolate,
	Interpolatedata,
	InterpolateDate,
	Interpolatet,
	InverseTransform,
	InvertMatrix,
	IsoCurve,
	Isotrim,
	IsoVist,
	IsoVistRay,
	IsPlanar,
	ItemIndex,
	Jitter,
	JoinCurves,
	Kaleidoscope,
	KeyValueSearch,
	KinkyCurve,
	KnotVector,
	LargerThan,
	Legend,
	Length,
	LengthDomain,
	LengthParameter,
	Line,
	LineTwoPlane,
	LineFourPt,
	LinearArray,
	LinearDimension,
	LineCharge,
	LineDimension,
	LineLine,
	LinePlane,
	LinePt,
	LineSDL,
	ListItem,
	ListLength,
	Loft,
	LoftOptions,
	Logarithm,
	LogN,
	LongestList,
	Maelstrom,
	MakeTwoD,
	MakeTwoDParallelView,
	MakeTwoDPerspectiveView,
	MakeTwoDRhinoView,
	MaptoSurface,
	MarkerDimension,
	MassAddition,
	MassMultiplication,
	MatchCurve,
	MatchText,
	MatchTree,
	Maximum,
	MemberIndex,
	Merge,
	MergeZeroThree,
	MergeZeroFour,
	MergeZeroFive,
	MergeZeroSix,
	MergeZeroEight,
	MergeOneZero,
	MergeFaces,
	MergeFields,
	MergeGroup,
	MergeMultiple,
	MeshBox,
	MeshBrep,
	MeshClosestPoint,
	MeshColours,
	MeshCurve,
	MeshDepth,
	MeshDifference,
	MeshEdges,
	MeshEval,
	MeshfromSubD,
	MeshInclusion,
	MeshIntersection,
	MeshJoin,
	MeshMesh,
	MeshPlane,
	MeshQuad,
	MeshRay,
	MeshShadow,
	MeshSphere,
	MeshSphereEx,
	MeshSplit,
	MeshSplitPlane,
	MeshSpray,
	MeshSurface,
	MeshTriangle,
	MeshUnion,
	MetaBall,
	MetaBallt,
	MetaBalltCustom,
	Minimum,
	Mirror,
	MirrorCurve,
	MirrorSurface,
	ModifiedArc,
	Modulus,
	Move,
	MoveAwayFrom,
	MoveToPlane,
	MultipleCurves,
	Multiplication,
	Multiply,
	Naturallogarithm,
	Negative,
	NetworkSurface,
	NullItem,
	NumberstoPoints,
	NurbsCurve,
	NurbsCurvePWK,
	Occlusion,
	OcTree,
	OffsetCurve,
	OffsetCurveLoose,
	OffsetLooseThreeD,
	OffsetonSrf,
	OffsetPolyline,
	OffsetSurface,
	OffsetSurfaceLoose,
	OneOverX,
	Orient,
	OrientDirection,
	Orthocentre,
	OsculatingCircles,
	PartitionList,
	Patch,
	PathCompare,
	PathMapper,
	PerpendicularDisplay,
	PerpFrame,
	PerpFrames,
	Pi,
	PicknChoose,
	PieChart,
	Pipe,
	PipeVariable,
	Planar,
	PlaneThreePt,
	PlaneClosestPoint,
	PlaneCoordinates,
	PlaneFit,
	PlaneNormal,
	PlaneOffset,
	PlaneOrigin,
	PlanePlane,
	PlanePlanePlane,
	PlaneRegion,
	PlaneSurface,
	PlaneThroughShape,
	PointCharge,
	PointCylindrical,
	PointDeform,
	PointGroups,
	PointInBrep,
	PointInBreps,
	PointInCurve,
	PointinCurves,
	PointInTrim,
	PointList,
	PointOnCurve,
	PointOrder,
	PointOriented,
	PointPolar,
	PointstoNumbers,
	PolarArray,
	PolyArc,
	Polygon,
	PolygonCenter,
	PolygonEdge,
	PolyLine,
	PolylineCollapse,
	PopulateTwoD,
	PopulateThreeD,
	PopulateGeometry,
	Power,
	PowerofOneZero,
	PowerofTwo,
	PowerofE,
	PrincipalCurvature,
	Project,
	ProjectAlong,
	ProjectPoint,
	ProximityTwoD,
	ProximityThreeD,
	PruneTree,
	PullCurve,
	PullPoint,
	Quadrangulate,
	QuadSphere,
	QuadTree,
	QuickGraph,
	Radial,
	Radians,
	RailRevolution,
	Random,
	RandomEx,
	RandomReduce,
	Range,
	RebuildCurve,
	Rectangle,
	RectangleTwoPt,
	RectangleThreePt,
	RectangleMapping,
	Rectangular,
	RectangularArray,
	Reduce,
	RegionDifference,
	RegionIntersection,
	RegionSlits,
	RegionUnion,
	RelativeDifferences,
	RelativeItem,
	RelativeItems,
	RemapNumbers,
	RepeatData,
	ReplaceItems,
	ReplaceMembers,
	ReplaceNulls,
	ReplacePaths,
	ReplaceText,
	Retrim,
	Reverse,
	ReverseList,
	Revolution,
	RightTrigonometry,
	Rotate,
	RotateThreeD,
	RotateAxis,
	RotateDirection,
	RotatePlane,
	Round,
	RuledSurface,
	SanityXForm,
	ScalarDisplay,
	Scale,
	ScaleNU,
	Seam,
	Secant,
	SegmentLengths,
	Sequence,
	SerialDimension,
	Series,
	SeriesAddition,
	SetDifference,
	SetDifferenceS,
	SetIntersection,
	SetMajority,
	SettingsCustom,
	SettingsQuality,
	SettingsSpeed,
	SetUnion,
	ShapeInBrep,
	Shatter,
	Shear,
	ShearAngle,
	ShiftList,
	ShiftPaths,
	ShortestList,
	SiftPattern,
	Similarity,
	SimpleMesh,
	SimplifyCurve,
	SimplifyTree,
	Sinc,
	Sine,
	SmallerThan,
	SmoothMesh,
	SmoothNumbers,
	SmoothPolyline,
	SolarIncidence,
	SolidDifference,
	SolidIntersection,
	SolidUnion,
	SortAlongCurve,
	SortList,
	SortPoints,
	SortText,
	SpatialDeform,
	SpatialDeformcustom,
	Sphere,
	SphereFourPt,
	SphereFit,
	SpinForce,
	Split,
	SplitAHSL,
	SplitAHSV,
	SplitARGB,
	SplitBrep,
	SplitBrepMultiple,
	SplitGroup,
	SplitList,
	SplitTree,
	SplitwithBrep,
	SplitwithBreps,
	Splop,
	Sporph,
	Square,
	SquareRoot,
	StackData,
	StreamFilter,
	StreamGate,
	Stretch,
	SubCurve,
	SubDBox,
	SubDControlPolygon,
	SubDEdges,
	SubDFaces,
	SubDfromMesh,
	SubDVertices,
	SubList,
	SubSet,
	Substrate,
	Subtraction,
	SumSurface,
	SurfaceBox,
	SurfaceClosestPoint,
	SurfaceCurvature,
	SurfaceCurve,
	SurfaceFrames,
	SurfaceFromPoints,
	SurfaceInflection,
	SurfaceLine,
	SurfaceMorph,
	SurfacePoints,
	SurfaceSplit,
	SwapColumns,
	SwapRows,
	SweepOne,
	SweepTwo,
	SwingArc,
	SymbolAdvanced,
	SymbolDisplay,
	SymbolSimple,
	Tangent,
	TangentArcs,
	TangentCurve,
	TangentLines,
	TangentLinesEx,
	TangentLinesIn,
	Taper,
	TensorDisplay,
	TestCrash,
	TextCase,
	TextDistance,
	TextFragment,
	TextJoin,
	TextLength,
	TextSplit,
	TextTag,
	TextTagThreeD,
	TextTrim,
	ToPolar,
	Torsion,
	TransformMatrix,
	TransposeMatrix,
	TreeBranch,
	TreeItem,
	TreeStatistics,
	TriangleMapping,
	TriangleTrigonometry,
	Triangular,
	Triangulate,
	TrimSolid,
	TrimTree,
	TrimwithBrep,
	TrimwithBreps,
	TrimwithRegion,
	TrimwithRegions,
	Truncate,
	TweenCurve,
	Twist,
	TwistedBox,
	TwoByFourJam,
	UnflattenTree,
	Ungroup,
	UnifyMesh,
	UnitVector,
	UnitX,
	UnitY,
	UnitZ,
	Untrim,
	UnweldMesh,
	ValueTracker,
	Variable,
	VBScript,
	VectorTwoPt,
	VectorDisplay,
	VectorDisplayEx,
	VectorForce,
	VectorLength,
	VectorXYZ,
	ViewportDisplay,
	Volume,
	VolumeMoments,
	Voronoi,
	VoronoiThreeD,
	VoronoiCell,
	VoronoiGroups,
	Weave,
	WeightedAverage,
	WeldMesh,
	XYPlane,
	XZPlane,
	YZPlane
}

export type GrasshopperComponent =
"FourPointSurface" |
"Absolute" |
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
"ConstructExoticDate" |
"ConstructMatrix" |
"ConstructMesh" |
"ConstructPath" |
"ConstructPlane" |
"ConstructPoint" |
"ConstructSmoothTime" |
"ConstructTime" |
"Contour" |
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
"LinePlane" |
"LinePt" |
"LineSDL" |
"ListItem" |
"ListLength" |
"Loft" |
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