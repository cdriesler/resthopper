import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDFaces extends ResthopperComponent {

	public guid: string = "83c81431-17bc-4bff-bb85-be0a846bd044";
	public name: string = "Sub-D Faces";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract all face data from a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}