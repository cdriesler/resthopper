import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceFromPoints extends ResthopperComponent {

	public guid: string = "4b04a1e1-cddf-405d-a7db-335aaa940541";
	public name: string = "Surface From Points";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a nurbs surface from a grid of points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}