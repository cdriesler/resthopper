import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceLine extends ResthopperComponent {

	public guid: string = "a834e823-ae01-44d8-9066-c138eeb6f391";
	public name: string = "Surface | Line";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a surface and a line.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}