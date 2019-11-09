import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FaceBoundaries extends ResthopperComponent {

	public guid: string = "0b4ac802-fc4a-4201-9c66-0078b837c1eb";
	public name: string = "Face Boundaries";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Convert all mesh faces to polylines";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}