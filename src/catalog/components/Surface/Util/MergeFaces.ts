import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeFaces extends ResthopperComponent {

	public guid: string = "d6b43673-55dd-4e2f-95c4-6c69a14513a6";
	public name: string = "MergeFaces";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Merge all adjacent co-planar faces in a brep";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": MergeFacesInput_brep_b,
	}

	public output:
	{
		"breps_b": MergeFacesOutput_breps_b,
		"before_n0": MergeFacesOutput_before_n0,
		"after_n1": MergeFacesOutput_after_n1,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new MergeFacesInput_brep_b(),
		}
		this.output = {
			"breps_b": new MergeFacesOutput_breps_b(),
			"before_n0": new MergeFacesOutput_before_n0(),
			"after_n1": new MergeFacesOutput_after_n1(),
		}
	}

}

class MergeFacesInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeFacesOutput_breps_b extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeFacesOutput_before_n0 extends ResthopperParameter {

	public name: string = "Before";
	public nickName: string = "N0";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeFacesOutput_after_n1 extends ResthopperParameter {

	public name: string = "After";
	public nickName: string = "N1";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
