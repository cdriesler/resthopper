import PrimitiveArc from './Primitive/Arc'
import PrimitiveArcThreePt from './Primitive/ArcThreePt'
import PrimitiveArcSED from './Primitive/ArcSED'
import PrimitiveBiArc from './Primitive/BiArc'
import PrimitiveCircle from './Primitive/Circle'
import PrimitiveCircleThreePt from './Primitive/CircleThreePt'
import PrimitiveCircleCNR from './Primitive/CircleCNR'
import PrimitiveCircleFit from './Primitive/CircleFit'
import PrimitiveCircleTanTan from './Primitive/CircleTanTan'
import PrimitiveCircleTanTanTan from './Primitive/CircleTanTanTan'
import PrimitiveEllipse from './Primitive/Ellipse'
import PrimitiveFitLine from './Primitive/FitLine'
import PrimitiveInCircle from './Primitive/InCircle'
import PrimitiveInEllipse from './Primitive/InEllipse'
import PrimitiveLine from './Primitive/Line'
import PrimitiveLineTwoPlane from './Primitive/LineTwoPlane'
import PrimitiveLineFourPt from './Primitive/LineFourPt'
import PrimitiveLineSDL from './Primitive/LineSDL'
import PrimitiveModifiedArc from './Primitive/ModifiedArc'
import PrimitivePolygon from './Primitive/Polygon'
import PrimitivePolygonEdge from './Primitive/PolygonEdge'
import PrimitiveRectangle from './Primitive/Rectangle'
import PrimitiveRectangleTwoPt from './Primitive/RectangleTwoPt'
import PrimitiveRectangleThreePt from './Primitive/RectangleThreePt'
import PrimitiveTangentArcs from './Primitive/TangentArcs'
import PrimitiveTangentLines from './Primitive/TangentLines'
import PrimitiveTangentLinesEx from './Primitive/TangentLinesEx'
import PrimitiveTangentLinesIn from './Primitive/TangentLinesIn'
import PrimitiveTwoByFourJam from './Primitive/TwoByFourJam'
import SplineBezierSpan from './Spline/BezierSpan'
import SplineBlendCurve from './Spline/BlendCurve'
import SplineBlendCurvePt from './Spline/BlendCurvePt'
import SplineCatenary from './Spline/Catenary'
import SplineCatenaryEx from './Spline/CatenaryEx'
import SplineConnectCurves from './Spline/ConnectCurves'
import SplineCurveOnSurface from './Spline/CurveOnSurface'
import SplineGeodesic from './Spline/Geodesic'
import SplineInterpolate from './Spline/Interpolate'
import SplineInterpolatet from './Spline/Interpolatet'
import SplineIsoCurve from './Spline/IsoCurve'
import SplineKinkyCurve from './Spline/KinkyCurve'
import SplineKnotVector from './Spline/KnotVector'
import SplineMatchCurve from './Spline/MatchCurve'
import SplineNurbsCurve from './Spline/NurbsCurve'
import SplineNurbsCurvePWK from './Spline/NurbsCurvePWK'
import SplinePolyArc from './Spline/PolyArc'
import SplinePolyLine from './Spline/PolyLine'
import SplineSubCurve from './Spline/SubCurve'
import SplineSwingArc from './Spline/SwingArc'
import SplineTangentCurve from './Spline/TangentCurve'
import SplineTweenCurve from './Spline/TweenCurve'
import AnalysisClosed from './Analysis/Closed'
import AnalysisControlPoints from './Analysis/ControlPoints'
import AnalysisControlPolygon from './Analysis/ControlPolygon'
import AnalysisCurvature from './Analysis/Curvature'
import AnalysisCurvatureGraph from './Analysis/CurvatureGraph'
import AnalysisCurveClosestPoint from './Analysis/CurveClosestPoint'
import AnalysisCurveDepth from './Analysis/CurveDepth'
import AnalysisCurveDomain from './Analysis/CurveDomain'
import AnalysisCurveFrame from './Analysis/CurveFrame'
import AnalysisCurveMiddle from './Analysis/CurveMiddle'
import AnalysisCurveNearestObject from './Analysis/CurveNearestObject'
import AnalysisCurveProximity from './Analysis/CurveProximity'
import AnalysisCurveSide from './Analysis/CurveSide'
import AnalysisDeconstructArc from './Analysis/DeconstructArc'
import AnalysisDeconstuctRectangle from './Analysis/DeconstuctRectangle'
import AnalysisDerivatives from './Analysis/Derivatives'
import AnalysisDiscontinuity from './Analysis/Discontinuity'
import AnalysisEndPoints from './Analysis/EndPoints'
import AnalysisEvaluateCurve from './Analysis/EvaluateCurve'
import AnalysisEvaluateLength from './Analysis/EvaluateLength'
import AnalysisExtremes from './Analysis/Extremes'
import AnalysisHorizontalFrame from './Analysis/HorizontalFrame'
import AnalysisLength from './Analysis/Length'
import AnalysisLengthDomain from './Analysis/LengthDomain'
import AnalysisLengthParameter from './Analysis/LengthParameter'
import AnalysisPerpFrame from './Analysis/PerpFrame'
import AnalysisPlanar from './Analysis/Planar'
import AnalysisPointInCurve from './Analysis/PointInCurve'
import AnalysisPointinCurves from './Analysis/PointinCurves'
import AnalysisPointOnCurve from './Analysis/PointOnCurve'
import AnalysisPolygonCenter from './Analysis/PolygonCenter'
import AnalysisSegmentLengths from './Analysis/SegmentLengths'
import AnalysisTorsion from './Analysis/Torsion'
import DivisionContour from './Division/Contour'
import DivisionContourex from './Division/Contourex'
import DivisionCurveFrames from './Division/CurveFrames'
import DivisionDashPattern from './Division/DashPattern'
import DivisionDivideByDeviation from './Division/DivideByDeviation'
import DivisionDivideCurve from './Division/DivideCurve'
import DivisionDivideDistance from './Division/DivideDistance'
import DivisionDivideLength from './Division/DivideLength'
import DivisionHorizontalFrames from './Division/HorizontalFrames'
import DivisionPerpFrames from './Division/PerpFrames'
import DivisionShatter from './Division/Shatter'
import UtilCurveToPolyline from './Util/CurveToPolyline'
import UtilExplode from './Util/Explode'
import UtilExtendCurve from './Util/ExtendCurve'
import UtilFillet from './Util/Fillet'
import UtilFilletDistance from './Util/FilletDistance'
import UtilFitCurve from './Util/FitCurve'
import UtilFlipCurve from './Util/FlipCurve'
import UtilJoinCurves from './Util/JoinCurves'
import UtilOffsetCurve from './Util/OffsetCurve'
import UtilOffsetCurveLoose from './Util/OffsetCurveLoose'
import UtilOffsetLooseThreeD from './Util/OffsetLooseThreeD'
import UtilOffsetonSrf from './Util/OffsetonSrf'
import UtilOffsetPolyline from './Util/OffsetPolyline'
import UtilPolylineCollapse from './Util/PolylineCollapse'
import UtilProject from './Util/Project'
import UtilPullCurve from './Util/PullCurve'
import UtilRebuildCurve from './Util/RebuildCurve'
import UtilReduce from './Util/Reduce'
import UtilSeam from './Util/Seam'
import UtilSimplifyCurve from './Util/SimplifyCurve'
import UtilSmoothPolyline from './Util/SmoothPolyline'

const Curve = {
	Primitive: {
		Arc: PrimitiveArc,
		ArcThreePt: PrimitiveArcThreePt,
		ArcSED: PrimitiveArcSED,
		BiArc: PrimitiveBiArc,
		Circle: PrimitiveCircle,
		CircleThreePt: PrimitiveCircleThreePt,
		CircleCNR: PrimitiveCircleCNR,
		CircleFit: PrimitiveCircleFit,
		CircleTanTan: PrimitiveCircleTanTan,
		CircleTanTanTan: PrimitiveCircleTanTanTan,
		Ellipse: PrimitiveEllipse,
		FitLine: PrimitiveFitLine,
		InCircle: PrimitiveInCircle,
		InEllipse: PrimitiveInEllipse,
		Line: PrimitiveLine,
		LineTwoPlane: PrimitiveLineTwoPlane,
		LineFourPt: PrimitiveLineFourPt,
		LineSDL: PrimitiveLineSDL,
		ModifiedArc: PrimitiveModifiedArc,
		Polygon: PrimitivePolygon,
		PolygonEdge: PrimitivePolygonEdge,
		Rectangle: PrimitiveRectangle,
		RectangleTwoPt: PrimitiveRectangleTwoPt,
		RectangleThreePt: PrimitiveRectangleThreePt,
		TangentArcs: PrimitiveTangentArcs,
		TangentLines: PrimitiveTangentLines,
		TangentLinesEx: PrimitiveTangentLinesEx,
		TangentLinesIn: PrimitiveTangentLinesIn,
		TwoByFourJam: PrimitiveTwoByFourJam,
	},
	Spline: {
		BezierSpan: SplineBezierSpan,
		BlendCurve: SplineBlendCurve,
		BlendCurvePt: SplineBlendCurvePt,
		Catenary: SplineCatenary,
		CatenaryEx: SplineCatenaryEx,
		ConnectCurves: SplineConnectCurves,
		CurveOnSurface: SplineCurveOnSurface,
		Geodesic: SplineGeodesic,
		Interpolate: SplineInterpolate,
		Interpolatet: SplineInterpolatet,
		IsoCurve: SplineIsoCurve,
		KinkyCurve: SplineKinkyCurve,
		KnotVector: SplineKnotVector,
		MatchCurve: SplineMatchCurve,
		NurbsCurve: SplineNurbsCurve,
		NurbsCurvePWK: SplineNurbsCurvePWK,
		PolyArc: SplinePolyArc,
		PolyLine: SplinePolyLine,
		SubCurve: SplineSubCurve,
		SwingArc: SplineSwingArc,
		TangentCurve: SplineTangentCurve,
		TweenCurve: SplineTweenCurve,
	},
	Analysis: {
		Closed: AnalysisClosed,
		ControlPoints: AnalysisControlPoints,
		ControlPolygon: AnalysisControlPolygon,
		Curvature: AnalysisCurvature,
		CurvatureGraph: AnalysisCurvatureGraph,
		CurveClosestPoint: AnalysisCurveClosestPoint,
		CurveDepth: AnalysisCurveDepth,
		CurveDomain: AnalysisCurveDomain,
		CurveFrame: AnalysisCurveFrame,
		CurveMiddle: AnalysisCurveMiddle,
		CurveNearestObject: AnalysisCurveNearestObject,
		CurveProximity: AnalysisCurveProximity,
		CurveSide: AnalysisCurveSide,
		DeconstructArc: AnalysisDeconstructArc,
		DeconstuctRectangle: AnalysisDeconstuctRectangle,
		Derivatives: AnalysisDerivatives,
		Discontinuity: AnalysisDiscontinuity,
		EndPoints: AnalysisEndPoints,
		EvaluateCurve: AnalysisEvaluateCurve,
		EvaluateLength: AnalysisEvaluateLength,
		Extremes: AnalysisExtremes,
		HorizontalFrame: AnalysisHorizontalFrame,
		Length: AnalysisLength,
		LengthDomain: AnalysisLengthDomain,
		LengthParameter: AnalysisLengthParameter,
		PerpFrame: AnalysisPerpFrame,
		Planar: AnalysisPlanar,
		PointInCurve: AnalysisPointInCurve,
		PointinCurves: AnalysisPointinCurves,
		PointOnCurve: AnalysisPointOnCurve,
		PolygonCenter: AnalysisPolygonCenter,
		SegmentLengths: AnalysisSegmentLengths,
		Torsion: AnalysisTorsion,
	},
	Division: {
		Contour: DivisionContour,
		Contourex: DivisionContourex,
		CurveFrames: DivisionCurveFrames,
		DashPattern: DivisionDashPattern,
		DivideByDeviation: DivisionDivideByDeviation,
		DivideCurve: DivisionDivideCurve,
		DivideDistance: DivisionDivideDistance,
		DivideLength: DivisionDivideLength,
		HorizontalFrames: DivisionHorizontalFrames,
		PerpFrames: DivisionPerpFrames,
		Shatter: DivisionShatter,
	},
	Util: {
		CurveToPolyline: UtilCurveToPolyline,
		Explode: UtilExplode,
		ExtendCurve: UtilExtendCurve,
		Fillet: UtilFillet,
		FilletDistance: UtilFilletDistance,
		FitCurve: UtilFitCurve,
		FlipCurve: UtilFlipCurve,
		JoinCurves: UtilJoinCurves,
		OffsetCurve: UtilOffsetCurve,
		OffsetCurveLoose: UtilOffsetCurveLoose,
		OffsetLooseThreeD: UtilOffsetLooseThreeD,
		OffsetonSrf: UtilOffsetonSrf,
		OffsetPolyline: UtilOffsetPolyline,
		PolylineCollapse: UtilPolylineCollapse,
		Project: UtilProject,
		PullCurve: UtilPullCurve,
		RebuildCurve: UtilRebuildCurve,
		Reduce: UtilReduce,
		Seam: UtilSeam,
		SimplifyCurve: UtilSimplifyCurve,
		SmoothPolyline: UtilSmoothPolyline,
	},
}

export default Curve;