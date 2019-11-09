import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ConstructDomain extends ResthopperComponent {

	public guid: string = "9083b87f-a98c-4e41-9591-077ae4220b19";
	public name: string = "Construct Domain²";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a two-dimensinal domain from four numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}