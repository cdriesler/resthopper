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
		"brep_b": BrepEdgesInput_brep_b,
	}

	public output:
	{
		"naked_en": BrepEdgesOutput_naked_en,
		"interior_ei": BrepEdgesOutput_interior_ei,
		"nonmanifold_em": BrepEdgesOutput_nonmanifold_em,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new BrepEdgesInput_brep_b(),
		}
		this.output = {
			"naked_en": new BrepEdgesOutput_naked_en(),
			"interior_ei": new BrepEdgesOutput_interior_ei(),
			"nonmanifold_em": new BrepEdgesOutput_nonmanifold_em(),
		}
	}

}

class BrepEdgesInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepEdgesOutput_naked_en extends ResthopperParameter {

	public name: string = "Naked";
	public nickName: string = "En";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepEdgesOutput_interior_ei extends ResthopperParameter {

	public name: string = "Interior";
	public nickName: string = "Ei";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepEdgesOutput_nonmanifold_em extends ResthopperParameter {

	public name: string = "NonManifold";
	public nickName: string = "Em";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
