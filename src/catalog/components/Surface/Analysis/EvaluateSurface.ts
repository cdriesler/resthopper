import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateSurface extends ResthopperComponent {

	public guid: string = "353b206e-bde5-4f02-a913-b3b8a977d4b9";
	public name: string = "Evaluate Surface";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate local surface properties at a {uv} coordinate.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}