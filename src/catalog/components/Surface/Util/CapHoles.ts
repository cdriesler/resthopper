import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CapHoles extends ResthopperComponent {

	public guid: string = "b648d933-ddea-4e75-834c-8f6f3793e311";
	public name: string = "CapHoles";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Cap all planar holes in a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": CapHolesInput_Brep_B,
	}

	public output:
	{
		"Brep_B": CapHolesOutput_Brep_B,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new CapHolesInput_Brep_B(),
		}
		this.output = {
			"Brep_B": new CapHolesOutput_Brep_B(),
		}
	}

}

class CapHolesInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CapHolesOutput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
