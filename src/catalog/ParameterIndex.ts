import ResthopperParameter from './../models/ResthopperParameter';
import { AtomParam } from './parameters/Atom';
import { BooleanParam } from './parameters/Boolean';
import { BoxParam } from './parameters/Box';
import { BrepParam } from './parameters/Brep';
import { CircleParam } from './parameters/Circle';
import { CircularArcParam } from './parameters/CircularArc';
import { ColourParam } from './parameters/Colour';
import { ComplexParam } from './parameters/Complex';
import { ConstantParam } from './parameters/Constant';
import { CultureParam } from './parameters/Culture';
import { CurveParam } from './parameters/Curve';
import { DataParam } from './parameters/Data';
import { DataPathParam } from './parameters/DataPath';
import { DomainParam } from './parameters/Domain';
import { DomainSquaredParam } from './parameters/DomainSquared';
import { FieldParam } from './parameters/Field';
import { FilePathParam } from './parameters/FilePath';
import { GeometryParam } from './parameters/Geometry';
import { GeometryCacheParam } from './parameters/GeometryCache';
import { GeometryPipelineParam } from './parameters/GeometryPipeline';
import { GroupParam } from './parameters/Group';
import { GuidParam } from './parameters/Guid';
import { IntegerParam } from './parameters/Integer';
import { LineParam } from './parameters/Line';
import { LocationParam } from './parameters/Location';
import { MarshallingsignalparameterParam } from './parameters/Marshallingsignalparameter';
import { MatrixParam } from './parameters/Matrix';
import { MeshParam } from './parameters/Mesh';
import { MeshFaceParam } from './parameters/MeshFace';
import { MeshPointParam } from './parameters/MeshPoint';
import { MesherSettingsParam } from './parameters/MesherSettings';
import { NumberParam } from './parameters/Number';
import { PlaneParam } from './parameters/Plane';
import { PointParam } from './parameters/Point';
import { ReceiverParam } from './parameters/Receiver';
import { RectangleParam } from './parameters/Rectangle';
import { ShaderParam } from './parameters/Shader';
import { SubDParam } from './parameters/SubD';
import { SurfaceParam } from './parameters/Surface';
import { SymbolDisplayParam } from './parameters/SymbolDisplay';
import { TextParam } from './parameters/Text';
import { TimeParam } from './parameters/Time';
import { TransformParam } from './parameters/Transform';
import { TwistedBoxParam } from './parameters/TwistedBox';
import { VectorParam } from './parameters/Vector';

export default class ParameterIndex {

	public static createParameter(type: GrasshopperParameter, value?: any): ResthopperParameter {
		switch(type) {
			case "Atom":
				return new AtomParam(value);
			case "Boolean":
				return new BooleanParam(value);
			case "Box":
				return new BoxParam(value);
			case "Brep":
				return new BrepParam(value);
			case "Circle":
				return new CircleParam(value);
			case "CircularArc":
				return new CircularArcParam(value);
			case "Colour":
				return new ColourParam(value);
			case "Complex":
				return new ComplexParam(value);
			case "Constant":
				return new ConstantParam(value);
			case "Culture":
				return new CultureParam(value);
			case "Curve":
				return new CurveParam(value);
			case "Data":
				return new DataParam(value);
			case "DataPath":
				return new DataPathParam(value);
			case "Domain":
				return new DomainParam(value);
			case "DomainSquared":
				return new DomainSquaredParam(value);
			case "Field":
				return new FieldParam(value);
			case "FilePath":
				return new FilePathParam(value);
			case "Geometry":
				return new GeometryParam(value);
			case "GeometryCache":
				return new GeometryCacheParam(value);
			case "GeometryPipeline":
				return new GeometryPipelineParam(value);
			case "Group":
				return new GroupParam(value);
			case "Guid":
				return new GuidParam(value);
			case "Integer":
				return new IntegerParam(value);
			case "Line":
				return new LineParam(value);
			case "Location":
				return new LocationParam(value);
			case "Marshallingsignalparameter":
				return new MarshallingsignalparameterParam(value);
			case "Matrix":
				return new MatrixParam(value);
			case "Mesh":
				return new MeshParam(value);
			case "MeshFace":
				return new MeshFaceParam(value);
			case "MeshPoint":
				return new MeshPointParam(value);
			case "MesherSettings":
				return new MesherSettingsParam(value);
			case "Number":
				return new NumberParam(value);
			case "Plane":
				return new PlaneParam(value);
			case "Point":
				return new PointParam(value);
			case "Receiver":
				return new ReceiverParam(value);
			case "Rectangle":
				return new RectangleParam(value);
			case "Shader":
				return new ShaderParam(value);
			case "SubD":
				return new SubDParam(value);
			case "Surface":
				return new SurfaceParam(value);
			case "SymbolDisplay":
				return new SymbolDisplayParam(value);
			case "Text":
				return new TextParam(value);
			case "Time":
				return new TimeParam(value);
			case "Transform":
				return new TransformParam(value);
			case "TwistedBox":
				return new TwistedBoxParam(value);
			case "Vector":
				return new VectorParam(value);
			default:
				throw new Error('Selected parameter is not supported by resthopper.');
		}
	}
}

export { AtomParam } from './parameters/Atom';
export { BooleanParam } from './parameters/Boolean';
export { BoxParam } from './parameters/Box';
export { BrepParam } from './parameters/Brep';
export { CircleParam } from './parameters/Circle';
export { CircularArcParam } from './parameters/CircularArc';
export { ColourParam } from './parameters/Colour';
export { ComplexParam } from './parameters/Complex';
export { ConstantParam } from './parameters/Constant';
export { CultureParam } from './parameters/Culture';
export { CurveParam } from './parameters/Curve';
export { DataParam } from './parameters/Data';
export { DataPathParam } from './parameters/DataPath';
export { DomainParam } from './parameters/Domain';
export { DomainSquaredParam } from './parameters/DomainSquared';
export { FieldParam } from './parameters/Field';
export { FilePathParam } from './parameters/FilePath';
export { GeometryParam } from './parameters/Geometry';
export { GeometryCacheParam } from './parameters/GeometryCache';
export { GeometryPipelineParam } from './parameters/GeometryPipeline';
export { GroupParam } from './parameters/Group';
export { GuidParam } from './parameters/Guid';
export { IntegerParam } from './parameters/Integer';
export { LineParam } from './parameters/Line';
export { LocationParam } from './parameters/Location';
export { MarshallingsignalparameterParam } from './parameters/Marshallingsignalparameter';
export { MatrixParam } from './parameters/Matrix';
export { MeshParam } from './parameters/Mesh';
export { MeshFaceParam } from './parameters/MeshFace';
export { MeshPointParam } from './parameters/MeshPoint';
export { MesherSettingsParam } from './parameters/MesherSettings';
export { NumberParam } from './parameters/Number';
export { PlaneParam } from './parameters/Plane';
export { PointParam } from './parameters/Point';
export { ReceiverParam } from './parameters/Receiver';
export { RectangleParam } from './parameters/Rectangle';
export { ShaderParam } from './parameters/Shader';
export { SubDParam } from './parameters/SubD';
export { SurfaceParam } from './parameters/Surface';
export { SymbolDisplayParam } from './parameters/SymbolDisplay';
export { TextParam } from './parameters/Text';
export { TimeParam } from './parameters/Time';
export { TransformParam } from './parameters/Transform';
export { TwistedBoxParam } from './parameters/TwistedBox';
export { VectorParam } from './parameters/Vector';

export type GrasshopperParameter = 
"Atom" |
"Boolean" |
"Box" |
"Brep" |
"Circle" |
"CircularArc" |
"Colour" |
"Complex" |
"Constant" |
"Culture" |
"Curve" |
"Data" |
"DataPath" |
"Domain" |
"DomainSquared" |
"Field" |
"FilePath" |
"Geometry" |
"GeometryCache" |
"GeometryPipeline" |
"Group" |
"Guid" |
"Integer" |
"Line" |
"Location" |
"Marshallingsignalparameter" |
"Matrix" |
"Mesh" |
"MeshFace" |
"MeshPoint" |
"MesherSettings" |
"Number" |
"Plane" |
"Point" |
"Receiver" |
"Rectangle" |
"Shader" |
"SubD" |
"Surface" |
"SymbolDisplay" |
"Text" |
"Time" |
"Transform" |
"TwistedBox" |
"Vector"