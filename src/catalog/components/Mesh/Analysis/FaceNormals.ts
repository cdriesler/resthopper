import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FaceNormals extends ResthopperComponent {

	public guid: string = "cb4ca22c-3419-4962-a078-ad4ff7f1f929";
	public name: string = "Face Normals";
	public nickName: string = "FaceN";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Extract the normals and center points of all faces in a mesh";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": FaceNormalsInput_mesh_m,
	}

	public output:
	{
		"centers_c": FaceNormalsOutput_centers_c,
		"normals_n": FaceNormalsOutput_normals_n,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new FaceNormalsInput_mesh_m(),
		}
		this.output = {
			"centers_c": new FaceNormalsOutput_centers_c(),
			"normals_n": new FaceNormalsOutput_normals_n(),
		}
	}

}

class FaceNormalsInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public description: string = "Mesh for normal and center point extraction"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceNormalsOutput_centers_c extends ResthopperParameter {

	public name: string = "Centers";
	public nickName: string = "C";
	public description: string = "Center-points of all faces"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FaceNormalsOutput_normals_n extends ResthopperParameter {

	public name: string = "Normals";
	public nickName: string = "N";
	public description: string = "Normal vectors for all faces"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
