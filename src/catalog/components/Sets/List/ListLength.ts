import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ListLength extends ResthopperComponent {

	public guid: string = "1817fd29-20ae-4503-b542-f0fb651e67d7";
	public name: string = "List Length";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Measure the length of a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}