import VectorAddition from './Vector/Addition'
import VectorAmplitude from './Vector/Amplitude'
import VectorAngle from './Vector/Angle'
import VectorCrossProduct from './Vector/CrossProduct'
import VectorDeconstructVector from './Vector/DeconstructVector'
import VectorDivide from './Vector/Divide'
import VectorDotProduct from './Vector/DotProduct'
import VectorMultiply from './Vector/Multiply'
import VectorReverse from './Vector/Reverse'
import VectorRotate from './Vector/Rotate'
import VectorSolarIncidence from './Vector/SolarIncidence'
import VectorUnitVector from './Vector/UnitVector'
import VectorUnitX from './Vector/UnitX'
import VectorUnitY from './Vector/UnitY'
import VectorUnitZ from './Vector/UnitZ'
import VectorVectorTwoPt from './Vector/VectorTwoPt'
import VectorVectorLength from './Vector/VectorLength'
import VectorVectorXYZ from './Vector/VectorXYZ'
import PlaneAdjustPlane from './Plane/AdjustPlane'
import PlaneAlignPlane from './Plane/AlignPlane'
import PlaneAlignPlanes from './Plane/AlignPlanes'
import PlaneConstructPlane from './Plane/ConstructPlane'
import PlaneDeconstructPlane from './Plane/DeconstructPlane'
import PlaneFlipPlane from './Plane/FlipPlane'
import PlaneLineLine from './Plane/LineLine'
import PlaneLinePt from './Plane/LinePt'
import PlanePlaneThreePt from './Plane/PlaneThreePt'
import PlanePlaneClosestPoint from './Plane/PlaneClosestPoint'
import PlanePlaneCoordinates from './Plane/PlaneCoordinates'
import PlanePlaneFit from './Plane/PlaneFit'
import PlanePlaneNormal from './Plane/PlaneNormal'
import PlanePlaneOffset from './Plane/PlaneOffset'
import PlanePlaneOrigin from './Plane/PlaneOrigin'
import PlaneRotatePlane from './Plane/RotatePlane'
import PlaneXYPlane from './Plane/XYPlane'
import PlaneXZPlane from './Plane/XZPlane'
import PlaneYZPlane from './Plane/YZPlane'
import PointBarycentric from './Point/Barycentric'
import PointClosestPoint from './Point/ClosestPoint'
import PointClosestPoints from './Point/ClosestPoints'
import PointConstructPoint from './Point/ConstructPoint'
import PointCoordinateMask from './Point/CoordinateMask'
import PointCullDuplicates from './Point/CullDuplicates'
import PointDeconstruct from './Point/Deconstruct'
import PointDistance from './Point/Distance'
import PointNumberstoPoints from './Point/NumberstoPoints'
import PointPointCylindrical from './Point/PointCylindrical'
import PointPointGroups from './Point/PointGroups'
import PointPointOriented from './Point/PointOriented'
import PointPointPolar from './Point/PointPolar'
import PointPointstoNumbers from './Point/PointstoNumbers'
import PointProjectPoint from './Point/ProjectPoint'
import PointPullPoint from './Point/PullPoint'
import PointSortAlongCurve from './Point/SortAlongCurve'
import PointSortPoints from './Point/SortPoints'
import PointToPolar from './Point/ToPolar'
import ColourBlendColours from './Colour/BlendColours'
import FieldBreakField from './Field/BreakField'
import FieldDirectionDisplay from './Field/DirectionDisplay'
import FieldEvaluateField from './Field/EvaluateField'
import FieldFieldLine from './Field/FieldLine'
import FieldLineCharge from './Field/LineCharge'
import FieldMergeFields from './Field/MergeFields'
import FieldPerpendicularDisplay from './Field/PerpendicularDisplay'
import FieldPointCharge from './Field/PointCharge'
import FieldScalarDisplay from './Field/ScalarDisplay'
import FieldSpinForce from './Field/SpinForce'
import FieldTensorDisplay from './Field/TensorDisplay'
import FieldVectorForce from './Field/VectorForce'
import GridHexagonal from './Grid/Hexagonal'
import GridPopulateTwoD from './Grid/PopulateTwoD'
import GridPopulateThreeD from './Grid/PopulateThreeD'
import GridPopulateGeometry from './Grid/PopulateGeometry'
import GridRadial from './Grid/Radial'
import GridRectangular from './Grid/Rectangular'
import GridSquare from './Grid/Square'
import GridTriangular from './Grid/Triangular'

const Vector = {
	Vector: {
		Addition: VectorAddition,
		Amplitude: VectorAmplitude,
		Angle: VectorAngle,
		CrossProduct: VectorCrossProduct,
		DeconstructVector: VectorDeconstructVector,
		Divide: VectorDivide,
		DotProduct: VectorDotProduct,
		Multiply: VectorMultiply,
		Reverse: VectorReverse,
		Rotate: VectorRotate,
		SolarIncidence: VectorSolarIncidence,
		UnitVector: VectorUnitVector,
		UnitX: VectorUnitX,
		UnitY: VectorUnitY,
		UnitZ: VectorUnitZ,
		VectorTwoPt: VectorVectorTwoPt,
		VectorLength: VectorVectorLength,
		VectorXYZ: VectorVectorXYZ,
	},
	Plane: {
		AdjustPlane: PlaneAdjustPlane,
		AlignPlane: PlaneAlignPlane,
		AlignPlanes: PlaneAlignPlanes,
		ConstructPlane: PlaneConstructPlane,
		DeconstructPlane: PlaneDeconstructPlane,
		FlipPlane: PlaneFlipPlane,
		LineLine: PlaneLineLine,
		LinePt: PlaneLinePt,
		PlaneThreePt: PlanePlaneThreePt,
		PlaneClosestPoint: PlanePlaneClosestPoint,
		PlaneCoordinates: PlanePlaneCoordinates,
		PlaneFit: PlanePlaneFit,
		PlaneNormal: PlanePlaneNormal,
		PlaneOffset: PlanePlaneOffset,
		PlaneOrigin: PlanePlaneOrigin,
		RotatePlane: PlaneRotatePlane,
		XYPlane: PlaneXYPlane,
		XZPlane: PlaneXZPlane,
		YZPlane: PlaneYZPlane,
	},
	Point: {
		Barycentric: PointBarycentric,
		ClosestPoint: PointClosestPoint,
		ClosestPoints: PointClosestPoints,
		ConstructPoint: PointConstructPoint,
		CoordinateMask: PointCoordinateMask,
		CullDuplicates: PointCullDuplicates,
		Deconstruct: PointDeconstruct,
		Distance: PointDistance,
		NumberstoPoints: PointNumberstoPoints,
		PointCylindrical: PointPointCylindrical,
		PointGroups: PointPointGroups,
		PointOriented: PointPointOriented,
		PointPolar: PointPointPolar,
		PointstoNumbers: PointPointstoNumbers,
		ProjectPoint: PointProjectPoint,
		PullPoint: PointPullPoint,
		SortAlongCurve: PointSortAlongCurve,
		SortPoints: PointSortPoints,
		ToPolar: PointToPolar,
	},
	Colour: {
		BlendColours: ColourBlendColours,
	},
	Field: {
		BreakField: FieldBreakField,
		DirectionDisplay: FieldDirectionDisplay,
		EvaluateField: FieldEvaluateField,
		FieldLine: FieldFieldLine,
		LineCharge: FieldLineCharge,
		MergeFields: FieldMergeFields,
		PerpendicularDisplay: FieldPerpendicularDisplay,
		PointCharge: FieldPointCharge,
		ScalarDisplay: FieldScalarDisplay,
		SpinForce: FieldSpinForce,
		TensorDisplay: FieldTensorDisplay,
		VectorForce: FieldVectorForce,
	},
	Grid: {
		Hexagonal: GridHexagonal,
		PopulateTwoD: GridPopulateTwoD,
		PopulateThreeD: GridPopulateThreeD,
		PopulateGeometry: GridPopulateGeometry,
		Radial: GridRadial,
		Rectangular: GridRectangular,
		Square: GridSquare,
		Triangular: GridTriangular,
	},
}

export default Vector;