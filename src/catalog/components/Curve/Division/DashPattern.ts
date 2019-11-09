import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DashPattern extends ResthopperComponent {

	public guid: string = "95866bbe-648e-4e2b-a97c-7d04679e94e0";
	public name: string = "Dash Pattern";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Convert a curve to a dash pattern.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}