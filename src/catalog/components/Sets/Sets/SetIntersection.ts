import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SetIntersection extends ResthopperComponent {

	public guid: string = "82f19c48-9e73-43a4-ae6c-3a8368099b08";
	public name: string = "Set Intersection";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Creates the intersection of two sets (the collection of unique objects present in both sets).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}