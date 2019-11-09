import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BarGraph extends ResthopperComponent {

	public guid: string = "e1905a16-da43-4705-bd65-41d34328c4e6";
	public name: string = "Bar Graph";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Bar graph representation of a set of numbers";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}