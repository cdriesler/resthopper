import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolylineCollapse extends ResthopperComponent {

	public guid: string = "be298882-28c9-45b1-980d-7192a531c9a9";
	public name: string = "Polyline Collapse";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Collapse short segments in a polyline curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}