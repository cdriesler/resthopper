import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Untrim extends ResthopperComponent {

	public guid: string = "fa92858a-a180-4545-ad4d-0dc644b3a2a8";
	public name: string = "Untrim";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Remove all trim curves from a surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": UntrimInput_Surface_S,
	}

	public output:
	{
		"Surface_S": UntrimOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new UntrimInput_Surface_S(),
		}
		this.output = {
			"Surface_S": new UntrimOutput_Surface_S(),
		}
	}

}

class UntrimInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UntrimOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
