import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudeAlong extends ResthopperComponent {

	public guid: string = "38a5638b-6d01-4417-bf11-976d925f8a71";
	public name: string = "Extrude Along";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces along a curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}