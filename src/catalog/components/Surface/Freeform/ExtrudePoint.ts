import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtrudePoint extends ResthopperComponent {

	public guid: string = "be6636b2-2f1a-4d42-897b-fdef429b6f17";
	public name: string = "Extrude Point";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude curves and surfaces to a point.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}