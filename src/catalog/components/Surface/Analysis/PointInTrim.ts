import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PointInTrim extends ResthopperComponent {

	public guid: string = "f881810b-96de-4668-a95a-f9a6d683e65c";
	public name: string = "Point In Trim";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a {uv} coordinate is inside the trimmed portion of a surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}