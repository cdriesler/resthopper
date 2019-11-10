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
		"Mesh_M": CullFacesInput_Mesh_M,
		"Pattern_P": CullFacesInput_Pattern_P,
	}

	public output:
	{
		"Mesh_M": CullFacesOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new CullFacesInput_Mesh_M(),
			"Pattern_P": new CullFacesInput_Pattern_P(),
		}
		this.output = {
			"Mesh_M": new CullFacesOutput_Mesh_M(),
		}
	}

}

class CullFacesInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullFacesInput_Pattern_P extends ResthopperParameter {

	public name: string = "Pattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullFacesOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
