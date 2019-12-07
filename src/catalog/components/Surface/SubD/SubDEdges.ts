import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDEdges extends ResthopperComponent {

	public guid: string = "2183c4c6-b5b3-45d2-9261-2096c9357f92";
	public name: string = "SubDEdges";
	public nickName: string = "SubDEdges";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract all edge data from a Sub-D surface.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"subd_s": SubDEdgesInput_subd_s,
	}

	public output:
	{
		"line_l": SubDEdgesOutput_line_l,
		"edge_e": SubDEdgesOutput_edge_e,
		"tag_t": SubDEdgesOutput_tag_t,
		"id_i": SubDEdgesOutput_id_i,
	}

	constructor() {
		super();
		this.input = {
			"subd_s": new SubDEdgesInput_subd_s(),
		}
		this.output = {
			"line_l": new SubDEdgesOutput_line_l(),
			"edge_e": new SubDEdgesOutput_edge_e(),
			"tag_t": new SubDEdgesOutput_tag_t(),
			"id_i": new SubDEdgesOutput_id_i(),
		}
	}

}

class SubDEdgesInput_subd_s extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public description: string = "Empty SubD parameter"
	public isOptional: boolean = false;
	public typeName: string = "SubD"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDEdgesOutput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDEdgesOutput_edge_e extends ResthopperParameter {

	public name: string = "Edge";
	public nickName: string = "E";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDEdgesOutput_tag_t extends ResthopperParameter {

	public name: string = "Tag";
	public nickName: string = "T";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDEdgesOutput_id_i extends ResthopperParameter {

	public name: string = "Id";
	public nickName: string = "I";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
