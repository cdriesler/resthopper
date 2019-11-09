import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class NumberstoPoints extends ResthopperComponent {

	public guid: string = "0ae07da9-951b-4b9b-98ca-d312c252374d";
	public name: string = "Numbers to Points";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Convert a list of numbers to a list of points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}