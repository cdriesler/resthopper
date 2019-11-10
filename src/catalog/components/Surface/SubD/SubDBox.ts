import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDBox extends ResthopperComponent {

	public guid: string = "10487e4e-a405-48b5-b188-5a8a6328418b";
	public name: string = "SubDBox";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Create a subdivision box";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Box_B": SubDBoxInput_Box_B,
		"Density_D": SubDBoxInput_Density_D,
		"Creases_C": SubDBoxInput_Creases_C,
	}

	public output:
	{
		"SubD_S": SubDBoxOutput_SubD_S,
	}

	constructor() {
		super();
		this.input = {
			"Box_B": new SubDBoxInput_Box_B(),
			"Density_D": new SubDBoxInput_Density_D(),
			"Creases_C": new SubDBoxInput_Creases_C(),
		}
		this.output = {
			"SubD_S": new SubDBoxOutput_SubD_S(),
		}
	}

}

class SubDBoxInput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDBoxInput_Density_D extends ResthopperParameter {

	public name: string = "Density";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDBoxInput_Creases_C extends ResthopperParameter {

	public name: string = "Creases";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDBoxOutput_SubD_S extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
