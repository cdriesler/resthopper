import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SetMajority extends ResthopperComponent {

	public guid: string = "d4136a7b-7422-4660-9404-640474bd2725";
	public name: string = "Set Majority";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Determine majority member presence amongst three sets.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}