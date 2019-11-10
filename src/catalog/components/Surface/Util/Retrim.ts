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
		"source_s": RetrimInput_source_s,
		"target_t": RetrimInput_target_t,
	}

	public output:
	{
		"surface_s": RetrimOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"source_s": new RetrimInput_source_s(),
			"target_t": new RetrimInput_target_t(),
		}
		this.output = {
			"surface_s": new RetrimOutput_surface_s(),
		}
	}

}

class RetrimInput_source_s extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RetrimInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RetrimOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
