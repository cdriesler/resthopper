import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetSurface extends ResthopperComponent {

	public guid: string = "b25c5762-f90e-4839-9fc5-74b74ab42b1e";
	public name: string = "OffsetSurface";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Offset a surface by a fixed amount.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": OffsetSurfaceInput_Surface_S,
		"Distance_D": OffsetSurfaceInput_Distance_D,
		"Retrim_T": OffsetSurfaceInput_Retrim_T,
	}

	public output:
	{
		"Surface_S": OffsetSurfaceOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new OffsetSurfaceInput_Surface_S(),
			"Distance_D": new OffsetSurfaceInput_Distance_D(),
			"Retrim_T": new OffsetSurfaceInput_Retrim_T(),
		}
		this.output = {
			"Surface_S": new OffsetSurfaceOutput_Surface_S(),
		}
	}

}

class OffsetSurfaceInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceInput_Retrim_T extends ResthopperParameter {

	public name: string = "Retrim";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OffsetSurfaceOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
