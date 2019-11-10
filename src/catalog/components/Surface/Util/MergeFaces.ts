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

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": MergeFacesInput_Brep_B,
	}

	public output:
	{
		"Breps_B": MergeFacesOutput_Breps_B,
		"Before_N0": MergeFacesOutput_Before_N0,
		"After_N1": MergeFacesOutput_After_N1,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new MergeFacesInput_Brep_B(),
		}
		this.output = {
			"Breps_B": new MergeFacesOutput_Breps_B(),
			"Before_N0": new MergeFacesOutput_Before_N0(),
			"After_N1": new MergeFacesOutput_After_N1(),
		}
	}

}

class MergeFacesInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeFacesOutput_Breps_B extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeFacesOutput_Before_N0 extends ResthopperParameter {

	public name: string = "Before";
	public nickName: string = "N0";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeFacesOutput_After_N1 extends ResthopperParameter {

	public name: string = "After";
	public nickName: string = "N1";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
