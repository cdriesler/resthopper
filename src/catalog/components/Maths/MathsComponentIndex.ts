import OperatorsAbsolute from './Operators/Absolute'
import OperatorsAddition from './Operators/Addition'
import OperatorsDivision from './Operators/Division'
import OperatorsEquality from './Operators/Equality'
import OperatorsFactorial from './Operators/Factorial'
import OperatorsGateAnd from './Operators/GateAnd'
import OperatorsGateMajority from './Operators/GateMajority'
import OperatorsGateNand from './Operators/GateNand'
import OperatorsGateNor from './Operators/GateNor'
import OperatorsGateNot from './Operators/GateNot'
import OperatorsGateOr from './Operators/GateOr'
import OperatorsGateXnor from './Operators/GateXnor'
import OperatorsGateXor from './Operators/GateXor'
import OperatorsIntegerDivision from './Operators/IntegerDivision'
import OperatorsLargerThan from './Operators/LargerThan'
import OperatorsMassAddition from './Operators/MassAddition'
import OperatorsMassMultiplication from './Operators/MassMultiplication'
import OperatorsModulus from './Operators/Modulus'
import OperatorsMultiplication from './Operators/Multiplication'
import OperatorsNegative from './Operators/Negative'
import OperatorsPower from './Operators/Power'
import OperatorsRelativeDifferences from './Operators/RelativeDifferences'
import OperatorsSeriesAddition from './Operators/SeriesAddition'
import OperatorsSimilarity from './Operators/Similarity'
import OperatorsSmallerThan from './Operators/SmallerThan'
import OperatorsSubtraction from './Operators/Subtraction'
import TrigArcCosine from './Trig/ArcCosine'
import TrigArcSine from './Trig/ArcSine'
import TrigArcTangent from './Trig/ArcTangent'
import TrigCentroid from './Trig/Centroid'
import TrigCircumcentre from './Trig/Circumcentre'
import TrigCoSecant from './Trig/CoSecant'
import TrigCosine from './Trig/Cosine'
import TrigCoTangent from './Trig/CoTangent'
import TrigDegrees from './Trig/Degrees'
import TrigIncentre from './Trig/Incentre'
import TrigOrthocentre from './Trig/Orthocentre'
import TrigRadians from './Trig/Radians'
import TrigRightTrigonometry from './Trig/RightTrigonometry'
import TrigSecant from './Trig/Secant'
import TrigSinc from './Trig/Sinc'
import TrigSine from './Trig/Sine'
import TrigTangent from './Trig/Tangent'
import TrigTriangleTrigonometry from './Trig/TriangleTrigonometry'
import UtilAverage from './Util/Average'
import UtilBlurNumbers from './Util/BlurNumbers'
import UtilComplexArgument from './Util/ComplexArgument'
import UtilComplexComponents from './Util/ComplexComponents'
import UtilComplexConjugate from './Util/ComplexConjugate'
import UtilComplexModulus from './Util/ComplexModulus'
import UtilCreateComplex from './Util/CreateComplex'
import UtilEpsilon from './Util/Epsilon'
import UtilExtremes from './Util/Extremes'
import UtilGoldenRatio from './Util/GoldenRatio'
import UtilInterpolatedata from './Util/Interpolatedata'
import UtilMaximum from './Util/Maximum'
import UtilMinimum from './Util/Minimum'
import UtilNaturallogarithm from './Util/Naturallogarithm'
import UtilPi from './Util/Pi'
import UtilRound from './Util/Round'
import UtilSmoothNumbers from './Util/SmoothNumbers'
import UtilTruncate from './Util/Truncate'
import UtilWeightedAverage from './Util/WeightedAverage'
import DomainBounds from './Domain/Bounds'
import DomainBoundsTwoD from './Domain/BoundsTwoD'
import DomainConsecutiveDomains from './Domain/ConsecutiveDomains'
import DomainConstructDomain from './Domain/ConstructDomain'
import DomainDeconstructDomain from './Domain/DeconstructDomain'
import DomainDivideDomain from './Domain/DivideDomain'
import DomainFindDomain from './Domain/FindDomain'
import DomainIncludes from './Domain/Includes'
import DomainRemapNumbers from './Domain/RemapNumbers'
import TimeCombineDateTime from './Time/CombineDateTime'
import TimeConstructDate from './Time/ConstructDate'
import TimeConstructExoticDate from './Time/ConstructExoticDate'
import TimeConstructSmoothTime from './Time/ConstructSmoothTime'
import TimeConstructTime from './Time/ConstructTime'
import TimeDateRange from './Time/DateRange'
import TimeDeconstructDate from './Time/DeconstructDate'
import TimeInterpolateDate from './Time/InterpolateDate'
import MatrixConstructMatrix from './Matrix/ConstructMatrix'
import MatrixDeconstructMatrix from './Matrix/DeconstructMatrix'
import MatrixDisplayMatrix from './Matrix/DisplayMatrix'
import MatrixInvertMatrix from './Matrix/InvertMatrix'
import MatrixSwapColumns from './Matrix/SwapColumns'
import MatrixSwapRows from './Matrix/SwapRows'
import MatrixTransposeMatrix from './Matrix/TransposeMatrix'
import ScriptCScript from './Script/CScript'
import ScriptDotNETCScriptLEGACY from './Script/DotNETCScriptLEGACY'
import ScriptDotNETVBScriptLEGACY from './Script/DotNETVBScriptLEGACY'
import ScriptEvaluate from './Script/Evaluate'
import ScriptExpression from './Script/Expression'
import ScriptGhPythonScript from './Script/GhPythonScript'
import ScriptVariable from './Script/Variable'
import ScriptVBScript from './Script/VBScript'
import PolynomialsCube from './Polynomials/Cube'
import PolynomialsCubeRoot from './Polynomials/CubeRoot'
import PolynomialsLogarithm from './Polynomials/Logarithm'
import PolynomialsLogN from './Polynomials/LogN'
import PolynomialsNaturallogarithm from './Polynomials/Naturallogarithm'
import PolynomialsOneOverX from './Polynomials/OneOverX'
import PolynomialsPowerofOneZero from './Polynomials/PowerofOneZero'
import PolynomialsPowerofTwo from './Polynomials/PowerofTwo'
import PolynomialsPowerofE from './Polynomials/PowerofE'
import PolynomialsSquare from './Polynomials/Square'
import PolynomialsSquareRoot from './Polynomials/SquareRoot'

const Maths = {
	Operators: {
		Absolute: OperatorsAbsolute,
		Addition: OperatorsAddition,
		Division: OperatorsDivision,
		Equality: OperatorsEquality,
		Factorial: OperatorsFactorial,
		GateAnd: OperatorsGateAnd,
		GateMajority: OperatorsGateMajority,
		GateNand: OperatorsGateNand,
		GateNor: OperatorsGateNor,
		GateNot: OperatorsGateNot,
		GateOr: OperatorsGateOr,
		GateXnor: OperatorsGateXnor,
		GateXor: OperatorsGateXor,
		IntegerDivision: OperatorsIntegerDivision,
		LargerThan: OperatorsLargerThan,
		MassAddition: OperatorsMassAddition,
		MassMultiplication: OperatorsMassMultiplication,
		Modulus: OperatorsModulus,
		Multiplication: OperatorsMultiplication,
		Negative: OperatorsNegative,
		Power: OperatorsPower,
		RelativeDifferences: OperatorsRelativeDifferences,
		SeriesAddition: OperatorsSeriesAddition,
		Similarity: OperatorsSimilarity,
		SmallerThan: OperatorsSmallerThan,
		Subtraction: OperatorsSubtraction,
	},
	Trig: {
		ArcCosine: TrigArcCosine,
		ArcSine: TrigArcSine,
		ArcTangent: TrigArcTangent,
		Centroid: TrigCentroid,
		Circumcentre: TrigCircumcentre,
		CoSecant: TrigCoSecant,
		Cosine: TrigCosine,
		CoTangent: TrigCoTangent,
		Degrees: TrigDegrees,
		Incentre: TrigIncentre,
		Orthocentre: TrigOrthocentre,
		Radians: TrigRadians,
		RightTrigonometry: TrigRightTrigonometry,
		Secant: TrigSecant,
		Sinc: TrigSinc,
		Sine: TrigSine,
		Tangent: TrigTangent,
		TriangleTrigonometry: TrigTriangleTrigonometry,
	},
	Util: {
		Average: UtilAverage,
		BlurNumbers: UtilBlurNumbers,
		ComplexArgument: UtilComplexArgument,
		ComplexComponents: UtilComplexComponents,
		ComplexConjugate: UtilComplexConjugate,
		ComplexModulus: UtilComplexModulus,
		CreateComplex: UtilCreateComplex,
		Epsilon: UtilEpsilon,
		Extremes: UtilExtremes,
		GoldenRatio: UtilGoldenRatio,
		Interpolatedata: UtilInterpolatedata,
		Maximum: UtilMaximum,
		Minimum: UtilMinimum,
		Naturallogarithm: UtilNaturallogarithm,
		Pi: UtilPi,
		Round: UtilRound,
		SmoothNumbers: UtilSmoothNumbers,
		Truncate: UtilTruncate,
		WeightedAverage: UtilWeightedAverage,
	},
	Domain: {
		Bounds: DomainBounds,
		BoundsTwoD: DomainBoundsTwoD,
		ConsecutiveDomains: DomainConsecutiveDomains,
		ConstructDomain: DomainConstructDomain,
		DeconstructDomain: DomainDeconstructDomain,
		DivideDomain: DomainDivideDomain,
		FindDomain: DomainFindDomain,
		Includes: DomainIncludes,
		RemapNumbers: DomainRemapNumbers,
	},
	Time: {
		CombineDateTime: TimeCombineDateTime,
		ConstructDate: TimeConstructDate,
		ConstructExoticDate: TimeConstructExoticDate,
		ConstructSmoothTime: TimeConstructSmoothTime,
		ConstructTime: TimeConstructTime,
		DateRange: TimeDateRange,
		DeconstructDate: TimeDeconstructDate,
		InterpolateDate: TimeInterpolateDate,
	},
	Matrix: {
		ConstructMatrix: MatrixConstructMatrix,
		DeconstructMatrix: MatrixDeconstructMatrix,
		DisplayMatrix: MatrixDisplayMatrix,
		InvertMatrix: MatrixInvertMatrix,
		SwapColumns: MatrixSwapColumns,
		SwapRows: MatrixSwapRows,
		TransposeMatrix: MatrixTransposeMatrix,
	},
	Script: {
		CScript: ScriptCScript,
		DotNETCScriptLEGACY: ScriptDotNETCScriptLEGACY,
		DotNETVBScriptLEGACY: ScriptDotNETVBScriptLEGACY,
		Evaluate: ScriptEvaluate,
		Expression: ScriptExpression,
		GhPythonScript: ScriptGhPythonScript,
		Variable: ScriptVariable,
		VBScript: ScriptVBScript,
	},
	Polynomials: {
		Cube: PolynomialsCube,
		CubeRoot: PolynomialsCubeRoot,
		Logarithm: PolynomialsLogarithm,
		LogN: PolynomialsLogN,
		Naturallogarithm: PolynomialsNaturallogarithm,
		OneOverX: PolynomialsOneOverX,
		PowerofOneZero: PolynomialsPowerofOneZero,
		PowerofTwo: PolynomialsPowerofTwo,
		PowerofE: PolynomialsPowerofE,
		Square: PolynomialsSquare,
		SquareRoot: PolynomialsSquareRoot,
	},
}

export default Maths;