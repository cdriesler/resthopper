import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeconstructBrep extends ResthopperComponent {

	public guid: string = "8d372bdc-9800-45e9-8a26-6e33c5253e21";
	public name: string = "Deconstruct Brep";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a brep into its constituent parts.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}