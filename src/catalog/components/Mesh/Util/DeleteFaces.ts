import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeleteFaces extends ResthopperComponent {

	public guid: string = "d0f1311b-8287-4484-b2ea-1475c6770926";
	public name: string = "DeleteFaces";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Delete faces from a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Mesh_M": DeleteFacesInput_Mesh_M,
		"Indices_I": DeleteFacesInput_Indices_I,
	}

	public output:
	{
		"Mesh_M": DeleteFacesOutput_Mesh_M,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new DeleteFacesInput_Mesh_M(),
			"Indices_I": new DeleteFacesInput_Indices_I(),
		}
		this.output = {
			"Mesh_M": new DeleteFacesOutput_Mesh_M(),
		}
	}

}

class DeleteFacesInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteFacesInput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeleteFacesOutput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
