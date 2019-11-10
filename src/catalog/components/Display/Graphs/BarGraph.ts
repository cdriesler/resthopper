import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BarGraph extends ResthopperComponent {

	public guid: string = "e1905a16-da43-4705-bd65-41d34328c4e6";
	public name: string = "BarGraph";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Bar graph representation of a set of numbers";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

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
