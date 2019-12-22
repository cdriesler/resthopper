import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointOrder extends ResthopperComponent {

	public guid: string = "0ad9f1ab-2204-45bb-b282-474469e2fa7b";
	public name: string = "Point Order";
	public nickName: string = "Order";
	public category: string = "Display";
	public subCategory: string = "Vector";
	public description: string = "Displays the order of a list of points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"points_p": PointOrderInput_points_p,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"points_p": new PointOrderInput_points_p(),
		}
		this.output = {

		}
	}

}

class PointOrderInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
