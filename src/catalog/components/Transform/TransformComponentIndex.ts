import MorphBendDeform from './Morph/BendDeform'
import MorphBlendBox from './Morph/BlendBox'
import MorphBoxMorph from './Morph/BoxMorph'
import MorphFlow from './Morph/Flow'
import MorphMaelstrom from './Morph/Maelstrom'
import MorphMaptoSurface from './Morph/MaptoSurface'
import MorphMirrorCurve from './Morph/MirrorCurve'
import MorphMirrorSurface from './Morph/MirrorSurface'
import MorphPointDeform from './Morph/PointDeform'
import MorphSpatialDeform from './Morph/SpatialDeform'
import MorphSpatialDeformcustom from './Morph/SpatialDeformcustom'
import MorphSplop from './Morph/Splop'
import MorphSporph from './Morph/Sporph'
import MorphStretch from './Morph/Stretch'
import MorphSurfaceBox from './Morph/SurfaceBox'
import MorphSurfaceMorph from './Morph/SurfaceMorph'
import MorphTaper from './Morph/Taper'
import MorphTwist from './Morph/Twist'
import MorphTwistedBox from './Morph/TwistedBox'
import ArrayBoxArray from './Array/BoxArray'
import ArrayCurveArray from './Array/CurveArray'
import ArrayKaleidoscope from './Array/Kaleidoscope'
import ArrayLinearArray from './Array/LinearArray'
import ArrayPolarArray from './Array/PolarArray'
import ArrayRectangularArray from './Array/RectangularArray'
import AffineBoxMapping from './Affine/BoxMapping'
import AffineCameraObscura from './Affine/CameraObscura'
import AffineOrientDirection from './Affine/OrientDirection'
import AffineProject from './Affine/Project'
import AffineProjectAlong from './Affine/ProjectAlong'
import AffineRectangleMapping from './Affine/RectangleMapping'
import AffineScale from './Affine/Scale'
import AffineScaleNU from './Affine/ScaleNU'
import AffineShear from './Affine/Shear'
import AffineShearAngle from './Affine/ShearAngle'
import AffineTriangleMapping from './Affine/TriangleMapping'
import UtilCompound from './Util/Compound'
import UtilGroup from './Util/Group'
import UtilInverseTransform from './Util/InverseTransform'
import UtilMergeGroup from './Util/MergeGroup'
import UtilSplit from './Util/Split'
import UtilSplitGroup from './Util/SplitGroup'
import UtilTransform from './Util/Transform'
import UtilTransformMatrix from './Util/TransformMatrix'
import UtilUngroup from './Util/Ungroup'
import EuclideanMirror from './Euclidean/Mirror'
import EuclideanMove from './Euclidean/Move'
import EuclideanMoveAwayFrom from './Euclidean/MoveAwayFrom'
import EuclideanMoveToPlane from './Euclidean/MoveToPlane'
import EuclideanOrient from './Euclidean/Orient'
import EuclideanRotate from './Euclidean/Rotate'
import EuclideanRotateThreeD from './Euclidean/RotateThreeD'
import EuclideanRotateAxis from './Euclidean/RotateAxis'
import EuclideanRotateDirection from './Euclidean/RotateDirection'
import EuclideanSanityXForm from './Euclidean/SanityXForm'

const Transform = {
	Morph: {
		BendDeform: MorphBendDeform,
		BlendBox: MorphBlendBox,
		BoxMorph: MorphBoxMorph,
		Flow: MorphFlow,
		Maelstrom: MorphMaelstrom,
		MaptoSurface: MorphMaptoSurface,
		MirrorCurve: MorphMirrorCurve,
		MirrorSurface: MorphMirrorSurface,
		PointDeform: MorphPointDeform,
		SpatialDeform: MorphSpatialDeform,
		SpatialDeformcustom: MorphSpatialDeformcustom,
		Splop: MorphSplop,
		Sporph: MorphSporph,
		Stretch: MorphStretch,
		SurfaceBox: MorphSurfaceBox,
		SurfaceMorph: MorphSurfaceMorph,
		Taper: MorphTaper,
		Twist: MorphTwist,
		TwistedBox: MorphTwistedBox,
	},
	Array: {
		BoxArray: ArrayBoxArray,
		CurveArray: ArrayCurveArray,
		Kaleidoscope: ArrayKaleidoscope,
		LinearArray: ArrayLinearArray,
		PolarArray: ArrayPolarArray,
		RectangularArray: ArrayRectangularArray,
	},
	Affine: {
		BoxMapping: AffineBoxMapping,
		CameraObscura: AffineCameraObscura,
		OrientDirection: AffineOrientDirection,
		Project: AffineProject,
		ProjectAlong: AffineProjectAlong,
		RectangleMapping: AffineRectangleMapping,
		Scale: AffineScale,
		ScaleNU: AffineScaleNU,
		Shear: AffineShear,
		ShearAngle: AffineShearAngle,
		TriangleMapping: AffineTriangleMapping,
	},
	Util: {
		Compound: UtilCompound,
		Group: UtilGroup,
		InverseTransform: UtilInverseTransform,
		MergeGroup: UtilMergeGroup,
		Split: UtilSplit,
		SplitGroup: UtilSplitGroup,
		Transform: UtilTransform,
		TransformMatrix: UtilTransformMatrix,
		Ungroup: UtilUngroup,
	},
	Euclidean: {
		Mirror: EuclideanMirror,
		Move: EuclideanMove,
		MoveAwayFrom: EuclideanMoveAwayFrom,
		MoveToPlane: EuclideanMoveToPlane,
		Orient: EuclideanOrient,
		Rotate: EuclideanRotate,
		RotateThreeD: EuclideanRotateThreeD,
		RotateAxis: EuclideanRotateAxis,
		RotateDirection: EuclideanRotateDirection,
		SanityXForm: EuclideanSanityXForm,
	},
}

export default Transform;