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

	public library: string = "Surface Components";

	public input:
	{
		"Source_S": CopyTrimInput_Source_S,
		"Target_T": CopyTrimInput_Target_T,
	}

	public output:
	{
		"Surface_S": CopyTrimOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Source_S": new CopyTrimInput_Source_S(),
			"Target_T": new CopyTrimInput_Target_T(),
		}
		this.output = {
			"Surface_S": new CopyTrimOutput_Surface_S(),
		}
	}

}

class CopyTrimInput_Source_S extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CopyTrimInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CopyTrimOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
