import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Includes extends ResthopperComponent {

	public guid: string = "f217f873-92f1-47ae-ad71-ca3c5a45c3f8";
	public name: string = "Includes";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Test a numeric value to see if it is included in the domain";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}