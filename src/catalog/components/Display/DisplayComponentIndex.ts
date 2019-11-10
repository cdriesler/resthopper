import DimensionsAlignedDimension from './Dimensions/AlignedDimension'
import DimensionsAngularDimension from './Dimensions/AngularDimension'
import DimensionsAngularDimensionsMesh from './Dimensions/AngularDimensionsMesh'
import DimensionsArcDimension from './Dimensions/ArcDimension'
import DimensionsCircularDimension from './Dimensions/CircularDimension'
import DimensionsLinearDimension from './Dimensions/LinearDimension'
import DimensionsLineDimension from './Dimensions/LineDimension'
import DimensionsMakeTwoD from './Dimensions/MakeTwoD'
import DimensionsMakeTwoDParallelView from './Dimensions/MakeTwoDParallelView'
import DimensionsMakeTwoDPerspectiveView from './Dimensions/MakeTwoDPerspectiveView'
import DimensionsMakeTwoDRhinoView from './Dimensions/MakeTwoDRhinoView'
import DimensionsMarkerDimension from './Dimensions/MarkerDimension'
import DimensionsSerialDimension from './Dimensions/SerialDimension'
import DimensionsTextTag from './Dimensions/TextTag'
import DimensionsTextTagThreeD from './Dimensions/TextTagThreeD'
import GraphsBarGraph from './Graphs/BarGraph'
import GraphsImageGallery from './Graphs/ImageGallery'
import GraphsLegend from './Graphs/Legend'
import GraphsPieChart from './Graphs/PieChart'
import GraphsQuickGraph from './Graphs/QuickGraph'
import GraphsValueTracker from './Graphs/ValueTracker'
import PreviewCloudDisplay from './Preview/CloudDisplay'
import PreviewCreateMaterial from './Preview/CreateMaterial'
import PreviewCustomPreview from './Preview/CustomPreview'
import PreviewDotDisplay from './Preview/DotDisplay'
import PreviewSymbolAdvanced from './Preview/SymbolAdvanced'
import PreviewSymbolDisplay from './Preview/SymbolDisplay'
import PreviewSymbolSimple from './Preview/SymbolSimple'
import ColourColourCMYK from './Colour/ColourCMYK'
import ColourColourHSL from './Colour/ColourHSL'
import ColourColourHSV from './Colour/ColourHSV'
import ColourColourLab from './Colour/ColourLab'
import ColourColourLCH from './Colour/ColourLCH'
import ColourColourRGB from './Colour/ColourRGB'
import ColourColourRGBf from './Colour/ColourRGBf'
import ColourColourXYZ from './Colour/ColourXYZ'
import ColourSplitAHSL from './Colour/SplitAHSL'
import ColourSplitAHSV from './Colour/SplitAHSV'
import ColourSplitARGB from './Colour/SplitARGB'
import VectorPointList from './Vector/PointList'
import VectorPointOrder from './Vector/PointOrder'
import VectorVectorDisplay from './Vector/VectorDisplay'
import VectorVectorDisplayEx from './Vector/VectorDisplayEx'
import TestTestCrash from './Test/TestCrash'
import ViewportViewportDisplay from './Viewport/ViewportDisplay'

const Display = {
	Dimensions: {
		AlignedDimension: DimensionsAlignedDimension,
		AngularDimension: DimensionsAngularDimension,
		AngularDimensionsMesh: DimensionsAngularDimensionsMesh,
		ArcDimension: DimensionsArcDimension,
		CircularDimension: DimensionsCircularDimension,
		LinearDimension: DimensionsLinearDimension,
		LineDimension: DimensionsLineDimension,
		MakeTwoD: DimensionsMakeTwoD,
		MakeTwoDParallelView: DimensionsMakeTwoDParallelView,
		MakeTwoDPerspectiveView: DimensionsMakeTwoDPerspectiveView,
		MakeTwoDRhinoView: DimensionsMakeTwoDRhinoView,
		MarkerDimension: DimensionsMarkerDimension,
		SerialDimension: DimensionsSerialDimension,
		TextTag: DimensionsTextTag,
		TextTagThreeD: DimensionsTextTagThreeD,
	},
	Graphs: {
		BarGraph: GraphsBarGraph,
		ImageGallery: GraphsImageGallery,
		Legend: GraphsLegend,
		PieChart: GraphsPieChart,
		QuickGraph: GraphsQuickGraph,
		ValueTracker: GraphsValueTracker,
	},
	Preview: {
		CloudDisplay: PreviewCloudDisplay,
		CreateMaterial: PreviewCreateMaterial,
		CustomPreview: PreviewCustomPreview,
		DotDisplay: PreviewDotDisplay,
		SymbolAdvanced: PreviewSymbolAdvanced,
		SymbolDisplay: PreviewSymbolDisplay,
		SymbolSimple: PreviewSymbolSimple,
	},
	Colour: {
		ColourCMYK: ColourColourCMYK,
		ColourHSL: ColourColourHSL,
		ColourHSV: ColourColourHSV,
		ColourLab: ColourColourLab,
		ColourLCH: ColourColourLCH,
		ColourRGB: ColourColourRGB,
		ColourRGBf: ColourColourRGBf,
		ColourXYZ: ColourColourXYZ,
		SplitAHSL: ColourSplitAHSL,
		SplitAHSV: ColourSplitAHSV,
		SplitARGB: ColourSplitARGB,
	},
	Vector: {
		PointList: VectorPointList,
		PointOrder: VectorPointOrder,
		VectorDisplay: VectorVectorDisplay,
		VectorDisplayEx: VectorVectorDisplayEx,
	},
	Test: {
		TestCrash: TestTestCrash,
	},
	Viewport: {
		ViewportDisplay: ViewportViewportDisplay,
	},
}

export default Display;