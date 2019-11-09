import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneSurface extends ResthopperComponent {

	public guid: string = "439a55a5-2f9e-4f66-9de2-32f24fec2ef5";
	public name: string = "Plane Surface";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a plane surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}