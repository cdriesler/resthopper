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
		"polyline_p": PolylineCollapseInput_polyline_p,
		"tolerance_t": PolylineCollapseInput_tolerance_t,
	}

	public output:
	{
		"polyline_pl": PolylineCollapseOutput_polyline_pl,
		"count_n": PolylineCollapseOutput_count_n,
	}

	constructor() {
		super();
		this.input = {
			"polyline_p": new PolylineCollapseInput_polyline_p(),
			"tolerance_t": new PolylineCollapseInput_tolerance_t(),
		}
		this.output = {
			"polyline_pl": new PolylineCollapseOutput_polyline_pl(),
			"count_n": new PolylineCollapseOutput_count_n(),
		}
	}

}

class PolylineCollapseInput_polyline_p extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolylineCollapseInput_tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolylineCollapseOutput_polyline_pl extends ResthopperParameter {

	public name: string = "Polyline";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolylineCollapseOutput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
