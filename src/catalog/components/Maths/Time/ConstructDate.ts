import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructDate extends ResthopperComponent {

	public guid: string = "0c2f0932-5ddc-4ece-bd84-a3a059d3df7a";
	public name: string = "Construct Date";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Construct a date and time instance.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}