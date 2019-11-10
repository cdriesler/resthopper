import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroEight extends ResthopperComponent {

	public guid: string = "a70aa477-0109-4e75-ba73-78725dca0274";
	public name: string = "Merge 08";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge eight streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}