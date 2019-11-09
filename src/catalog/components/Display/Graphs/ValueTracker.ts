import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ValueTracker extends ResthopperComponent {

	public guid: string = "615367b4-c9d0-4cb7-986c-cb861226136f";
	public name: string = "Value Tracker";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Track a collection of numeric values over time";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}