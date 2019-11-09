import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class LengthDomain extends ResthopperComponent {

	public guid: string = "188edd02-14a9-4828-a521-34995b0d1e4a";
	public name: string = "Length Domain";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the length of a curve subdomain.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}