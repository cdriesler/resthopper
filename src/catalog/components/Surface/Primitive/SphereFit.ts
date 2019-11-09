import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SphereFit extends ResthopperComponent {

	public guid: string = "e7ffb3af-2d77-4804-a260-755308bf8285";
	public name: string = "Sphere Fit";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Fit a sphere to a 3D collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}