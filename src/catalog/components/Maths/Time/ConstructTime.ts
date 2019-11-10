import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructTime extends ResthopperComponent {

	public guid: string = "595aded2-8916-402d-87a3-a825244bbe3d";
	public name: string = "Construct Time";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a time instance";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}