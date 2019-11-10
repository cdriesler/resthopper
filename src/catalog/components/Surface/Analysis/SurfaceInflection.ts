import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SurfaceInflection extends ResthopperComponent {

	public guid: string = "0efd7f0c-f63d-446d-970e-9fb0e636ea41";
	public name: string = "Surface Inflection";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Compute the inflection curves for a surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}