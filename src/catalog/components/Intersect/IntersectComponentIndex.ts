import ShapeBoundaryVolume from './Shape/BoundaryVolume'
import ShapeBoxSlits from './Shape/BoxSlits'
import ShapeMeshDifference from './Shape/MeshDifference'
import ShapeMeshIntersection from './Shape/MeshIntersection'
import ShapeMeshSplit from './Shape/MeshSplit'
import ShapeMeshUnion from './Shape/MeshUnion'
import ShapeRegionDifference from './Shape/RegionDifference'
import ShapeRegionIntersection from './Shape/RegionIntersection'
import ShapeRegionSlits from './Shape/RegionSlits'
import ShapeRegionUnion from './Shape/RegionUnion'
import ShapeSolidDifference from './Shape/SolidDifference'
import ShapeSolidIntersection from './Shape/SolidIntersection'
import ShapeSolidUnion from './Shape/SolidUnion'
import ShapeSplitBrep from './Shape/SplitBrep'
import ShapeSplitBrepMultiple from './Shape/SplitBrepMultiple'
import ShapeTrimSolid from './Shape/TrimSolid'
import PhysicalBrepBrep from './Physical/BrepBrep'
import PhysicalBrepCurve from './Physical/BrepCurve'
import PhysicalClash from './Physical/Clash'
import PhysicalCollisionManyMany from './Physical/CollisionManyMany'
import PhysicalCollisionOneMany from './Physical/CollisionOneMany'
import PhysicalCurveCurve from './Physical/CurveCurve'
import PhysicalCurveSelf from './Physical/CurveSelf'
import PhysicalMeshCurve from './Physical/MeshCurve'
import PhysicalMeshMesh from './Physical/MeshMesh'
import PhysicalMultipleCurves from './Physical/MultipleCurves'
import PhysicalSurfaceCurve from './Physical/SurfaceCurve'
import PhysicalSurfaceSplit from './Physical/SurfaceSplit'
import MathematicalBrepLine from './Mathematical/BrepLine'
import MathematicalBrepPlane from './Mathematical/BrepPlane'
import MathematicalContour from './Mathematical/Contour'
import MathematicalContourex from './Mathematical/Contourex'
import MathematicalCurveLine from './Mathematical/CurveLine'
import MathematicalCurvePlane from './Mathematical/CurvePlane'
import MathematicalIsoVist from './Mathematical/IsoVist'
import MathematicalIsoVistRay from './Mathematical/IsoVistRay'
import MathematicalLineLine from './Mathematical/LineLine'
import MathematicalLinePlane from './Mathematical/LinePlane'
import MathematicalMeshPlane from './Mathematical/MeshPlane'
import MathematicalMeshRay from './Mathematical/MeshRay'
import MathematicalPlanePlane from './Mathematical/PlanePlane'
import MathematicalPlanePlanePlane from './Mathematical/PlanePlanePlane'
import MathematicalPlaneRegion from './Mathematical/PlaneRegion'
import MathematicalSurfaceLine from './Mathematical/SurfaceLine'
import RegionSplitwithBrep from './Region/SplitwithBrep'
import RegionSplitwithBreps from './Region/SplitwithBreps'
import RegionTrimwithBrep from './Region/TrimwithBrep'
import RegionTrimwithBreps from './Region/TrimwithBreps'
import RegionTrimwithRegion from './Region/TrimwithRegion'
import RegionTrimwithRegions from './Region/TrimwithRegions'

const Intersect = {
	Shape: {
		BoundaryVolume: ShapeBoundaryVolume,
		BoxSlits: ShapeBoxSlits,
		MeshDifference: ShapeMeshDifference,
		MeshIntersection: ShapeMeshIntersection,
		MeshSplit: ShapeMeshSplit,
		MeshUnion: ShapeMeshUnion,
		RegionDifference: ShapeRegionDifference,
		RegionIntersection: ShapeRegionIntersection,
		RegionSlits: ShapeRegionSlits,
		RegionUnion: ShapeRegionUnion,
		SolidDifference: ShapeSolidDifference,
		SolidIntersection: ShapeSolidIntersection,
		SolidUnion: ShapeSolidUnion,
		SplitBrep: ShapeSplitBrep,
		SplitBrepMultiple: ShapeSplitBrepMultiple,
		TrimSolid: ShapeTrimSolid,
	},
	Physical: {
		BrepBrep: PhysicalBrepBrep,
		BrepCurve: PhysicalBrepCurve,
		Clash: PhysicalClash,
		CollisionManyMany: PhysicalCollisionManyMany,
		CollisionOneMany: PhysicalCollisionOneMany,
		CurveCurve: PhysicalCurveCurve,
		CurveSelf: PhysicalCurveSelf,
		MeshCurve: PhysicalMeshCurve,
		MeshMesh: PhysicalMeshMesh,
		MultipleCurves: PhysicalMultipleCurves,
		SurfaceCurve: PhysicalSurfaceCurve,
		SurfaceSplit: PhysicalSurfaceSplit,
	},
	Mathematical: {
		BrepLine: MathematicalBrepLine,
		BrepPlane: MathematicalBrepPlane,
		Contour: MathematicalContour,
		Contourex: MathematicalContourex,
		CurveLine: MathematicalCurveLine,
		CurvePlane: MathematicalCurvePlane,
		IsoVist: MathematicalIsoVist,
		IsoVistRay: MathematicalIsoVistRay,
		LineLine: MathematicalLineLine,
		LinePlane: MathematicalLinePlane,
		MeshPlane: MathematicalMeshPlane,
		MeshRay: MathematicalMeshRay,
		PlanePlane: MathematicalPlanePlane,
		PlanePlanePlane: MathematicalPlanePlanePlane,
		PlaneRegion: MathematicalPlaneRegion,
		SurfaceLine: MathematicalSurfaceLine,
	},
	Region: {
		SplitwithBrep: RegionSplitwithBrep,
		SplitwithBreps: RegionSplitwithBreps,
		TrimwithBrep: RegionTrimwithBrep,
		TrimwithBreps: RegionTrimwithBreps,
		TrimwithRegion: RegionTrimwithRegion,
		TrimwithRegions: RegionTrimwithRegions,
	},
}

export default Intersect;