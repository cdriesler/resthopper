import UtilAlignVertices from './Util/AlignVertices'
import UtilBlurMesh from './Util/BlurMesh'
import UtilCullFaces from './Util/CullFaces'
import UtilCullVertices from './Util/CullVertices'
import UtilDeleteFaces from './Util/DeleteFaces'
import UtilDeleteVertices from './Util/DeleteVertices'
import UtilDisjointMesh from './Util/DisjointMesh'
import UtilExposure from './Util/Exposure'
import UtilFlipMesh from './Util/FlipMesh'
import UtilMeshBrep from './Util/MeshBrep'
import UtilMeshJoin from './Util/MeshJoin'
import UtilMeshShadow from './Util/MeshShadow'
import UtilMeshSplitPlane from './Util/MeshSplitPlane'
import UtilMeshSurface from './Util/MeshSurface'
import UtilOcclusion from './Util/Occlusion'
import UtilQuadrangulate from './Util/Quadrangulate'
import UtilSettingsCustom from './Util/SettingsCustom'
import UtilSettingsQuality from './Util/SettingsQuality'
import UtilSettingsSpeed from './Util/SettingsSpeed'
import UtilSimpleMesh from './Util/SimpleMesh'
import UtilSmoothMesh from './Util/SmoothMesh'
import UtilTriangulate from './Util/Triangulate'
import UtilUnifyMesh from './Util/UnifyMesh'
import UtilUnweldMesh from './Util/UnweldMesh'
import UtilWeldMesh from './Util/WeldMesh'
import PrimitiveConstructMesh from './Primitive/ConstructMesh'
import PrimitiveMeshBox from './Primitive/MeshBox'
import PrimitiveMeshColours from './Primitive/MeshColours'
import PrimitiveMeshPlane from './Primitive/MeshPlane'
import PrimitiveMeshQuad from './Primitive/MeshQuad'
import PrimitiveMeshSphere from './Primitive/MeshSphere'
import PrimitiveMeshSphereEx from './Primitive/MeshSphereEx'
import PrimitiveMeshSpray from './Primitive/MeshSpray'
import PrimitiveMeshTriangle from './Primitive/MeshTriangle'
import TriangulationConvexHull from './Triangulation/ConvexHull'
import TriangulationDelaunayEdges from './Triangulation/DelaunayEdges'
import TriangulationDelaunayMesh from './Triangulation/DelaunayMesh'
import TriangulationFacetDome from './Triangulation/FacetDome'
import TriangulationMetaBall from './Triangulation/MetaBall'
import TriangulationMetaBallt from './Triangulation/MetaBallt'
import TriangulationMetaBalltCustom from './Triangulation/MetaBalltCustom'
import TriangulationOcTree from './Triangulation/OcTree'
import TriangulationProximityTwoD from './Triangulation/ProximityTwoD'
import TriangulationProximityThreeD from './Triangulation/ProximityThreeD'
import TriangulationQuadRemesh from './Triangulation/QuadRemesh'
import TriangulationQuadRemeshSettings from './Triangulation/QuadRemeshSettings'
import TriangulationQuadmeshSettings from './Triangulation/QuadmeshSettings'
import TriangulationQuadTree from './Triangulation/QuadTree'
import TriangulationSubstrate from './Triangulation/Substrate'
import TriangulationVoronoi from './Triangulation/Voronoi'
import TriangulationVoronoiThreeD from './Triangulation/VoronoiThreeD'
import TriangulationVoronoiCell from './Triangulation/VoronoiCell'
import TriangulationVoronoiGroups from './Triangulation/VoronoiGroups'
import AnalysisDeconstructFace from './Analysis/DeconstructFace'
import AnalysisDeconstructMesh from './Analysis/DeconstructMesh'
import AnalysisFaceBoundaries from './Analysis/FaceBoundaries'
import AnalysisFaceCircles from './Analysis/FaceCircles'
import AnalysisFaceNormals from './Analysis/FaceNormals'
import AnalysisMeshClosestPoint from './Analysis/MeshClosestPoint'
import AnalysisMeshDepth from './Analysis/MeshDepth'
import AnalysisMeshEdges from './Analysis/MeshEdges'
import AnalysisMeshEval from './Analysis/MeshEval'
import AnalysisMeshInclusion from './Analysis/MeshInclusion'

const Mesh = {
	Util: {
		AlignVertices: UtilAlignVertices,
		BlurMesh: UtilBlurMesh,
		CullFaces: UtilCullFaces,
		CullVertices: UtilCullVertices,
		DeleteFaces: UtilDeleteFaces,
		DeleteVertices: UtilDeleteVertices,
		DisjointMesh: UtilDisjointMesh,
		Exposure: UtilExposure,
		FlipMesh: UtilFlipMesh,
		MeshBrep: UtilMeshBrep,
		MeshJoin: UtilMeshJoin,
		MeshShadow: UtilMeshShadow,
		MeshSplitPlane: UtilMeshSplitPlane,
		MeshSurface: UtilMeshSurface,
		Occlusion: UtilOcclusion,
		Quadrangulate: UtilQuadrangulate,
		SettingsCustom: UtilSettingsCustom,
		SettingsQuality: UtilSettingsQuality,
		SettingsSpeed: UtilSettingsSpeed,
		SimpleMesh: UtilSimpleMesh,
		SmoothMesh: UtilSmoothMesh,
		Triangulate: UtilTriangulate,
		UnifyMesh: UtilUnifyMesh,
		UnweldMesh: UtilUnweldMesh,
		WeldMesh: UtilWeldMesh,
	},
	Primitive: {
		ConstructMesh: PrimitiveConstructMesh,
		MeshBox: PrimitiveMeshBox,
		MeshColours: PrimitiveMeshColours,
		MeshPlane: PrimitiveMeshPlane,
		MeshQuad: PrimitiveMeshQuad,
		MeshSphere: PrimitiveMeshSphere,
		MeshSphereEx: PrimitiveMeshSphereEx,
		MeshSpray: PrimitiveMeshSpray,
		MeshTriangle: PrimitiveMeshTriangle,
	},
	Triangulation: {
		ConvexHull: TriangulationConvexHull,
		DelaunayEdges: TriangulationDelaunayEdges,
		DelaunayMesh: TriangulationDelaunayMesh,
		FacetDome: TriangulationFacetDome,
		MetaBall: TriangulationMetaBall,
		MetaBallt: TriangulationMetaBallt,
		MetaBalltCustom: TriangulationMetaBalltCustom,
		OcTree: TriangulationOcTree,
		ProximityTwoD: TriangulationProximityTwoD,
		ProximityThreeD: TriangulationProximityThreeD,
		QuadRemesh: TriangulationQuadRemesh,
		QuadRemeshSettings: TriangulationQuadRemeshSettings,
		QuadmeshSettings: TriangulationQuadmeshSettings,
		QuadTree: TriangulationQuadTree,
		Substrate: TriangulationSubstrate,
		Voronoi: TriangulationVoronoi,
		VoronoiThreeD: TriangulationVoronoiThreeD,
		VoronoiCell: TriangulationVoronoiCell,
		VoronoiGroups: TriangulationVoronoiGroups,
	},
	Analysis: {
		DeconstructFace: AnalysisDeconstructFace,
		DeconstructMesh: AnalysisDeconstructMesh,
		FaceBoundaries: AnalysisFaceBoundaries,
		FaceCircles: AnalysisFaceCircles,
		FaceNormals: AnalysisFaceNormals,
		MeshClosestPoint: AnalysisMeshClosestPoint,
		MeshDepth: AnalysisMeshDepth,
		MeshEdges: AnalysisMeshEdges,
		MeshEval: AnalysisMeshEval,
		MeshInclusion: AnalysisMeshInclusion,
	},
}

export default Mesh;