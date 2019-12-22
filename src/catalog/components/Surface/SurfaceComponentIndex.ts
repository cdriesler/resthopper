import FreeformFourPointSurface from './Freeform/FourPointSurface'
import FreeformBoundarySurfaces from './Freeform/BoundarySurfaces'
import FreeformControlPointLoft from './Freeform/ControlPointLoft'
import FreeformEdgeSurface from './Freeform/EdgeSurface'
import FreeformExtrude from './Freeform/Extrude'
import FreeformExtrudeAlong from './Freeform/ExtrudeAlong'
import FreeformExtrudeAngled from './Freeform/ExtrudeAngled'
import FreeformExtrudeLinear from './Freeform/ExtrudeLinear'
import FreeformExtrudePoint from './Freeform/ExtrudePoint'
import FreeformFitLoft from './Freeform/FitLoft'
import FreeformFragmentPatch from './Freeform/FragmentPatch'
import FreeformLoft from './Freeform/Loft'
import FreeformLoftOptions from './Freeform/LoftOptions'
import FreeformNetworkSurface from './Freeform/NetworkSurface'
import FreeformPatch from './Freeform/Patch'
import FreeformPipe from './Freeform/Pipe'
import FreeformPipeVariable from './Freeform/PipeVariable'
import FreeformRailRevolution from './Freeform/RailRevolution'
import FreeformRevolution from './Freeform/Revolution'
import FreeformRuledSurface from './Freeform/RuledSurface'
import FreeformSumSurface from './Freeform/SumSurface'
import FreeformSurfaceFromPoints from './Freeform/SurfaceFromPoints'
import FreeformSweepOne from './Freeform/SweepOne'
import FreeformSweepTwo from './Freeform/SweepTwo'
import AnalysisArea from './Analysis/Area'
import AnalysisAreaMoments from './Analysis/AreaMoments'
import AnalysisBoxCorners from './Analysis/BoxCorners'
import AnalysisBoxProperties from './Analysis/BoxProperties'
import AnalysisBrepClosestPoint from './Analysis/BrepClosestPoint'
import AnalysisBrepEdges from './Analysis/BrepEdges'
import AnalysisBrepTopology from './Analysis/BrepTopology'
import AnalysisBrepWireframe from './Analysis/BrepWireframe'
import AnalysisDeconstructBox from './Analysis/DeconstructBox'
import AnalysisDeconstructBrep from './Analysis/DeconstructBrep'
import AnalysisDimensions from './Analysis/Dimensions'
import AnalysisEvaluateBox from './Analysis/EvaluateBox'
import AnalysisEvaluateSurface from './Analysis/EvaluateSurface'
import AnalysisIsPlanar from './Analysis/IsPlanar'
import AnalysisOsculatingCircles from './Analysis/OsculatingCircles'
import AnalysisPointInBrep from './Analysis/PointInBrep'
import AnalysisPointInBreps from './Analysis/PointInBreps'
import AnalysisPointInTrim from './Analysis/PointInTrim'
import AnalysisPrincipalCurvature from './Analysis/PrincipalCurvature'
import AnalysisShapeInBrep from './Analysis/ShapeInBrep'
import AnalysisSurfaceClosestPoint from './Analysis/SurfaceClosestPoint'
import AnalysisSurfaceCurvature from './Analysis/SurfaceCurvature'
import AnalysisSurfaceInflection from './Analysis/SurfaceInflection'
import AnalysisSurfacePoints from './Analysis/SurfacePoints'
import AnalysisVolume from './Analysis/Volume'
import AnalysisVolumeMoments from './Analysis/VolumeMoments'
import PrimitiveBoundingBox from './Primitive/BoundingBox'
import PrimitiveBoxTwoPt from './Primitive/BoxTwoPt'
import PrimitiveBoxRectangle from './Primitive/BoxRectangle'
import PrimitiveCenterBox from './Primitive/CenterBox'
import PrimitiveCone from './Primitive/Cone'
import PrimitiveCylinder from './Primitive/Cylinder'
import PrimitiveDomainBox from './Primitive/DomainBox'
import PrimitivePlaneSurface from './Primitive/PlaneSurface'
import PrimitivePlaneThroughShape from './Primitive/PlaneThroughShape'
import PrimitiveQuadSphere from './Primitive/QuadSphere'
import PrimitiveSphere from './Primitive/Sphere'
import PrimitiveSphereFourPt from './Primitive/SphereFourPt'
import PrimitiveSphereFit from './Primitive/SphereFit'
import UtilBrepJoin from './Util/BrepJoin'
import UtilCapHoles from './Util/CapHoles'
import UtilCapHolesEx from './Util/CapHolesEx'
import UtilClosedEdges from './Util/ClosedEdges'
import UtilConvexEdges from './Util/ConvexEdges'
import UtilCopyTrim from './Util/CopyTrim'
import UtilDivideSurface from './Util/DivideSurface'
import UtilEdgesfromDirections from './Util/EdgesfromDirections'
import UtilEdgesfromFaces from './Util/EdgesfromFaces'
import UtilEdgesfromLength from './Util/EdgesfromLength'
import UtilEdgesfromLinearity from './Util/EdgesfromLinearity'
import UtilEdgesfromPoints from './Util/EdgesfromPoints'
import UtilFilletEdge from './Util/FilletEdge'
import UtilFlip from './Util/Flip'
import UtilIsotrim from './Util/Isotrim'
import UtilLoftOptions from './Util/LoftOptions'
import UtilMergeFaces from './Util/MergeFaces'
import UtilOffsetSurface from './Util/OffsetSurface'
import UtilOffsetSurfaceLoose from './Util/OffsetSurfaceLoose'
import UtilRetrim from './Util/Retrim'
import UtilSurfaceFrames from './Util/SurfaceFrames'
import UtilUntrim from './Util/Untrim'
import SubDMeshfromSubD from './SubD/MeshfromSubD'
import SubDSubDControlPolygon from './SubD/SubDControlPolygon'
import SubDSubDEdges from './SubD/SubDEdges'
import SubDSubDFaces from './SubD/SubDFaces'
import SubDSubDfromMesh from './SubD/SubDfromMesh'
import SubDSubDVertices from './SubD/SubDVertices'
import SubDSubDBox from './SubD/SubDBox'

const Surface = {
	Freeform: {
		FourPointSurface: FreeformFourPointSurface,
		BoundarySurfaces: FreeformBoundarySurfaces,
		ControlPointLoft: FreeformControlPointLoft,
		EdgeSurface: FreeformEdgeSurface,
		Extrude: FreeformExtrude,
		ExtrudeAlong: FreeformExtrudeAlong,
		ExtrudeAngled: FreeformExtrudeAngled,
		ExtrudeLinear: FreeformExtrudeLinear,
		ExtrudePoint: FreeformExtrudePoint,
		FitLoft: FreeformFitLoft,
		FragmentPatch: FreeformFragmentPatch,
		Loft: FreeformLoft,
		LoftOptions: FreeformLoftOptions,
		NetworkSurface: FreeformNetworkSurface,
		Patch: FreeformPatch,
		Pipe: FreeformPipe,
		PipeVariable: FreeformPipeVariable,
		RailRevolution: FreeformRailRevolution,
		Revolution: FreeformRevolution,
		RuledSurface: FreeformRuledSurface,
		SumSurface: FreeformSumSurface,
		SurfaceFromPoints: FreeformSurfaceFromPoints,
		SweepOne: FreeformSweepOne,
		SweepTwo: FreeformSweepTwo,
	},
	Analysis: {
		Area: AnalysisArea,
		AreaMoments: AnalysisAreaMoments,
		BoxCorners: AnalysisBoxCorners,
		BoxProperties: AnalysisBoxProperties,
		BrepClosestPoint: AnalysisBrepClosestPoint,
		BrepEdges: AnalysisBrepEdges,
		BrepTopology: AnalysisBrepTopology,
		BrepWireframe: AnalysisBrepWireframe,
		DeconstructBox: AnalysisDeconstructBox,
		DeconstructBrep: AnalysisDeconstructBrep,
		Dimensions: AnalysisDimensions,
		EvaluateBox: AnalysisEvaluateBox,
		EvaluateSurface: AnalysisEvaluateSurface,
		IsPlanar: AnalysisIsPlanar,
		OsculatingCircles: AnalysisOsculatingCircles,
		PointInBrep: AnalysisPointInBrep,
		PointInBreps: AnalysisPointInBreps,
		PointInTrim: AnalysisPointInTrim,
		PrincipalCurvature: AnalysisPrincipalCurvature,
		ShapeInBrep: AnalysisShapeInBrep,
		SurfaceClosestPoint: AnalysisSurfaceClosestPoint,
		SurfaceCurvature: AnalysisSurfaceCurvature,
		SurfaceInflection: AnalysisSurfaceInflection,
		SurfacePoints: AnalysisSurfacePoints,
		Volume: AnalysisVolume,
		VolumeMoments: AnalysisVolumeMoments,
	},
	Primitive: {
		BoundingBox: PrimitiveBoundingBox,
		BoxTwoPt: PrimitiveBoxTwoPt,
		BoxRectangle: PrimitiveBoxRectangle,
		CenterBox: PrimitiveCenterBox,
		Cone: PrimitiveCone,
		Cylinder: PrimitiveCylinder,
		DomainBox: PrimitiveDomainBox,
		PlaneSurface: PrimitivePlaneSurface,
		PlaneThroughShape: PrimitivePlaneThroughShape,
		QuadSphere: PrimitiveQuadSphere,
		Sphere: PrimitiveSphere,
		SphereFourPt: PrimitiveSphereFourPt,
		SphereFit: PrimitiveSphereFit,
	},
	Util: {
		BrepJoin: UtilBrepJoin,
		CapHoles: UtilCapHoles,
		CapHolesEx: UtilCapHolesEx,
		ClosedEdges: UtilClosedEdges,
		ConvexEdges: UtilConvexEdges,
		CopyTrim: UtilCopyTrim,
		DivideSurface: UtilDivideSurface,
		EdgesfromDirections: UtilEdgesfromDirections,
		EdgesfromFaces: UtilEdgesfromFaces,
		EdgesfromLength: UtilEdgesfromLength,
		EdgesfromLinearity: UtilEdgesfromLinearity,
		EdgesfromPoints: UtilEdgesfromPoints,
		FilletEdge: UtilFilletEdge,
		Flip: UtilFlip,
		Isotrim: UtilIsotrim,
		LoftOptions: UtilLoftOptions,
		MergeFaces: UtilMergeFaces,
		OffsetSurface: UtilOffsetSurface,
		OffsetSurfaceLoose: UtilOffsetSurfaceLoose,
		Retrim: UtilRetrim,
		SurfaceFrames: UtilSurfaceFrames,
		Untrim: UtilUntrim,
	},
	SubD: {
		MeshfromSubD: SubDMeshfromSubD,
		SubDControlPolygon: SubDSubDControlPolygon,
		SubDEdges: SubDSubDEdges,
		SubDFaces: SubDSubDFaces,
		SubDfromMesh: SubDSubDfromMesh,
		SubDVertices: SubDSubDVertices,
		SubDBox: SubDSubDBox,
	},
}

export default Surface;