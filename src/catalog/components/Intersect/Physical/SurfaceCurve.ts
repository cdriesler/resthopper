import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceCurve extends ResthopperComponent {

	public guid: string = "68546dd0-aa82-471c-87e9-81cb16ac50ed";
	public name: string = "Surface | Curve";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for a surface and a curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}