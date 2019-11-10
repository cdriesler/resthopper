import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class QuickGraph extends ResthopperComponent {

	public guid: string = "2b69bf71-4e69-43aa-b7be-4f6ce7e45bef";
	public name: string = "QuickGraph";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Display a set of y-values as a graph";
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
