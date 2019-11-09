import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SiftPattern extends ResthopperComponent {

	public guid: string = "3249222f-f536-467a-89f4-f0353fba455a";
	public name: string = "Sift Pattern";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Sift elements in a list using a repeating index pattern.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}