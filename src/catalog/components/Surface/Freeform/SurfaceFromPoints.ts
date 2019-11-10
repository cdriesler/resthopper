import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceFromPoints extends ResthopperComponent {

	public guid: string = "4b04a1e1-cddf-405d-a7db-335aaa940541";
	public name: string = "SurfaceFromPoints";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a nurbs surface from a grid of points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Points_P": SurfaceFromPointsInput_Points_P,
		"UCount_U": SurfaceFromPointsInput_UCount_U,
		"Interpolate_I": SurfaceFromPointsInput_Interpolate_I,
	}

	public output:
	{
		"Surface_S": SurfaceFromPointsOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new SurfaceFromPointsInput_Points_P(),
			"UCount_U": new SurfaceFromPointsInput_UCount_U(),
			"Interpolate_I": new SurfaceFromPointsInput_Interpolate_I(),
		}
		this.output = {
			"Surface_S": new SurfaceFromPointsOutput_Surface_S(),
		}
	}

}

class SurfaceFromPointsInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFromPointsInput_UCount_U extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFromPointsInput_Interpolate_I extends ResthopperParameter {

	public name: string = "Interpolate";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfaceFromPointsOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
