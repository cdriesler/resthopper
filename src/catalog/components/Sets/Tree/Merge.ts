import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Merge extends ResthopperComponent {

	public guid: string = "86866576-6cc0-485a-9cd2-6f7d493f57f7";
	public name: string = "Merge";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge two streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}