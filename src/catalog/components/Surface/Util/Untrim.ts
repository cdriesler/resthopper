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
		"surface_s": UntrimInput_surface_s,
	}

	public output:
	{
		"surface_s": UntrimOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new UntrimInput_surface_s(),
		}
		this.output = {
			"surface_s": new UntrimOutput_surface_s(),
		}
	}

}

class UntrimInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UntrimOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
