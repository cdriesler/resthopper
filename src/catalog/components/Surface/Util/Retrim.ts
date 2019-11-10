import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Retrim extends ResthopperComponent {

	public guid: string = "a1da39b7-6387-4522-bf2b-2eaee6b14072";
	public name: string = "Retrim";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Retrim a surface based on 3D trim data from another surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Source_S": RetrimInput_Source_S,
		"Target_T": RetrimInput_Target_T,
	}

	public output:
	{
		"Surface_S": RetrimOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Source_S": new RetrimInput_Source_S(),
			"Target_T": new RetrimInput_Target_T(),
		}
		this.output = {
			"Surface_S": new RetrimOutput_Surface_S(),
		}
	}

}

class RetrimInput_Source_S extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RetrimInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RetrimOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
