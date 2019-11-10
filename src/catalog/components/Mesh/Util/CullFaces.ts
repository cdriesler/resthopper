import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullFaces extends ResthopperComponent {

	public guid: string = "57edd208-760a-4f0f-87e6-ca1bbd74133b";
	public name: string = "CullFaces";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Cull faces from a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": CullFacesInput_mesh_m,
		"pattern_p": CullFacesInput_pattern_p,
	}

	public output:
	{
		"mesh_m": CullFacesOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new CullFacesInput_mesh_m(),
			"pattern_p": new CullFacesInput_pattern_p(),
		}
		this.output = {
			"mesh_m": new CullFacesOutput_mesh_m(),
		}
	}

}

class CullFacesInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullFacesInput_pattern_p extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullFacesOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
