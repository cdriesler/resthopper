import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshBrep extends ResthopperComponent {

	public guid: string = "60e7defa-8b21-4ee1-99aa-a9223d6134ff";
	public name: string = "MeshBrep";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Create a mesh that approximates Brep geometry";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": MeshBrepInput_brep_b,
		"settings_s": MeshBrepInput_settings_s,
	}

	public output:
	{
		"mesh_m": MeshBrepOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new MeshBrepInput_brep_b(),
			"settings_s": new MeshBrepInput_settings_s(),
		}
		this.output = {
			"mesh_m": new MeshBrepOutput_mesh_m(),
		}
	}

}

class MeshBrepInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBrepInput_settings_s extends ResthopperParameter {

	public name: string = "Settings";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "MeshParameters"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshBrepOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
