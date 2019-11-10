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
		"SetA_A": CarthesianProductInput_SetA_A,
		"SetB_B": CarthesianProductInput_SetB_B,
	}

	public output:
	{
		"Product_P": CarthesianProductOutput_Product_P,
	}

	constructor() {
		super();
		this.input = {
			"SetA_A": new CarthesianProductInput_SetA_A(),
			"SetB_B": new CarthesianProductInput_SetB_B(),
		}
		this.output = {
			"Product_P": new CarthesianProductOutput_Product_P(),
		}
	}

}

class CarthesianProductInput_SetA_A extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CarthesianProductInput_SetB_B extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CarthesianProductOutput_Product_P extends ResthopperParameter {

	public name: string = "Product";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
