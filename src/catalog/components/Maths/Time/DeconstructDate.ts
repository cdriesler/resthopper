import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeconstructDate extends ResthopperComponent {

	public guid: string = "d5e28df8-495b-4892-bca8-60748743d955";
	public name: string = "Deconstruct Date";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Deconstruct a date into years, months, days, hours, minutes and seconds";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}