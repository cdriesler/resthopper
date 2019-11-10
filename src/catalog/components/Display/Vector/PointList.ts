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
		"Points_P": PointListInput_Points_P,
		"Size_S": PointListInput_Size_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Points_P": new PointListInput_Points_P(),
			"Size_S": new PointListInput_Size_S(),
		}
		this.output = {

		}
	}

}

class PointListInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointListInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
