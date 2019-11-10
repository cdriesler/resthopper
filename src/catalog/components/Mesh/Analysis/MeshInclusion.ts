import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshInclusion extends ResthopperComponent {

	public guid: string = "01e3991d-18bd-474f-9fbd-076a8700159f";
	public name: string = "Mesh Inclusion";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Test a point for Mesh inclusion";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}