import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveToPolyline extends ResthopperComponent {

	public guid: string = "2956d989-3599-476f-bc92-1d847aff98b6";
	public name: string = "CurveToPolyline";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Convert a curve to a polyline.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": CurveToPolylineInput_Curve_C,
		"Tolerancedistance_Td": CurveToPolylineInput_Tolerancedistance_Td,
		"Toleranceangle_Ta": CurveToPolylineInput_Toleranceangle_Ta,
		"MaxEdge_E": CurveToPolylineInput_MaxEdge_E,
	}

	public output:
	{
		"Polyline_P": CurveToPolylineOutput_Polyline_P,
		"Segments_S": CurveToPolylineOutput_Segments_S,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurveToPolylineInput_Curve_C(),
			"Tolerancedistance_Td": new CurveToPolylineInput_Tolerancedistance_Td(),
			"Toleranceangle_Ta": new CurveToPolylineInput_Toleranceangle_Ta(),
			"MaxEdge_E": new CurveToPolylineInput_MaxEdge_E(),
		}
		this.output = {
			"Polyline_P": new CurveToPolylineOutput_Polyline_P(),
			"Segments_S": new CurveToPolylineOutput_Segments_S(),
		}
	}

}

class CurveToPolylineInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineInput_Tolerancedistance_Td extends ResthopperParameter {

	public name: string = "Tolerancedistance";
	public nickName: string = "Td";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineInput_Toleranceangle_Ta extends ResthopperParameter {

	public name: string = "Toleranceangle";
	public nickName: string = "Ta";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineInput_MaxEdge_E extends ResthopperParameter {

	public name: string = "MaxEdge";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineOutput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineOutput_Segments_S extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
