import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullNth extends ResthopperComponent {

	public guid: string = "932b9817-fcc6-4ac3-b5fd-c0e8eeadc53f";
	public name: string = "CullNth";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Cull (remove) every Nth element in a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": CullNthInput_List_L,
		"Cullfrequency_N": CullNthInput_Cullfrequency_N,
	}

	public output:
	{
		"List_L": CullNthOutput_List_L,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new CullNthInput_List_L(),
			"Cullfrequency_N": new CullNthInput_Cullfrequency_N(),
		}
		this.output = {
			"List_L": new CullNthOutput_List_L(),
		}
	}

}

class CullNthInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullNthInput_Cullfrequency_N extends ResthopperParameter {

	public name: string = "Cullfrequency";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullNthOutput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
