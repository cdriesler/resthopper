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
		"Polyline_P": OffsetPolylineInput_Polyline_P,
		"Distance_D": OffsetPolylineInput_Distance_D,
	}

	public output:
	{
		"Offset_O": OffsetPolylineOutput_Offset_O,
		"Valid_V": OffsetPolylineOutput_Valid_V,
	}

	constructor() {
		super();
		this.input = {
			"Polyline_P": new OffsetPolylineInput_Polyline_P(),
			"Distance_D": new OffsetPolylineInput_Distance_D(),
		}
		this.output = {
			"Offset_O": new OffsetPolylineOutput_Offset_O(),
			"Valid_V": new OffsetPolylineOutput_Valid_V(),
		}
	}

}

class OffsetPolylineInput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetPolylineInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetPolylineOutput_Offset_O extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetPolylineOutput_Valid_V extends ResthopperParameter {

	public name: string = "Valid";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
