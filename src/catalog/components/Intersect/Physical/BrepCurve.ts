import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepCurve extends ResthopperComponent {

	public guid: string = "20ef81e8-df15-4a0c-acf1-993a7607cafb";
	public name: string = "Brep | Curve";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for a Brep and a curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}