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
		"curve_c": CurveToPolylineInput_curve_c,
		"tolerancedistance_td": CurveToPolylineInput_tolerancedistance_td,
		"toleranceangle_ta": CurveToPolylineInput_toleranceangle_ta,
		"maxedge_e": CurveToPolylineInput_maxedge_e,
	}

	public output:
	{
		"polyline_p": CurveToPolylineOutput_polyline_p,
		"segments_s": CurveToPolylineOutput_segments_s,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurveToPolylineInput_curve_c(),
			"tolerancedistance_td": new CurveToPolylineInput_tolerancedistance_td(),
			"toleranceangle_ta": new CurveToPolylineInput_toleranceangle_ta(),
			"maxedge_e": new CurveToPolylineInput_maxedge_e(),
		}
		this.output = {
			"polyline_p": new CurveToPolylineOutput_polyline_p(),
			"segments_s": new CurveToPolylineOutput_segments_s(),
		}
	}

}

class CurveToPolylineInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineInput_tolerancedistance_td extends ResthopperParameter {

	public name: string = "Tolerancedistance";
	public nickName: string = "Td";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineInput_toleranceangle_ta extends ResthopperParameter {

	public name: string = "Toleranceangle";
	public nickName: string = "Ta";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineInput_maxedge_e extends ResthopperParameter {

	public name: string = "MaxEdge";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineOutput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurveToPolylineOutput_segments_s extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
