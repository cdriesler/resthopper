import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeleteConsecutive extends ResthopperComponent {

	public guid: string = "190d042c-2270-4bc1-81c0-4f90c170c9c9";
	public name: string = "Delete Consecutive";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Delete consecutive similar members in a set.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}