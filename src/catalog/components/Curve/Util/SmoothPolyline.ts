import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SmoothPolyline extends ResthopperComponent {

	public guid: string = "5c5fbc42-3e1d-4081-9cf1-148d0b1d9610";
	public name: string = "Smooth Polyline";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Smooth the vertices of a polyline curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}