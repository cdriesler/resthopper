import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeZeroThree extends ResthopperComponent {

	public guid: string = "481f0339-1299-43ba-b15c-c07891a8f822";
	public name: string = "Merge 03";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge three streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}