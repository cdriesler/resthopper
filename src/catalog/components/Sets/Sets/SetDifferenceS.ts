import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetDifferenceS extends ResthopperComponent {

	public guid: string = "d2461702-3164-4894-8c10-ed1fc4b52965";
	public name: string = "Set Difference (S)";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Create the symmetric difference of two sets (the collection of objects present in A or B but not both).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}