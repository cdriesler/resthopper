import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PieChart extends ResthopperComponent {

	public guid: string = "952c2bcc-b5ec-480a-a0d7-27f016632e33";
	public name: string = "PieChart";
	public nickName: string = "Pie";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Displays a set of text fragments as a pie chart";
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
