import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Flip extends ResthopperComponent {

	public guid: string = "c3d1f2b8-8596-4e8d-8861-c28ba8ffb4f4";
	public name: string = "Flip";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Flip the normals of a surface based on local or remote geometry";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": FlipInput_Surface_S,
		"Guide_G": FlipInput_Guide_G,
	}

	public output:
	{
		"Surface_S": FlipOutput_Surface_S,
		"Result_R": FlipOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new FlipInput_Surface_S(),
			"Guide_G": new FlipInput_Guide_G(),
		}
		this.output = {
			"Surface_S": new FlipOutput_Surface_S(),
			"Result_R": new FlipOutput_Result_R(),
		}
	}

}

class FlipInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipInput_Guide_G extends ResthopperParameter {

	public name: string = "Guide";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
