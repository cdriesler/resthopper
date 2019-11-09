import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Geodesic extends ResthopperComponent {

	public guid: string = "ce5963b4-1cea-4f71-acd2-a3c28ab85662";
	public name: string = "Geodesic";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a surface geodesic between two points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}