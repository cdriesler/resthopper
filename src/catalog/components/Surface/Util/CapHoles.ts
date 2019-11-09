import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CapHoles extends ResthopperComponent {

	public guid: string = "b648d933-ddea-4e75-834c-8f6f3793e311";
	public name: string = "Cap Holes";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Cap all planar holes in a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}