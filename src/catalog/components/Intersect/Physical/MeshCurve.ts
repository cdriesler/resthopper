import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshCurve extends ResthopperComponent {

	public guid: string = "19632848-4b95-4e5e-9e86-b79b47987a46";
	public name: string = "MeshCurve";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Mesh Curve intersection";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"mesh_m": MeshCurveInput_mesh_m,
		"curve_c": MeshCurveInput_curve_c,
	}

	public output:
	{
		"points_x": MeshCurveOutput_points_x,
		"faces_f": MeshCurveOutput_faces_f,
	}

	constructor() {
		super();
		this.input = {
			"mesh_m": new MeshCurveInput_mesh_m(),
			"curve_c": new MeshCurveInput_curve_c(),
		}
		this.output = {
			"points_x": new MeshCurveOutput_points_x(),
			"faces_f": new MeshCurveOutput_faces_f(),
		}
	}

}

class MeshCurveInput_mesh_m extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshCurveOutput_points_x extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshCurveOutput_faces_f extends ResthopperParameter {

	public name: string = "Faces";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
