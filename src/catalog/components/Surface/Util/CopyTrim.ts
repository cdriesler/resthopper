import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CopyTrim extends ResthopperComponent {

	public guid: string = "5d192b90-1ae3-4439-bbde-b05976fc4ac3";
	public name: string = "CopyTrim";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Copy UV trim data from one surface to another.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"source_s": CopyTrimInput_source_s,
		"target_t": CopyTrimInput_target_t,
	}

	public output:
	{
		"surface_s": CopyTrimOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"source_s": new CopyTrimInput_source_s(),
			"target_t": new CopyTrimInput_target_t(),
		}
		this.output = {
			"surface_s": new CopyTrimOutput_surface_s(),
		}
	}

}

class CopyTrimInput_source_s extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CopyTrimInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CopyTrimOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
