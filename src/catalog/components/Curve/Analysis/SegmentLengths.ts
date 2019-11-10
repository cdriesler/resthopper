import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SegmentLengths extends ResthopperComponent {

	public guid: string = "f88a6cd9-1035-4361-b896-4f2dfe79272d";
	public name: string = "SegmentLengths";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Finds the shortest and longest segments of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": SegmentLengthsInput_Curve_C,
	}

	public output:
	{
		"ShortestLength_Sl": SegmentLengthsOutput_ShortestLength_Sl,
		"ShortestDomain_Sd": SegmentLengthsOutput_ShortestDomain_Sd,
		"LongestLength_Ll": SegmentLengthsOutput_LongestLength_Ll,
		"LongestDomain_Ld": SegmentLengthsOutput_LongestDomain_Ld,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new SegmentLengthsInput_Curve_C(),
		}
		this.output = {
			"ShortestLength_Sl": new SegmentLengthsOutput_ShortestLength_Sl(),
			"ShortestDomain_Sd": new SegmentLengthsOutput_ShortestDomain_Sd(),
			"LongestLength_Ll": new SegmentLengthsOutput_LongestLength_Ll(),
			"LongestDomain_Ld": new SegmentLengthsOutput_LongestDomain_Ld(),
		}
	}

}

class SegmentLengthsInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SegmentLengthsOutput_ShortestLength_Sl extends ResthopperParameter {

	public name: string = "ShortestLength";
	public nickName: string = "Sl";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SegmentLengthsOutput_ShortestDomain_Sd extends ResthopperParameter {

	public name: string = "ShortestDomain";
	public nickName: string = "Sd";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SegmentLengthsOutput_LongestLength_Ll extends ResthopperParameter {

	public name: string = "LongestLength";
	public nickName: string = "Ll";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SegmentLengthsOutput_LongestDomain_Ld extends ResthopperParameter {

	public name: string = "LongestDomain";
	public nickName: string = "Ld";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
