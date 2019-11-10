import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneCoordinates extends ResthopperComponent {

	public guid: string = "5f127fa4-ca61-418e-bb2d-e3739d900f1f";
	public name: string = "PlaneCoordinates";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Get the coordinates of a point in a plane axis system.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Point_P": PlaneCoordinatesInput_Point_P,
		"System_S": PlaneCoordinatesInput_System_S,
	}

	public output:
	{
		"Xcoordinate_X": PlaneCoordinatesOutput_Xcoordinate_X,
		"Ycoordinate_Y": PlaneCoordinatesOutput_Ycoordinate_Y,
		"Zcoordinate_Z": PlaneCoordinatesOutput_Zcoordinate_Z,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new PlaneCoordinatesInput_Point_P(),
			"System_S": new PlaneCoordinatesInput_System_S(),
		}
		this.output = {
			"Xcoordinate_X": new PlaneCoordinatesOutput_Xcoordinate_X(),
			"Ycoordinate_Y": new PlaneCoordinatesOutput_Ycoordinate_Y(),
			"Zcoordinate_Z": new PlaneCoordinatesOutput_Zcoordinate_Z(),
		}
	}

}

class PlaneCoordinatesInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneCoordinatesInput_System_S extends ResthopperParameter {

	public name: string = "System";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneCoordinatesOutput_Xcoordinate_X extends ResthopperParameter {

	public name: string = "Xcoordinate";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneCoordinatesOutput_Ycoordinate_Y extends ResthopperParameter {

	public name: string = "Ycoordinate";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneCoordinatesOutput_Zcoordinate_Z extends ResthopperParameter {

	public name: string = "Zcoordinate";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
