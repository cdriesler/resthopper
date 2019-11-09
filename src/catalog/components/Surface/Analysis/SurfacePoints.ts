import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfacePoints extends ResthopperComponent {

	public guid: string = "15128198-399d-4d6c-9586-1f65db3ce7bf";
	public name: string = "Surface Points";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get the control-points of a Nurbs Surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}