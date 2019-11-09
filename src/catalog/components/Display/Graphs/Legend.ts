import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Legend extends ResthopperComponent {

	public guid: string = "f6867cdd-2216-4451-9134-7da94bdcd5af";
	public name: string = "Legend";
	public category: string = "Display";
	public subCategory: string = "Graphs";
	public description: string = "Display a legend consisting of Tags and Colours";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}