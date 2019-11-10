import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointList extends ResthopperComponent {

	public guid: string = "cc14daa5-911a-4fcc-8b3b-1149bf7f2eeb";
	public name: string = "PointList";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Displays details about lists of points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"points_p": PointListInput_points_p,
		"size_s": PointListInput_size_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"points_p": new PointListInput_points_p(),
			"size_s": new PointListInput_size_s(),
		}
		this.output = {

		}
	}

}

class PointListInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointListInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
