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
		"Mesh_M": MeshCurveInput_Mesh_M,
		"Curve_C": MeshCurveInput_Curve_C,
	}

	public output:
	{
		"Points_X": MeshCurveOutput_Points_X,
		"Faces_F": MeshCurveOutput_Faces_F,
	}

	constructor() {
		super();
		this.input = {
			"Mesh_M": new MeshCurveInput_Mesh_M(),
			"Curve_C": new MeshCurveInput_Curve_C(),
		}
		this.output = {
			"Points_X": new MeshCurveOutput_Points_X(),
			"Faces_F": new MeshCurveOutput_Faces_F(),
		}
	}

}

class MeshCurveInput_Mesh_M extends ResthopperParameter {

	public name: string = "Mesh";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshCurveOutput_Points_X extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MeshCurveOutput_Faces_F extends ResthopperParameter {

	public name: string = "Faces";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
