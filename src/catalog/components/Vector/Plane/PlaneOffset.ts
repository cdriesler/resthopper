import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneOffset extends ResthopperComponent {

	public guid: string = "3a0c7bda-3d22-4588-8bab-03f57a52a6ea";
	public name: string = "PlaneOffset";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Offset a plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"BasePlane_P": PlaneOffsetInput_BasePlane_P,
		"Offset_O": PlaneOffsetInput_Offset_O,
	}

	public output:
	{
		"Plane_Pl": PlaneOffsetOutput_Plane_Pl,
	}

	constructor() {
		super();
		this.input = {
			"BasePlane_P": new PlaneOffsetInput_BasePlane_P(),
			"Offset_O": new PlaneOffsetInput_Offset_O(),
		}
		this.output = {
			"Plane_Pl": new PlaneOffsetOutput_Plane_Pl(),
		}
	}

}

class PlaneOffsetInput_BasePlane_P extends ResthopperParameter {

	public name: string = "BasePlane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneOffsetInput_Offset_O extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneOffsetOutput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
