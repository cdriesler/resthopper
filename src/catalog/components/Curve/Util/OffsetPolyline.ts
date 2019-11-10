import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetPolyline extends ResthopperComponent {

	public guid: string = "e2c6cab3-91ea-4c01-900c-646642d3e436";
	public name: string = "OffsetPolyline";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset a 2D polyline";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"polyline_p": OffsetPolylineInput_polyline_p,
		"distance_d": OffsetPolylineInput_distance_d,
	}

	public output:
	{
		"offset_o": OffsetPolylineOutput_offset_o,
		"valid_v": OffsetPolylineOutput_valid_v,
	}

	constructor() {
		super();
		this.input = {
			"polyline_p": new OffsetPolylineInput_polyline_p(),
			"distance_d": new OffsetPolylineInput_distance_d(),
		}
		this.output = {
			"offset_o": new OffsetPolylineOutput_offset_o(),
			"valid_v": new OffsetPolylineOutput_valid_v(),
		}
	}

}

class OffsetPolylineInput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetPolylineInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetPolylineOutput_offset_o extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetPolylineOutput_valid_v extends ResthopperParameter {

	public name: string = "Valid";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
