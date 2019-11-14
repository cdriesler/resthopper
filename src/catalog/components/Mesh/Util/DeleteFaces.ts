import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeleteFaces extends ResthopperComponent {

	public guid: string = "d0f1311b-8287-4484-b2ea-1475c6770926";
	public name: string = "DeleteFaces";
	public nickName: string = "DeleteF";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Delete faces from a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": DeleteFacesInput_mesh_m,
		"indices_i": DeleteFacesInput_indices_i,
	}

	public output:
	{
		"mesh_m": DeleteFacesOutput_mesh_m,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new DeleteFacesInput_mesh_m(),
			"indices_i": new DeleteFacesInput_indices_i(),
		}
		this.output = {
			"mesh_m": new DeleteFacesOutput_mesh_m(),
		}
	}

}

class DeleteFacesInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteFacesInput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteFacesOutput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
