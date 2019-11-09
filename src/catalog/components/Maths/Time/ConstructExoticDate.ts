import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ConstructExoticDate extends ResthopperComponent {

	public guid: string = "e5ff52c5-40df-4f43-ac3b-d2418d05ae32";
	public name: string = "Construct Exotic Date";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a date using a specific calendar";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}