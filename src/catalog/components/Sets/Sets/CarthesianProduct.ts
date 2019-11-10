import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CarthesianProduct extends ResthopperComponent {

	public guid: string = "deffaf1e-270a-4c15-a693-9216b68afd4a";
	public name: string = "CarthesianProduct";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Create the Carthesian product for two sets of identical cardinality.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"seta_a": CarthesianProductInput_seta_a,
		"setb_b": CarthesianProductInput_setb_b,
	}

	public output:
	{
		"product_p": CarthesianProductOutput_product_p,
	}

	constructor() {
		super();
		this.input = {
			"seta_a": new CarthesianProductInput_seta_a(),
			"setb_b": new CarthesianProductInput_setb_b(),
		}
		this.output = {
			"product_p": new CarthesianProductOutput_product_p(),
		}
	}

}

class CarthesianProductInput_seta_a extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CarthesianProductInput_setb_b extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CarthesianProductOutput_product_p extends ResthopperParameter {

	public name: string = "Product";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
