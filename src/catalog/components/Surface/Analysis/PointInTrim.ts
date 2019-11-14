import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInTrim extends ResthopperComponent {

	public guid: string = "f881810b-96de-4668-a95a-f9a6d683e65c";
	public name: string = "PointInTrim";
	public nickName: string = "TrimInc";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a {uv} coordinate is inside the trimmed portion of a surface";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": PointInTrimInput_surface_s,
		"uvpoint_p": PointInTrimInput_uvpoint_p,
	}

	public output:
	{
		"inclusion_i": PointInTrimOutput_inclusion_i,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new PointInTrimInput_surface_s(),
			"uvpoint_p": new PointInTrimInput_uvpoint_p(),
		}
		this.output = {
			"inclusion_i": new PointInTrimOutput_inclusion_i(),
		}
	}

}

class PointInTrimInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInTrimInput_uvpoint_p extends ResthopperParameter {

	public name: string = "UVPoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInTrimOutput_inclusion_i extends ResthopperParameter {

	public name: string = "Inclusion";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
