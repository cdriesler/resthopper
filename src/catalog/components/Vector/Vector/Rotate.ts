import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Rotate extends ResthopperComponent {

	public guid: string = "b6d7ba20-cf74-4191-a756-2216a36e30a7";
	public name: string = "Rotate";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Rotate a vector around an axis.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}