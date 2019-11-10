import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructBox extends ResthopperComponent {

	public guid: string = "db7d83b1-2898-4ef9-9be5-4e94b4e2048d";
	public name: string = "Deconstruct Box";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a box into its constituent parts.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}