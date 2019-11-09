import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ControlPolygon extends ResthopperComponent {

	public guid: string = "66d2a68e-2f1d-43d2-a53b-c6a4d17e627b";
	public name: string = "Control Polygon";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Extract the nurbs control polygon of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}