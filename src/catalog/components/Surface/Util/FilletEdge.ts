import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FilletEdge extends ResthopperComponent {

	public guid: string = "4b87eb13-f87c-4ff1-ae0e-6c9f1f2aecbd";
	public name: string = "FilletEdge";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Fillet some edges of a brep.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Shape_S": FilletEdgeInput_Shape_S,
		"Blend_B": FilletEdgeInput_Blend_B,
		"Metric_M": FilletEdgeInput_Metric_M,
		"Edges_E": FilletEdgeInput_Edges_E,
		"Radii_R": FilletEdgeInput_Radii_R,
	}

	public output:
	{
		"Result_B": FilletEdgeOutput_Result_B,
	}

	constructor() {
		super();
		this.input = {
			"Shape_S": new FilletEdgeInput_Shape_S(),
			"Blend_B": new FilletEdgeInput_Blend_B(),
			"Metric_M": new FilletEdgeInput_Metric_M(),
			"Edges_E": new FilletEdgeInput_Edges_E(),
			"Radii_R": new FilletEdgeInput_Radii_R(),
		}
		this.output = {
			"Result_B": new FilletEdgeOutput_Result_B(),
		}
	}

}

class FilletEdgeInput_Shape_S extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeInput_Blend_B extends ResthopperParameter {

	public name: string = "Blend";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeInput_Metric_M extends ResthopperParameter {

	public name: string = "Metric";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeInput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeInput_Radii_R extends ResthopperParameter {

	public name: string = "Radii";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeOutput_Result_B extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
