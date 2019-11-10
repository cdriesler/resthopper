import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CrossReference extends ResthopperComponent {

	public guid: string = "36947590-f0cb-4807-a8f9-9c90c9b20621";
	public name: string = "CrossReference";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Cross Reference data from multiple lists";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"lista_a": CrossReferenceInput_lista_a,
		"listb_b": CrossReferenceInput_listb_b,
	}

	public output:
	{
		"lista_a": CrossReferenceOutput_lista_a,
		"listb_b": CrossReferenceOutput_listb_b,
	}

	constructor() {
		super();
		this.input = {
			"lista_a": new CrossReferenceInput_lista_a(),
			"listb_b": new CrossReferenceInput_listb_b(),
		}
		this.output = {
			"lista_a": new CrossReferenceOutput_lista_a(),
			"listb_b": new CrossReferenceOutput_listb_b(),
		}
	}

}

class CrossReferenceInput_lista_a extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossReferenceInput_listb_b extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossReferenceOutput_lista_a extends ResthopperParameter {

	public name: string = "ListA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CrossReferenceOutput_listb_b extends ResthopperParameter {

	public name: string = "ListB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
