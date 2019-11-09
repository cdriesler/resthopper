import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class InterpolateDate extends ResthopperComponent {

	public guid: string = "4083802b-3dd9-4b13-9756-bf5441213e70";
	public name: string = "Interpolate Date";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Interpolate between two dates or times.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}