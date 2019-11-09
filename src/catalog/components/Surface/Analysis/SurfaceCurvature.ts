import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceCurvature extends ResthopperComponent {

	public guid: string = "4139f3a3-cf93-4fc0-b5e0-18a3acd0b003";
	public name: string = "Surface Curvature";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the surface curvature at a {uv} coordinate.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}