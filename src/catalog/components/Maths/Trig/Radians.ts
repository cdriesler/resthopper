import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Radians extends ResthopperComponent {

	public guid: string = "a4cd2751-414d-42ec-8916-476ebf62d7fe";
	public name: string = "Radians";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Convert an angle specified in degrees to radians";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}