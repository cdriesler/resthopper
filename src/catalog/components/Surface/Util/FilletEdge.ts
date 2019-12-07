import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FilletEdge extends ResthopperComponent {

	public guid: string = "4b87eb13-f87c-4ff1-ae0e-6c9f1f2aecbd";
	public name: string = "FilletEdge";
	public nickName: string = "FilEdge";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Fillet some edges of a brep.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"shape_s": FilletEdgeInput_shape_s,
		"blend_b": FilletEdgeInput_blend_b,
		"metric_m": FilletEdgeInput_metric_m,
		"edges_e": FilletEdgeInput_edges_e,
		"radii_r": FilletEdgeInput_radii_r,
	}

	public output:
	{
		"result_b": FilletEdgeOutput_result_b,
	}

	constructor() {
		super();
		this.input = {
			"shape_s": new FilletEdgeInput_shape_s(),
			"blend_b": new FilletEdgeInput_blend_b(),
			"metric_m": new FilletEdgeInput_metric_m(),
			"edges_e": new FilletEdgeInput_edges_e(),
			"radii_r": new FilletEdgeInput_radii_r(),
		}
		this.output = {
			"result_b": new FilletEdgeOutput_result_b(),
		}
	}

}

class FilletEdgeInput_shape_s extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeInput_blend_b extends ResthopperParameter {

	public name: string = "Blend";
	public nickName: string = "B";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeInput_metric_m extends ResthopperParameter {

	public name: string = "Metric";
	public nickName: string = "M";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeInput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = true;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeInput_radii_r extends ResthopperParameter {

	public name: string = "Radii";
	public nickName: string = "R";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FilletEdgeOutput_result_b extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "B";
	public description: string = "Empty Brep parameter"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
