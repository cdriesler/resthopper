import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepEdges extends ResthopperComponent {

	public guid: string = "0148a65d-6f42-414a-9db7-9a9b2eb78437";
	public name: string = "BrepEdges";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Extract the edge curves of a brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": BrepEdgesInput_Brep_B,
	}

	public output:
	{
		"Naked_En": BrepEdgesOutput_Naked_En,
		"Interior_Ei": BrepEdgesOutput_Interior_Ei,
		"NonManifold_Em": BrepEdgesOutput_NonManifold_Em,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new BrepEdgesInput_Brep_B(),
		}
		this.output = {
			"Naked_En": new BrepEdgesOutput_Naked_En(),
			"Interior_Ei": new BrepEdgesOutput_Interior_Ei(),
			"NonManifold_Em": new BrepEdgesOutput_NonManifold_Em(),
		}
	}

}

class BrepEdgesInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepEdgesOutput_Naked_En extends ResthopperParameter {

	public name: string = "Naked";
	public nickName: string = "En";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepEdgesOutput_Interior_Ei extends ResthopperParameter {

	public name: string = "Interior";
	public nickName: string = "Ei";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepEdgesOutput_NonManifold_Em extends ResthopperParameter {

	public name: string = "NonManifold";
	public nickName: string = "Em";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
