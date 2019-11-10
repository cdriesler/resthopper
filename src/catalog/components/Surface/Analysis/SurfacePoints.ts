import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfacePoints extends ResthopperComponent {

	public guid: string = "15128198-399d-4d6c-9586-1f65db3ce7bf";
	public name: string = "SurfacePoints";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get the control-points of a Nurbs Surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Surface_S": SurfacePointsInput_Surface_S,
	}

	public output:
	{
		"Points_P": SurfacePointsOutput_Points_P,
		"Weights_W": SurfacePointsOutput_Weights_W,
		"Greville_G": SurfacePointsOutput_Greville_G,
		"UCount_U": SurfacePointsOutput_UCount_U,
		"VCount_V": SurfacePointsOutput_VCount_V,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new SurfacePointsInput_Surface_S(),
		}
		this.output = {
			"Points_P": new SurfacePointsOutput_Points_P(),
			"Weights_W": new SurfacePointsOutput_Weights_W(),
			"Greville_G": new SurfacePointsOutput_Greville_G(),
			"UCount_U": new SurfacePointsOutput_UCount_U(),
			"VCount_V": new SurfacePointsOutput_VCount_V(),
		}
	}

}

class SurfacePointsInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_Weights_W extends ResthopperParameter {

	public name: string = "Weights";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_Greville_G extends ResthopperParameter {

	public name: string = "Greville";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_UCount_U extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SurfacePointsOutput_VCount_V extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
