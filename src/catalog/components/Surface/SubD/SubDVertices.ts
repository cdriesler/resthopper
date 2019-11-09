import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SubDVertices extends ResthopperComponent {

	public guid: string = "cd9efa8f-0084-4d52-ab13-ad88ff22dc46";
	public name: string = "Sub-D Vertices";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract all vertex data from a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}