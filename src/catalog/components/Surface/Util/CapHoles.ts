import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CapHoles extends ResthopperComponent {

	public guid: string = "b648d933-ddea-4e75-834c-8f6f3793e311";
	public name: string = "Cap Holes";
	public nickName: string = "Cap";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Cap all planar holes in a Brep.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": CapHolesInput_brep_b,
	}

	public output:
	{
		"brep_b": CapHolesOutput_brep_b,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new CapHolesInput_brep_b(),
		}
		this.output = {
			"brep_b": new CapHolesOutput_brep_b(),
		}
	}

}

class CapHolesInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Brep to cap"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CapHolesOutput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Capped Brep"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
