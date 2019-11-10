import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroFive extends ResthopperComponent {

	public guid: string = "f4b0f7b4-5a10-46c4-8191-58d7d66ffdff";
	public name: string = "Merge 05";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge five streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}