import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullNth extends ResthopperComponent {

	public guid: string = "932b9817-fcc6-4ac3-b5fd-c0e8eeadc53f";
	public name: string = "CullNth";
	public nickName: string = "CullN";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) every Nth element in a list.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": CullNthInput_list_l,
		"cullfrequency_n": CullNthInput_cullfrequency_n,
	}

	public output:
	{
		"list_l": CullNthOutput_list_l,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new CullNthInput_list_l(),
			"cullfrequency_n": new CullNthInput_cullfrequency_n(),
		}
		this.output = {
			"list_l": new CullNthOutput_list_l(),
		}
	}

}

class CullNthInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullNthInput_cullfrequency_n extends ResthopperParameter {

	public name: string = "Cullfrequency";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullNthOutput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
