import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetSurfaceLoose extends ResthopperComponent {

	public guid: string = "e7e43403-f913-4d83-8aff-5b1c7a7f9fbc";
	public name: string = "OffsetSurfaceLoose";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Offset a surface by moving the control points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": OffsetSurfaceLooseInput_Surface_S,
		"Distance_D": OffsetSurfaceLooseInput_Distance_D,
		"Retrim_T": OffsetSurfaceLooseInput_Retrim_T,
	}

	public output:
	{
		"Surface_S": OffsetSurfaceLooseOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new OffsetSurfaceLooseInput_Surface_S(),
			"Distance_D": new OffsetSurfaceLooseInput_Distance_D(),
			"Retrim_T": new OffsetSurfaceLooseInput_Retrim_T(),
		}
		this.output = {
			"Surface_S": new OffsetSurfaceLooseOutput_Surface_S(),
		}
	}

}

class OffsetSurfaceLooseInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceLooseInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceLooseInput_Retrim_T extends ResthopperParameter {

	public name: string = "Retrim";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceLooseOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
