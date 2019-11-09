import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ShiftPaths extends ResthopperComponent {

	public guid: string = "2d61f4e0-47c5-41d6-a41d-6afa96ee63af";
	public name: string = "Shift Paths";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Shift the indices in all data tree paths";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}