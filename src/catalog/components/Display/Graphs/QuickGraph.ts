import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class QuickGraph extends ResthopperComponent {

	public guid: string = "2b69bf71-4e69-43aa-b7be-4f6ce7e45bef";
	public name: string = "Quick Graph";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Display a set of y-values as a graph";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}