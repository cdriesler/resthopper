import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromFaces extends ResthopperComponent {

	public guid: string = "71e99dbb-2d79-4f02-a8a6-e87a09d54f47";
	public name: string = "EdgesfromFaces";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select all brep edges that delineate certain faces";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Brep_B": EdgesfromFacesInput_Brep_B,
		"Points_P": EdgesfromFacesInput_Points_P,
	}

	public output:
	{
		"Edges_E": EdgesfromFacesOutput_Edges_E,
		"Indices_I": EdgesfromFacesOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new EdgesfromFacesInput_Brep_B(),
			"Points_P": new EdgesfromFacesInput_Points_P(),
		}
		this.output = {
			"Edges_E": new EdgesfromFacesOutput_Edges_E(),
			"Indices_I": new EdgesfromFacesOutput_Indices_I(),
		}
	}

}

class EdgesfromFacesInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromFacesInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromFacesOutput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromFacesOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
