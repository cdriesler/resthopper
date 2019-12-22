import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneCoordinates extends ResthopperComponent {

	public guid: string = "5f127fa4-ca61-418e-bb2d-e3739d900f1f";
	public name: string = "Plane Coordinates";
	public nickName: string = "PlCoord";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Get the coordinates of a point in a plane axis system.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"point_p": PlaneCoordinatesInput_point_p,
		"system_s": PlaneCoordinatesInput_system_s,
	}

	public output:
	{
		"xcoordinate_x": PlaneCoordinatesOutput_xcoordinate_x,
		"ycoordinate_y": PlaneCoordinatesOutput_ycoordinate_y,
		"zcoordinate_z": PlaneCoordinatesOutput_zcoordinate_z,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new PlaneCoordinatesInput_point_p(),
			"system_s": new PlaneCoordinatesInput_system_s(),
		}
		this.output = {
			"xcoordinate_x": new PlaneCoordinatesOutput_xcoordinate_x(),
			"ycoordinate_y": new PlaneCoordinatesOutput_ycoordinate_y(),
			"zcoordinate_z": new PlaneCoordinatesOutput_zcoordinate_z(),
		}
	}

}

class PlaneCoordinatesInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneCoordinatesInput_system_s extends ResthopperParameter {

	public name: string = "System";
	public nickName: string = "S";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneCoordinatesOutput_xcoordinate_x extends ResthopperParameter {

	public name: string = "Xcoordinate";
	public nickName: string = "X";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneCoordinatesOutput_ycoordinate_y extends ResthopperParameter {

	public name: string = "Ycoordinate";
	public nickName: string = "Y";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneCoordinatesOutput_zcoordinate_z extends ResthopperParameter {

	public name: string = "Zcoordinate";
	public nickName: string = "Z";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
