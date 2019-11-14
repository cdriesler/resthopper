import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CoordinateMask extends ResthopperComponent {

	public guid: string = "bc26bf46-e81b-429a-b168-16d50cc89bd7";
	public name: string = "CoordinateMask";
	public nickName: string = "CMask";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Represents a list of point coordinate masks";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{

	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {

		}
		this.output = {

		}
	}

}
