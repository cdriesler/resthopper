import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetDifference extends ResthopperComponent {

	public guid: string = "e3b1a10c-4d49-4140-b8e6-0b5732a26c31";
	public name: string = "Set Difference";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Create the difference of two sets (the collection of objects present in A but not in B).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}