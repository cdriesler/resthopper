import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveDomain extends ResthopperComponent {

	public guid: string = "ccfd6ba8-ecb1-44df-a47e-08126a653c51";
	public name: string = "Curve Domain";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure and set the curve domain";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}