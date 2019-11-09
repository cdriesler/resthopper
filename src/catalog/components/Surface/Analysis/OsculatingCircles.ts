import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class OsculatingCircles extends ResthopperComponent {

	public guid: string = "b799b7c0-76df-4bdb-b3cc-401b1d021aa5";
	public name: string = "Osculating Circles";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Calculate the principal osculating circles of a surface at a {uv} coordinate.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}