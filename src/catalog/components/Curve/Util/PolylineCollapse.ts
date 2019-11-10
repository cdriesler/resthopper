import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolylineCollapse extends ResthopperComponent {

	public guid: string = "be298882-28c9-45b1-980d-7192a531c9a9";
	public name: string = "PolylineCollapse";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Collapse short segments in a polyline curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Polyline_P": PolylineCollapseInput_Polyline_P,
		"Tolerance_t": PolylineCollapseInput_Tolerance_t,
	}

	public output:
	{
		"Polyline_Pl": PolylineCollapseOutput_Polyline_Pl,
		"Count_N": PolylineCollapseOutput_Count_N,
	}

	constructor() {
		super();
		this.input = {
			"Polyline_P": new PolylineCollapseInput_Polyline_P(),
			"Tolerance_t": new PolylineCollapseInput_Tolerance_t(),
		}
		this.output = {
			"Polyline_Pl": new PolylineCollapseOutput_Polyline_Pl(),
			"Count_N": new PolylineCollapseOutput_Count_N(),
		}
	}

}

class PolylineCollapseInput_Polyline_P extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolylineCollapseInput_Tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolylineCollapseOutput_Polyline_Pl extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolylineCollapseOutput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
