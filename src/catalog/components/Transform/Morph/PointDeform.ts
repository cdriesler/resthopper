import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointDeform extends ResthopperComponent {

	public guid: string = "4dbd15c7-ebcb-4af6-b3bd-32e80502520c";
	public name: string = "PointDeform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deform a shape by moving control-points individually";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": PointDeformInput_Geometry_G,
		"Points_P": PointDeformInput_Points_P,
		"Motion_M": PointDeformInput_Motion_M,
	}

	public output:
	{
		"Geometry_G": PointDeformOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new PointDeformInput_Geometry_G(),
			"Points_P": new PointDeformInput_Points_P(),
			"Motion_M": new PointDeformInput_Motion_M(),
		}
		this.output = {
			"Geometry_G": new PointDeformOutput_Geometry_G(),
		}
	}

}

class PointDeformInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointDeformInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointDeformInput_Motion_M extends ResthopperParameter {

	public name: string = "Motion";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointDeformOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
