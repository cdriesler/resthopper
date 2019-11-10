import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointOrder extends ResthopperComponent {

	public guid: string = "0ad9f1ab-2204-45bb-b282-474469e2fa7b";
	public name: string = "PointOrder";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Displays the order of a list of points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Points_P": PointOrderInput_Points_P,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Points_P": new PointOrderInput_Points_P(),
		}
		this.output = {

		}
	}

}

class PointOrderInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
