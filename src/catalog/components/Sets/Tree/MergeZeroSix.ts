import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroSix extends ResthopperComponent {

	public guid: string = "ac9b4faf-c9d5-4f6a-a5e9-58c0c2cac116";
	public name: string = "Merge 06";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge six streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}