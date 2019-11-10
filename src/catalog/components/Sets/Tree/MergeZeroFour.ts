import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroFour extends ResthopperComponent {

	public guid: string = "b5be5d1f-717f-493c-b958-816957f271fd";
	public name: string = "Merge 04";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge four streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}