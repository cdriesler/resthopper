import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInTrim extends ResthopperComponent {

	public guid: string = "f881810b-96de-4668-a95a-f9a6d683e65c";
	public name: string = "PointInTrim";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a {uv} coordinate is inside the trimmed portion of a surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": PointInTrimInput_Surface_S,
		"UVPoint_P": PointInTrimInput_UVPoint_P,
	}

	public output:
	{
		"Inclusion_I": PointInTrimOutput_Inclusion_I,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new PointInTrimInput_Surface_S(),
			"UVPoint_P": new PointInTrimInput_UVPoint_P(),
		}
		this.output = {
			"Inclusion_I": new PointInTrimOutput_Inclusion_I(),
		}
	}

}

class PointInTrimInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInTrimInput_UVPoint_P extends ResthopperParameter {

	public name: string = "UVPoint";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointInTrimOutput_Inclusion_I extends ResthopperParameter {

	public name: string = "Inclusion";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
