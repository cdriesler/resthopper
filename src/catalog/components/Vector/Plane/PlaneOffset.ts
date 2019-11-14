import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlaneOffset extends ResthopperComponent {

	public guid: string = "3a0c7bda-3d22-4588-8bab-03f57a52a6ea";
	public name: string = "PlaneOffset";
	public nickName: string = "PlOffset";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Offset a plane.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"baseplane_p": PlaneOffsetInput_baseplane_p,
		"offset_o": PlaneOffsetInput_offset_o,
	}

	public output:
	{
		"plane_pl": PlaneOffsetOutput_plane_pl,
	}

	constructor() {
		super();
		this.input = {
			"baseplane_p": new PlaneOffsetInput_baseplane_p(),
			"offset_o": new PlaneOffsetInput_offset_o(),
		}
		this.output = {
			"plane_pl": new PlaneOffsetOutput_plane_pl(),
		}
	}

}

class PlaneOffsetInput_baseplane_p extends ResthopperParameter {

	public name: string = "BasePlane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneOffsetInput_offset_o extends ResthopperParameter {

	public name: string = "Offset";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlaneOffsetOutput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
