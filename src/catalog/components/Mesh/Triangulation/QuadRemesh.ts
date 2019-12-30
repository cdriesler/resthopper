import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class QuadRemesh extends ResthopperComponent {

	public guid: string = "1a17d3f0-c8f8-4ee9-8dab-ea1c29db6a49";
	public name: string = "Quad Remesh";
	public nickName: string = "QRMesh";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Perform quad-remeshing on a shape.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"mesh_m": QuadRemeshInput_mesh_m,
		"guides_g": QuadRemeshInput_guides_g,
		"settings_s": QuadRemeshInput_settings_s,
	}

	public output:
	{
		"quadresult_q": QuadRemeshOutput_quadresult_q,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new QuadRemeshInput_mesh_m(),
			"guides_g": new QuadRemeshInput_guides_g(),
			"settings_s": new QuadRemeshInput_settings_s(),
		}
		this.output = {
			"quadresult_q": new QuadRemeshOutput_quadresult_q(),
		}
	}

}

class QuadRemeshInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Mesh to operate on"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshInput_guides_g extends ResthopperParameter {

	public name: string = "Guides";
	public nickName: string = "G";
	public description: string = "Guide curves"
	public isOptional: boolean = true;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshInput_settings_s extends ResthopperParameter {

	public name: string = "Settings";
	public nickName: string = "S";
	public description: string = "Remeshing settings"
	public isOptional: boolean = false;
	public typeName: string = "Quad meshing settings"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshOutput_quadresult_q extends ResthopperParameter {

	public name: string = "Quadresult";
	public nickName: string = "Q";
	public description: string = "Resulting mesh with quad faces only."
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
