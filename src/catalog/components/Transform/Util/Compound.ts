import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Compound extends ResthopperComponent {

	public guid: string = "ca80054a-cde0-4f69-a132-10502b24866d";
	public name: string = "Compound";
	public nickName: string = "Comp";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Compound two transformations.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"transforms_t": CompoundInput_transforms_t,
	}

	public output:
	{
		"compound_x": CompoundOutput_compound_x,
	}

	constructor() {
		super();
		this.input = {
			"transforms_t": new CompoundInput_transforms_t(),
		}
		this.output = {
			"compound_x": new CompoundOutput_compound_x(),
		}
	}

}

class CompoundInput_transforms_t extends ResthopperParameter {

	public name: string = "Transforms";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CompoundOutput_compound_x extends ResthopperParameter {

	public name: string = "Compound";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
