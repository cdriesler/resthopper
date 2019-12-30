import ResthopperComponent from '../models/ResthopperComponent';
import Surface from './components/Surface/SurfaceComponentIndex';
import Maths from './components/Maths/MathsComponentIndex';
import Vector from './components/Vector/VectorComponentIndex';
import Mesh from './components/Mesh/MeshComponentIndex';
import Display from './components/Display/DisplayComponentIndex';
import Curve from './components/Curve/CurveComponentIndex';
import Transform from './components/Transform/TransformComponentIndex';
import Intersect from './components/Intersect/IntersectComponentIndex';
import Sets from './components/Sets/SetsComponentIndex';

export default class ComponentIndex {

	private static names: string[] = [
		"4Point Surface",
		"Absolute",
		"Addition",
		"Adjust Plane",
		"Align Plane",
		"Align Planes",
		"Align Vertices",
		"Aligned Dimension",
		"Amplitude",
		"Angle",
		"Angular Dimension",
		"Angular Dimensions (Mesh)",
		"Arc",
		"Arc 3Pt",
		"Arc Dimension",
		"Arc SED",
		"ArcCosine",
		"ArcSine",
		"ArcTangent",
		"Area",
		"Area Moments",
		"Average",
		"Bar Graph",
		"Barycentric",
		"Bend Deform",
		"Bezier Span",
		"BiArc",
		"Blend Box",
		"Blend Colours",
		"Blend Curve",
		"Blend Curve Pt",
		"Blur Mesh",
		"Blur Numbers",
		"Boundary Surfaces",
		"Boundary Volume",
		"Bounding Box",
		"Bounds",
		"Bounds 2D",
		"Box 2Pt",
		"Box Array",
		"Box Corners",
		"Box Mapping",
		"Box Morph",
		"Box Properties",
		"Box Rectangle",
		"Box Slits",
		"Break Field",
		"Brep | Brep",
		"Brep | Curve",
		"Brep | Line",
		"Brep | Plane",
		"Brep Closest Point",
		"Brep Edges",
		"Brep Join",
		"Brep Topology",
		"Brep Wireframe",
		"C# Script",
		"Camera Obscura",
		"Cap Holes",
		"Cap Holes Ex",
		"Carthesian Product",
		"Catenary",
		"Catenary Ex",
		"Center Box",
		"Centroid",
		"Char Sequence",
		"Characters",
		"Circle",
		"Circle 3Pt",
		"Circle CNR",
		"Circle Fit",
		"Circle TanTan",
		"Circle TanTanTan",
		"Circular Dimension",
		"Circumcentre",
		"Clash",
		"Clean Tree",
		"Closed",
		"Closed Edges",
		"Closest Point",
		"Closest Points",
		"Cloud Display",
		"Collision Many|Many",
		"Collision One|Many",
		"Colour CMYK",
		"Colour HSL",
		"Colour HSV",
		"Colour L*ab",
		"Colour LCH",
		"Colour RGB",
		"Colour RGB (f)",
		"Colour XYZ",
		"Combine Data",
		"Combine Date & Time",
		"Complex Argument",
		"Complex Components",
		"Complex Conjugate",
		"Complex Modulus",
		"Compound",
		"Concatenate",
		"Cone",
		"Connect Curves",
		"Consecutive Domains",
		"Construct Date",
		"Construct Domain",
		"Construct Exotic Date",
		"Construct Matrix",
		"Construct Mesh",
		"Construct Path",
		"Construct Plane",
		"Construct Point",
		"Construct Smooth Time",
		"Construct Time",
		"Contour",
		"Contour (ex)",
		"Control Point Loft",
		"Control Points",
		"Control Polygon",
		"Convex Edges",
		"Convex Hull",
		"Coordinate Mask",
		"Copy Trim",
		"CoSecant",
		"Cosine",
		"CoTangent",
		"Create Complex",
		"Create Material",
		"Create Set",
		"Cross Product",
		"Cross Reference",
		"Cube",
		"Cube Root",
		"Cull Duplicates",
		"Cull Faces",
		"Cull Index",
		"Cull Nth",
		"Cull Pattern",
		"Cull Vertices",
		"Curvature",
		"Curvature Graph",
		"Curve | Curve",
		"Curve | Line",
		"Curve | Plane",
		"Curve | Self",
		"Curve Array",
		"Curve Closest Point",
		"Curve Depth",
		"Curve Domain",
		"Curve Frame",
		"Curve Frames",
		"Curve Middle",
		"Curve Nearest Object",
		"Curve On Surface",
		"Curve Proximity",
		"Curve Side",
		"Curve To Polyline",
		"Custom Preview",
		"Cylinder",
		"Dash Pattern",
		"Date Range",
		"Deconstruct",
		"Deconstruct Arc",
		"Deconstruct Box",
		"Deconstruct Brep",
		"Deconstruct Date",
		"Deconstruct Domain",
		"Deconstruct Face",
		"Deconstruct Matrix",
		"Deconstruct Mesh",
		"Deconstruct Path",
		"Deconstruct Plane",
		"Deconstruct Vector",
		"Deconstuct Rectangle",
		"Degrees",
		"Delaunay Edges",
		"Delaunay Mesh",
		"Delete Consecutive",
		"Delete Faces",
		"Delete Vertices",
		"Derivatives",
		"Dimensions",
		"Direction Display",
		"Discontinuity",
		"Disjoint",
		"Disjoint Mesh",
		"Dispatch",
		"Display Matrix",
		"Distance",
		"Divide",
		"Divide By Deviation",
		"Divide Curve",
		"Divide Distance",
		"Divide Domain",
		"Divide Length",
		"Divide Surface",
		"Division",
		"Domain Box",
		"Dot Display",
		"Dot Product",
		"DotNET C# Script (LEGACY)",
		"DotNET VB Script (LEGACY)",
		"Duplicate Data",
		"Edge Surface",
		"Edges from Directions",
		"Edges from Faces",
		"Edges from Length",
		"Edges from Linearity",
		"Edges from Points",
		"Ellipse",
		"End Points",
		"Entwine",
		"Epsilon",
		"Equality",
		"Evaluate",
		"Evaluate Box",
		"Evaluate Curve",
		"Evaluate Field",
		"Evaluate Length",
		"Evaluate Surface",
		"Explode",
		"Explode Tree",
		"Exposure",
		"Expression",
		"Extend Curve",
		"Extremes",
		"Extrude",
		"Extrude Along",
		"Extrude Angled",
		"Extrude Linear",
		"Extrude Point",
		"Face Boundaries",
		"Face Circles",
		"Face Normals",
		"Facet Dome",
		"Factorial",
		"Fibonacci",
		"Field Line",
		"Fillet",
		"Fillet Distance",
		"Fillet Edge",
		"Find Domain",
		"Find similar member",
		"Fit Curve",
		"Fit Line",
		"Fit Loft",
		"Flatten Tree",
		"Flip",
		"Flip Curve",
		"Flip Matrix",
		"Flip Mesh",
		"Flip Plane",
		"Flow",
		"Format",
		"Fragment Patch",
		"Gate And",
		"Gate Majority",
		"Gate Nand",
		"Gate Nor",
		"Gate Not",
		"Gate Or",
		"Gate Xnor",
		"Gate Xor",
		"Geodesic",
		"GhPython Script",
		"Golden Ratio",
		"Graft Tree",
		"Group",
		"Hexagonal",
		"Horizontal Frame",
		"Horizontal Frames",
		"Image Gallery",
		"Incentre",
		"InCircle",
		"Includes",
		"InEllipse",
		"Insert Items",
		"Integer Division",
		"Interpolate",
		"Interpolate (t)",
		"Interpolate data",
		"Interpolate Date",
		"Inverse Transform",
		"Invert Matrix",
		"Is Planar",
		"Iso Curve",
		"Isotrim",
		"IsoVist",
		"IsoVist Ray",
		"Item Index",
		"Jitter",
		"Join Curves",
		"Kaleidoscope",
		"Key/Value Search",
		"Kinky Curve",
		"Knot Vector",
		"Larger Than",
		"Legend",
		"Length",
		"Length Domain",
		"Length Parameter",
		"Line",
		"Line + Line",
		"Line + Pt",
		"Line | Plane",
		"Line 2Plane",
		"Line 4Pt",
		"Line Charge",
		"Line Dimension",
		"Line SDL",
		"Linear Array",
		"Linear Dimension",
		"List Item",
		"List Length",
		"Loft",
		"Loft Options",
		"Log N",
		"Logarithm",
		"Longest List",
		"Maelstrom",
		"Make2D",
		"Make2D Parallel View",
		"Make2D Perspective View",
		"Make2D Rhino View",
		"Map to Surface",
		"Marker Dimension",
		"Mass Addition",
		"Mass Multiplication",
		"Match Curve",
		"Match Text",
		"Match Tree",
		"Maximum",
		"Member Index",
		"Merge",
		"Merge 03",
		"Merge 04",
		"Merge 05",
		"Merge 06",
		"Merge 08",
		"Merge 10",
		"Merge Faces",
		"Merge Fields",
		"Merge Group",
		"Merge Multiple",
		"Mesh | Curve",
		"Mesh | Mesh",
		"Mesh | Plane",
		"Mesh | Ray",
		"Mesh Box",
		"Mesh Brep",
		"Mesh Closest Point",
		"Mesh Colours",
		"Mesh Depth",
		"Mesh Difference",
		"Mesh Edges",
		"Mesh Eval",
		"Mesh from Sub-D",
		"Mesh Inclusion",
		"Mesh Intersection",
		"Mesh Join",
		"Mesh Quad",
		"Mesh Shadow",
		"Mesh Sphere",
		"Mesh Sphere Ex",
		"Mesh Split",
		"Mesh Split Plane",
		"Mesh Spray",
		"Mesh Surface",
		"Mesh Triangle",
		"Mesh Union",
		"MetaBall",
		"MetaBall(t)",
		"MetaBall(t) Custom",
		"Minimum",
		"Mirror",
		"Mirror Curve",
		"Mirror Surface",
		"Modified Arc",
		"Modulus",
		"Move",
		"Move Away From",
		"Move To Plane",
		"Multiple Curves",
		"Multiplication",
		"Multiply",
		"Natural logarithm",
		"Negative",
		"Network Surface",
		"Null Item",
		"Numbers to Points",
		"Nurbs Curve",
		"Nurbs Curve PWK",
		"Occlusion",
		"OcTree",
		"Offset Curve",
		"Offset Curve Loose",
		"Offset Loose 3D",
		"Offset on Srf",
		"Offset Polyline",
		"Offset Surface",
		"Offset Surface Loose",
		"One Over X",
		"Orient",
		"Orient Direction",
		"Orthocentre",
		"Osculating Circles",
		"Partition List",
		"Patch",
		"Path Compare",
		"Path Mapper",
		"Perp Frame",
		"Perp Frames",
		"Perpendicular Display",
		"Pi",
		"Pick'n'Choose",
		"Pie Chart",
		"Pipe",
		"Pipe Variable",
		"Planar",
		"Plane | Plane",
		"Plane | Plane | Plane",
		"Plane 3Pt",
		"Plane Closest Point",
		"Plane Coordinates",
		"Plane Fit",
		"Plane Normal",
		"Plane Offset",
		"Plane Origin",
		"Plane Region",
		"Plane Surface",
		"Plane Through Shape",
		"Point Charge",
		"Point Cylindrical",
		"Point Deform",
		"Point Groups",
		"Point In Brep",
		"Point In Breps",
		"Point In Curve",
		"Point in Curves",
		"Point In Trim",
		"Point List",
		"Point On Curve",
		"Point Order",
		"Point Oriented",
		"Point Polar",
		"Points to Numbers",
		"Polar Array",
		"PolyArc",
		"Polygon",
		"Polygon Center",
		"Polygon Edge",
		"PolyLine",
		"Polyline Collapse",
		"Populate 2D",
		"Populate 3D",
		"Populate Geometry",
		"Power",
		"Power of 10",
		"Power of 2",
		"Power of E",
		"Principal Curvature",
		"Project",
		"Project Along",
		"Project Point",
		"Proximity 2D",
		"Proximity 3D",
		"Prune Tree",
		"Pull Curve",
		"Pull Point",
		"Quad Remesh",
		"Quad Remesh Settings",
		"Quad Sphere",
		"Quadmesh Settings",
		"Quadrangulate",
		"QuadTree",
		"Quick Graph",
		"Radial",
		"Radians",
		"Rail Revolution",
		"Random",
		"Random Reduce",
		"RandomEx",
		"Range",
		"Rebuild Curve",
		"Rectangle",
		"Rectangle 2Pt",
		"Rectangle 3Pt",
		"Rectangle Mapping",
		"Rectangular",
		"Rectangular Array",
		"Reduce",
		"Region Difference",
		"Region Intersection",
		"Region Slits",
		"Region Union",
		"Relative Differences",
		"Relative Item",
		"Relative Items",
		"Remap Numbers",
		"Repeat Data",
		"Replace Items",
		"Replace Members",
		"Replace Nulls",
		"Replace Paths",
		"Replace Text",
		"Retrim",
		"Reverse",
		"Reverse List",
		"Revolution",
		"Right Trigonometry",
		"Rotate",
		"Rotate 3D",
		"Rotate Axis",
		"Rotate Direction",
		"Rotate Plane",
		"Round",
		"Ruled Surface",
		"Sanity XForm",
		"Scalar Display",
		"Scale",
		"Scale NU",
		"Seam",
		"Secant",
		"Segment Lengths",
		"Sequence",
		"Serial Dimension",
		"Series",
		"Series Addition",
		"Set Difference",
		"Set Difference (S)",
		"Set Intersection",
		"Set Majority",
		"Set Union",
		"Settings (Custom)",
		"Settings (Quality)",
		"Settings (Speed)",
		"Shape In Brep",
		"Shatter",
		"Shear",
		"Shear Angle",
		"Shift List",
		"Shift Paths",
		"Shortest List",
		"Sift Pattern",
		"Similarity",
		"Simple Mesh",
		"Simplify Curve",
		"Simplify Tree",
		"Sinc",
		"Sine",
		"Smaller Than",
		"Smooth Mesh",
		"Smooth Numbers",
		"Smooth Polyline",
		"Solar Incidence",
		"Solid Difference",
		"Solid Intersection",
		"Solid Union",
		"Sort Along Curve",
		"Sort List",
		"Sort Points",
		"Sort Text",
		"Spatial Deform",
		"Spatial Deform (custom)",
		"Sphere",
		"Sphere 4Pt",
		"Sphere Fit",
		"Spin Force",
		"Split",
		"Split AHSL",
		"Split AHSV",
		"Split ARGB",
		"Split Brep",
		"Split Brep Multiple",
		"Split Group",
		"Split List",
		"Split Tree",
		"Split with Brep",
		"Split with Breps",
		"Splop",
		"Sporph",
		"Square",
		"Square Root",
		"Stack Data",
		"Stream Filter",
		"Stream Gate",
		"Stretch",
		"Sub Curve",
		"Sub List",
		"Sub-D Control Polygon",
		"Sub-D Edges",
		"Sub-D Faces",
		"Sub-D from Mesh",
		"Sub-D Vertices",
		"SubD Box",
		"SubSet",
		"Substrate",
		"Subtraction",
		"Sum Surface",
		"Surface | Curve",
		"Surface | Line",
		"Surface Box",
		"Surface Closest Point",
		"Surface Curvature",
		"Surface Frames",
		"Surface From Points",
		"Surface Inflection",
		"Surface Morph",
		"Surface Points",
		"Surface Split",
		"Swap Columns",
		"Swap Rows",
		"Sweep1",
		"Sweep2",
		"Swing Arc",
		"Symbol (Advanced)",
		"Symbol (Simple)",
		"Symbol Display",
		"Tangent",
		"Tangent Arcs",
		"Tangent Curve",
		"Tangent Lines",
		"Tangent Lines (Ex)",
		"Tangent Lines (In)",
		"Taper",
		"Tensor Display",
		"Test Crash",
		"Text Case",
		"Text Distance",
		"Text Fragment",
		"Text Join",
		"Text Length",
		"Text Split",
		"Text Tag",
		"Text Tag 3D",
		"Text Trim",
		"To Polar",
		"Torsion",
		"Transform Matrix",
		"Transpose Matrix",
		"Tree Branch",
		"Tree Item",
		"Tree Statistics",
		"Triangle Mapping",
		"Triangle Trigonometry",
		"Triangular",
		"Triangulate",
		"Trim Solid",
		"Trim Tree",
		"Trim with Brep",
		"Trim with Breps",
		"Trim with Region",
		"Trim with Regions",
		"Truncate",
		"Tween Curve",
		"Twist",
		"Twisted Box",
		"TwoByFourJam",
		"Unflatten Tree",
		"Ungroup",
		"Unify Mesh",
		"Unit Vector",
		"Unit X",
		"Unit Y",
		"Unit Z",
		"Untrim",
		"Unweld Mesh",
		"Value Tracker",
		"Variable",
		"VB Script",
		"Vector 2Pt",
		"Vector Display",
		"Vector Display Ex",
		"Vector Force",
		"Vector Length",
		"Vector XYZ",
		"Viewport Display",
		"Volume",
		"Volume Moments",
		"Voronoi",
		"Voronoi 3D",
		"Voronoi Cell",
		"Voronoi Groups",
		"Weave",
		"Weighted Average",
		"Weld Mesh",
		"XY Plane",
		"XZ Plane",
		"YZ Plane"
	];

	public static createComponent(name: GrasshopperComponent): ResthopperComponent {
		switch(name) {
			case "4Point Surface":
				return new Surface.Freeform.FourPointSurface();
			case "Absolute":
				return new Maths.Operators.Absolute();
			case "Addition":
				return new Maths.Operators.Addition();
			case "Adjust Plane":
				return new Vector.Plane.AdjustPlane();
			case "Align Plane":
				return new Vector.Plane.AlignPlane();
			case "Align Planes":
				return new Vector.Plane.AlignPlanes();
			case "Align Vertices":
				return new Mesh.Util.AlignVertices();
			case "Aligned Dimension":
				return new Display.Dimensions.AlignedDimension();
			case "Amplitude":
				return new Vector.Vector.Amplitude();
			case "Angle":
				return new Vector.Vector.Angle();
			case "Angular Dimension":
				return new Display.Dimensions.AngularDimension();
			case "Angular Dimensions (Mesh)":
				return new Display.Dimensions.AngularDimensionsMesh();
			case "Arc":
				return new Curve.Primitive.Arc();
			case "Arc 3Pt":
				return new Curve.Primitive.ArcThreePt();
			case "Arc Dimension":
				return new Display.Dimensions.ArcDimension();
			case "Arc SED":
				return new Curve.Primitive.ArcSED();
			case "ArcCosine":
				return new Maths.Trig.ArcCosine();
			case "ArcSine":
				return new Maths.Trig.ArcSine();
			case "ArcTangent":
				return new Maths.Trig.ArcTangent();
			case "Area":
				return new Surface.Analysis.Area();
			case "Area Moments":
				return new Surface.Analysis.AreaMoments();
			case "Average":
				return new Maths.Util.Average();
			case "Bar Graph":
				return new Display.Graphs.BarGraph();
			case "Barycentric":
				return new Vector.Point.Barycentric();
			case "Bend Deform":
				return new Transform.Morph.BendDeform();
			case "Bezier Span":
				return new Curve.Spline.BezierSpan();
			case "BiArc":
				return new Curve.Primitive.BiArc();
			case "Blend Box":
				return new Transform.Morph.BlendBox();
			case "Blend Colours":
				return new Vector.Colour.BlendColours();
			case "Blend Curve":
				return new Curve.Spline.BlendCurve();
			case "Blend Curve Pt":
				return new Curve.Spline.BlendCurvePt();
			case "Blur Mesh":
				return new Mesh.Util.BlurMesh();
			case "Blur Numbers":
				return new Maths.Util.BlurNumbers();
			case "Boundary Surfaces":
				return new Surface.Freeform.BoundarySurfaces();
			case "Boundary Volume":
				return new Intersect.Shape.BoundaryVolume();
			case "Bounding Box":
				return new Surface.Primitive.BoundingBox();
			case "Bounds":
				return new Maths.Domain.Bounds();
			case "Bounds 2D":
				return new Maths.Domain.BoundsTwoD();
			case "Box 2Pt":
				return new Surface.Primitive.BoxTwoPt();
			case "Box Array":
				return new Transform.Array.BoxArray();
			case "Box Corners":
				return new Surface.Analysis.BoxCorners();
			case "Box Mapping":
				return new Transform.Affine.BoxMapping();
			case "Box Morph":
				return new Transform.Morph.BoxMorph();
			case "Box Properties":
				return new Surface.Analysis.BoxProperties();
			case "Box Rectangle":
				return new Surface.Primitive.BoxRectangle();
			case "Box Slits":
				return new Intersect.Shape.BoxSlits();
			case "Break Field":
				return new Vector.Field.BreakField();
			case "Brep | Brep":
				return new Intersect.Physical.BrepBrep();
			case "Brep | Curve":
				return new Intersect.Physical.BrepCurve();
			case "Brep | Line":
				return new Intersect.Mathematical.BrepLine();
			case "Brep | Plane":
				return new Intersect.Mathematical.BrepPlane();
			case "Brep Closest Point":
				return new Surface.Analysis.BrepClosestPoint();
			case "Brep Edges":
				return new Surface.Analysis.BrepEdges();
			case "Brep Join":
				return new Surface.Util.BrepJoin();
			case "Brep Topology":
				return new Surface.Analysis.BrepTopology();
			case "Brep Wireframe":
				return new Surface.Analysis.BrepWireframe();
			case "C# Script":
				return new Maths.Script.CScript();
			case "Camera Obscura":
				return new Transform.Affine.CameraObscura();
			case "Cap Holes":
				return new Surface.Util.CapHoles();
			case "Cap Holes Ex":
				return new Surface.Util.CapHolesEx();
			case "Carthesian Product":
				return new Sets.Sets.CarthesianProduct();
			case "Catenary":
				return new Curve.Spline.Catenary();
			case "Catenary Ex":
				return new Curve.Spline.CatenaryEx();
			case "Center Box":
				return new Surface.Primitive.CenterBox();
			case "Centroid":
				return new Maths.Trig.Centroid();
			case "Char Sequence":
				return new Sets.Sequence.CharSequence();
			case "Characters":
				return new Sets.Text.Characters();
			case "Circle":
				return new Curve.Primitive.Circle();
			case "Circle 3Pt":
				return new Curve.Primitive.CircleThreePt();
			case "Circle CNR":
				return new Curve.Primitive.CircleCNR();
			case "Circle Fit":
				return new Curve.Primitive.CircleFit();
			case "Circle TanTan":
				return new Curve.Primitive.CircleTanTan();
			case "Circle TanTanTan":
				return new Curve.Primitive.CircleTanTanTan();
			case "Circular Dimension":
				return new Display.Dimensions.CircularDimension();
			case "Circumcentre":
				return new Maths.Trig.Circumcentre();
			case "Clash":
				return new Intersect.Physical.Clash();
			case "Clean Tree":
				return new Sets.Tree.CleanTree();
			case "Closed":
				return new Curve.Analysis.Closed();
			case "Closed Edges":
				return new Surface.Util.ClosedEdges();
			case "Closest Point":
				return new Vector.Point.ClosestPoint();
			case "Closest Points":
				return new Vector.Point.ClosestPoints();
			case "Cloud Display":
				return new Display.Preview.CloudDisplay();
			case "Collision Many|Many":
				return new Intersect.Physical.CollisionManyMany();
			case "Collision One|Many":
				return new Intersect.Physical.CollisionOneMany();
			case "Colour CMYK":
				return new Display.Colour.ColourCMYK();
			case "Colour HSL":
				return new Display.Colour.ColourHSL();
			case "Colour HSV":
				return new Display.Colour.ColourHSV();
			case "Colour L*ab":
				return new Display.Colour.ColourLab();
			case "Colour LCH":
				return new Display.Colour.ColourLCH();
			case "Colour RGB":
				return new Display.Colour.ColourRGB();
			case "Colour RGB (f)":
				return new Display.Colour.ColourRGBf();
			case "Colour XYZ":
				return new Display.Colour.ColourXYZ();
			case "Combine Data":
				return new Sets.List.CombineData();
			case "Combine Date & Time":
				return new Maths.Time.CombineDateTime();
			case "Complex Argument":
				return new Maths.Util.ComplexArgument();
			case "Complex Components":
				return new Maths.Util.ComplexComponents();
			case "Complex Conjugate":
				return new Maths.Util.ComplexConjugate();
			case "Complex Modulus":
				return new Maths.Util.ComplexModulus();
			case "Compound":
				return new Transform.Util.Compound();
			case "Concatenate":
				return new Sets.Text.Concatenate();
			case "Cone":
				return new Surface.Primitive.Cone();
			case "Connect Curves":
				return new Curve.Spline.ConnectCurves();
			case "Consecutive Domains":
				return new Maths.Domain.ConsecutiveDomains();
			case "Construct Date":
				return new Maths.Time.ConstructDate();
			case "Construct Domain":
				return new Maths.Domain.ConstructDomain();
			case "Construct Exotic Date":
				return new Maths.Time.ConstructExoticDate();
			case "Construct Matrix":
				return new Maths.Matrix.ConstructMatrix();
			case "Construct Mesh":
				return new Mesh.Primitive.ConstructMesh();
			case "Construct Path":
				return new Sets.Tree.ConstructPath();
			case "Construct Plane":
				return new Vector.Plane.ConstructPlane();
			case "Construct Point":
				return new Vector.Point.ConstructPoint();
			case "Construct Smooth Time":
				return new Maths.Time.ConstructSmoothTime();
			case "Construct Time":
				return new Maths.Time.ConstructTime();
			case "Contour":
				return new Intersect.Mathematical.Contour();
			case "Contour (ex)":
				return new Intersect.Mathematical.Contourex();
			case "Control Point Loft":
				return new Surface.Freeform.ControlPointLoft();
			case "Control Points":
				return new Curve.Analysis.ControlPoints();
			case "Control Polygon":
				return new Curve.Analysis.ControlPolygon();
			case "Convex Edges":
				return new Surface.Util.ConvexEdges();
			case "Convex Hull":
				return new Mesh.Triangulation.ConvexHull();
			case "Coordinate Mask":
				return new Vector.Point.CoordinateMask();
			case "Copy Trim":
				return new Surface.Util.CopyTrim();
			case "CoSecant":
				return new Maths.Trig.CoSecant();
			case "Cosine":
				return new Maths.Trig.Cosine();
			case "CoTangent":
				return new Maths.Trig.CoTangent();
			case "Create Complex":
				return new Maths.Util.CreateComplex();
			case "Create Material":
				return new Display.Preview.CreateMaterial();
			case "Create Set":
				return new Sets.Sets.CreateSet();
			case "Cross Product":
				return new Vector.Vector.CrossProduct();
			case "Cross Reference":
				return new Sets.List.CrossReference();
			case "Cube":
				return new Maths.Polynomials.Cube();
			case "Cube Root":
				return new Maths.Polynomials.CubeRoot();
			case "Cull Duplicates":
				return new Vector.Point.CullDuplicates();
			case "Cull Faces":
				return new Mesh.Util.CullFaces();
			case "Cull Index":
				return new Sets.Sequence.CullIndex();
			case "Cull Nth":
				return new Sets.Sequence.CullNth();
			case "Cull Pattern":
				return new Sets.Sequence.CullPattern();
			case "Cull Vertices":
				return new Mesh.Util.CullVertices();
			case "Curvature":
				return new Curve.Analysis.Curvature();
			case "Curvature Graph":
				return new Curve.Analysis.CurvatureGraph();
			case "Curve | Curve":
				return new Intersect.Physical.CurveCurve();
			case "Curve | Line":
				return new Intersect.Mathematical.CurveLine();
			case "Curve | Plane":
				return new Intersect.Mathematical.CurvePlane();
			case "Curve | Self":
				return new Intersect.Physical.CurveSelf();
			case "Curve Array":
				return new Transform.Array.CurveArray();
			case "Curve Closest Point":
				return new Curve.Analysis.CurveClosestPoint();
			case "Curve Depth":
				return new Curve.Analysis.CurveDepth();
			case "Curve Domain":
				return new Curve.Analysis.CurveDomain();
			case "Curve Frame":
				return new Curve.Analysis.CurveFrame();
			case "Curve Frames":
				return new Curve.Division.CurveFrames();
			case "Curve Middle":
				return new Curve.Analysis.CurveMiddle();
			case "Curve Nearest Object":
				return new Curve.Analysis.CurveNearestObject();
			case "Curve On Surface":
				return new Curve.Spline.CurveOnSurface();
			case "Curve Proximity":
				return new Curve.Analysis.CurveProximity();
			case "Curve Side":
				return new Curve.Analysis.CurveSide();
			case "Curve To Polyline":
				return new Curve.Util.CurveToPolyline();
			case "Custom Preview":
				return new Display.Preview.CustomPreview();
			case "Cylinder":
				return new Surface.Primitive.Cylinder();
			case "Dash Pattern":
				return new Curve.Division.DashPattern();
			case "Date Range":
				return new Maths.Time.DateRange();
			case "Deconstruct":
				return new Vector.Point.Deconstruct();
			case "Deconstruct Arc":
				return new Curve.Analysis.DeconstructArc();
			case "Deconstruct Box":
				return new Surface.Analysis.DeconstructBox();
			case "Deconstruct Brep":
				return new Surface.Analysis.DeconstructBrep();
			case "Deconstruct Date":
				return new Maths.Time.DeconstructDate();
			case "Deconstruct Domain":
				return new Maths.Domain.DeconstructDomain();
			case "Deconstruct Face":
				return new Mesh.Analysis.DeconstructFace();
			case "Deconstruct Matrix":
				return new Maths.Matrix.DeconstructMatrix();
			case "Deconstruct Mesh":
				return new Mesh.Analysis.DeconstructMesh();
			case "Deconstruct Path":
				return new Sets.Tree.DeconstructPath();
			case "Deconstruct Plane":
				return new Vector.Plane.DeconstructPlane();
			case "Deconstruct Vector":
				return new Vector.Vector.DeconstructVector();
			case "Deconstuct Rectangle":
				return new Curve.Analysis.DeconstuctRectangle();
			case "Degrees":
				return new Maths.Trig.Degrees();
			case "Delaunay Edges":
				return new Mesh.Triangulation.DelaunayEdges();
			case "Delaunay Mesh":
				return new Mesh.Triangulation.DelaunayMesh();
			case "Delete Consecutive":
				return new Sets.Sets.DeleteConsecutive();
			case "Delete Faces":
				return new Mesh.Util.DeleteFaces();
			case "Delete Vertices":
				return new Mesh.Util.DeleteVertices();
			case "Derivatives":
				return new Curve.Analysis.Derivatives();
			case "Dimensions":
				return new Surface.Analysis.Dimensions();
			case "Direction Display":
				return new Vector.Field.DirectionDisplay();
			case "Discontinuity":
				return new Curve.Analysis.Discontinuity();
			case "Disjoint":
				return new Sets.Sets.Disjoint();
			case "Disjoint Mesh":
				return new Mesh.Util.DisjointMesh();
			case "Dispatch":
				return new Sets.List.Dispatch();
			case "Display Matrix":
				return new Maths.Matrix.DisplayMatrix();
			case "Distance":
				return new Vector.Point.Distance();
			case "Divide":
				return new Vector.Vector.Divide();
			case "Divide By Deviation":
				return new Curve.Division.DivideByDeviation();
			case "Divide Curve":
				return new Curve.Division.DivideCurve();
			case "Divide Distance":
				return new Curve.Division.DivideDistance();
			case "Divide Domain":
				return new Maths.Domain.DivideDomain();
			case "Divide Length":
				return new Curve.Division.DivideLength();
			case "Divide Surface":
				return new Surface.Util.DivideSurface();
			case "Division":
				return new Maths.Operators.Division();
			case "Domain Box":
				return new Surface.Primitive.DomainBox();
			case "Dot Display":
				return new Display.Preview.DotDisplay();
			case "Dot Product":
				return new Vector.Vector.DotProduct();
			case "DotNET C# Script (LEGACY)":
				return new Maths.Script.DotNETCScriptLEGACY();
			case "DotNET VB Script (LEGACY)":
				return new Maths.Script.DotNETVBScriptLEGACY();
			case "Duplicate Data":
				return new Sets.Sequence.DuplicateData();
			case "Edge Surface":
				return new Surface.Freeform.EdgeSurface();
			case "Edges from Directions":
				return new Surface.Util.EdgesfromDirections();
			case "Edges from Faces":
				return new Surface.Util.EdgesfromFaces();
			case "Edges from Length":
				return new Surface.Util.EdgesfromLength();
			case "Edges from Linearity":
				return new Surface.Util.EdgesfromLinearity();
			case "Edges from Points":
				return new Surface.Util.EdgesfromPoints();
			case "Ellipse":
				return new Curve.Primitive.Ellipse();
			case "End Points":
				return new Curve.Analysis.EndPoints();
			case "Entwine":
				return new Sets.Tree.Entwine();
			case "Epsilon":
				return new Maths.Util.Epsilon();
			case "Equality":
				return new Maths.Operators.Equality();
			case "Evaluate":
				return new Maths.Script.Evaluate();
			case "Evaluate Box":
				return new Surface.Analysis.EvaluateBox();
			case "Evaluate Curve":
				return new Curve.Analysis.EvaluateCurve();
			case "Evaluate Field":
				return new Vector.Field.EvaluateField();
			case "Evaluate Length":
				return new Curve.Analysis.EvaluateLength();
			case "Evaluate Surface":
				return new Surface.Analysis.EvaluateSurface();
			case "Explode":
				return new Curve.Util.Explode();
			case "Explode Tree":
				return new Sets.Tree.ExplodeTree();
			case "Exposure":
				return new Mesh.Util.Exposure();
			case "Expression":
				return new Maths.Script.Expression();
			case "Extend Curve":
				return new Curve.Util.ExtendCurve();
			case "Extremes":
				return new Maths.Util.Extremes();
			case "Extrude":
				return new Surface.Freeform.Extrude();
			case "Extrude Along":
				return new Surface.Freeform.ExtrudeAlong();
			case "Extrude Angled":
				return new Surface.Freeform.ExtrudeAngled();
			case "Extrude Linear":
				return new Surface.Freeform.ExtrudeLinear();
			case "Extrude Point":
				return new Surface.Freeform.ExtrudePoint();
			case "Face Boundaries":
				return new Mesh.Analysis.FaceBoundaries();
			case "Face Circles":
				return new Mesh.Analysis.FaceCircles();
			case "Face Normals":
				return new Mesh.Analysis.FaceNormals();
			case "Facet Dome":
				return new Mesh.Triangulation.FacetDome();
			case "Factorial":
				return new Maths.Operators.Factorial();
			case "Fibonacci":
				return new Sets.Sequence.Fibonacci();
			case "Field Line":
				return new Vector.Field.FieldLine();
			case "Fillet":
				return new Curve.Util.Fillet();
			case "Fillet Distance":
				return new Curve.Util.FilletDistance();
			case "Fillet Edge":
				return new Surface.Util.FilletEdge();
			case "Find Domain":
				return new Maths.Domain.FindDomain();
			case "Find similar member":
				return new Sets.Sets.Findsimilarmember();
			case "Fit Curve":
				return new Curve.Util.FitCurve();
			case "Fit Line":
				return new Curve.Primitive.FitLine();
			case "Fit Loft":
				return new Surface.Freeform.FitLoft();
			case "Flatten Tree":
				return new Sets.Tree.FlattenTree();
			case "Flip":
				return new Surface.Util.Flip();
			case "Flip Curve":
				return new Curve.Util.FlipCurve();
			case "Flip Matrix":
				return new Sets.Tree.FlipMatrix();
			case "Flip Mesh":
				return new Mesh.Util.FlipMesh();
			case "Flip Plane":
				return new Vector.Plane.FlipPlane();
			case "Flow":
				return new Transform.Morph.Flow();
			case "Format":
				return new Sets.Text.Format();
			case "Fragment Patch":
				return new Surface.Freeform.FragmentPatch();
			case "Gate And":
				return new Maths.Operators.GateAnd();
			case "Gate Majority":
				return new Maths.Operators.GateMajority();
			case "Gate Nand":
				return new Maths.Operators.GateNand();
			case "Gate Nor":
				return new Maths.Operators.GateNor();
			case "Gate Not":
				return new Maths.Operators.GateNot();
			case "Gate Or":
				return new Maths.Operators.GateOr();
			case "Gate Xnor":
				return new Maths.Operators.GateXnor();
			case "Gate Xor":
				return new Maths.Operators.GateXor();
			case "Geodesic":
				return new Curve.Spline.Geodesic();
			case "GhPython Script":
				return new Maths.Script.GhPythonScript();
			case "Golden Ratio":
				return new Maths.Util.GoldenRatio();
			case "Graft Tree":
				return new Sets.Tree.GraftTree();
			case "Group":
				return new Transform.Util.Group();
			case "Hexagonal":
				return new Vector.Grid.Hexagonal();
			case "Horizontal Frame":
				return new Curve.Analysis.HorizontalFrame();
			case "Horizontal Frames":
				return new Curve.Division.HorizontalFrames();
			case "Image Gallery":
				return new Display.Graphs.ImageGallery();
			case "Incentre":
				return new Maths.Trig.Incentre();
			case "InCircle":
				return new Curve.Primitive.InCircle();
			case "Includes":
				return new Maths.Domain.Includes();
			case "InEllipse":
				return new Curve.Primitive.InEllipse();
			case "Insert Items":
				return new Sets.List.InsertItems();
			case "Integer Division":
				return new Maths.Operators.IntegerDivision();
			case "Interpolate":
				return new Curve.Spline.Interpolate();
			case "Interpolate (t)":
				return new Curve.Spline.Interpolatet();
			case "Interpolate data":
				return new Maths.Util.Interpolatedata();
			case "Interpolate Date":
				return new Maths.Time.InterpolateDate();
			case "Inverse Transform":
				return new Transform.Util.InverseTransform();
			case "Invert Matrix":
				return new Maths.Matrix.InvertMatrix();
			case "Is Planar":
				return new Surface.Analysis.IsPlanar();
			case "Iso Curve":
				return new Curve.Spline.IsoCurve();
			case "Isotrim":
				return new Surface.Util.Isotrim();
			case "IsoVist":
				return new Intersect.Mathematical.IsoVist();
			case "IsoVist Ray":
				return new Intersect.Mathematical.IsoVistRay();
			case "Item Index":
				return new Sets.List.ItemIndex();
			case "Jitter":
				return new Sets.Sequence.Jitter();
			case "Join Curves":
				return new Curve.Util.JoinCurves();
			case "Kaleidoscope":
				return new Transform.Array.Kaleidoscope();
			case "Key/Value Search":
				return new Sets.Sets.KeyValueSearch();
			case "Kinky Curve":
				return new Curve.Spline.KinkyCurve();
			case "Knot Vector":
				return new Curve.Spline.KnotVector();
			case "Larger Than":
				return new Maths.Operators.LargerThan();
			case "Legend":
				return new Display.Graphs.Legend();
			case "Length":
				return new Curve.Analysis.Length();
			case "Length Domain":
				return new Curve.Analysis.LengthDomain();
			case "Length Parameter":
				return new Curve.Analysis.LengthParameter();
			case "Line":
				return new Curve.Primitive.Line();
			case "Line + Line":
				return new Vector.Plane.LineLine();
			case "Line + Pt":
				return new Vector.Plane.LinePt();
			case "Line | Plane":
				return new Intersect.Mathematical.LinePlane();
			case "Line 2Plane":
				return new Curve.Primitive.LineTwoPlane();
			case "Line 4Pt":
				return new Curve.Primitive.LineFourPt();
			case "Line Charge":
				return new Vector.Field.LineCharge();
			case "Line Dimension":
				return new Display.Dimensions.LineDimension();
			case "Line SDL":
				return new Curve.Primitive.LineSDL();
			case "Linear Array":
				return new Transform.Array.LinearArray();
			case "Linear Dimension":
				return new Display.Dimensions.LinearDimension();
			case "List Item":
				return new Sets.List.ListItem();
			case "List Length":
				return new Sets.List.ListLength();
			case "Loft":
				return new Surface.Freeform.Loft();
			case "Loft Options":
				return new Surface.Freeform.LoftOptions();
			case "Log N":
				return new Maths.Polynomials.LogN();
			case "Logarithm":
				return new Maths.Polynomials.Logarithm();
			case "Longest List":
				return new Sets.List.LongestList();
			case "Maelstrom":
				return new Transform.Morph.Maelstrom();
			case "Make2D":
				return new Display.Dimensions.MakeTwoD();
			case "Make2D Parallel View":
				return new Display.Dimensions.MakeTwoDParallelView();
			case "Make2D Perspective View":
				return new Display.Dimensions.MakeTwoDPerspectiveView();
			case "Make2D Rhino View":
				return new Display.Dimensions.MakeTwoDRhinoView();
			case "Map to Surface":
				return new Transform.Morph.MaptoSurface();
			case "Marker Dimension":
				return new Display.Dimensions.MarkerDimension();
			case "Mass Addition":
				return new Maths.Operators.MassAddition();
			case "Mass Multiplication":
				return new Maths.Operators.MassMultiplication();
			case "Match Curve":
				return new Curve.Spline.MatchCurve();
			case "Match Text":
				return new Sets.Text.MatchText();
			case "Match Tree":
				return new Sets.Tree.MatchTree();
			case "Maximum":
				return new Maths.Util.Maximum();
			case "Member Index":
				return new Sets.Sets.MemberIndex();
			case "Merge":
				return new Sets.Tree.Merge();
			case "Merge 03":
				return new Sets.Tree.MergeZeroThree();
			case "Merge 04":
				return new Sets.Tree.MergeZeroFour();
			case "Merge 05":
				return new Sets.Tree.MergeZeroFive();
			case "Merge 06":
				return new Sets.Tree.MergeZeroSix();
			case "Merge 08":
				return new Sets.Tree.MergeZeroEight();
			case "Merge 10":
				return new Sets.Tree.MergeOneZero();
			case "Merge Faces":
				return new Surface.Util.MergeFaces();
			case "Merge Fields":
				return new Vector.Field.MergeFields();
			case "Merge Group":
				return new Transform.Util.MergeGroup();
			case "Merge Multiple":
				return new Sets.Tree.MergeMultiple();
			case "Mesh | Curve":
				return new Intersect.Physical.MeshCurve();
			case "Mesh | Mesh":
				return new Intersect.Physical.MeshMesh();
			case "Mesh | Plane":
				return new Intersect.Mathematical.MeshPlane();
			case "Mesh | Ray":
				return new Intersect.Mathematical.MeshRay();
			case "Mesh Box":
				return new Mesh.Primitive.MeshBox();
			case "Mesh Brep":
				return new Mesh.Util.MeshBrep();
			case "Mesh Closest Point":
				return new Mesh.Analysis.MeshClosestPoint();
			case "Mesh Colours":
				return new Mesh.Primitive.MeshColours();
			case "Mesh Depth":
				return new Mesh.Analysis.MeshDepth();
			case "Mesh Difference":
				return new Intersect.Shape.MeshDifference();
			case "Mesh Edges":
				return new Mesh.Analysis.MeshEdges();
			case "Mesh Eval":
				return new Mesh.Analysis.MeshEval();
			case "Mesh from Sub-D":
				return new Surface.SubD.MeshfromSubD();
			case "Mesh Inclusion":
				return new Mesh.Analysis.MeshInclusion();
			case "Mesh Intersection":
				return new Intersect.Shape.MeshIntersection();
			case "Mesh Join":
				return new Mesh.Util.MeshJoin();
			case "Mesh Quad":
				return new Mesh.Primitive.MeshQuad();
			case "Mesh Shadow":
				return new Mesh.Util.MeshShadow();
			case "Mesh Sphere":
				return new Mesh.Primitive.MeshSphere();
			case "Mesh Sphere Ex":
				return new Mesh.Primitive.MeshSphereEx();
			case "Mesh Split":
				return new Intersect.Shape.MeshSplit();
			case "Mesh Split Plane":
				return new Mesh.Util.MeshSplitPlane();
			case "Mesh Spray":
				return new Mesh.Primitive.MeshSpray();
			case "Mesh Surface":
				return new Mesh.Util.MeshSurface();
			case "Mesh Triangle":
				return new Mesh.Primitive.MeshTriangle();
			case "Mesh Union":
				return new Intersect.Shape.MeshUnion();
			case "MetaBall":
				return new Mesh.Triangulation.MetaBall();
			case "MetaBall(t)":
				return new Mesh.Triangulation.MetaBallt();
			case "MetaBall(t) Custom":
				return new Mesh.Triangulation.MetaBalltCustom();
			case "Minimum":
				return new Maths.Util.Minimum();
			case "Mirror":
				return new Transform.Euclidean.Mirror();
			case "Mirror Curve":
				return new Transform.Morph.MirrorCurve();
			case "Mirror Surface":
				return new Transform.Morph.MirrorSurface();
			case "Modified Arc":
				return new Curve.Primitive.ModifiedArc();
			case "Modulus":
				return new Maths.Operators.Modulus();
			case "Move":
				return new Transform.Euclidean.Move();
			case "Move Away From":
				return new Transform.Euclidean.MoveAwayFrom();
			case "Move To Plane":
				return new Transform.Euclidean.MoveToPlane();
			case "Multiple Curves":
				return new Intersect.Physical.MultipleCurves();
			case "Multiplication":
				return new Maths.Operators.Multiplication();
			case "Multiply":
				return new Vector.Vector.Multiply();
			case "Natural logarithm":
				return new Maths.Polynomials.Naturallogarithm();
			case "Negative":
				return new Maths.Operators.Negative();
			case "Network Surface":
				return new Surface.Freeform.NetworkSurface();
			case "Null Item":
				return new Sets.List.NullItem();
			case "Numbers to Points":
				return new Vector.Point.NumberstoPoints();
			case "Nurbs Curve":
				return new Curve.Spline.NurbsCurve();
			case "Nurbs Curve PWK":
				return new Curve.Spline.NurbsCurvePWK();
			case "Occlusion":
				return new Mesh.Util.Occlusion();
			case "OcTree":
				return new Mesh.Triangulation.OcTree();
			case "Offset Curve":
				return new Curve.Util.OffsetCurve();
			case "Offset Curve Loose":
				return new Curve.Util.OffsetCurveLoose();
			case "Offset Loose 3D":
				return new Curve.Util.OffsetLooseThreeD();
			case "Offset on Srf":
				return new Curve.Util.OffsetonSrf();
			case "Offset Polyline":
				return new Curve.Util.OffsetPolyline();
			case "Offset Surface":
				return new Surface.Util.OffsetSurface();
			case "Offset Surface Loose":
				return new Surface.Util.OffsetSurfaceLoose();
			case "One Over X":
				return new Maths.Polynomials.OneOverX();
			case "Orient":
				return new Transform.Euclidean.Orient();
			case "Orient Direction":
				return new Transform.Affine.OrientDirection();
			case "Orthocentre":
				return new Maths.Trig.Orthocentre();
			case "Osculating Circles":
				return new Surface.Analysis.OsculatingCircles();
			case "Partition List":
				return new Sets.List.PartitionList();
			case "Patch":
				return new Surface.Freeform.Patch();
			case "Path Compare":
				return new Sets.Tree.PathCompare();
			case "Path Mapper":
				return new Sets.Tree.PathMapper();
			case "Perp Frame":
				return new Curve.Analysis.PerpFrame();
			case "Perp Frames":
				return new Curve.Division.PerpFrames();
			case "Perpendicular Display":
				return new Vector.Field.PerpendicularDisplay();
			case "Pi":
				return new Maths.Util.Pi();
			case "Pick'n'Choose":
				return new Sets.List.PicknChoose();
			case "Pie Chart":
				return new Display.Graphs.PieChart();
			case "Pipe":
				return new Surface.Freeform.Pipe();
			case "Pipe Variable":
				return new Surface.Freeform.PipeVariable();
			case "Planar":
				return new Curve.Analysis.Planar();
			case "Plane | Plane":
				return new Intersect.Mathematical.PlanePlane();
			case "Plane | Plane | Plane":
				return new Intersect.Mathematical.PlanePlanePlane();
			case "Plane 3Pt":
				return new Vector.Plane.PlaneThreePt();
			case "Plane Closest Point":
				return new Vector.Plane.PlaneClosestPoint();
			case "Plane Coordinates":
				return new Vector.Plane.PlaneCoordinates();
			case "Plane Fit":
				return new Vector.Plane.PlaneFit();
			case "Plane Normal":
				return new Vector.Plane.PlaneNormal();
			case "Plane Offset":
				return new Vector.Plane.PlaneOffset();
			case "Plane Origin":
				return new Vector.Plane.PlaneOrigin();
			case "Plane Region":
				return new Intersect.Mathematical.PlaneRegion();
			case "Plane Surface":
				return new Surface.Primitive.PlaneSurface();
			case "Plane Through Shape":
				return new Surface.Primitive.PlaneThroughShape();
			case "Point Charge":
				return new Vector.Field.PointCharge();
			case "Point Cylindrical":
				return new Vector.Point.PointCylindrical();
			case "Point Deform":
				return new Transform.Morph.PointDeform();
			case "Point Groups":
				return new Vector.Point.PointGroups();
			case "Point In Brep":
				return new Surface.Analysis.PointInBrep();
			case "Point In Breps":
				return new Surface.Analysis.PointInBreps();
			case "Point In Curve":
				return new Curve.Analysis.PointInCurve();
			case "Point in Curves":
				return new Curve.Analysis.PointinCurves();
			case "Point In Trim":
				return new Surface.Analysis.PointInTrim();
			case "Point List":
				return new Display.Vector.PointList();
			case "Point On Curve":
				return new Curve.Analysis.PointOnCurve();
			case "Point Order":
				return new Display.Vector.PointOrder();
			case "Point Oriented":
				return new Vector.Point.PointOriented();
			case "Point Polar":
				return new Vector.Point.PointPolar();
			case "Points to Numbers":
				return new Vector.Point.PointstoNumbers();
			case "Polar Array":
				return new Transform.Array.PolarArray();
			case "PolyArc":
				return new Curve.Spline.PolyArc();
			case "Polygon":
				return new Curve.Primitive.Polygon();
			case "Polygon Center":
				return new Curve.Analysis.PolygonCenter();
			case "Polygon Edge":
				return new Curve.Primitive.PolygonEdge();
			case "PolyLine":
				return new Curve.Spline.PolyLine();
			case "Polyline Collapse":
				return new Curve.Util.PolylineCollapse();
			case "Populate 2D":
				return new Vector.Grid.PopulateTwoD();
			case "Populate 3D":
				return new Vector.Grid.PopulateThreeD();
			case "Populate Geometry":
				return new Vector.Grid.PopulateGeometry();
			case "Power":
				return new Maths.Operators.Power();
			case "Power of 10":
				return new Maths.Polynomials.PowerofOneZero();
			case "Power of 2":
				return new Maths.Polynomials.PowerofTwo();
			case "Power of E":
				return new Maths.Polynomials.PowerofE();
			case "Principal Curvature":
				return new Surface.Analysis.PrincipalCurvature();
			case "Project":
				return new Transform.Affine.Project();
			case "Project Along":
				return new Transform.Affine.ProjectAlong();
			case "Project Point":
				return new Vector.Point.ProjectPoint();
			case "Proximity 2D":
				return new Mesh.Triangulation.ProximityTwoD();
			case "Proximity 3D":
				return new Mesh.Triangulation.ProximityThreeD();
			case "Prune Tree":
				return new Sets.Tree.PruneTree();
			case "Pull Curve":
				return new Curve.Util.PullCurve();
			case "Pull Point":
				return new Vector.Point.PullPoint();
			case "Quad Remesh":
				return new Mesh.Triangulation.QuadRemesh();
			case "Quad Remesh Settings":
				return new Mesh.Triangulation.QuadRemeshSettings();
			case "Quad Sphere":
				return new Surface.Primitive.QuadSphere();
			case "Quadmesh Settings":
				return new Mesh.Triangulation.QuadmeshSettings();
			case "Quadrangulate":
				return new Mesh.Util.Quadrangulate();
			case "QuadTree":
				return new Mesh.Triangulation.QuadTree();
			case "Quick Graph":
				return new Display.Graphs.QuickGraph();
			case "Radial":
				return new Vector.Grid.Radial();
			case "Radians":
				return new Maths.Trig.Radians();
			case "Rail Revolution":
				return new Surface.Freeform.RailRevolution();
			case "Random":
				return new Sets.Sequence.Random();
			case "Random Reduce":
				return new Sets.Sequence.RandomReduce();
			case "RandomEx":
				return new Sets.Sequence.RandomEx();
			case "Range":
				return new Sets.Sequence.Range();
			case "Rebuild Curve":
				return new Curve.Util.RebuildCurve();
			case "Rectangle":
				return new Curve.Primitive.Rectangle();
			case "Rectangle 2Pt":
				return new Curve.Primitive.RectangleTwoPt();
			case "Rectangle 3Pt":
				return new Curve.Primitive.RectangleThreePt();
			case "Rectangle Mapping":
				return new Transform.Affine.RectangleMapping();
			case "Rectangular":
				return new Vector.Grid.Rectangular();
			case "Rectangular Array":
				return new Transform.Array.RectangularArray();
			case "Reduce":
				return new Curve.Util.Reduce();
			case "Region Difference":
				return new Intersect.Shape.RegionDifference();
			case "Region Intersection":
				return new Intersect.Shape.RegionIntersection();
			case "Region Slits":
				return new Intersect.Shape.RegionSlits();
			case "Region Union":
				return new Intersect.Shape.RegionUnion();
			case "Relative Differences":
				return new Maths.Operators.RelativeDifferences();
			case "Relative Item":
				return new Sets.Tree.RelativeItem();
			case "Relative Items":
				return new Sets.Tree.RelativeItems();
			case "Remap Numbers":
				return new Maths.Domain.RemapNumbers();
			case "Repeat Data":
				return new Sets.Sequence.RepeatData();
			case "Replace Items":
				return new Sets.List.ReplaceItems();
			case "Replace Members":
				return new Sets.Sets.ReplaceMembers();
			case "Replace Nulls":
				return new Sets.List.ReplaceNulls();
			case "Replace Paths":
				return new Sets.Tree.ReplacePaths();
			case "Replace Text":
				return new Sets.Text.ReplaceText();
			case "Retrim":
				return new Surface.Util.Retrim();
			case "Reverse":
				return new Vector.Vector.Reverse();
			case "Reverse List":
				return new Sets.List.ReverseList();
			case "Revolution":
				return new Surface.Freeform.Revolution();
			case "Right Trigonometry":
				return new Maths.Trig.RightTrigonometry();
			case "Rotate":
				return new Vector.Vector.Rotate();
			case "Rotate 3D":
				return new Transform.Euclidean.RotateThreeD();
			case "Rotate Axis":
				return new Transform.Euclidean.RotateAxis();
			case "Rotate Direction":
				return new Transform.Euclidean.RotateDirection();
			case "Rotate Plane":
				return new Vector.Plane.RotatePlane();
			case "Round":
				return new Maths.Util.Round();
			case "Ruled Surface":
				return new Surface.Freeform.RuledSurface();
			case "Sanity XForm":
				return new Transform.Euclidean.SanityXForm();
			case "Scalar Display":
				return new Vector.Field.ScalarDisplay();
			case "Scale":
				return new Transform.Affine.Scale();
			case "Scale NU":
				return new Transform.Affine.ScaleNU();
			case "Seam":
				return new Curve.Util.Seam();
			case "Secant":
				return new Maths.Trig.Secant();
			case "Segment Lengths":
				return new Curve.Analysis.SegmentLengths();
			case "Sequence":
				return new Sets.Sequence.Sequence();
			case "Serial Dimension":
				return new Display.Dimensions.SerialDimension();
			case "Series":
				return new Sets.Sequence.Series();
			case "Series Addition":
				return new Maths.Operators.SeriesAddition();
			case "Set Difference":
				return new Sets.Sets.SetDifference();
			case "Set Difference (S)":
				return new Sets.Sets.SetDifferenceS();
			case "Set Intersection":
				return new Sets.Sets.SetIntersection();
			case "Set Majority":
				return new Sets.Sets.SetMajority();
			case "Set Union":
				return new Sets.Sets.SetUnion();
			case "Settings (Custom)":
				return new Mesh.Util.SettingsCustom();
			case "Settings (Quality)":
				return new Mesh.Util.SettingsQuality();
			case "Settings (Speed)":
				return new Mesh.Util.SettingsSpeed();
			case "Shape In Brep":
				return new Surface.Analysis.ShapeInBrep();
			case "Shatter":
				return new Curve.Division.Shatter();
			case "Shear":
				return new Transform.Affine.Shear();
			case "Shear Angle":
				return new Transform.Affine.ShearAngle();
			case "Shift List":
				return new Sets.List.ShiftList();
			case "Shift Paths":
				return new Sets.Tree.ShiftPaths();
			case "Shortest List":
				return new Sets.List.ShortestList();
			case "Sift Pattern":
				return new Sets.List.SiftPattern();
			case "Similarity":
				return new Maths.Operators.Similarity();
			case "Simple Mesh":
				return new Mesh.Util.SimpleMesh();
			case "Simplify Curve":
				return new Curve.Util.SimplifyCurve();
			case "Simplify Tree":
				return new Sets.Tree.SimplifyTree();
			case "Sinc":
				return new Maths.Trig.Sinc();
			case "Sine":
				return new Maths.Trig.Sine();
			case "Smaller Than":
				return new Maths.Operators.SmallerThan();
			case "Smooth Mesh":
				return new Mesh.Util.SmoothMesh();
			case "Smooth Numbers":
				return new Maths.Util.SmoothNumbers();
			case "Smooth Polyline":
				return new Curve.Util.SmoothPolyline();
			case "Solar Incidence":
				return new Vector.Vector.SolarIncidence();
			case "Solid Difference":
				return new Intersect.Shape.SolidDifference();
			case "Solid Intersection":
				return new Intersect.Shape.SolidIntersection();
			case "Solid Union":
				return new Intersect.Shape.SolidUnion();
			case "Sort Along Curve":
				return new Vector.Point.SortAlongCurve();
			case "Sort List":
				return new Sets.List.SortList();
			case "Sort Points":
				return new Vector.Point.SortPoints();
			case "Sort Text":
				return new Sets.Text.SortText();
			case "Spatial Deform":
				return new Transform.Morph.SpatialDeform();
			case "Spatial Deform (custom)":
				return new Transform.Morph.SpatialDeformcustom();
			case "Sphere":
				return new Surface.Primitive.Sphere();
			case "Sphere 4Pt":
				return new Surface.Primitive.SphereFourPt();
			case "Sphere Fit":
				return new Surface.Primitive.SphereFit();
			case "Spin Force":
				return new Vector.Field.SpinForce();
			case "Split":
				return new Transform.Util.Split();
			case "Split AHSL":
				return new Display.Colour.SplitAHSL();
			case "Split AHSV":
				return new Display.Colour.SplitAHSV();
			case "Split ARGB":
				return new Display.Colour.SplitARGB();
			case "Split Brep":
				return new Intersect.Shape.SplitBrep();
			case "Split Brep Multiple":
				return new Intersect.Shape.SplitBrepMultiple();
			case "Split Group":
				return new Transform.Util.SplitGroup();
			case "Split List":
				return new Sets.List.SplitList();
			case "Split Tree":
				return new Sets.Tree.SplitTree();
			case "Split with Brep":
				return new Intersect.Region.SplitwithBrep();
			case "Split with Breps":
				return new Intersect.Region.SplitwithBreps();
			case "Splop":
				return new Transform.Morph.Splop();
			case "Sporph":
				return new Transform.Morph.Sporph();
			case "Square":
				return new Maths.Polynomials.Square();
			case "Square Root":
				return new Maths.Polynomials.SquareRoot();
			case "Stack Data":
				return new Sets.Sequence.StackData();
			case "Stream Filter":
				return new Sets.Tree.StreamFilter();
			case "Stream Gate":
				return new Sets.Tree.StreamGate();
			case "Stretch":
				return new Transform.Morph.Stretch();
			case "Sub Curve":
				return new Curve.Spline.SubCurve();
			case "Sub List":
				return new Sets.List.SubList();
			case "Sub-D Control Polygon":
				return new Surface.SubD.SubDControlPolygon();
			case "Sub-D Edges":
				return new Surface.SubD.SubDEdges();
			case "Sub-D Faces":
				return new Surface.SubD.SubDFaces();
			case "Sub-D from Mesh":
				return new Surface.SubD.SubDfromMesh();
			case "Sub-D Vertices":
				return new Surface.SubD.SubDVertices();
			case "SubD Box":
				return new Surface.SubD.SubDBox();
			case "SubSet":
				return new Sets.Sets.SubSet();
			case "Substrate":
				return new Mesh.Triangulation.Substrate();
			case "Subtraction":
				return new Maths.Operators.Subtraction();
			case "Sum Surface":
				return new Surface.Freeform.SumSurface();
			case "Surface | Curve":
				return new Intersect.Physical.SurfaceCurve();
			case "Surface | Line":
				return new Intersect.Mathematical.SurfaceLine();
			case "Surface Box":
				return new Transform.Morph.SurfaceBox();
			case "Surface Closest Point":
				return new Surface.Analysis.SurfaceClosestPoint();
			case "Surface Curvature":
				return new Surface.Analysis.SurfaceCurvature();
			case "Surface Frames":
				return new Surface.Util.SurfaceFrames();
			case "Surface From Points":
				return new Surface.Freeform.SurfaceFromPoints();
			case "Surface Inflection":
				return new Surface.Analysis.SurfaceInflection();
			case "Surface Morph":
				return new Transform.Morph.SurfaceMorph();
			case "Surface Points":
				return new Surface.Analysis.SurfacePoints();
			case "Surface Split":
				return new Intersect.Physical.SurfaceSplit();
			case "Swap Columns":
				return new Maths.Matrix.SwapColumns();
			case "Swap Rows":
				return new Maths.Matrix.SwapRows();
			case "Sweep1":
				return new Surface.Freeform.SweepOne();
			case "Sweep2":
				return new Surface.Freeform.SweepTwo();
			case "Swing Arc":
				return new Curve.Spline.SwingArc();
			case "Symbol (Advanced)":
				return new Display.Preview.SymbolAdvanced();
			case "Symbol (Simple)":
				return new Display.Preview.SymbolSimple();
			case "Symbol Display":
				return new Display.Preview.SymbolDisplay();
			case "Tangent":
				return new Maths.Trig.Tangent();
			case "Tangent Arcs":
				return new Curve.Primitive.TangentArcs();
			case "Tangent Curve":
				return new Curve.Spline.TangentCurve();
			case "Tangent Lines":
				return new Curve.Primitive.TangentLines();
			case "Tangent Lines (Ex)":
				return new Curve.Primitive.TangentLinesEx();
			case "Tangent Lines (In)":
				return new Curve.Primitive.TangentLinesIn();
			case "Taper":
				return new Transform.Morph.Taper();
			case "Tensor Display":
				return new Vector.Field.TensorDisplay();
			case "Test Crash":
				return new Display.Test.TestCrash();
			case "Text Case":
				return new Sets.Text.TextCase();
			case "Text Distance":
				return new Sets.Text.TextDistance();
			case "Text Fragment":
				return new Sets.Text.TextFragment();
			case "Text Join":
				return new Sets.Text.TextJoin();
			case "Text Length":
				return new Sets.Text.TextLength();
			case "Text Split":
				return new Sets.Text.TextSplit();
			case "Text Tag":
				return new Display.Dimensions.TextTag();
			case "Text Tag 3D":
				return new Display.Dimensions.TextTagThreeD();
			case "Text Trim":
				return new Sets.Text.TextTrim();
			case "To Polar":
				return new Vector.Point.ToPolar();
			case "Torsion":
				return new Curve.Analysis.Torsion();
			case "Transform Matrix":
				return new Transform.Util.TransformMatrix();
			case "Transpose Matrix":
				return new Maths.Matrix.TransposeMatrix();
			case "Tree Branch":
				return new Sets.Tree.TreeBranch();
			case "Tree Item":
				return new Sets.Tree.TreeItem();
			case "Tree Statistics":
				return new Sets.Tree.TreeStatistics();
			case "Triangle Mapping":
				return new Transform.Affine.TriangleMapping();
			case "Triangle Trigonometry":
				return new Maths.Trig.TriangleTrigonometry();
			case "Triangular":
				return new Vector.Grid.Triangular();
			case "Triangulate":
				return new Mesh.Util.Triangulate();
			case "Trim Solid":
				return new Intersect.Shape.TrimSolid();
			case "Trim Tree":
				return new Sets.Tree.TrimTree();
			case "Trim with Brep":
				return new Intersect.Region.TrimwithBrep();
			case "Trim with Breps":
				return new Intersect.Region.TrimwithBreps();
			case "Trim with Region":
				return new Intersect.Region.TrimwithRegion();
			case "Trim with Regions":
				return new Intersect.Region.TrimwithRegions();
			case "Truncate":
				return new Maths.Util.Truncate();
			case "Tween Curve":
				return new Curve.Spline.TweenCurve();
			case "Twist":
				return new Transform.Morph.Twist();
			case "Twisted Box":
				return new Transform.Morph.TwistedBox();
			case "TwoByFourJam":
				return new Curve.Primitive.TwoByFourJam();
			case "Unflatten Tree":
				return new Sets.Tree.UnflattenTree();
			case "Ungroup":
				return new Transform.Util.Ungroup();
			case "Unify Mesh":
				return new Mesh.Util.UnifyMesh();
			case "Unit Vector":
				return new Vector.Vector.UnitVector();
			case "Unit X":
				return new Vector.Vector.UnitX();
			case "Unit Y":
				return new Vector.Vector.UnitY();
			case "Unit Z":
				return new Vector.Vector.UnitZ();
			case "Untrim":
				return new Surface.Util.Untrim();
			case "Unweld Mesh":
				return new Mesh.Util.UnweldMesh();
			case "Value Tracker":
				return new Display.Graphs.ValueTracker();
			case "Variable":
				return new Maths.Script.Variable();
			case "VB Script":
				return new Maths.Script.VBScript();
			case "Vector 2Pt":
				return new Vector.Vector.VectorTwoPt();
			case "Vector Display":
				return new Display.Vector.VectorDisplay();
			case "Vector Display Ex":
				return new Display.Vector.VectorDisplayEx();
			case "Vector Force":
				return new Vector.Field.VectorForce();
			case "Vector Length":
				return new Vector.Vector.VectorLength();
			case "Vector XYZ":
				return new Vector.Vector.VectorXYZ();
			case "Viewport Display":
				return new Display.Viewport.ViewportDisplay();
			case "Volume":
				return new Surface.Analysis.Volume();
			case "Volume Moments":
				return new Surface.Analysis.VolumeMoments();
			case "Voronoi":
				return new Mesh.Triangulation.Voronoi();
			case "Voronoi 3D":
				return new Mesh.Triangulation.VoronoiThreeD();
			case "Voronoi Cell":
				return new Mesh.Triangulation.VoronoiCell();
			case "Voronoi Groups":
				return new Mesh.Triangulation.VoronoiGroups();
			case "Weave":
				return new Sets.List.Weave();
			case "Weighted Average":
				return new Maths.Util.WeightedAverage();
			case "Weld Mesh":
				return new Mesh.Util.WeldMesh();
			case "XY Plane":
				return new Vector.Plane.XYPlane();
			case "XZ Plane":
				return new Vector.Plane.XZPlane();
			case "YZ Plane":
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
import AlignPlane from './components/Vector/Plane/AlignPlane';
import AlignPlanes from './components/Vector/Plane/AlignPlanes';
import AlignVertices from './components/Mesh/Util/AlignVertices';
import AlignedDimension from './components/Display/Dimensions/AlignedDimension';
import Amplitude from './components/Vector/Vector/Amplitude';
import Angle from './components/Vector/Vector/Angle';
import AngularDimension from './components/Display/Dimensions/AngularDimension';
import AngularDimensionsMesh from './components/Display/Dimensions/AngularDimensionsMesh';
import Arc from './components/Curve/Primitive/Arc';
import ArcThreePt from './components/Curve/Primitive/ArcThreePt';
import ArcDimension from './components/Display/Dimensions/ArcDimension';
import ArcSED from './components/Curve/Primitive/ArcSED';
import ArcCosine from './components/Maths/Trig/ArcCosine';
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
import BrepCurve from './components/Intersect/Physical/BrepCurve';
import BrepLine from './components/Intersect/Mathematical/BrepLine';
import BrepPlane from './components/Intersect/Mathematical/BrepPlane';
import BrepClosestPoint from './components/Surface/Analysis/BrepClosestPoint';
import BrepEdges from './components/Surface/Analysis/BrepEdges';
import BrepJoin from './components/Surface/Util/BrepJoin';
import BrepTopology from './components/Surface/Analysis/BrepTopology';
import BrepWireframe from './components/Surface/Analysis/BrepWireframe';
import CScript from './components/Maths/Script/CScript';
import CameraObscura from './components/Transform/Affine/CameraObscura';
import CapHoles from './components/Surface/Util/CapHoles';
import CapHolesEx from './components/Surface/Util/CapHolesEx';
import CarthesianProduct from './components/Sets/Sets/CarthesianProduct';
import Catenary from './components/Curve/Spline/Catenary';
import CatenaryEx from './components/Curve/Spline/CatenaryEx';
import CenterBox from './components/Surface/Primitive/CenterBox';
import Centroid from './components/Maths/Trig/Centroid';
import CharSequence from './components/Sets/Sequence/CharSequence';
import Characters from './components/Sets/Text/Characters';
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
import CurveCurve from './components/Intersect/Physical/CurveCurve';
import CurveLine from './components/Intersect/Mathematical/CurveLine';
import CurvePlane from './components/Intersect/Mathematical/CurvePlane';
import CurveSelf from './components/Intersect/Physical/CurveSelf';
import CurveArray from './components/Transform/Array/CurveArray';
import CurveClosestPoint from './components/Curve/Analysis/CurveClosestPoint';
import CurveDepth from './components/Curve/Analysis/CurveDepth';
import CurveDomain from './components/Curve/Analysis/CurveDomain';
import CurveFrame from './components/Curve/Analysis/CurveFrame';
import CurveFrames from './components/Curve/Division/CurveFrames';
import CurveMiddle from './components/Curve/Analysis/CurveMiddle';
import CurveNearestObject from './components/Curve/Analysis/CurveNearestObject';
import CurveOnSurface from './components/Curve/Spline/CurveOnSurface';
import CurveProximity from './components/Curve/Analysis/CurveProximity';
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
import DotProduct from './components/Vector/Vector/DotProduct';
import DotNETCScriptLEGACY from './components/Maths/Script/DotNETCScriptLEGACY';
import DotNETVBScriptLEGACY from './components/Maths/Script/DotNETVBScriptLEGACY';
import DuplicateData from './components/Sets/Sequence/DuplicateData';
import EdgeSurface from './components/Surface/Freeform/EdgeSurface';
import EdgesfromDirections from './components/Surface/Util/EdgesfromDirections';
import EdgesfromFaces from './components/Surface/Util/EdgesfromFaces';
import EdgesfromLength from './components/Surface/Util/EdgesfromLength';
import EdgesfromLinearity from './components/Surface/Util/EdgesfromLinearity';
import EdgesfromPoints from './components/Surface/Util/EdgesfromPoints';
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
import Interpolatet from './components/Curve/Spline/Interpolatet';
import Interpolatedata from './components/Maths/Util/Interpolatedata';
import InterpolateDate from './components/Maths/Time/InterpolateDate';
import InverseTransform from './components/Transform/Util/InverseTransform';
import InvertMatrix from './components/Maths/Matrix/InvertMatrix';
import IsPlanar from './components/Surface/Analysis/IsPlanar';
import IsoCurve from './components/Curve/Spline/IsoCurve';
import Isotrim from './components/Surface/Util/Isotrim';
import IsoVist from './components/Intersect/Mathematical/IsoVist';
import IsoVistRay from './components/Intersect/Mathematical/IsoVistRay';
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
import LineLine from './components/Vector/Plane/LineLine';
import LinePt from './components/Vector/Plane/LinePt';
import LinePlane from './components/Intersect/Mathematical/LinePlane';
import LineTwoPlane from './components/Curve/Primitive/LineTwoPlane';
import LineFourPt from './components/Curve/Primitive/LineFourPt';
import LineCharge from './components/Vector/Field/LineCharge';
import LineDimension from './components/Display/Dimensions/LineDimension';
import LineSDL from './components/Curve/Primitive/LineSDL';
import LinearArray from './components/Transform/Array/LinearArray';
import LinearDimension from './components/Display/Dimensions/LinearDimension';
import ListItem from './components/Sets/List/ListItem';
import ListLength from './components/Sets/List/ListLength';
import Loft from './components/Surface/Freeform/Loft';
import LoftOptions from './components/Surface/Freeform/LoftOptions';
import LogN from './components/Maths/Polynomials/LogN';
import Logarithm from './components/Maths/Polynomials/Logarithm';
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
import MeshCurve from './components/Intersect/Physical/MeshCurve';
import MeshMesh from './components/Intersect/Physical/MeshMesh';
import MeshPlane from './components/Intersect/Mathematical/MeshPlane';
import MeshRay from './components/Intersect/Mathematical/MeshRay';
import MeshBox from './components/Mesh/Primitive/MeshBox';
import MeshBrep from './components/Mesh/Util/MeshBrep';
import MeshClosestPoint from './components/Mesh/Analysis/MeshClosestPoint';
import MeshColours from './components/Mesh/Primitive/MeshColours';
import MeshDepth from './components/Mesh/Analysis/MeshDepth';
import MeshDifference from './components/Intersect/Shape/MeshDifference';
import MeshEdges from './components/Mesh/Analysis/MeshEdges';
import MeshEval from './components/Mesh/Analysis/MeshEval';
import MeshfromSubD from './components/Surface/SubD/MeshfromSubD';
import MeshInclusion from './components/Mesh/Analysis/MeshInclusion';
import MeshIntersection from './components/Intersect/Shape/MeshIntersection';
import MeshJoin from './components/Mesh/Util/MeshJoin';
import MeshQuad from './components/Mesh/Primitive/MeshQuad';
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
import PerpFrame from './components/Curve/Analysis/PerpFrame';
import PerpFrames from './components/Curve/Division/PerpFrames';
import PerpendicularDisplay from './components/Vector/Field/PerpendicularDisplay';
import Pi from './components/Maths/Util/Pi';
import PicknChoose from './components/Sets/List/PicknChoose';
import PieChart from './components/Display/Graphs/PieChart';
import Pipe from './components/Surface/Freeform/Pipe';
import PipeVariable from './components/Surface/Freeform/PipeVariable';
import Planar from './components/Curve/Analysis/Planar';
import PlanePlane from './components/Intersect/Mathematical/PlanePlane';
import PlanePlanePlane from './components/Intersect/Mathematical/PlanePlanePlane';
import PlaneThreePt from './components/Vector/Plane/PlaneThreePt';
import PlaneClosestPoint from './components/Vector/Plane/PlaneClosestPoint';
import PlaneCoordinates from './components/Vector/Plane/PlaneCoordinates';
import PlaneFit from './components/Vector/Plane/PlaneFit';
import PlaneNormal from './components/Vector/Plane/PlaneNormal';
import PlaneOffset from './components/Vector/Plane/PlaneOffset';
import PlaneOrigin from './components/Vector/Plane/PlaneOrigin';
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
import QuadRemesh from './components/Mesh/Triangulation/QuadRemesh';
import QuadRemeshSettings from './components/Mesh/Triangulation/QuadRemeshSettings';
import QuadSphere from './components/Surface/Primitive/QuadSphere';
import QuadmeshSettings from './components/Mesh/Triangulation/QuadmeshSettings';
import Quadrangulate from './components/Mesh/Util/Quadrangulate';
import QuadTree from './components/Mesh/Triangulation/QuadTree';
import QuickGraph from './components/Display/Graphs/QuickGraph';
import Radial from './components/Vector/Grid/Radial';
import Radians from './components/Maths/Trig/Radians';
import RailRevolution from './components/Surface/Freeform/RailRevolution';
import Random from './components/Sets/Sequence/Random';
import RandomReduce from './components/Sets/Sequence/RandomReduce';
import RandomEx from './components/Sets/Sequence/RandomEx';
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
import SetUnion from './components/Sets/Sets/SetUnion';
import SettingsCustom from './components/Mesh/Util/SettingsCustom';
import SettingsQuality from './components/Mesh/Util/SettingsQuality';
import SettingsSpeed from './components/Mesh/Util/SettingsSpeed';
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
import SubList from './components/Sets/List/SubList';
import SubDControlPolygon from './components/Surface/SubD/SubDControlPolygon';
import SubDEdges from './components/Surface/SubD/SubDEdges';
import SubDFaces from './components/Surface/SubD/SubDFaces';
import SubDfromMesh from './components/Surface/SubD/SubDfromMesh';
import SubDVertices from './components/Surface/SubD/SubDVertices';
import SubDBox from './components/Surface/SubD/SubDBox';
import SubSet from './components/Sets/Sets/SubSet';
import Substrate from './components/Mesh/Triangulation/Substrate';
import Subtraction from './components/Maths/Operators/Subtraction';
import SumSurface from './components/Surface/Freeform/SumSurface';
import SurfaceCurve from './components/Intersect/Physical/SurfaceCurve';
import SurfaceLine from './components/Intersect/Mathematical/SurfaceLine';
import SurfaceBox from './components/Transform/Morph/SurfaceBox';
import SurfaceClosestPoint from './components/Surface/Analysis/SurfaceClosestPoint';
import SurfaceCurvature from './components/Surface/Analysis/SurfaceCurvature';
import SurfaceFrames from './components/Surface/Util/SurfaceFrames';
import SurfaceFromPoints from './components/Surface/Freeform/SurfaceFromPoints';
import SurfaceInflection from './components/Surface/Analysis/SurfaceInflection';
import SurfaceMorph from './components/Transform/Morph/SurfaceMorph';
import SurfacePoints from './components/Surface/Analysis/SurfacePoints';
import SurfaceSplit from './components/Intersect/Physical/SurfaceSplit';
import SwapColumns from './components/Maths/Matrix/SwapColumns';
import SwapRows from './components/Maths/Matrix/SwapRows';
import SweepOne from './components/Surface/Freeform/SweepOne';
import SweepTwo from './components/Surface/Freeform/SweepTwo';
import SwingArc from './components/Curve/Spline/SwingArc';
import SymbolAdvanced from './components/Display/Preview/SymbolAdvanced';
import SymbolSimple from './components/Display/Preview/SymbolSimple';
import SymbolDisplay from './components/Display/Preview/SymbolDisplay';
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
AlignPlane,
AlignPlanes,
AlignVertices,
AlignedDimension,
Amplitude,
Angle,
AngularDimension,
AngularDimensionsMesh,
Arc,
ArcThreePt,
ArcDimension,
ArcSED,
ArcCosine,
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
BrepCurve,
BrepLine,
BrepPlane,
BrepClosestPoint,
BrepEdges,
BrepJoin,
BrepTopology,
BrepWireframe,
CScript,
CameraObscura,
CapHoles,
CapHolesEx,
CarthesianProduct,
Catenary,
CatenaryEx,
CenterBox,
Centroid,
CharSequence,
Characters,
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
CurveCurve,
CurveLine,
CurvePlane,
CurveSelf,
CurveArray,
CurveClosestPoint,
CurveDepth,
CurveDomain,
CurveFrame,
CurveFrames,
CurveMiddle,
CurveNearestObject,
CurveOnSurface,
CurveProximity,
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
DotProduct,
DotNETCScriptLEGACY,
DotNETVBScriptLEGACY,
DuplicateData,
EdgeSurface,
EdgesfromDirections,
EdgesfromFaces,
EdgesfromLength,
EdgesfromLinearity,
EdgesfromPoints,
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
Interpolatet,
Interpolatedata,
InterpolateDate,
InverseTransform,
InvertMatrix,
IsPlanar,
IsoCurve,
Isotrim,
IsoVist,
IsoVistRay,
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
LineLine,
LinePt,
LinePlane,
LineTwoPlane,
LineFourPt,
LineCharge,
LineDimension,
LineSDL,
LinearArray,
LinearDimension,
ListItem,
ListLength,
Loft,
LoftOptions,
LogN,
Logarithm,
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
MeshCurve,
MeshMesh,
MeshPlane,
MeshRay,
MeshBox,
MeshBrep,
MeshClosestPoint,
MeshColours,
MeshDepth,
MeshDifference,
MeshEdges,
MeshEval,
MeshfromSubD,
MeshInclusion,
MeshIntersection,
MeshJoin,
MeshQuad,
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
PerpFrame,
PerpFrames,
PerpendicularDisplay,
Pi,
PicknChoose,
PieChart,
Pipe,
PipeVariable,
Planar,
PlanePlane,
PlanePlanePlane,
PlaneThreePt,
PlaneClosestPoint,
PlaneCoordinates,
PlaneFit,
PlaneNormal,
PlaneOffset,
PlaneOrigin,
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
QuadRemesh,
QuadRemeshSettings,
QuadSphere,
QuadmeshSettings,
Quadrangulate,
QuadTree,
QuickGraph,
Radial,
Radians,
RailRevolution,
Random,
RandomReduce,
RandomEx,
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
SetUnion,
SettingsCustom,
SettingsQuality,
SettingsSpeed,
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
SubList,
SubDControlPolygon,
SubDEdges,
SubDFaces,
SubDfromMesh,
SubDVertices,
SubDBox,
SubSet,
Substrate,
Subtraction,
SumSurface,
SurfaceCurve,
SurfaceLine,
SurfaceBox,
SurfaceClosestPoint,
SurfaceCurvature,
SurfaceFrames,
SurfaceFromPoints,
SurfaceInflection,
SurfaceMorph,
SurfacePoints,
SurfaceSplit,
SwapColumns,
SwapRows,
SweepOne,
SweepTwo,
SwingArc,
SymbolAdvanced,
SymbolSimple,
SymbolDisplay,
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
"4Point Surface" |
"Absolute" |
"Addition" |
"Adjust Plane" |
"Align Plane" |
"Align Planes" |
"Align Vertices" |
"Aligned Dimension" |
"Amplitude" |
"Angle" |
"Angular Dimension" |
"Angular Dimensions (Mesh)" |
"Arc" |
"Arc 3Pt" |
"Arc Dimension" |
"Arc SED" |
"ArcCosine" |
"ArcSine" |
"ArcTangent" |
"Area" |
"Area Moments" |
"Average" |
"Bar Graph" |
"Barycentric" |
"Bend Deform" |
"Bezier Span" |
"BiArc" |
"Blend Box" |
"Blend Colours" |
"Blend Curve" |
"Blend Curve Pt" |
"Blur Mesh" |
"Blur Numbers" |
"Boundary Surfaces" |
"Boundary Volume" |
"Bounding Box" |
"Bounds" |
"Bounds 2D" |
"Box 2Pt" |
"Box Array" |
"Box Corners" |
"Box Mapping" |
"Box Morph" |
"Box Properties" |
"Box Rectangle" |
"Box Slits" |
"Break Field" |
"Brep | Brep" |
"Brep | Curve" |
"Brep | Line" |
"Brep | Plane" |
"Brep Closest Point" |
"Brep Edges" |
"Brep Join" |
"Brep Topology" |
"Brep Wireframe" |
"C# Script" |
"Camera Obscura" |
"Cap Holes" |
"Cap Holes Ex" |
"Carthesian Product" |
"Catenary" |
"Catenary Ex" |
"Center Box" |
"Centroid" |
"Char Sequence" |
"Characters" |
"Circle" |
"Circle 3Pt" |
"Circle CNR" |
"Circle Fit" |
"Circle TanTan" |
"Circle TanTanTan" |
"Circular Dimension" |
"Circumcentre" |
"Clash" |
"Clean Tree" |
"Closed" |
"Closed Edges" |
"Closest Point" |
"Closest Points" |
"Cloud Display" |
"Collision Many|Many" |
"Collision One|Many" |
"Colour CMYK" |
"Colour HSL" |
"Colour HSV" |
"Colour L*ab" |
"Colour LCH" |
"Colour RGB" |
"Colour RGB (f)" |
"Colour XYZ" |
"Combine Data" |
"Combine Date & Time" |
"Complex Argument" |
"Complex Components" |
"Complex Conjugate" |
"Complex Modulus" |
"Compound" |
"Concatenate" |
"Cone" |
"Connect Curves" |
"Consecutive Domains" |
"Construct Date" |
"Construct Domain" |
"Construct Exotic Date" |
"Construct Matrix" |
"Construct Mesh" |
"Construct Path" |
"Construct Plane" |
"Construct Point" |
"Construct Smooth Time" |
"Construct Time" |
"Contour" |
"Contour (ex)" |
"Control Point Loft" |
"Control Points" |
"Control Polygon" |
"Convex Edges" |
"Convex Hull" |
"Coordinate Mask" |
"Copy Trim" |
"CoSecant" |
"Cosine" |
"CoTangent" |
"Create Complex" |
"Create Material" |
"Create Set" |
"Cross Product" |
"Cross Reference" |
"Cube" |
"Cube Root" |
"Cull Duplicates" |
"Cull Faces" |
"Cull Index" |
"Cull Nth" |
"Cull Pattern" |
"Cull Vertices" |
"Curvature" |
"Curvature Graph" |
"Curve | Curve" |
"Curve | Line" |
"Curve | Plane" |
"Curve | Self" |
"Curve Array" |
"Curve Closest Point" |
"Curve Depth" |
"Curve Domain" |
"Curve Frame" |
"Curve Frames" |
"Curve Middle" |
"Curve Nearest Object" |
"Curve On Surface" |
"Curve Proximity" |
"Curve Side" |
"Curve To Polyline" |
"Custom Preview" |
"Cylinder" |
"Dash Pattern" |
"Date Range" |
"Deconstruct" |
"Deconstruct Arc" |
"Deconstruct Box" |
"Deconstruct Brep" |
"Deconstruct Date" |
"Deconstruct Domain" |
"Deconstruct Face" |
"Deconstruct Matrix" |
"Deconstruct Mesh" |
"Deconstruct Path" |
"Deconstruct Plane" |
"Deconstruct Vector" |
"Deconstuct Rectangle" |
"Degrees" |
"Delaunay Edges" |
"Delaunay Mesh" |
"Delete Consecutive" |
"Delete Faces" |
"Delete Vertices" |
"Derivatives" |
"Dimensions" |
"Direction Display" |
"Discontinuity" |
"Disjoint" |
"Disjoint Mesh" |
"Dispatch" |
"Display Matrix" |
"Distance" |
"Divide" |
"Divide By Deviation" |
"Divide Curve" |
"Divide Distance" |
"Divide Domain" |
"Divide Length" |
"Divide Surface" |
"Division" |
"Domain Box" |
"Dot Display" |
"Dot Product" |
"DotNET C# Script (LEGACY)" |
"DotNET VB Script (LEGACY)" |
"Duplicate Data" |
"Edge Surface" |
"Edges from Directions" |
"Edges from Faces" |
"Edges from Length" |
"Edges from Linearity" |
"Edges from Points" |
"Ellipse" |
"End Points" |
"Entwine" |
"Epsilon" |
"Equality" |
"Evaluate" |
"Evaluate Box" |
"Evaluate Curve" |
"Evaluate Field" |
"Evaluate Length" |
"Evaluate Surface" |
"Explode" |
"Explode Tree" |
"Exposure" |
"Expression" |
"Extend Curve" |
"Extremes" |
"Extrude" |
"Extrude Along" |
"Extrude Angled" |
"Extrude Linear" |
"Extrude Point" |
"Face Boundaries" |
"Face Circles" |
"Face Normals" |
"Facet Dome" |
"Factorial" |
"Fibonacci" |
"Field Line" |
"Fillet" |
"Fillet Distance" |
"Fillet Edge" |
"Find Domain" |
"Find similar member" |
"Fit Curve" |
"Fit Line" |
"Fit Loft" |
"Flatten Tree" |
"Flip" |
"Flip Curve" |
"Flip Matrix" |
"Flip Mesh" |
"Flip Plane" |
"Flow" |
"Format" |
"Fragment Patch" |
"Gate And" |
"Gate Majority" |
"Gate Nand" |
"Gate Nor" |
"Gate Not" |
"Gate Or" |
"Gate Xnor" |
"Gate Xor" |
"Geodesic" |
"GhPython Script" |
"Golden Ratio" |
"Graft Tree" |
"Group" |
"Hexagonal" |
"Horizontal Frame" |
"Horizontal Frames" |
"Image Gallery" |
"Incentre" |
"InCircle" |
"Includes" |
"InEllipse" |
"Insert Items" |
"Integer Division" |
"Interpolate" |
"Interpolate (t)" |
"Interpolate data" |
"Interpolate Date" |
"Inverse Transform" |
"Invert Matrix" |
"Is Planar" |
"Iso Curve" |
"Isotrim" |
"IsoVist" |
"IsoVist Ray" |
"Item Index" |
"Jitter" |
"Join Curves" |
"Kaleidoscope" |
"Key/Value Search" |
"Kinky Curve" |
"Knot Vector" |
"Larger Than" |
"Legend" |
"Length" |
"Length Domain" |
"Length Parameter" |
"Line" |
"Line + Line" |
"Line + Pt" |
"Line | Plane" |
"Line 2Plane" |
"Line 4Pt" |
"Line Charge" |
"Line Dimension" |
"Line SDL" |
"Linear Array" |
"Linear Dimension" |
"List Item" |
"List Length" |
"Loft" |
"Loft Options" |
"Log N" |
"Logarithm" |
"Longest List" |
"Maelstrom" |
"Make2D" |
"Make2D Parallel View" |
"Make2D Perspective View" |
"Make2D Rhino View" |
"Map to Surface" |
"Marker Dimension" |
"Mass Addition" |
"Mass Multiplication" |
"Match Curve" |
"Match Text" |
"Match Tree" |
"Maximum" |
"Member Index" |
"Merge" |
"Merge 03" |
"Merge 04" |
"Merge 05" |
"Merge 06" |
"Merge 08" |
"Merge 10" |
"Merge Faces" |
"Merge Fields" |
"Merge Group" |
"Merge Multiple" |
"Mesh | Curve" |
"Mesh | Mesh" |
"Mesh | Plane" |
"Mesh | Ray" |
"Mesh Box" |
"Mesh Brep" |
"Mesh Closest Point" |
"Mesh Colours" |
"Mesh Depth" |
"Mesh Difference" |
"Mesh Edges" |
"Mesh Eval" |
"Mesh from Sub-D" |
"Mesh Inclusion" |
"Mesh Intersection" |
"Mesh Join" |
"Mesh Quad" |
"Mesh Shadow" |
"Mesh Sphere" |
"Mesh Sphere Ex" |
"Mesh Split" |
"Mesh Split Plane" |
"Mesh Spray" |
"Mesh Surface" |
"Mesh Triangle" |
"Mesh Union" |
"MetaBall" |
"MetaBall(t)" |
"MetaBall(t) Custom" |
"Minimum" |
"Mirror" |
"Mirror Curve" |
"Mirror Surface" |
"Modified Arc" |
"Modulus" |
"Move" |
"Move Away From" |
"Move To Plane" |
"Multiple Curves" |
"Multiplication" |
"Multiply" |
"Natural logarithm" |
"Negative" |
"Network Surface" |
"Null Item" |
"Numbers to Points" |
"Nurbs Curve" |
"Nurbs Curve PWK" |
"Occlusion" |
"OcTree" |
"Offset Curve" |
"Offset Curve Loose" |
"Offset Loose 3D" |
"Offset on Srf" |
"Offset Polyline" |
"Offset Surface" |
"Offset Surface Loose" |
"One Over X" |
"Orient" |
"Orient Direction" |
"Orthocentre" |
"Osculating Circles" |
"Partition List" |
"Patch" |
"Path Compare" |
"Path Mapper" |
"Perp Frame" |
"Perp Frames" |
"Perpendicular Display" |
"Pi" |
"Pick'n'Choose" |
"Pie Chart" |
"Pipe" |
"Pipe Variable" |
"Planar" |
"Plane | Plane" |
"Plane | Plane | Plane" |
"Plane 3Pt" |
"Plane Closest Point" |
"Plane Coordinates" |
"Plane Fit" |
"Plane Normal" |
"Plane Offset" |
"Plane Origin" |
"Plane Region" |
"Plane Surface" |
"Plane Through Shape" |
"Point Charge" |
"Point Cylindrical" |
"Point Deform" |
"Point Groups" |
"Point In Brep" |
"Point In Breps" |
"Point In Curve" |
"Point in Curves" |
"Point In Trim" |
"Point List" |
"Point On Curve" |
"Point Order" |
"Point Oriented" |
"Point Polar" |
"Points to Numbers" |
"Polar Array" |
"PolyArc" |
"Polygon" |
"Polygon Center" |
"Polygon Edge" |
"PolyLine" |
"Polyline Collapse" |
"Populate 2D" |
"Populate 3D" |
"Populate Geometry" |
"Power" |
"Power of 10" |
"Power of 2" |
"Power of E" |
"Principal Curvature" |
"Project" |
"Project Along" |
"Project Point" |
"Proximity 2D" |
"Proximity 3D" |
"Prune Tree" |
"Pull Curve" |
"Pull Point" |
"Quad Remesh" |
"Quad Remesh Settings" |
"Quad Sphere" |
"Quadmesh Settings" |
"Quadrangulate" |
"QuadTree" |
"Quick Graph" |
"Radial" |
"Radians" |
"Rail Revolution" |
"Random" |
"Random Reduce" |
"RandomEx" |
"Range" |
"Rebuild Curve" |
"Rectangle" |
"Rectangle 2Pt" |
"Rectangle 3Pt" |
"Rectangle Mapping" |
"Rectangular" |
"Rectangular Array" |
"Reduce" |
"Region Difference" |
"Region Intersection" |
"Region Slits" |
"Region Union" |
"Relative Differences" |
"Relative Item" |
"Relative Items" |
"Remap Numbers" |
"Repeat Data" |
"Replace Items" |
"Replace Members" |
"Replace Nulls" |
"Replace Paths" |
"Replace Text" |
"Retrim" |
"Reverse" |
"Reverse List" |
"Revolution" |
"Right Trigonometry" |
"Rotate" |
"Rotate 3D" |
"Rotate Axis" |
"Rotate Direction" |
"Rotate Plane" |
"Round" |
"Ruled Surface" |
"Sanity XForm" |
"Scalar Display" |
"Scale" |
"Scale NU" |
"Seam" |
"Secant" |
"Segment Lengths" |
"Sequence" |
"Serial Dimension" |
"Series" |
"Series Addition" |
"Set Difference" |
"Set Difference (S)" |
"Set Intersection" |
"Set Majority" |
"Set Union" |
"Settings (Custom)" |
"Settings (Quality)" |
"Settings (Speed)" |
"Shape In Brep" |
"Shatter" |
"Shear" |
"Shear Angle" |
"Shift List" |
"Shift Paths" |
"Shortest List" |
"Sift Pattern" |
"Similarity" |
"Simple Mesh" |
"Simplify Curve" |
"Simplify Tree" |
"Sinc" |
"Sine" |
"Smaller Than" |
"Smooth Mesh" |
"Smooth Numbers" |
"Smooth Polyline" |
"Solar Incidence" |
"Solid Difference" |
"Solid Intersection" |
"Solid Union" |
"Sort Along Curve" |
"Sort List" |
"Sort Points" |
"Sort Text" |
"Spatial Deform" |
"Spatial Deform (custom)" |
"Sphere" |
"Sphere 4Pt" |
"Sphere Fit" |
"Spin Force" |
"Split" |
"Split AHSL" |
"Split AHSV" |
"Split ARGB" |
"Split Brep" |
"Split Brep Multiple" |
"Split Group" |
"Split List" |
"Split Tree" |
"Split with Brep" |
"Split with Breps" |
"Splop" |
"Sporph" |
"Square" |
"Square Root" |
"Stack Data" |
"Stream Filter" |
"Stream Gate" |
"Stretch" |
"Sub Curve" |
"Sub List" |
"Sub-D Control Polygon" |
"Sub-D Edges" |
"Sub-D Faces" |
"Sub-D from Mesh" |
"Sub-D Vertices" |
"SubD Box" |
"SubSet" |
"Substrate" |
"Subtraction" |
"Sum Surface" |
"Surface | Curve" |
"Surface | Line" |
"Surface Box" |
"Surface Closest Point" |
"Surface Curvature" |
"Surface Frames" |
"Surface From Points" |
"Surface Inflection" |
"Surface Morph" |
"Surface Points" |
"Surface Split" |
"Swap Columns" |
"Swap Rows" |
"Sweep1" |
"Sweep2" |
"Swing Arc" |
"Symbol (Advanced)" |
"Symbol (Simple)" |
"Symbol Display" |
"Tangent" |
"Tangent Arcs" |
"Tangent Curve" |
"Tangent Lines" |
"Tangent Lines (Ex)" |
"Tangent Lines (In)" |
"Taper" |
"Tensor Display" |
"Test Crash" |
"Text Case" |
"Text Distance" |
"Text Fragment" |
"Text Join" |
"Text Length" |
"Text Split" |
"Text Tag" |
"Text Tag 3D" |
"Text Trim" |
"To Polar" |
"Torsion" |
"Transform Matrix" |
"Transpose Matrix" |
"Tree Branch" |
"Tree Item" |
"Tree Statistics" |
"Triangle Mapping" |
"Triangle Trigonometry" |
"Triangular" |
"Triangulate" |
"Trim Solid" |
"Trim Tree" |
"Trim with Brep" |
"Trim with Breps" |
"Trim with Region" |
"Trim with Regions" |
"Truncate" |
"Tween Curve" |
"Twist" |
"Twisted Box" |
"TwoByFourJam" |
"Unflatten Tree" |
"Ungroup" |
"Unify Mesh" |
"Unit Vector" |
"Unit X" |
"Unit Y" |
"Unit Z" |
"Untrim" |
"Unweld Mesh" |
"Value Tracker" |
"Variable" |
"VB Script" |
"Vector 2Pt" |
"Vector Display" |
"Vector Display Ex" |
"Vector Force" |
"Vector Length" |
"Vector XYZ" |
"Viewport Display" |
"Volume" |
"Volume Moments" |
"Voronoi" |
"Voronoi 3D" |
"Voronoi Cell" |
"Voronoi Groups" |
"Weave" |
"Weighted Average" |
"Weld Mesh" |
"XY Plane" |
"XZ Plane" |
"YZ Plane"