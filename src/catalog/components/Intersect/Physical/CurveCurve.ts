import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveCurve extends ResthopperComponent {

	public guid: string = "84627490-0fb2-4498-8138-ad134ee4cb36";
	public name: string = "Curve | Curve";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}