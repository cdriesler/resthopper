import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PrincipalCurvature extends ResthopperComponent {

	public guid: string = "404f75ac-5594-4c48-ad8a-7d0f472bbf8a";
	public name: string = "Principal Curvature";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the principal curvature of a surface at a {uv} coordinate.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}