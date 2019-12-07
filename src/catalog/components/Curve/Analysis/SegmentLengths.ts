import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SegmentLengths extends ResthopperComponent {

	public guid: string = "f88a6cd9-1035-4361-b896-4f2dfe79272d";
	public name: string = "SegmentLengths";
	public nickName: string = "LenSeg";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Finds the shortest and longest segments of a curve.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": SegmentLengthsInput_curve_c,
	}

	public output:
	{
		"shortestlength_sl": SegmentLengthsOutput_shortestlength_sl,
		"shortestdomain_sd": SegmentLengthsOutput_shortestdomain_sd,
		"longestlength_ll": SegmentLengthsOutput_longestlength_ll,
		"longestdomain_ld": SegmentLengthsOutput_longestdomain_ld,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new SegmentLengthsInput_curve_c(),
		}
		this.output = {
			"shortestlength_sl": new SegmentLengthsOutput_shortestlength_sl(),
			"shortestdomain_sd": new SegmentLengthsOutput_shortestdomain_sd(),
			"longestlength_ll": new SegmentLengthsOutput_longestlength_ll(),
			"longestdomain_ld": new SegmentLengthsOutput_longestdomain_ld(),
		}
	}

}

class SegmentLengthsInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SegmentLengthsOutput_shortestlength_sl extends ResthopperParameter {

	public name: string = "ShortestLength";
	public nickName: string = "Sl";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SegmentLengthsOutput_shortestdomain_sd extends ResthopperParameter {

	public name: string = "ShortestDomain";
	public nickName: string = "Sd";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SegmentLengthsOutput_longestlength_ll extends ResthopperParameter {

	public name: string = "LongestLength";
	public nickName: string = "Ll";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SegmentLengthsOutput_longestdomain_ld extends ResthopperParameter {

	public name: string = "LongestDomain";
	public nickName: string = "Ld";
	public description: string = "Empty Domain parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
